import { defineConfig} from 'vitest/config';
import {playwright} from '@vitest/browser-playwright';
import angular from '@analogjs/vite-plugin-angular';
import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [angular(), viteTsConfigPaths()],
  test: {
    globals: false,
    setupFiles: [
      'test-setup.ts'
    ],
    reporters: ['default'],
    include: ['src/**/*.{test,spec}.ts'],
    browser: {
      enabled: true,
      headless: process.env['VITEST_HEADLESS'] !== 'false',
      provider: playwright(),
      instances: [{ browser: 'chromium' }]
    },
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      thresholds: {
        statements: 97,
        branches: 77, // global threshold // TODO: all coverage should be 90
        functions: 100,
        lines: 97
      }
    }
  },
  optimizeDeps: {
    include: ['@vitest/coverage-v8/browser']
  }
});
