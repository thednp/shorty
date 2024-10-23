import { defineConfig } from "vitest/config";

export default defineConfig({
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
      provider: 'playwright', // or 'webdriverio'
      enabled: true,
      headless: true,
      name: 'chromium', // browser name is required
    },
  },
});
