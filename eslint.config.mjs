import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { fixupConfigRules } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import js from '@eslint/js'
import tsParser from '@typescript-eslint/parser'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
})
const configRules = compat.extends(
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:react-hooks/recommended',
  'next/core-web-vitals',
  'next/typescript'
)

const config = [
  { 
    ignores: ['node_modules', '.next'] 
  }, 
  ...fixupConfigRules(configRules), 
  {
    plugins: {
      'react-refresh': reactRefresh
    },
    languageOptions: {
      globals: { ...globals.browser },
      parser: tsParser
    },
    rules: {
      '@next/next/no-img-element': 'off',
      'react-refresh/only-export-components': [
        'warn', 
        { allowConstantExport: true }
      ],
      'quotes': ['error', 'single'],
      'comma-dangle': ['error', 'never'],
      'indent': ['error', 2],
      'semi': ['error', 'never'],
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'alphabetize': { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always'
        }
      ]
    }
  }
]

export default config
