// sources
// * https://github.com/enketo/enketo-express/blob/master/tools/esbuild-plugin-istanbul.js
"use strict";
import esbuild from "esbuild";
import { promises } from "fs";
import { createInstrumenter } from "istanbul-lib-instrument";
import { extname } from "path";
import tsCompile from "./tsCompile";

// import Cypress settings
const sourceFolder = "src";
const [name] = process
  .cwd()
  .split(/[\\|\/]/)
  .slice(-1);
const sourcePath = sourceFolder.replace(/\\/g, "/");

const sourceFilter = `${name}/${sourcePath}`;
const instrumenter = createInstrumenter({
  compact: false,
  esModules: true,
});

const createEsbuildIstanbulPlugin = (): esbuild.Plugin => {
  return {
    name: "istanbul",
    setup(build: esbuild.PluginBuild) {
      build.onLoad(
        { filter: /\.(ts|tsx)$/ },
        async ({
          path,
        }: esbuild.OnLoadArgs): Promise<
          { contents: string } & Record<string, any>
        > => {
          const contents = await promises.readFile(path, "utf8");
          const samePath = path.replace(/\\/g, "/");

          if (!samePath.includes(sourceFilter)) {
            // console.log("> compiling typescript %s for output build", path);
            return {
              contents: [".ts", ".tsx"].includes(extname(path))
                ? tsCompile(contents)
                : contents,
            };
          }

          // console.log("🧡 instrumenting %s for output coverage", path);
          const sourceMapPath = path.replace(/\.ts/, ".js.map");
          const sourceMapText = await promises.readFile(sourceMapPath, "utf8");

          return {
            contents: instrumenter.instrumentSync(
              tsCompile(contents),
              path,
              sourceMapText ? JSON.parse(sourceMapText) : undefined
            ),
          };
        }
      );
    },
  };
};

export default createEsbuildIstanbulPlugin;
