'use strict'

exports = module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jquery: true,
    node: true,
    'shared-node-browser': true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: false
    },
    ecmaVersion: 6,
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    'promise',
    'standard'
  ],
  root: true,
  rules: {
    'no-console': (process.env.NODE_ENV === 'production') ? 2 : 0,
    'no-debugger': (process.env.NODE_ENV === 'production') ? 2 : 0,
    'no-useless-computed-key': 0,
    'operator-linebreak': 0,
    'space-unary-ops': [
      2,
      {
        nonwords: true,
        words: true
      }
    ],
    'vue/html-self-closing': [
      2,
      {
        html: {
          component: 'always',
          normal: 'always',
          void: 'always'
        },
        math: 'never',
        svg: 'never'
      }
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        multiline: {
          allowFirstLine: false,
          max: 1
        },
        singleline: 1
      }
    ],
    'vue/name-property-casing': [
      2,
      'kebab-case'
    ]
  }
}