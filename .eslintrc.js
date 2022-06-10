module.exports = {
    globals: {
        module: true,
        process: true,
    },
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    rules: {
        indent: [
            'error',
            4
        ],
        'jsx-quotes': [
            'warn',
            'prefer-double'
        ],
        'max-len': [
            'warn',
            {
                code: 120
            }
        ],
        'no-console': 'warn',
        'no-duplicate-imports': 'warn',
        'no-unused-vars': 'warn',
        'object-curly-spacing': [
            'warn',
            'always'
        ],
        quotes: [
            'warn',
            'single'
        ],
        'react/jsx-indent-props': [
            'error',
            4
        ],
        'react/prop-types': 'warn',
        semi: ['error', 'always'],
    },
};
