﻿import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./frontend/test/vitest-setup.ts",
  },
});
