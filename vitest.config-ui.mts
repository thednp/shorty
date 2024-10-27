import { defineConfig } from "vitest/config";

export default defineConfig({
  optimizeDeps: {
    include: [
      "@vitest/coverage-istanbul"
    ]
  },
  test: {
    css: true,
    globals: true,
    coverage: {
      provider: "istanbul",
      reporter: ["html", "text", "lcov"],
      enabled: true,
      include: ["src/**/*.{ts,tsx}"],
    },
    browser: {
      // provider: 'webdriverio', // or 'preview'
      enabled: true,
      headless: false,
      name: 'chrome', // browser name is required
      // enableUI: true
    },
  },
});
