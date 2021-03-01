// disable all rules known to conflict with @typescript-eslint plugin
// all except `"no-return-await"` have an equivalent  @typescript-eslint/ rule.
// {@see https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin/src/configs}
module.exports = {
  rules: {
    "brace-style": "off",
    "comma-dangle": "off",
    "comma-spacing": "off",
    "default-param-last": "off",
    "dot-notation": "off",
    "func-call-spacing": "off",
    "indent": "off",
    "init-declarations": "off",
    "keyword-spacing": "off",
    "lines-between-class-members": "off",
    "no-array-constructor": "off",
    "no-dupe-class-members": "off",
    "no-duplicate-imports": "off",
    "no-empty-function": "off",
    "no-extra-parens": "off",
    "no-extra-semi": "off",
    "no-implied-eval": "off",
    "no-invalid-this": "off",
    "no-loop-func": "off",
    "no-loss-of-precision": "off",
    "no-magic-numbers": "off",
    "no-redeclare": "off",
    "no-shadow": "off",
    "no-throw-literal": "off",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "object-curly-spacing": "off",
    "quotes": "off",
    "require-await": "off",
    "no-return-await": "off",
    "semi": "off",
    "space-before-function-paren": "off",
    "space-infix-ops": "off",
  },
};
