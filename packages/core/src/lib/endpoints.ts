import * as Adapter from './types'

interface EndpointConfig {
	apiClass: new (configuration: any) => any
	method: string
}

// Endpoint cluster
export const endpoints: Record<string, EndpointConfig> = {
	'conversations.list': { apiClass: Adapter.ConversationsApi, method: 'conversationsSnapshot' },
	'conversations.create': {
		apiClass: Adapter.ConversationsApi,
		method: 'conversationsCreateSpecificConversation'
	},
	'conversations.delete': {
		apiClass: Adapter.ConversationsApi,
		method: 'conversationsDeleteSpecificConversation'
	},
	'conversation.get': {
		apiClass: Adapter.ConversationApi,
		method: 'conversationGetSpecificConversation'
	},
	'conversation.update': { apiClass: Adapter.ConversationApi, method: 'conversationUpdate' },
	'conversation.messages': {
		apiClass: Adapter.ConversationApi,
		method: 'conversationSpecificConversationMessages'
	},
	'assets.list': { apiClass: Adapter.AssetsApi, method: 'assetsSnapshot' },
	'assets.create': { apiClass: Adapter.AssetsApi, method: 'assetsCreateNewAsset' },
	'assets.delete': { apiClass: Adapter.AssetsApi, method: 'assetsDeleteAsset' },
	'asset.get': { apiClass: Adapter.AssetApi, method: 'assetSnapshot' },
	'asset.update': { apiClass: Adapter.AssetApi, method: 'assetUpdate' },

	// Activities
	/**
	 * Usage: pieces.list('activities', params)
	 * Gets a snapshot of all activities
	 */
	'activities.list': { apiClass: Adapter.ActivitiesApi, method: 'activitiesSnapshot' },

	/**
	 * Usage: pieces.create('activities', data)
	 * Creates a new activity
	 */
	'activities.create': { apiClass: Adapter.ActivitiesApi, method: 'activitiesCreateNewActivity' },

	/**
	 * Usage: pieces.delete('activities', activityId)
	 * Deletes a specific activity
	 */
	'activities.delete': {
		apiClass: Adapter.ActivitiesApi,
		method: 'activitiesDeleteSpecificActivity'
	},

	/**
	 * Usage: pieces.stream('activities', wsUrl, params, onData, onError)
	 * Provides a WebSocket connection that emits changes to activity identifiers
	 */
	'activities.streamIdentifiers': {
		apiClass: Adapter.ActivitiesApi,
		method: 'activitiesStreamIdentifiers'
	},

	// Allocations
	/**
	 * Usage: pieces.get('allocation', id, params)
	 * Gets a snapshot of a specific allocation
	 */
	'allocation.get': { apiClass: Adapter.AllocationApi, method: 'allocationSnapshot' },

	/**
	 * Usage: pieces.update('allocation', id, data)
	 * Updates a specific allocation with the provided data
	 */
	'allocation.update': { apiClass: Adapter.AllocationApi, method: 'allocationUpdate' },

	/**
	 * Usage: pieces.get('allocationRaw', id, params)
	 * Gets a raw snapshot of a specific allocation (returned in raw format)
	 */
	'allocation.getRaw': { apiClass: Adapter.AllocationApi, method: 'allocationSnapshotRaw' },

	/**
	 * Usage: pieces.update('allocationRaw', id, data)
	 * Updates a specific allocation with raw data format
	 */
	'allocation.updateRaw': { apiClass: Adapter.AllocationApi, method: 'allocationUpdateRaw' },

	'analyses.list': { apiClass: Adapter.AnalysesApi, method: 'analysesSnapshot' },
	'analyses.listRaw': { apiClass: Adapter.AnalysesApi, method: 'analysesSnapshotRaw' },

	'annotation.get': { apiClass: Adapter.AnnotationApi, method: 'annotationSnapshot' },
	'annotation.update': { apiClass: Adapter.AnnotationApi, method: 'annotationUpdate' },
	'annotations.list': { apiClass: Adapter.AnnotationsApi, method: 'annotationsSnapshot' },

	'applet.get': { apiClass: Adapter.AppletApi, method: 'appletSnapshot' },

	'application.get': { apiClass: Adapter.ApplicationApi, method: 'applicationSnapshot' },
	'applications.list': { apiClass: Adapter.ApplicationsApi, method: 'applicationsSnapshot' },

	'backup.get': { apiClass: Adapter.BackupApi, method: 'backupSnapshot' },
	'backups.list': { apiClass: Adapter.BackupsApi, method: 'backupsSnapshot' },
	'backups.create': { apiClass: Adapter.BackupsApi, method: 'backupsCreateNewBackup' },

	'classification.get': { apiClass: Adapter.ClassificationApi, method: 'classificationSnapshot' },

	'codeAnalyses.list': { apiClass: Adapter.CodeAnalysesApi, method: 'codeAnalysesSnapshot' },

	'connector.get': { apiClass: Adapter.ConnectorApi, method: 'connectorSnapshot' },

	'conversationMessage.get': {
		apiClass: Adapter.ConversationMessageApi,
		method: 'conversationMessageSnapshot'
	},
	'conversationMessages.list': {
		apiClass: Adapter.ConversationMessagesApi,
		method: 'conversationMessagesSnapshot'
	},

	// Database
	// Update the database.get endpoint to use the correct method
	'database.get': { apiClass: Adapter.DatabaseApi, method: 'databaseExport' },
	// Add a new endpoint for database import
	'database.import': { apiClass: Adapter.DatabaseApi, method: 'databaseImport' },

	'discovery.get': { apiClass: Adapter.DiscoveryApi, method: 'discoverySnapshot' },

	'distribution.get': { apiClass: Adapter.DistributionApi, method: 'distributionSnapshot' },
	'distributions.list': { apiClass: Adapter.DistributionsApi, method: 'distributionsSnapshot' },

	// External Provider
	'externalProvider.get': {
		apiClass: Adapter.ExternalProviderApi,
		method: 'externalProviderSnapshot'
	},
	'externalProvider.createApiKey': {
		apiClass: Adapter.ExternalProviderApi,
		method: 'externalProviderApiKeyCreate'
	},
	'externalProvider.deleteApiKey': {
		apiClass: Adapter.ExternalProviderApi,
		method: 'externalProviderApiKeyDelete'
	},
	'externalProvider.updateApiKey': {
		apiClass: Adapter.ExternalProviderApi,
		method: 'externalProviderApiKeyUpdate'
	},

	'format.get': { apiClass: Adapter.FormatApi, method: 'formatSnapshot' },
	'formats.list': { apiClass: Adapter.FormatsApi, method: 'formatsSnapshot' },

	'foundry.get': { apiClass: Adapter.FoundryApi, method: 'foundrySnapshot' },

	'github.get': { apiClass: Adapter.GithubApi, method: 'githubSnapshot' },

	'hint.get': { apiClass: Adapter.HintApi, method: 'hintSnapshot' },
	'hints.list': { apiClass: Adapter.HintsApi, method: 'hintsSnapshot' },

	'imageAnalyses.list': { apiClass: Adapter.ImageAnalysesApi, method: 'imageAnalysesSnapshot' },

	'linkify.get': { apiClass: Adapter.LinkifyApi, method: 'linkifySnapshot' },

	'macOS.get': { apiClass: Adapter.MacOSApi, method: 'macOSSnapshot' },

	'machineLearning.get': {
		apiClass: Adapter.MachineLearningApi,
		method: 'machineLearningSnapshot'
	},

	// Metrics
	'metrics.formats.get': { apiClass: Adapter.MetricsApi, method: 'getMetricsFormats' },
	// Add a new endpoint for the ordered metrics
	'metrics.formats.ordered': { apiClass: Adapter.MetricsApi, method: 'metricsFormatsOrdered' },

	// Model endpoint
	'model.scores.increment': {
		apiClass: Adapter.ModelApi,
		method: 'modelScoresIncrement'
	},

	/**
	 * Usage: pieces.download('model', modelId, params)
	 * Downloads a specific model to your local machine
	 */
	'model.download': {
		apiClass: Adapter.ModelApi,
		method: 'modelSpecificModelDownload'
	},

	/**
	 * Usage: pieces.cancelDownload('model', modelId)
	 * Cancels a specific model download that is currently in progress
	 */
	'model.download.cancel': {
		apiClass: Adapter.ModelApi,
		method: 'modelSpecificModelDownloadCancel'
	},

	/**
	 * Usage: pieces.stream('model.download.progress', wsUrl, {modelId}, onData, onError)
	 * Provides real-time updates on the download progress of a specific model via WebSocket
	 */
	'model.download.progress': {
		apiClass: Adapter.ModelApi,
		method: 'modelSpecificModelDownloadProgress'
	},

	/**
	 * Usage: pieces.load('model', modelId, params)
	 * Loads a previously downloaded model into memory
	 */
	'model.load': {
		apiClass: Adapter.ModelApi,
		method: 'modelSpecificModelLoad'
	},

	/**
	 * Usage: pieces.unload('model', modelId)
	 * Unloads a previously loaded model from memory, freeing up RAM
	 */
	'model.unload': {
		apiClass: Adapter.ModelApi,
		method: 'modelSpecificModelUnload'
	},

	/**
	 * Usage: pieces.update('model', null, modelData)
	 * Updates a machine learning model (only for models with 'custom:true')
	 */
	'model.update': {
		apiClass: Adapter.ModelApi,
		method: 'modelUpdate'
	},

	/**
	 * Usage: pieces.get('model.snapshot', modelId)
	 * Retrieves a specific ML model
	 */
	'model.snapshot': {
		apiClass: Adapter.ModelApi,
		method: 'modelsSpecificModelSnapshot'
	},

	// Models collection endpoints
	/**
	 * Usage: pieces.get('models.list')
	 * Gets a snapshot of all your models
	 */
	'models.list': { apiClass: Adapter.ModelsApi, method: 'modelsSnapshot' },

	/**
	 * Usage: pieces.create('model', modelData)
	 * Creates a new machine learning model (will have 'custom:true' by default)
	 */
	'models.create': { apiClass: Adapter.ModelsApi, method: 'modelsCreateNewModel' },

	/**
	 * Usage: pieces.delete('model', modelId)
	 * Deletes a specific model (only works for custom models with 'custom:true')
	 */
	'models.delete': { apiClass: Adapter.ModelsApi, method: 'modelsDeleteSpecificModel' },

	/**
	 * Usage: pieces.deleteCache('model', modelId)
	 * Deletes data associated with a specific model (currently only for LLM models)
	 */
	'models.deleteCache': { apiClass: Adapter.ModelsApi, method: 'modelsDeleteSpecificModelCache' },

	/**
	 * Usage: pieces.stream('models.identifiers', wsUrl, {}, onData, onError)
	 * Provides a WebSocket connection that emits changes to model identifiers
	 */
	'models.stream.identifiers': { apiClass: Adapter.ModelsApi, method: 'modelsStreamIdentifiers' },

	/**
	 * Usage: pieces.unloadAll('models')
	 * Unloads all available machine learning models that are unloadable
	 */
	'models.unloadAll': { apiClass: Adapter.ModelsApi, method: 'unloadModels' },

	// Model Context Protocol endpoints
	'modelContextProtocol.get': {
		apiClass: Adapter.ModelContextProtocolApi,
		method: 'modelContextProtocolSnapshot'
	},

	/**
	 * Usage: pieces.send('modelContextProtocol.messages', { schema_version: '2024-11-05', ...messageData })
	 * Sends messages to the Model Context Protocol endpoint according to the specified schema version
	 * Note: The response will be sent via the SSE endpoint for 2024-11-05 schema
	 * Note: For 2025-03-26 schema, this establishes a connection for exchanging events
	 */
	'modelContextProtocol.messages': {
		apiClass: Adapter.ModelContextProtocolApi,
		method: 'modelContextProtocolMessages'
	},

	/**
	 * Usage: pieces.list('modelContextProtocol.schemaVersions')
	 * Retrieves all supported schema versions for the Model Context Protocol
	 */
	'modelContextProtocol.schemaVersions': {
		apiClass: Adapter.ModelContextProtocolApi,
		method: 'modelContextProtocolSchemaVersions'
	},

	/**
	 * Usage: pieces.stream('modelContextProtocol.sse', null, { schema_version: '2024-11-05' }, onData, onError)
	 * Establishes a long-running Server-Sent Events connection for the MCP integration
	 * Note: This is NOT a WebSocket but rather an SSE connection
	 */
	'modelContextProtocol.sse': {
		apiClass: Adapter.ModelContextProtocolApi,
		method: 'modelContextProtocolServerSentEvents'
	},

	// Notifications Api endpoints
	/**
	 * Usage: pieces.send('notifications.send', notificationData)
	 * Sends a local notification and returns the UUID of the notification
	 * Note: This is a fire-and-forget notification system
	 */
	'notifications.send': {
		apiClass: Adapter.NotificationsApi,
		method: 'sendLocalNotification'
	},

	/**
	 * Usage: pieces.send('notifications.sendRaw', notificationData)
	 * Sends a local notification in raw format and returns the UUID of the notification
	 * Note: Uses the raw API response format for advanced use cases
	 */
	'notifications.sendRaw': {
		apiClass: Adapter.NotificationsApi,
		method: 'sendLocalNotificationRaw'
	},

	// OCR Analyses endpoints
	/**
	 * Usage: pieces.list('ocrAnalyses')
	 * Gets a snapshot of all your OCR analyses
	 * Note: OCR analyses are attached to image analyses
	 */
	'ocrAnalyses.list': { apiClass: Adapter.OCRAnalysesApi, method: 'ocrAnalysesSnapshot' },

	/**
	 * Usage: pieces.list('ocrAnalyses.raw', params)
	 * Gets a raw snapshot of all your OCR analyses for advanced use cases
	 * Note: Returns the raw API response format
	 */
	'ocrAnalyses.listRaw': { apiClass: Adapter.OCRAnalysesApi, method: 'ocrAnalysesSnapshotRaw' },

	// OS Api endpoints
	/**
	 * Usage: pieces.send('os.linkProvider', requestParameters)
	 * Links an external provider to the current auth0 account
	 */
	'os.linkProvider': {
		apiClass: Adapter.OSApi,
		method: 'linkProvider'
	},

	/**
	 * Usage: pieces.send('os.appletLaunch', requestParameters)
	 * Launches a micro-application or returns port if already running
	 */
	'os.appletLaunch': {
		apiClass: Adapter.OSApi,
		method: 'osAppletLaunch'
	},

	/**
	 * Usage: pieces.send('os.appletRestart', requestParameters)
	 * Restarts a micro-application (shuts down and rehosts it)
	 */
	'os.appletRestart': {
		apiClass: Adapter.OSApi,
		method: 'osAppletRestart'
	},

	/**
	 * Usage: pieces.send('os.appletTerminate', requestParameters)
	 * Shuts down or terminates a specified micro-application
	 */
	'os.appletTerminate': {
		apiClass: Adapter.OSApi,
		method: 'osAppletTerminate'
	},

	/**
	 * Usage: pieces.send('os.browserUrlOpen', { url: 'https://example.com' })
	 * Opens a URL in an external browser
	 */
	'os.browserUrlOpen': {
		apiClass: Adapter.OSApi,
		method: 'osBrowserUrlOpen'
	},

	/**
	 * Usage: pieces.get('os.deviceInformation')
	 * Gets information related to the specific device
	 */
	'os.deviceInformation': {
		apiClass: Adapter.OSApi,
		method: 'osDeviceInformation'
	},

	/**
	 * Usage: pieces.send('os.filesystemFileOpen', { path: '/path/to/file' })
	 * Opens a file in the default application
	 */
	'os.filesystemFileOpen': {
		apiClass: Adapter.OSApi,
		method: 'osFilesystemFileOpen'
	},

	/**
	 * Usage: pieces.stream('os.filesystemFileReadStreamed', null, { path: '/path/to/file' }, onData, onError)
	 * Streams the contents of a file back to the client
	 */
	'os.filesystemFileReadStreamed': {
		apiClass: Adapter.OSApi,
		method: 'osFilesystemFileReadStreamed'
	},

	/**
	 * Usage: pieces.send('os.filesystemPathVerify', { path: '/path/to/verify' })
	 * Determines if a given path is a file, directory, or invalid
	 */
	'os.filesystemPathVerify': {
		apiClass: Adapter.OSApi,
		method: 'osFilesystemPathVerify'
	},

	/**
	 * Usage: pieces.send('os.filesystemPickFiles', { multiple: true })
	 * Triggers a file picker and returns selected file paths
	 */
	'os.filesystemPickFiles': {
		apiClass: Adapter.OSApi,
		method: 'osFilesystemPickFiles'
	},

	/**
	 * Usage: pieces.send('os.filesystemPickFolders')
	 * Triggers a folder picker and returns selected folder paths
	 */
	'os.filesystemPickFolders': {
		apiClass: Adapter.OSApi,
		method: 'osFilesystemPickFolders'
	},

	/**
	 * Usage: pieces.send('os.memoryOptimize')
	 * Optimizes memory across AdapterOS
	 */
	'os.memoryOptimize': {
		apiClass: Adapter.OSApi,
		method: 'osMemoryOptimize'
	},

	/**
	 * Usage: pieces.get('os.metadata')
	 * Returns metadata (total materials) in the pieces drive
	 */
	'os.metadata': {
		apiClass: Adapter.OSApi,
		method: 'osMetadata'
	},

	/**
	 * Usage: pieces.send('os.nanoModelsPrepare', { models: ['classifier', 'summarizer'] })
	 * Prepares nano models for specific tasks
	 */
	'os.nanoModelsPrepare': {
		apiClass: Adapter.OSApi,
		method: 'osNanoModelsPrepare'
	},

	/**
	 * Usage: pieces.get('os.permissions')
	 * Gets permissions of the user's local machine relevant to AdapterOS
	 */
	'os.permissions': {
		apiClass: Adapter.OSApi,
		method: 'osPermissions'
	},

	/**
	 * Usage: pieces.send('os.permissionsRequest', { permissions: ['ACCESSIBILITY', 'NOTIFICATIONS'] })
	 * Requests specific permissions on macOS and Windows
	 */
	'os.permissionsRequest': {
		apiClass: Adapter.OSApi,
		method: 'osPermissionsRequest'
	},

	/**
	 * Usage: pieces.send('os.restart')
	 * Restarts AdapterOS (LocalOS only)
	 */
	'os.restart': {
		apiClass: Adapter.OSApi,
		method: 'osRestart'
	},

	/**
	 * Usage: pieces.get('os.settingsSnapshot')
	 * Gets a snapshot of the AdapterOS settings
	 */
	'os.settingsSnapshot': {
		apiClass: Adapter.OSApi,
		method: 'osSettingsSnapshot'
	},

	/**
	 * Usage: pieces.stream('os.settingsStream', null, {}, onData, onError)
	 * Establishes a WebSocket that emits changes to OSSettings
	 */
	'os.settingsStream': {
		apiClass: Adapter.OSApi,
		method: 'osSettingsStream'
	},

	/**
	 * Usage: pieces.send('os.settingsUpdate', updatedSettings)
	 * Updates OS settings and emits a change via the settings stream
	 */
	'os.settingsUpdate': {
		apiClass: Adapter.OSApi,
		method: 'osSettingsUpdate'
	},

	/**
	 * Usage: pieces.send('os.terminate')
	 * Force quits AdapterOS
	 */
	'os.terminate': {
		apiClass: Adapter.OSApi,
		method: 'osTerminate'
	},

	/**
	 * Usage: pieces.send('os.updateCheck', { forced: true })
	 * Checks the status of an update for AdapterOS
	 */
	'os.updateCheck': {
		apiClass: Adapter.OSApi,
		method: 'osUpdateCheck'
	},

	/**
	 * Usage: pieces.stream('os.updateCheckStream', null, {}, onData, onError)
	 * Streams the progress of checking for updates
	 */
	'os.updateCheckStream': {
		apiClass: Adapter.OSApi,
		method: 'osUpdateCheckStream'
	},

	/**
	 * Usage: pieces.send('os.signIn')
	 * Triggers sign-in to OS Server
	 */
	'os.signIn': {
		apiClass: Adapter.OSApi,
		method: 'signIntoOS'
	},

	/**
	 * Usage: pieces.send('os.signOut')
	 * Signs out a user from the OS
	 */
	'os.signOut': {
		apiClass: Adapter.OSApi,
		method: 'signOutOfOS'
	},

	// Ollama Api endpoints
	/**
	 * Usage: pieces.get('ollama', null)
	 * Gets a snapshot of the Ollama configuration
	 */
	'ollama.get': { apiClass: Adapter.OllamaApi, method: 'ollamaSnapshot' },

	/**
	 * Usage: pieces.send('ollama.install')
	 * Starts the installation process for Ollama
	 * Note: This returns immediately; use status endpoints to check progress
	 */
	'ollama.install': { apiClass: Adapter.OllamaApi, method: 'ollamaInstall' },

	/**
	 * Usage: pieces.send('ollama.installCancel', { identifier: 'install-id' })
	 * Cancels a specific Ollama installation that is in progress
	 */
	'ollama.installCancel': { apiClass: Adapter.OllamaApi, method: 'ollamaInstallCancel' },

	/**
	 * Usage: pieces.get('ollama.installSnapshot', { identifier: 'install-id' })
	 * Gets the status of a specific Ollama installation
	 */
	'ollama.installSnapshot': { apiClass: Adapter.OllamaApi, method: 'ollamaInstallSnapshot' },

	/**
	 * Usage: pieces.get('ollama.installsSnapshot')
	 * Gets a list of all Ollama installation attempts in the current session
	 */
	'ollama.installsSnapshot': { apiClass: Adapter.OllamaApi, method: 'ollamaInstallsSnapshot' },

	/**
	 * Usage: pieces.get('ollama.statusCheck')
	 * Checks the current status of Ollama (installed, needs update, etc.)
	 */
	'ollama.statusCheck': { apiClass: Adapter.OllamaApi, method: 'ollamaStatusCheck' },

	/**
	 * Usage: pieces.stream('ollama.statusCheckStream', wsUrl, {}, onData, onError)
	 * Provides real-time updates on Ollama status via WebSocket
	 * Note: Emits updates for installations, updates, and status changes
	 */
	'ollama.statusCheckStream': { apiClass: Adapter.OllamaApi, method: 'ollamaStatusCheckStream' },

	/**
	 * Usage: pieces.send('ollama.uninstall', uninstallParams)
	 * Uninstalls Ollama
	 * Note: Request body should contain the installation to be deleted
	 */
	'ollama.uninstall': { apiClass: Adapter.OllamaApi, method: 'ollamaUninstall' },

	/**
	 * Usage: pieces.send('ollama.update', { version: 'x.y.z' })
	 * Starts the update process for Ollama to the specified version
	 * Note: Returns immediately; use status endpoints to check progress
	 */
	'ollama.update': { apiClass: Adapter.OllamaApi, method: 'ollamaUpdate' },

	/**
	 * Usage: pieces.send('ollama.updateCancel', { identifier: 'update-id' })
	 * Cancels a specific Ollama update that is in progress
	 */
	'ollama.updateCancel': { apiClass: Adapter.OllamaApi, method: 'ollamaUpdateCancel' },

	/**
	 * Usage: pieces.get('ollama.updateSnapshot', { identifier: 'update-id' })
	 * Gets the status of a specific Ollama update
	 */
	'ollama.updateSnapshot': { apiClass: Adapter.OllamaApi, method: 'ollamaUpdateSnapshot' },

	/**
	 * Usage: pieces.get('ollama.updatesSnapshot')
	 * Gets a list of all Ollama update attempts in the current session
	 */
	'ollama.updatesSnapshot': { apiClass: Adapter.OllamaApi, method: 'ollamaUpdatesSnapshot' },

	// OpenAi endpoints
	/**
	 * Usage: pieces.send('openAI.models.list', params)
	 * Gets a list of all available models from OpenAI using your OpenAI API key
	 * Note: Requires internet connection and a valid OpenAI API key in user.auth0.openAI.apiKey
	 * Note: Returns 401 if user is unauthenticated, OpenAI key doesn't exist, or key is invalid
	 */
	'openAI.models.list': {
		apiClass: Adapter.OpenAIApi,
		method: 'openAiModelsList'
	},

	/**
	 * Usage: pieces.send('openAI.models.listRaw', params)
	 * Gets a raw list of all available models from OpenAI for advanced use cases
	 * Note: Returns the raw API response format
	 * Note: Requires internet connection and a valid OpenAI API key
	 * Note: Returns 401 if user is unauthenticated, OpenAI key doesn't exist, or key is invalid
	 */
	'openAI.models.listRaw': {
		apiClass: Adapter.OpenAIApi,
		method: 'openAiModelsListRaw'
	},

	'pkce.get': { apiClass: Adapter.PKCEApi, method: 'pkceSnapshot' },

	'person.get': { apiClass: Adapter.PersonApi, method: 'personSnapshot' },
	'persons.list': { apiClass: Adapter.PersonsApi, method: 'personsSnapshot' },

	// Piece Api endpoints
	/**
	 * Usage: pieces.get('piece.get', pieceId, params)
	 * Gets an HTML-formatted share view of a specific piece
	 * Note: Returns the piece in a format suitable for sharing
	 */
	'piece.get': { apiClass: Adapter.PieceApi, method: 'htmlShare' },

	/**
	 * Usage: pieces.get('piece.getRaw', pieceId, params)
	 * Gets a raw HTML-formatted share view of a specific piece
	 * Note: Returns the raw API response format for advanced use cases
	 */
	'piece.getRaw': { apiClass: Adapter.PieceApi, method: 'htmlShareRaw' },

	// QGPT (CORE) Endpoints
	/**
	 * Usage: pieces.send('qgpt.hints', params)
	 * Retrieves hints from QGPT based on the provided parameters
	 */
	'qgpt.hints': {
		apiClass: Adapter.QGPTApi,
		method: 'hints'
	},

	/**
	 * Usage: pieces.send('qgpt.hintsRaw', params)
	 * Retrieves hints from QGPT in raw format for advanced use cases
	 * Note: Returns the raw API response format
	 */
	'qgpt.hintsRaw': {
		apiClass: Adapter.QGPTApi,
		method: 'hintsRaw'
	},

	/**
	 * Usage: pieces.send('qgpt.personsRelated', params)
	 * Gets information about related persons from QGPT
	 */
	'qgpt.personsRelated': {
		apiClass: Adapter.QGPTApi,
		method: 'personsRelated'
	},

	/**
	 * Usage: pieces.send('qgpt.personsRelatedRaw', params)
	 * Gets information about related persons from QGPT in raw format
	 * Note: Returns the raw API response format for advanced use cases
	 */
	'qgpt.personsRelatedRaw': {
		apiClass: Adapter.QGPTApi,
		method: 'personsRelatedRaw'
	},

	/**
	 * Usage: pieces.stream('qgpt.stream', wsUrl, params, onData, onError)
	 * Creates a stream connection to QGPT for real-time data
	 */
	'qgpt.stream': {
		apiClass: Adapter.QGPTApi,
		method: 'qgptStream'
	},

	/**
	 * Usage: pieces.stream('qgpt.streamRaw', wsUrl, params, onData, onError)
	 * Creates a stream connection to QGPT for real-time data in raw format
	 * Note: Returns raw WebSocket data for advanced use cases
	 */
	'qgpt.streamRaw': {
		apiClass: Adapter.QGPTApi,
		method: 'qgptStreamRaw'
	},

	/**
	 * Usage: pieces.send('qgpt.question', questionData)
	 * Submits a question to QGPT and returns the response
	 */
	'qgpt.question': {
		apiClass: Adapter.QGPTApi,
		method: 'question'
	},

	/**
	 * Usage: pieces.send('qgpt.questionRaw', questionData)
	 * Submits a question to QGPT and returns the raw response
	 * Note: Returns the raw API response format for advanced use cases
	 */
	'qgpt.questionRaw': {
		apiClass: Adapter.QGPTApi,
		method: 'questionRaw'
	},

	/**
	 * Usage: pieces.send('qgpt.relevance', params)
	 * Checks relevance of content using QGPT
	 */
	'qgpt.relevance': {
		apiClass: Adapter.QGPTApi,
		method: 'relevance'
	},

	/**
	 * Usage: pieces.send('qgpt.relevanceRaw', params)
	 * Checks relevance of content using QGPT and returns raw data
	 * Note: Returns the raw API response format for advanced use cases
	 */
	'qgpt.relevanceRaw': {
		apiClass: Adapter.QGPTApi,
		method: 'relevanceRaw'
	},

	/**
	 * Usage: pieces.send('qgpt.reprompt', repromptData)
	 * Sends a reprompt to QGPT based on previous conversation
	 */
	'qgpt.reprompt': {
		apiClass: Adapter.QGPTApi,
		method: 'reprompt'
	},

	/**
	 * Usage: pieces.send('qgpt.repromptRaw', repromptData)
	 * Sends a reprompt to QGPT and returns raw response data
	 * Note: Returns the raw API response format for advanced use cases
	 */
	'qgpt.repromptRaw': {
		apiClass: Adapter.QGPTApi,
		method: 'repromptRaw'
	},

	'range.get': { apiClass: Adapter.RangeApi, method: 'rangeSnapshot' },
	'ranges.list': { apiClass: Adapter.RangesApi, method: 'rangesSnapshot' },

	// Relationships Api endpoints
	/**
	 * Usage: pieces.list('relationships')
	 * Gets a snapshot of all relationships that exist within your Adapter database
	 * Note: Relationships connect different entities in your database
	 */
	'relationships.list': { apiClass: Adapter.RelationshipsApi, method: 'relationshipsSnapshot' },

	/**
	 * Usage: pieces.list('relationships.raw')
	 * Gets a raw snapshot of all relationships for advanced use cases
	 * Note: Returns the raw API response format
	 */
	'relationships.listRaw': {
		apiClass: Adapter.RelationshipsApi,
		method: 'relationshipsSnapshotRaw'
	},

	// Search Api endpoints
	/**
	 * Usage: pieces.send('search.fullText', { query: 'example code' })
	 * Runs full-text search for exact matches in asset content
	 * Note: This does NOT run fuzzy matching
	 */
	'search.fullText': {
		apiClass: Adapter.SearchApi,
		method: 'fullTextSearch'
	},

	/**
	 * Usage: pieces.send('search.fullTextRaw', { query: 'example code' })
	 * Runs full-text search for exact matches in asset content and returns raw response
	 * Note: Returns the raw API response format for advanced use cases
	 */
	'search.fullTextRaw': {
		apiClass: Adapter.SearchApi,
		method: 'fullTextSearchRaw'
	},

	/**
	 * Usage: pieces.send('search.neuralCode', { query: 'function example' })
	 * Runs neural code search on your assets
	 * Note: Returns asset UUIDs that match the search criteria
	 */
	'search.neuralCode': {
		apiClass: Adapter.SearchApi,
		method: 'neuralCodeSearch'
	},

	/**
	 * Usage: pieces.send('search.neuralCodeRaw', { query: 'function example' })
	 * Runs neural code search on your assets and returns raw response
	 * Note: Returns the raw API response format for advanced use cases
	 */
	'search.neuralCodeRaw': {
		apiClass: Adapter.SearchApi,
		method: 'neuralCodeSearchRaw'
	},

	/**
	 * Usage: pieces.send('search.tagBased', { tags: ['javascript', 'react'] })
	 * Runs tag-based search and returns assets that match the specified tags
	 * Note: Returns asset UUIDs that best match your passed in tags
	 */
	'search.tagBased': {
		apiClass: Adapter.SearchApi,
		method: 'tagBasedSearch'
	},

	/**
	 * Usage: pieces.send('search.tagBasedRaw', { tags: ['javascript', 'react'] })
	 * Runs tag-based search and returns raw response
	 * Note: Returns the raw API response format for advanced use cases
	 */
	'search.tagBasedRaw': {
		apiClass: Adapter.SearchApi,
		method: 'tagBasedSearchRaw'
	},

	// Sensitive Api endpoints
	/**
	 * Usage: pieces.get('sensitive', id)
	 * Gets a specific sensitive item via its UUID
	 * Note: Sensitive items contain data that requires special handling
	 */
	'sensitive.get': { apiClass: Adapter.SensitiveApi, method: 'sensitiveSnapshot' },

	/**
	 * Usage: pieces.get('sensitive.raw', id)
	 * Gets a specific sensitive item in raw format for advanced use cases
	 * Note: Returns the raw API response format
	 */
	'sensitive.getRaw': { apiClass: Adapter.SensitiveApi, method: 'sensitiveSnapshotRaw' },

	/**
	 * Usage: pieces.update('sensitive', id, updatedData)
	 * Updates a specific sensitive item with new data
	 * Note: Use this to modify properties of a sensitive item
	 */
	'sensitive.update': { apiClass: Adapter.SensitiveApi, method: 'updateSensitive' },

	/**
	 * Usage: pieces.update('sensitive.raw', id, updatedData)
	 * Updates a specific sensitive item and returns raw response
	 * Note: Returns the raw API response format for advanced use cases
	 */
	'sensitive.updateRaw': { apiClass: Adapter.SensitiveApi, method: 'updateSensitiveRaw' },

	/**
	 * Usage: pieces.send('sensitive.scores.increment', { sensitive: id, increment: scoreData })
	 * Increments the score for a sensitive item based on the provided data
	 * Note: Used for weighting or prioritizing sensitive content
	 */
	'sensitive.scores.increment': {
		apiClass: Adapter.SensitiveApi,
		method: 'sensitiveScoresIncrement'
	},

	/**
	 * Usage: pieces.send('sensitive.scores.incrementRaw', { sensitive: id, increment: scoreData })
	 * Increments the score for a sensitive item and returns raw response
	 * Note: Fire-and-forget operation that returns void
	 */
	'sensitive.scores.incrementRaw': {
		apiClass: Adapter.SensitiveApi,
		method: 'sensitiveScoresIncrementRaw'
	},

	// Sensitives Api endpoints
	/**
	 * Usage: pieces.list('sensitives')
	 * Gets a snapshot of all your sensitive items
	 * Note: This returns all sensitive data in your system
	 */
	'sensitives.list': { apiClass: Adapter.SensitivesApi, method: 'sensitivesSnapshot' },

	/**
	 * Usage: pieces.list('sensitives.raw')
	 * Gets a raw snapshot of all your sensitive items for advanced use cases
	 * Note: Returns the raw API response format
	 */
	'sensitives.listRaw': { apiClass: Adapter.SensitivesApi, method: 'sensitivesSnapshotRaw' },

	/**
	 * Usage: pieces.create('sensitives', sensitiveData)
	 * Creates a new sensitive item with the provided data
	 * Note: Use this to store sensitive information securely
	 */
	'sensitives.create': { apiClass: Adapter.SensitivesApi, method: 'sensitivesCreateNewSensitive' },

	/**
	 * Usage: pieces.create('sensitives.raw', sensitiveData)
	 * Creates a new sensitive item and returns raw response
	 * Note: Returns the raw API response format for advanced use cases
	 */
	'sensitives.createRaw': {
		apiClass: Adapter.SensitivesApi,
		method: 'sensitivesCreateNewSensitiveRaw'
	},

	/**
	 * Usage: pieces.delete('sensitives', id)
	 * Deletes a specific sensitive item via its UUID
	 * Note: This permanently removes the sensitive data
	 */
	'sensitives.delete': { apiClass: Adapter.SensitivesApi, method: 'sensitivesDeleteSensitive' },

	/**
	 * Usage: pieces.delete('sensitives.raw', id)
	 * Deletes a specific sensitive item via its UUID without response
	 * Note: Fire-and-forget operation that returns void
	 */
	'sensitives.deleteRaw': {
		apiClass: Adapter.SensitivesApi,
		method: 'sensitivesDeleteSensitiveRaw'
	},

	/**
	 * Usage: pieces.send('sensitives.search', { query: 'secret-key' })
	 * Searches for sensitive items matching the query value
	 * Note: This searches the actual value of the sensitive data
	 */
	'sensitives.search': { apiClass: Adapter.SensitivesApi, method: 'searchSensitives' },

	/**
	 * Usage: pieces.send('sensitives.searchRaw', { query: 'secret-key' })
	 * Searches for sensitive items and returns raw response
	 * Note: Returns the raw API response format for advanced use cases
	 */
	'sensitives.searchRaw': { apiClass: Adapter.SensitivesApi, method: 'searchSensitivesRaw' },

	/**
	 * Usage: pieces.stream('sensitives.streamIdentifiers', wsUrl, params, onData, onError)
	 * Provides a WebSocket connection that emits changes to sensitive identifiers
	 * Note: Listen for changes to UUIDs of sensitive items in real-time
	 */
	'sensitives.streamIdentifiers': {
		apiClass: Adapter.SensitivesApi,
		method: 'sensitivesStreamIdentifiers'
	},

	/**
	 * Usage: pieces.stream('sensitives.streamIdentifiersRaw', wsUrl, params, onData, onError)
	 * Provides a raw WebSocket connection for sensitive identifiers
	 * Note: Returns the raw stream response for advanced use cases
	 */
	'sensitives.streamIdentifiersRaw': {
		apiClass: Adapter.SensitivesApi,
		method: 'sensitivesStreamIdentifiersRaw'
	},

	// Share Api endpoints
	/**
	 * Usage: pieces.get('share', id, params)
	 * Gets a snapshot of a specific share
	 */
	'share.get': { apiClass: Adapter.ShareApi, method: 'shareSnapshot' },

	/**
	 * Usage: pieces.get('share.raw', id, params)
	 * Gets a raw snapshot of a specific share for advanced use cases
	 * Note: Returns the raw API response format
	 */
	'share.getRaw': { apiClass: Adapter.ShareApi, method: 'shareSnapshotRaw' },

	/**
	 * Usage: pieces.update('share', id, updatedShareData)
	 * Updates a specific share with new data
	 */
	'share.update': { apiClass: Adapter.ShareApi, method: 'shareUpdate' },

	/**
	 * Usage: pieces.update('share.raw', id, updatedShareData)
	 * Updates a specific share with raw data format
	 * Note: Uses the raw API response format
	 */
	'share.updateRaw': { apiClass: Adapter.ShareApi, method: 'shareUpdateRaw' },

	/**
	 * Usage: pieces.send('share.scores.increment', { share: shareId, increment: scoreData })
	 * Increments the score for a specific share
	 * Note: Takes a SeededScoreIncrement in the request body
	 */
	'share.scores.increment': { apiClass: Adapter.ShareApi, method: 'shareScoresIncrement' },

	/**
	 * Usage: pieces.send('share.scores.incrementRaw', { share: shareId, increment: scoreData })
	 * Increments the score for a specific share using raw API format
	 */
	'share.scores.incrementRaw': { apiClass: Adapter.ShareApi, method: 'shareScoresIncrementRaw' },

	// Shares Api endpoints
	/**
	 * Usage: pieces.list('shares', params)
	 * Gets a snapshot of all shares in the database
	 * Note: A Share is an asset that a user has shared with another user via link
	 */
	'shares.list': { apiClass: Adapter.SharesApi, method: 'sharesSnapshot' },

	/**
	 * Usage: pieces.list('shares.raw', params)
	 * Gets a raw snapshot of all shares for advanced use cases
	 * Note: Returns the raw API response format
	 */
	'shares.listRaw': { apiClass: Adapter.SharesApi, method: 'sharesSnapshotRaw' },

	/**
	 * Usage: pieces.create('shares', shareData)
	 * Creates a new share from an asset
	 * Note: Requires asset data in the request
	 */
	'shares.create': { apiClass: Adapter.SharesApi, method: 'sharesCreateNewShare' },

	/**
	 * Usage: pieces.create('shares.raw', shareData)
	 * Creates a new share from an asset using raw API format
	 * Note: Returns the raw API response format
	 */
	'shares.createRaw': { apiClass: Adapter.SharesApi, method: 'sharesCreateNewShareRaw' },

	/**
	 * Usage: pieces.delete('shares', shareId)
	 * Deletes a specific share by ID
	 * Note: Returns the ID of the deleted share
	 */
	'shares.delete': { apiClass: Adapter.SharesApi, method: 'sharesDeleteShare' },

	/**
	 * Usage: pieces.delete('shares.raw', shareId)
	 * Deletes a specific share by ID using raw API format
	 * Note: Returns the raw API response with the ID of the deleted share
	 */
	'shares.deleteRaw': { apiClass: Adapter.SharesApi, method: 'sharesDeleteShareRaw' },

	/**
	 * Usage: pieces.get('shares.specific', shareId, params)
	 * Gets a snapshot of a specific share by ID
	 * Note: Useful for retrieving shared content through a provided share ID
	 */
	'shares.specific': { apiClass: Adapter.SharesApi, method: 'sharesSpecificShareSnapshot' },

	/**
	 * Usage: pieces.get('shares.specific.raw', shareId, params)
	 * Gets a raw snapshot of a specific share by ID for advanced use cases
	 * Note: Returns the raw API response format
	 */
	'shares.specificRaw': { apiClass: Adapter.SharesApi, method: 'sharesSpecificShareSnapshotRaw' },

	// Well Known Api endpoints
	/**
	 * Usage: pieces.get('wellKnown.installationPath')
	 * Returns the installation path of AdapterOS
	 * Note: Useful for finding where AdapterOS is installed on the user's system
	 */
	'wellKnown.installationPath': { apiClass: Adapter.WellKnownApi, method: 'getInstallationPath' },

	/**
	 * Usage: pieces.get('wellKnown.installationPathRaw')
	 * Returns the raw installation path of AdapterOS for advanced use cases
	 * Note: Returns the raw API response format
	 */
	'wellKnown.installationPathRaw': {
		apiClass: Adapter.WellKnownApi,
		method: 'getInstallationPathRaw'
	},

	/**
	 * Usage: pieces.get('wellKnown.health')
	 * Retrieves the health status of the AdapterOS server
	 * Note: Use this to check if the server is functioning properly
	 */
	'wellKnown.health': { apiClass: Adapter.WellKnownApi, method: 'getWellKnownHealth' },

	/**
	 * Usage: pieces.get('wellKnown.healthRaw')
	 * Retrieves the raw health status of the AdapterOS server
	 * Note: Returns the raw API response format
	 */
	'wellKnown.healthRaw': { apiClass: Adapter.WellKnownApi, method: 'getWellKnownHealthRaw' },

	/**
	 * Usage: pieces.stream('wellKnown.streamHealth', wsUrl, params, onData, onError)
	 * Provides a WebSocket connection that streams health status updates
	 * Note: This is a streamed endpoint requiring a WebSocket connection
	 */
	'wellKnown.streamHealth': { apiClass: Adapter.WellKnownApi, method: 'getWellKnownStreamHealth' },

	/**
	 * Usage: pieces.stream('wellKnown.streamHealthRaw', wsUrl, params, onData, onError)
	 * Provides a raw WebSocket connection for health status updates
	 * Note: Returns the raw stream response for advanced use cases
	 */
	'wellKnown.streamHealthRaw': {
		apiClass: Adapter.WellKnownApi,
		method: 'getWellKnownStreamHealthRaw'
	},

	/**
	 * Usage: pieces.get('wellKnown.version')
	 * Returns the version of the AdapterOS server
	 * Note: Use this to check the currently installed version
	 */
	'wellKnown.version': { apiClass: Adapter.WellKnownApi, method: 'getWellKnownVersion' },

	/**
	 * Usage: pieces.get('wellKnown.versionRaw')
	 * Returns the raw version string of the AdapterOS server
	 * Note: Returns the raw API response format
	 */
	'wellKnown.versionRaw': { apiClass: Adapter.WellKnownApi, method: 'getWellKnownVersionRaw' }
}
