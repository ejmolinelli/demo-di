/// <reference types='vitest' />
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/sales',

  server: {
    port: 4200,
    host: 'localhost',
    fs: {
      allow: ['..']
    }
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [preact(), nxViteTsPaths()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
