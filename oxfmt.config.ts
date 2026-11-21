import { defineConfig } from "oxfmt";

export default defineConfig({
  sortImports: true,
  sortPackageJson: {
    sortScripts: true,
  },
  ignorePatterns: ["worker-configuration.d.ts"],
});
