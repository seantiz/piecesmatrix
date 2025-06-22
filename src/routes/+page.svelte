<script lang="ts">
	const categories = {
		'QGPT Core Entry Point': [
			{ name: 'qgpt.question', description: 'Submit a question to QGPT and get a response' },
			{ name: 'qgpt.reprompt', description: 'Send a reprompt based on previous conversation' },
			{ name: 'qgpt.relevance', description: 'Check relevance of content using QGPT' },
			{ name: 'qgpt.personsRelated', description: 'Get information about related persons' }
		],
		'Search & Discovery': [
			{
				name: 'search.fullText',
				description: 'Run full-text search for exact matches in asset content'
			},
			{
				name: 'search.tagBased',
				description: 'Run tag-based search to find assets with specific tags'
			},
			{ name: 'search.neuralCode', description: 'Run neural code search on your assets' }
		],
		'Model Management': [
			{ name: 'models.list', description: 'Get a snapshot of all your models' },
			{ name: 'models.create', description: 'Create a new machine learning model' },
			{ name: 'model.download', description: 'Download a specific model to your local machine' },
			{ name: 'model.load', description: 'Load a previously downloaded model into memory' },
			{ name: 'model.update', description: 'Update a machine learning model' },
			{ name: 'models.unloadAll', description: 'Unload all available machine learning models' }
		],
		'Streaming & Realtime': [
			{
				name: 'activities.streamIdentifiers',
				description: 'WebSocket connection for activity identifier changes'
			},
			{
				name: 'models.stream.identifiers',
				description: 'WebSocket connection for model identifier changes'
			},
			{ name: 'os.settingsStream', description: 'WebSocket for changes to OSSettings' },
			{
				name: 'model.download.progress',
				description: 'Real-time updates on model download progress'
			},
			{
				name: 'sensitives.streamIdentifiers',
				description: 'WebSocket for changes to sensitive identifiers'
			},
			{ name: 'modelContextProtocol.sse', description: 'SSE connection for the MCP integration' }
		],
		'OS & System': [
			{ name: 'os.settingsSnapshot', description: 'Get a snapshot of the AdapterOS settings' },
			{ name: 'os.settingsUpdate', description: 'Update OS settings' },
			{ name: 'os.permissions', description: "Get permissions of the user's local machine" },
			{
				name: 'os.permissionsRequest',
				description: 'Request specific permissions on macOS and Windows'
			},
			{
				name: 'os.deviceInformation',
				description: 'Get information related to the specific device'
			},
			{
				name: 'os.filesystemPickFiles',
				description: 'Trigger a file picker and return selected file paths'
			},
			{
				name: 'os.filesystemPickFolders',
				description: 'Trigger a folder picker and return selected folder paths'
			},
			{ name: 'os.filesystemFileOpen', description: 'Open a file in the default application' },
			{ name: 'os.metadata', description: 'Return metadata in the pieces drive' },
			{ name: 'os.memoryOptimize', description: 'Optimize memory across AdapterOS' }
		]
	}

	function generateExample(endpoint: any, action = 'send') {
		if (endpoint.startsWith('model.download.progress') || endpoint.includes('stream')) {
			return `pieces.stream('${endpoint}', wsUrl, params,
  (data) => console.log('Received:', data),
  (error) => console.error('Error:', error));`
		} else if (endpoint.includes('list')) {
			return `pieces.list('${endpoint.split('.')[0]}');`
		} else if (endpoint.includes('get')) {
			return `pieces.get('${endpoint}');`
		} else if (endpoint.includes('create')) {
			return `pieces.create('${endpoint.split('.')[0]}', dataObject);`
		} else if (endpoint.includes('update')) {
			return `pieces.update('${endpoint.split('.')[0]}', id, updatedData);`
		} else if (endpoint.includes('delete')) {
			return `pieces.delete('${endpoint.split('.')[0]}', id);`
		} else {
			return `pieces.${action}('${endpoint}', paramsObject);`
		}
	}
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="mb-6 text-3xl font-bold">Pieces Matrix Adapter for Typescript SDK</h1>

	<p class="mb-8">This library provides handlers for common LLM-chat app tasks.</p>

	{#each Object.entries(categories) as [category, endpoints]}
		<div class="mb-10">
			<h2 class="mb-4 text-2xl font-semibold">{category}</h2>
			<div class="grid gap-6 md:grid-cols-2">
				{#each endpoints as endpoint}
					<div class="rounded-lg border p-4 transition-shadow hover:shadow-md">
						<h3 class="mb-2 text-lg font-medium">{endpoint.name}</h3>
						<p class="mb-3 text-gray-600">{endpoint.description}</p>
						<div class="rounded bg-gray-100 p-3">
							<pre class="overflow-x-auto text-sm"><code>{generateExample(endpoint.name)}</code
								></pre>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/each}

	<div class="mt-10 rounded-lg bg-blue-50 p-6">
		<h2 class="mb-3 text-xl font-semibold">Getting Started</h2>
		<p class="mb-4">Import the adapter and start it in your application:</p>
		<div class="rounded bg-gray-100 p-3"></div>
	</div>
</div>

<style>
	pre {
		white-space: pre-wrap;
		word-break: break-word;
	}

	code {
		font-family: monospace;
	}
</style>
