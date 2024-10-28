import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";

const NAME = 'SHORTY';

const fileName = {
  esm: `shorty.mjs`,
  cjs: `shorty.cjs`,
  iife: `shorty.js`,
};

export default defineConfig({
  base: './',
  esbuild: {
    legalComments: 'none',
    minifyIdentifiers: false,
    treeShaking: true,
  },
  plugins: [
    dts({
      outDir: 'dist',
      copyDtsFiles: true,
      rollupTypes: true,
    })
  ],
  build: {
    rollupOptions: {
      preserveEntrySignatures: "strict",
      input: ["src/index.ts"],
      output: ['esm', 'iife', 'cjs'].map((fmt) => ({
        compact: true,
        dir: "dist",
        format: fmt as 'esm' | 'iife' | 'cjs',
        name: NAME,
        // preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: () => fileName[fmt],
      })),
    },
    minify: 'esbuild',
    emptyOutDir: true,
    outDir: 'dist',
    target: 'ESNext',
    sourcemap: true,
  },
});
