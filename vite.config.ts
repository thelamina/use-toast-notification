import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [
		react(),
		dts({
			insertTypesEntry: true,
		}),
	],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/lib/index.ts'),
			name: 'ReactFeatureFlag',
			fileName: (format) => `use-toast-notification.${format}.js`,
		},
		rollupOptions: {
			external: ['react'],
		},
	},
});
