import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

/**
 * Core `no-unused-vars` has no JSX awareness, so an import only referenced
 * inside markup — `motion` in <motion.div>, `Icon` in <Icon /> — is reported
 * as unused. Capitalised names slip past via varsIgnorePattern, but lowercase
 * ones like `motion` do not.
 *
 * This is what eslint-plugin-react's `jsx-uses-vars` does, inlined to avoid
 * pulling 116 packages in for a single rule.
 */
const jsxScope = {
  rules: {
    'jsx-uses-vars': {
      meta: { type: 'problem', schema: [] },
      create(context) {
        return {
          JSXOpeningElement(node) {
            let name = node.name
            // <motion.div> -> walk down to the root object, `motion`
            while (name.type === 'JSXMemberExpression') name = name.object
            if (name.type === 'JSXIdentifier') {
              context.sourceCode.markVariableAsUsed(name.name, node)
            }
          },
        }
      },
    },
  },
}

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: { 'jsx-scope': jsxScope },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'jsx-scope/jsx-uses-vars': 'error',
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
