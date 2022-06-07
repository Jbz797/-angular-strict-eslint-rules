module.exports = {
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict',
    'plugin:@angular-eslint/recommended',
    'plugin:@angular-eslint/template/process-inline-templates',
  ],
  rules: {
    '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component', 'Modal', 'Page'] }],
    '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
    '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],

    '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extraneous-class': ['error', { allowEmpty: true, allowStaticOnly: true }],
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: false }],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/unbound-method': ['error', { ignoreStatic: true }],

    'import/no-import-module-exports': 'off',
    'import/prefer-default-export': 'off',

    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: true }],
    'class-methods-use-this': ['error', { exceptMethods: ['transform'] }],
    'max-len': ['error', 180],
    'no-param-reassign': ['error', { props: false }],
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: { multiline: true },
        ImportDeclaration: { multiline: true },
        ObjectExpression: { minProperties: 4, multiline: true },
        ObjectPattern: { minProperties: 4, multiline: true },
      },
    ],
    'padded-blocks': 'off',
    radix: ['error', 'as-needed'],
  }
};
