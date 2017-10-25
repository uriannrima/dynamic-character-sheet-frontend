module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // 0 => Off, 1 => Warning, 2 => Error.
  // add your custom rules here
  'rules': {
    // Warning for unused variables.
    "no-unused-vars": 1,
    // Warning when not using "" on string.
    "quotes": [1, "double"],
    // allow custom indent.
    "indent": 0,
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
    'new-cap': 1
  },
  "globals": {
    "_": true
  },
}