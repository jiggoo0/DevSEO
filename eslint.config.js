// eslint.config.js
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import reactPlugin from 'eslint-plugin-react';

export default [
  // -----------------------------
  // Base JS rules
  // -----------------------------
  js.configs.recommended,

  // -----------------------------
  // TypeScript rules
  // -----------------------------
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  // -----------------------------
  // JSX / React rules
  // -----------------------------
  {
    files: ['**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: { React: 'readonly' }, // ⬅️ เพิ่ม global React
    },
    plugins: { react: reactPlugin },
    rules: {
      'react/react-in-jsx-scope': 'off', // ไม่ต้อง import React ใน JSX/TSX
      'react/jsx-uses-vars': 'error',
      'react/jsx-uses-react': 'off',
    },
  },

  // -----------------------------
  // Prettier integration
  // -----------------------------
  {
    files: ['**/*.{js,ts,tsx}'],
    rules: { ...prettier.rules },
  },

  // -----------------------------
  // Config files
  // -----------------------------
  {
    files: ['*.config.js', '*.config.cjs', '.prettier.config.js', 'postcss.config.cjs'],
    languageOptions: {
      globals: {
        module: 'readonly',
        require: 'readonly',
        __dirname: 'readonly',
        process: 'readonly',
      },
    },
    rules: { 'no-undef': 'off' },
  },

  // -----------------------------
  // Scripts folder
  // -----------------------------
  {
    files: ['scripts/**/*.{js,ts}'],
    languageOptions: { globals: globals.node },
    rules: { 'no-irregular-whitespace': 'off' },
  },

  // -----------------------------
  // Test files
  // -----------------------------
  {
    files: ['**/*.test.{js,ts,tsx}', '**/*.spec.ts'],
    languageOptions: { globals: { ...globals.mocha } },
    rules: { 'no-console': 'off' },
  },

  // -----------------------------
  // Ignore folders
  // -----------------------------
  {
    ignores: ['node_modules/', 'dist/', 'dist-server/', 'dev-dist/', '**/*.d.ts'],
  },

  // -----------------------------
  // Linter options
  // -----------------------------
  {
    linterOptions: {
      noInlineConfig: true,
      reportUnusedDisableDirectives: 'warn',
    },
  },
];
