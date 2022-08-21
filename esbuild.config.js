const esbuild = require('esbuild');
// const pkg = require('./package.json');
const { author, version, homepage, license, dependencies, peerDependencies } = require('./package.json')

const options = {
  MIN: false,
  INPUTFILE: './src/index.ts',
  OUTPUTFILE: undefined,
  FORMAT: 'esm',
  NAME: 'SHORTY',
};

const [FILENAME] = process.cwd().split(/\\|\//).slice(-1);

process.argv.forEach((str) => {
  const [key, val] = str.split(':');
  options[key] = val;
});

const MIN = options.MIN === 'true' || false; // true/false|unset
const FORMAT = options.FORMAT || 'esm'; // JS cjs|iife|esm
const IN = options.INPUTFILE;
const OUT = options.OUTPUTFILE;

const NAME = options.NAME || 'SHORTY';
const YEAR = new Date().getFullYear();

const banner = `/*!
* ${NAME} v${version} (${homepage})
* Copyright ${YEAR} © ${author}
* Licensed under MIT (${homepage}/blob/main/LICENSE)
*/`;

const miniBanner = `// ${NAME} v${version} | ${author} © ${YEAR} | ${license}-License`;

const OUTPUTFILE = OUT
  ? OUT
  : `./dist/${FILENAME}${FORMAT === 'iife' ? '.es5' : FORMAT === 'cjs' ? '.cjs' : ''}${
      MIN ? '.min' : ''
    }.js`;

esbuild
  .build({
    entryPoints: [IN],
    outfile: OUTPUTFILE,
    banner: { js: MIN ? miniBanner : banner },
    bundle: true,
    minify: MIN,
    platform: FORMAT === 'iife' ? 'browser' : 'node',
    sourcemap: false, // !MIN && FORMAT === "esm" ? true : false,
    globalName: `__${NAME}_export`,
    footer: FORMAT === 'iife' ? { js: `const ${NAME} = __${NAME}_export.default;` } : {},
    target: 'ESNext',
    format: FORMAT ? FORMAT : 'esm',
    external: Object.keys(dependencies || {}).concat(Object.keys(peerDependencies || {})),
    // loader: {
    //   '.js': 'js',
    //   '.ts': 'ts',
    //   '.tsx': 'tsx',
    //   '.json': 'json'
    // },
  })
  .finally(() => console.log('✅ Compiled ' + OUTPUTFILE))
  .catch(() => process.exit(1));
