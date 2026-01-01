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
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }]
    },
    coverage: {
      enabled: true,
      provider: 'v8'
    }
  },
  optimizeDeps: {
    include: ['@vitest/coverage-v8/browser']
  }
});
