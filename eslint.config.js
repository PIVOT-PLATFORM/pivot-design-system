// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettier = require('eslint-config-prettier');

module.exports = tseslint.config(
  {
    // Périmètre : code source uniquement ; artefacts de build et vendored ignorés.
    ignores: [
      'dist/**',
      'out-tsc/**',
      'coverage/**',
      'node_modules/**',
      '.storybook/**',
      'src/vendor/**',
    ],
  },
  {
    files: ['src/**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      // Désactive les règles stylistiques en conflit avec Prettier.
      prettier,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'pivotDs',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'pivot-ds',
          style: 'kebab-case',
        },
      ],
      // Autorise les paramètres/variables intentionnellement inutilisés préfixés par `_`
      // (ex. un argument imposé par une signature d'interface tierce).
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  {
    // Fixtures de test et stories : hors périmètre du build lib (exclus par tsconfig.lib.json).
    // Sélecteurs de test sans préfixe produit et mocks no-op sont légitimes ici.
    files: ['src/**/*.spec.ts', 'src/**/*.stories.ts', 'src/test-setup.ts'],
    rules: {
      '@angular-eslint/component-selector': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
  {
    files: ['src/**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  },
);
