import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import filesize from "rollup-plugin-filesize";
import dts from "rollup-plugin-dts";
const config = [
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.esm.tsx",
      format: "esm",
      sourcemap: true,
    },
    external: [/@babel\/runtime/, "react"],

    plugins: [
      babel({
        babelHelpers: "runtime",
        plugins: ["@babel/plugin-transform-runtime"],
      }),
      typescript({ tsconfig: "./tsconfig.json", exclude: "react" }),
      filesize(),
    ],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];

export default config;
