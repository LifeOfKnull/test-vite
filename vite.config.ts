import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			/* options */
			deep: true,
			directoryAsNamespace: true,
			dts: './src/types/components.d.ts'
		}),
		Pages({
			routeStyle: 'nuxt'
		})
	]
})
