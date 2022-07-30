const esbuild = require("esbuild");
const pkg = require("./package.json");

const options = {
  MIN: false,
  INPUTFILE: "./src/index.ts",
  OUTPUTFILE: undefined,
  FORMAT: "esm",
  NAME: "SHORTY",
};

process.argv.forEach((str) => {
  const [key, val] = str.split(":");
  options[key] = val;
});

const MIN = options.MIN === "true" || false; // true/false|unset
const FORMAT = options.FORMAT || "esm"; // JS cjs|iife|esm
const IN = options.INPUTFILE;
const OUT = options.OUTPUTFILE;

const NAME = options.NAME || "SHORTY";
const YEAR = new Date().getFullYear();

const banner = `/*!
* ${NAME} v${pkg.version} (${pkg.homepage})
* Copyright ${YEAR} © ${pkg.author}
* Licensed under MIT (${pkg.homepage}/blob/main/LICENSE)
*/`;

const miniBanner = `// ${NAME} v${pkg.version} | ${pkg.author} © ${YEAR} | ${pkg.license}-License`;

const OUTPUTFILE = OUT
  ? OUT
  : `./dist/index${FORMAT === "iife" ? ".es5" : FORMAT === "cjs" ? ".cjs" : ""}${
      MIN ? ".min" : ""
    }.js`;

esbuild
  .build({
    entryPoints: [IN],
    outfile: OUTPUTFILE,
    banner: { js: MIN ? miniBanner : banner },
    bundle: true,
    minify: MIN,
    platform: "neutral",
    sourcemap: true, // !MIN && FORMAT === "esm" ? true : false,
    globalName: `__${NAME}_export`,
    footer: FORMAT === "iife" ? { js: `const ${NAME} = __${NAME}_export.default;` } : {},
    target: "ESNext",
    format: FORMAT ? FORMAT : "esm",
  })
  .finally(() => console.log("✅ Compiled " + OUTPUTFILE))
  .catch(() => process.exit(1));
