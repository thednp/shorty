import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";
import stripComments from "vite-plugin-strip-comments";

const NAME = 'SHORTY';

const fileName = {
  es: `shorty.mjs`,
  cjs: `shorty.cjs`,
  iife: `shorty.js`,
};

export default defineConfig({
  base: './',
  esbuild: {
    legalComments: 'none',
  },
  plugins: [
    dts({
      outDir: 'dist',
      copyDtsFiles: true,
      rollupTypes: true,
    }),
    stripComments({ type: 'none', enforce: 'post' }),
  ],
  build: {
    minify: 'esbuild',
    emptyOutDir: true,
    outDir: 'dist',
    target: 'ESNext',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: NAME,
      formats: ['es', 'cjs', 'iife'],
      fileName: (format) => fileName[format],
    },
    sourcemap: true,
  },
});
