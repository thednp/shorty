import { defineConfig } from "tsdown";
import stripComments from "vite-plugin-strip-comments";
const pkg = await import("./package.json", { with: { type: "json" } }).then(
  (m) => m.default,
);

const year = new Date().getFullYear();
const banner = `/*!
* @thednp/shorty $package v${pkg.version} (${pkg.homepage})
* Copyright ${year} © ${pkg.author}
* Licensed under MIT (https://github.com/thednp/shorty/blob/master/LICENSE)
*/
"use strict";
`;
const miniBanner =
  `/*! @thednp/shorty $package v${pkg.version} | ${pkg.author} © ${year} | ${pkg.license}-License */
"use strict";`;

export default defineConfig([
  { // ES
    entry: {
      index: "src/index.ts",
    },
    target: "esnext",
    platform: "neutral",
    exports: true,
    format: ["esm"],
    dts: true,
    clean: true,
    sourcemap: true,
    globalName: "SHORTY",
    banner: banner.replace("$package", "ESM"),
    plugins: [stripComments({ type: "keep-jsdoc" })],
  },
  { // UMD
    entry: {
      index: "src/index.ts",
    },
    target: "esnext",
    platform: "browser",
    minify: true,
    // exports: true,
    format: ["umd"],
    sourcemap: true,
    banner: miniBanner.replace("$package", "UMD"),
    globalName: "SHORTY",
    plugins: [stripComments({ type: "none" })],
  },
]);
