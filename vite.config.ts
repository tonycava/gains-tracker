import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    plugins: [sveltekit()],
    server: {
        watch: {
            usePolling: true
        },
        host: true,
        strictPort: true,
        port: +(process.env.PORT ?? '3000')
    },
    resolve: {
        alias: {
            '@styles': path.resolve('./src/styles'),
            '@services': path.resolve('./src/services'),
            '@components': path.resolve('./src/components'),
            '@stores': path.resolve('./src/stores'),
        }
    }
});