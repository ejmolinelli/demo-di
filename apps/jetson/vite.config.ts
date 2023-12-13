/// <reference types='vitest' />
import { defineConfig } from 'vite';

import preact from '@preact/preset-vite';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import federation from '@originjs/vite-plugin-federation';

const path = require('path');

export default defineConfig({
  cacheDir: '../../../node_modules/.vite/apps-jetson',

  server: {
    port: 4202,
    host: 'localhost',
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..'],
    },
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [preact(), nxViteTsPaths(), federation({
    name: "JetsonsApp",
    filename: "remoteEntry.js",
    exposes: {
      './Sprocket': path.resolve(__dirname, "src/sprocket.tsx"),
      './SprocketColor': path.resolve(__dirname,"src/colorpicker/colorpicker.tsx")
    },
    shared: []
  })],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
  },
});
