import { defineConfig } from "oxfmt";

export default defineConfig({
  sortImports: true,
  sortPackageJson: {
    sortScripts: true,
  },
  ignorePatterns: ["server/worker-configuration.d.ts"],
});
