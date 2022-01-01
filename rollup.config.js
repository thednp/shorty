'use strict'
import buble from '@rollup/plugin-buble'
import {terser} from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
// import typescript from '@rollup/plugin-typescript'
import * as pkg from "./package.json"

const MIN = process.env.MIN === 'true' // true/false|unset
const FORMAT = process.env.FORMAT // umd|iife|esm

const year = (new Date).getFullYear()
const banner = `/*!
* ${pkg.name} v${pkg.version} (${pkg.homepage})
* Copyright 2019-${year} © ${pkg.author}
* Licensed under MIT (https://github.com/thednp/shorter-js/blob/master/LICENSE)
*/`
const miniBanner = `// ${pkg.name} v${pkg.version} | ${pkg.author} © ${year} | ${pkg.license}-License`

const INPUTFILE = 'src/index.js'
const OUTPUTFILE = './dist/shorter-js'+(FORMAT==='esm'?'.esm':'')+(MIN?'.min':'')+'.js'

const OUTPUT = {
  file: OUTPUTFILE,
  format: FORMAT, // or iife
}

const PLUGINS = [
  json(),
  // typescript({lib: ["es5", "es6", "dom"], target: "esnext"})
]

if (FORMAT!=='esm') {
  PLUGINS.push(buble({objectAssign: 'Object.assign'}));
}

if (MIN){
  PLUGINS.push(terser({output: {preamble: miniBanner}}));
} else {
  OUTPUT.banner = banner;
}

if (FORMAT!=='esm') {
  OUTPUT.name = 'SHORTER';
}

export default [
  {
    input: INPUTFILE,
    output: OUTPUT,
    plugins: PLUGINS
  }
]
