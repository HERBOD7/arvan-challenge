module.exports = {
    root: true,
    env: {
        node: true
    },
    plugins: ['import'],
    extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/prettier'],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

        /* VUE-RULES */
        'vue/component-name-in-template-casing': [
            'error',
            'PascalCase',
            {
                registeredComponentsOnly: false,
                ignores: ['i18n']
            }
        ],
        'vue/custom-event-name-casing': [
            'error',
            'kebab-case',
            {
                ignores: []
            }
        ],
        'vue/no-potential-component-option-typo': [
            'error',
            {
                presets: ['all'],
                custom: []
            }
        ],
        'vue/no-reserved-component-names': [
            'error',
            {
                disallowVueBuiltInComponents: false,
                disallowVue3BuiltInComponents: false
            }
        ],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                void: 'any',
                normal: 'always',
                component: 'always'
                },
                svg: 'always',
                math: 'always'
            }
        ],
        'vue/component-tags-order': [
            'error',
            {
                order: ['script', 'template', 'style']
            }
        ],

        /* IMPORT-RULES */
        'import/no-unresolved': ['error'],
        'import/no-self-import': ['error'],
        'import/named': ['error'],
        'import/default': ['error'],
        'import/no-cycle': ['error'],
        'import/first': ['error'],
        'import/no-duplicates': ['error'],
        'import/extensions': [
        'error',
        'always',
        {
            ignorePackages: true,
            pattern: {
            js: 'never',
            vue: 'never'
            }
        }
        ],
        'import/no-absolute-path': ['error'],
        'import/no-useless-path-segments': [
        'error',
        {
            noUselessIndex: true
        }
        ],
        'import/export': ['error'],
        'import/dynamic-import-chunkname': [
            'error',
            {
                importFunctions: ['dynamicImport'],
                webpackChunknameFormat: '[a-zA-Z0-57-9-/_]+'
            }
        ]
    },
    settings: {
        'import/resolver': {
          alias: {
            map: [
              ['@', './src/'],
              ['root', './']
            ],
            extensions: ['.vue', '.js']
          }
        }
    }
}