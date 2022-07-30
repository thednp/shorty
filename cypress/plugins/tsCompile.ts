// compile.ts
import TypeScript from "typescript";

export default function tsCompile(
  source: string,
  ops?: Partial<TypeScript.TranspileOptions>
): string {
  // Default options -- you could also perform a merge, or use the project tsconfig.json
  const options: TypeScript.TranspileOptions = Object.assign(
    {
      compilerOptions: {
        esModuleInterop: true,
        module: TypeScript.ModuleKind.CommonJS,
        removeComments: false,
        target: 99,
      },
    },
    ops
  );
  return TypeScript.transpileModule(source, options).outputText;
}
