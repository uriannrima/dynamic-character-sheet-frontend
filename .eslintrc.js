module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  "extends": ["plugin:vue/essential"],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // 0 => Off, 1 => Warning, 2 => Error.
  // add your custom rules here
  'rules': {
    // Avoid return await
    "no-return-await": 0,
    // Warning for unused variables.
    "no-unused-vars": 1,
    // Warning when not using "" on string.
    "quotes": 0,
    // allow custom indent.
    "indent": [1, 2],
    // ignore extra semi collon.
    "semi": 0,
    // allow function without space before parenthesis
    "space-before-function-paren": 0,
    // allow paren-less arrow functions
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
    // Normalize properties of components.
    "vue/order-in-components": ["error", {
      "order": [
        "el",
        "name",
        "parent",
        "functional",
        ["delimiters", "comments"],
        ["components", "directives", "filters"],
        "extends",
        "mixins",
        "inheritAttrs",
        "model",
        ["props", "propsData"],
        "data",
        "computed",
        "watch",
        "LIFECYCLE_HOOKS",
        "methods",
        ["template", "render"],
        "renderError"
      ]
    }]
  },
  "globals": {
    "_": true
  },
}