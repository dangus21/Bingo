module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:prettier/recommended',
        'prettier/react',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            'jsx': true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'babel',
        'sort-imports-es6-autofix',
        'prettier',
        'react-hooks',
        'flowtype',
        "unused-imports"
    ],
    rules: {
        'no-duplicate-imports': 2,
        'prettier/prettier': [
            'error',
            {
                printWidth: 100,
                singleQuote: true,
                trailingComma: 'es5',
                tabWidth: 4,
            },
            { usePrettierrc: false },
        ],
        'sort-imports-es6-autofix/sort-imports-es6': [
            2,
            {
                ignoreCase: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            },
        ],
        'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
        'no-undefined': 'error',
        'react/jsx-no-undef': 2,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        
    },
    settings: {
        react: { version: 'detect' },
    },
};