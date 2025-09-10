// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { VitePWA } from 'vite-plugin-pwa';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// -----------------------------
// Env Detection
// -----------------------------
const isTermux = Boolean(process.env.TERMUX_VERSION);
const isProduction = process.env.NODE_ENV === 'production';

// -----------------------------
// Default Env Fallbacks
// -----------------------------
const VITE_APP_BASE_URL = process.env.VITE_APP_BASE_URL || '/';
const VITE_APP_NAME = process.env.VITE_APP_NAME || 'VisoulDocs';

// -----------------------------
// Vite Config Export
// -----------------------------
export default defineConfig({
  base: VITE_APP_BASE_URL,

  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: VITE_APP_NAME,
        short_name: 'VisoulDocs',
        description: 'Enterprise-grade document management & dashboard',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        scope: VITE_APP_BASE_URL,
        start_url: VITE_APP_BASE_URL,
        icons: [
          { src: 'pwa-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: 'pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
      disable: !isProduction || isTermux,
    }),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@home': resolve(__dirname, 'src/Home'),
      '@assets': resolve(__dirname, 'src/assets'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@data': resolve(__dirname, 'src/data'),
      '@components': resolve(__dirname, 'src/components'),
      '@common': resolve(__dirname, 'src/utils/common'),
      '@utils': resolve(__dirname, 'src/utils'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@layout': resolve(__dirname, 'src/Layout'),
      '@router': resolve(__dirname, 'src/Router'),
      '@api': resolve(__dirname, 'src/api'),
      '@services': resolve(__dirname, 'src/services'),
      '@__mocks__': resolve(__dirname, 'src/__mocks__'),
      '@config': resolve(__dirname, 'src/config'),
    },
  },

  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    // ❌ ลบ proxy ทั้งหมด เพราะไม่พึ่ง backend
    proxy: {},
  },

  build: {
    outDir: 'dist',
    target: 'esnext',
    sourcemap: true,
    minify: 'esbuild',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    manifest: true,
  },

  cacheDir: 'node_modules/.vite',

  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
