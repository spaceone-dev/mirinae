module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: [
        "plugin:vue/vue3-strongly-recommended", // for vue3
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "@vue/typescript/recommended",
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 12,
        parser: "@typescript-eslint/parser",
        sourceType: 'module',
        "vueFeatures": {
            "filter": true,
            "interpolationAsNonHTML": false,
        }
    },
    plugins: [
        'vue',
        '@typescript-eslint',
        'import'
    ],
    rules: {
        indent: ["error", 4],
        "vue/component-name-in-template-casing": ["error", "kebab-case"],
        "vue/script-setup-uses-vars": 'error',
        "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
        "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
        "prefer-destructuring": ["error", { object: false, array: false }],
        radix: ["error", "as-needed"],
        "no-prototype-builtins": "error",
        "no-empty": ["error", { allowEmptyCatch: true }],
        // "import/extensions": [
        //     "error",
        //     "always",
        //     {
        //         js: "never",
        //         jsx: "never",
        //         ts: "never",
        //         tsx: "never"
        //     }
        // ],
        camelcase: [
            "error",
            { properties: "always", allow: ["translation_id", "domain_id", "item_type", "region_id", "collector_id", "plugin_info", "plugin_id"] }
        ],
        "vue/max-attributes-per-line": [
            "error",
            {
                singleline: 3,
                multiline: {
                    max: 3,
                    allowFirstLine: true
                }
            }
        ],
        "no-this-before-super": ["off"],
        "no-useless-constructor": ["off"],
        "no-empty-function": ["error", { allow: ["constructors"] }],
        "no-param-reassign": ["error", { props: false }],
        "no-underscore-dangle": ["off"],
        // "import/no-extraneous-dependencies": [
        //     "error",
        //     {
        //         devDependencies: true
        //     }
        // ],
        "import/prefer-default-export": ["off"],
        "import/no-unresolved": "off",
        "no-new": ["off"],
        "prefer-template": ["error"],
        "no-plusplus": ["off"],

        // typescript
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                accessibility: "no-public",
                overrides: {
                    accessors: "no-public",
                    methods: "no-public",
                    properties: "no-public",
                    parameterProperties: "explicit"
                }
            }
        ],
        "@typescript-eslint/no-object-literal-type-assertion": ["off"],
        "@typescript-eslint/no-parameter-properties": [
            "error",
            { allows: ["protected", "public"] }
        ],
        "@typescript-eslint/camelcase": ["off"], // use eslint camelcase rule
        "@typescript-eslint/no-empty-function": ["off"], // use eslint no-empty-function rule
        "@typescript-eslint/no-use-before-define": ["off"], // use eslint no-use-before-define rule
        "@typescript-eslint/ban-ts-ignore": ["off"],
        "@typescript-eslint/explicit-function-return-type": ["off"]
    },
    globals: {
        defineProps: "readonly",
        defineEmits: "readonly",
        defineExpose: "readonly",
        withDefaults: "readonly"
    },
    settings: {
        "import/resolver": {
            typescript: { }
        }
    }
};
