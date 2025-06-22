// packages/core/vite.config.ts
import { defineConfig, PluginOption } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
	plugins: [svelte() as PluginOption],
	resolve: {
		alias: {
			$getFromPieces: resolve(__dirname, 'src/getFromPieces'),
			$components: resolve(__dirname, 'src/components')
		}
	},
	build: {
		lib: {
			entry: resolve(__dirname, 'src/index.ts'),
			name: 'core',
			fileName: 'index',
			formats: ['es']
		},
		outDir: 'dist',
		rollupOptions: {
			external: ['svelte', '@pieces.app/pieces-os-client'],
			output: {
				preserveModules: true,
				preserveModulesRoot: 'src'
			}
		}
	}
})
