import type { Configuration } from './lib/config'
import { endpoints } from './lib/endpoints'

// Livestream resolution container
interface PiecesMatrix {
	retries: number
	fallback: 'throw' | 'cache' | 'empty'
	caching: boolean
	cacheTTL: number
	transform?: (data: any) => any
	validate?: (data: any) => boolean
}

// Pre-defined matrix reduces access latency
const matrix: Record<string, PiecesMatrix> = {
	standard: {
		retries: 3,
		fallback: 'throw',
		caching: true,
		cacheTTL: 300000,
		transform: undefined,
		validate: undefined
	},

	resilient: {
		retries: 5,
		fallback: 'cache',
		caching: true,
		cacheTTL: 600000,
		transform: undefined,
		validate: undefined
	},

	realtime: {
		retries: 2,
		fallback: 'empty',
		caching: false,
		cacheTTL: 0,
		transform: undefined,
		validate: undefined
	}
}

// Caching
const cache = new Map<string, { data: any; timestamp: number }>()

// Instance caching
let globalConfiguration: Configuration | null = null
const services = new Map<string, any>()

// Start client once
export function newAdapterClient(config: Configuration): void {
	globalConfiguration = config
	services.clear()
	cache.clear()
}

// Get or create service instance (with caching)
function getService(ApiClass: new (config: any) => any): any {
	const className = ApiClass.name
	if (!services.has(className)) {
		if (!globalConfiguration) {
			throw new Error('Adapter client not found. Please start up the client.')
		}
		services.set(className, new ApiClass(globalConfiguration))
	}
	return services.get(className)
}

function getCachedData(cacheKey: string): any {
	const entry = cache.get(cacheKey)
	if (!entry) return null

	// Check TTL
	const now = Date.now()
	if (entry.timestamp + matrix.standard.cacheTTL < now) {
		cache.delete(cacheKey)
		return null
	}

	return entry.data
}

function setCacheData(cacheKey: string, data: any, ttl: number): void {
	cache.set(cacheKey, {
		data,
		timestamp: ttl
	})
}

// Core
async function run(
	endpointKey: string,
	params: any = {},
	table: PiecesMatrix = matrix.standard
): Promise<any> {
	const endpoint = endpoints[endpointKey]
	if (!endpoint) throw new Error(`Unknown endpoint: ${endpointKey}`)

	// Create cache key if caching enabled
	const cacheKey = table.caching ? `${endpointKey}:${JSON.stringify(params)}` : ''

	// Check cache first if enabled
	if (table.caching) {
		const cachedData = getCachedData(cacheKey)
		if (cachedData) return cachedData
	}

	// Get API instance (cached)
	const api = getService(endpoint.apiClass)

	try {
		// Execute API call
		const result = await api[endpoint.method](params)

		// Validate if needed
		if (table.validate && typeof table.validate === 'function') {
			if (!table.validate(result)) {
				throw new Error('Validation failed')
			}
		}

		// Transform if needed
		const finalResult =
			table.transform && typeof table.transform === 'function' ? table.transform(result) : result

		// Cache result if enabled
		if (table.caching) {
			setCacheData(cacheKey, finalResult, table.cacheTTL)
		}

		return finalResult
	} catch (error) {
		if (table.retries > 0) {
			const retry = {
				...table,
				retries: table.retries - 1
			}

			return run(endpointKey, params, retry)
		}

		// Handle fallback based on table
		switch (table.fallback) {
			case 'cache':
				const cachedData = getCachedData(cacheKey)
				if (cachedData) return cachedData
				break

			case 'empty':
				return Array.isArray(params) ? [] : {}

			case 'throw':
			default:
				throw error
		}
	}
}

// Validate Adapter endpoint services list
function verified(service: string): boolean {
	const validServices = new Set(Object.keys(endpoints).map((key) => key.split('.')[0]))
	return validServices.has(service)
}

// Stream function for Websocket
function createStream(
	url: string,
	params: any = {},
	onData: (data: any) => void,
	onError?: (error: any) => void,
	retries = 3
): WebSocket {
	const ws = new WebSocket(url)

	ws.onopen = () => {
		ws.send(JSON.stringify(params))
	}

	ws.onmessage = (event) => {
		try {
			const data = JSON.parse(event.data)
			onData(data)
		} catch (error) {
			if (onError) onError(error)
		}
	}

	ws.onerror = (error) => {
		if (onError) onError(error)
	}

	ws.onclose = () => {
		if (retries > 0) {
			setTimeout(() => {
				createStream(url, params, onData, onError, retries - 1)
			}, 1000)
		}
	}

	return ws
}

// Adapter Matrix API
export const pieces = {
	// Pattern: Get many things
	list: (service: string, params = {}, table: PiecesMatrix = matrix.standard) => {
		const endpointKey = `${service}.list`
		return run(endpointKey, params, table)
	},

	// Pattern: Get one thing
	get: (service: string, id: string, params = {}, table: PiecesMatrix = matrix.standard) => {
		const endpointKey = `${service}.get`
		return run(endpointKey, { id, ...params }, table)
	},

	// Pattern: Create thing
	create: (service: string, data: any, table: PiecesMatrix = matrix.standard) => {
		const endpointKey = `${service}.create`
		return run(endpointKey, data, table)
	},

	// Pattern: Update thing
	update: (service: string, id: string, data: any, table: PiecesMatrix = matrix.standard) => {
		const endpointKey = `${service}.update`
		return run(endpointKey, { id, ...data }, table)
	},

	// Pattern: Delete thing
	delete: (service: string, id: string, table: PiecesMatrix = matrix.standard) => {
		const endpointKey = `${service}.delete`
		return run(endpointKey, { id }, table)
	},

	// Pattern: Stream data in
	stream: (
		service: string,
		url: string,
		params = {},
		onData: (data: any) => void,
		onError?: (error: any) => void
	) => {
		if (!verified(service)) {
			throw new Error(`Invalid Adapter API endpoint name: ${service}`)
		}
		return createStream(url, params, onData, onError)
	}
}

// Export pre-defined matrix
export { matrix }

/*
MORE USAGE EXAMPLES:

// WebSocket streaming
const wsConnection = pieces.stream(
  'conversations',
  'ws://localhost:3900/stream',
  { conversationId: 'chat-room-1' },
  (message) => console.log('New message:', message),
  (error) => console.error('Stream error:', error)
);
*/
