import { babel } from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import filesize from "rollup-plugin-filesize";

const config = {
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
};

export default config;
