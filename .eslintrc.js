module.exports = {
  'env' : {
    'browser' : true,
    'es2021' : true
  },
  'extends' : 'eslint:recommended',
  'parserOptions' : {
    'ecmaVersion' : 13,
    'sourceType' : 'module'
  },
  'rules' : {
    'indent' : [
      'error',
      2
    ],
    'no-multi-spaces' : ['error'],
    'linebreak-style' : [
      'error',
      'unix'
    ],
    'quotes' : [
      'error',
      'single'
    ],
    'semi' : [
      'error',
      'always'
    ],
    'key-spacing' : [2, {'beforeColon' : true, 'afterColon' : true}]
  }
};
