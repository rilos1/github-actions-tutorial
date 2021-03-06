module.exports = {   
    
    parser:"babel-eslint",

    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
        "jquery": {
            "globals": {
                $: false
            }
        }
    
    },
    "settings": {
        "react": {
          "version": "detect"
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
        "eslint-plugin-react",
        "react-hooks"
    ],

    "rules": {
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    }
};
