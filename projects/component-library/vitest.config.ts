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
    // include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    include: [
      'src/components/avatar/avatar.component.spec.ts',
      'src/components/avatar-group/avatar-group.component.spec.ts',
      'src/components/baseline-availability/baseline-availability.component.spec.ts',
      'src/components/user-tile/user-tile.component.spec.ts',
      'src/components/flexbox/row/flexbox-row.component.spec.ts',
      'src/components/flexbox/column/flexbox-column.component.spec.ts',
      'src/components/sample/sample.component.spec.ts',
      'src/components/google-ticket/google-ticket.component.spec.ts',
      'src/components/vuexy/theme-customizer-trigger/theme-customizer-trigger.component.spec.ts',
      'src/directives/random-milky-background/random-milky-background.directive.spec.ts',
      'src/pipes/pixels/pixels.pipe.spec.ts',
      'src/pipes/whole-number/whole-number.pipe.spec.ts',
      'src/pipes/initials/initials.pipe.spec.ts'
    ],
    browser: {
      enabled: true,
      headless: false,
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
