import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from "vite-plugin-dts";

const NAME = 'SHORTY';

const fileName = {
  // es: `shorty.mjs`,
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
    // rollupOptions: {
    //   // preserveEntrySignatures: "strict",
    //   output: {
    //     compact: true,
    //     // preserveModulesRoot: true,
    //     // preserveModules: true,
    //   }
    // },
    rollupOptions: {
      preserveEntrySignatures: "strict",
      input: ["src/index.ts"],
      // external: [...Object.keys(pkg.dependencies)],
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
    // lib: {
    //   entry: resolve(__dirname, 'src/index.ts'),
    //   name: NAME,
    //   formats: ['es', 'cjs', 'iife'],
    //   fileName: (format) => fileName[format],
    // },
    sourcemap: true,
  },
});
