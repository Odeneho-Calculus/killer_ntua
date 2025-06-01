import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    server: {
        open: '/killer_ntua/killer_ntua.html',
        port: 3000,
        host: true
    },
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'killer_ntua/killer_ntua.html')
            }
        }
    }
});