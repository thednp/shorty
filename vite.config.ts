import { resolve } from 'path';
import { defineConfig } from 'vite';

const NAME = 'SHORTY';

const fileName = {
  es: `shorty.mjs`,
  cjs: `shorty.cjs`,
  iife: `shorty.js`,
};

export default defineConfig({
  base: './',
  build: {
    emptyOutDir: true,
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: NAME,
      formats: ['es', 'cjs', 'iife'],
      fileName: (format) => fileName[format],
    },
    sourcemap: true,
  },
});
