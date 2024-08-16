// eslint.config.mjs

import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tseslintParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        languageOptions: {
            parser: tseslintParser,
            globals: { ...globals.browser, ...globals.node },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
    pluginJs.configs.recommended,
    tseslint.configs.recommended,
    pluginReact.configs.recommended,
    pluginPrettier,
    prettierConfig,
    {
        rules: {
            'prettier/prettier': 'error',
            // 추가적인 ESLint 규칙을 여기에 작성 가능
        },
    },
];
