import { defineConfig } from 'vitest/config';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular({ jit: true, tsconfig: 'tsconfig.spec.json' })],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['src/test-setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['lcov', 'text', 'html'],
      reportsDirectory: './coverage',
      // Code tiers vendoré (Spartan brain) exclu de la couverture — testé en amont + Storybook.
      exclude: ['src/vendor/**', 'src/**/*.spec.ts', 'src/**/*.stories.ts', 'src/test-setup.ts'],
      thresholds: {
        statements: 90,
        lines: 90,
        functions: 85,
        branches: 80,
      },
    },
  },
});
