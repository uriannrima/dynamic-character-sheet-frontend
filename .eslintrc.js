module.exports = {
  'root': true,
  'env': {
    'browser': true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard',
    '@vue/typescript'
  ],
  'rules': {
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
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
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
  }
}