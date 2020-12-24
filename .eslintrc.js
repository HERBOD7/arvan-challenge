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
        ],
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