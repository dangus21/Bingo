module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:prettier/recommended",
        "prettier/react",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "useJSXTextNode": true,
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "modules": true,
            "jsx": true
        },
    },
    plugins: [
        "react",
        "@typescript-eslint",
        "babel",
        "sort-imports-es6-autofix",
        "prettier",
        "react-hooks",
        "flowtype",
        "unused-imports",

    ],
    rules: {
        "no-duplicate-imports": 2,
        "no-unused-vars": ["error", { vars: "all", args: "after-used", ignoreRestSiblings: false }],
        "no-undefined": "error",
        "react/jsx-no-undef": 2,
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
    },
    settings: {
        react: { version: "detect" },
    },
};