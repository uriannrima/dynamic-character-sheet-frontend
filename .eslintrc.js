module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  rules: {
    // typescript-eslint-parser bug: https://github.com/eslint/typescript-eslint-parser/issues/535
    'camelcase': 0,
    'no-redeclare': 0,
    'no-dupe-args': 0,
    'no-use-before-define': 0,
    // typescript-eslint-parser bug: https://github.com/eslint/typescript-eslint-parser/issues/535
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // Bugged? Styled Component Error.
    // 'space-infix-ops': 0,
    // Warning return await
    'no-return-await': 1,
    // Warning for unused variables.
    // Disabled because of Typescript
    'no-unused-vars': 0,
    // Warning when not using ' on string.
    'quotes': 1,
    // Ignore extra semi collon.
    'semi': 0,
    // allow function without space before parenthesis
    'space-before-function-paren': 0,
    // allow parent-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // Allow use of 'new'
    'no-new': 0,
    // Allow extension functions to native objects.
    'no-extend-native': 0,
    // Constructor should not start with lowercase.
    'new-cap': 1,
    // Can't use the property 'root'
    'node/no-deprecated-api': 0,
    // Normalize properties of components.
    'vue/order-in-components': ['error', {
      'order': [
        'el',
        'name',
        'parent',
        'functional',
        ['delimiters', 'comments'],
        ['components', 'directives', 'filters'],
        'extends',
        'mixins',
        'inheritAttrs',
        'model',
        ['props', 'propsData'],
        'data',
        'computed',
        'watch',
        'LIFECYCLE_HOOKS',
        'methods',
        ['template', 'render'],
        'renderError'
      ]
    }]
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
