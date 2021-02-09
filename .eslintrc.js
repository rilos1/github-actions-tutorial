module.exports = {   
    
    parser:"babel-eslint",

    "env": {
        "browser": true,
        "es2021": true,
        "jquery": {
            "globals": {
                $: false
            }
        }
    
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react-hooks/recommended"
    ],

    "parserOptions": {
        "ecmaFeatures": {
            jsx: true,
            globalReturn: false,
        },
        "ecmaVersion": 12,
        "sourceType": "module",
        "allowImportExportEverywhere": false,
        "babelOptions": {
            configFile: "babel.config.json",
       },
    },

    "plugins": [
        "react",
        "eslint-plugin-import",
        "eslint-plugin-jsx-a11y",
        "eslint-plugin-react"
    ],

    "rules": {
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
        "semi": "error",
                "myPlugin/my-rule": "error",
                "eslint-plugin-myPlugin/another-rule": "error"
    }
};
