import alias from "@rollup/plugin-alias";
import path from "path";

export default {
  input: "src/index.js",
  output: {
    format: "cjs",
    dir: "dist",
  },
  plugins: [
    alias({
      entries: [
        {
          find: "@shadcn",
          replacement: path.resolve(__dirname, "./src/lib/components/"),
        },
        {
          find: "@cn",
          replacement: path.resolve(__dirname, "./src/lib/utils"),
        },
      ],
    }),
  ],
};
