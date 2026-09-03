

const {
    defineConfig
} = require('eslint/config');

const js = require('@eslint/js');

const {
    FlatCompat
} = require('@eslint/eslintrc');

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

// eslint-plugin-hapi ships pre-ESLint-9 "legacy" rules: bare functions with
// an optional `.schema` property instead of `{ create, meta: { schema } }`
// objects. ESLint 9's flat config runtime requires the object form and
// ignores the legacy `.schema` property, so wrap each rule here.
const hapiConfigs = compat.extends('eslint:recommended', 'hapi').map((config) => {
    if (config.plugins && config.plugins.hapi) {
        const legacyRules = config.plugins.hapi.rules;

        config.plugins = {
            ...config.plugins,
            hapi: {
                ...config.plugins.hapi,
                rules: Object.fromEntries(Object.entries(legacyRules).map(([name, rule]) => [
                    name,
                    typeof rule === 'function' ? { create: rule, meta: { schema: rule.schema || [] } } : rule
                ]))
            }
        };
    }

    return config;
});

module.exports = defineConfig([{
    extends: hapiConfigs,

    languageOptions: {
        ecmaVersion: 2021,
        parserOptions: {},

        globals: {
            describe: true,
            it: true,
            beforeEach: true,
            afterEach: true
        }
    },
    rules: {
        'hapi/hapi-capitalize-modules': 'off',
        'hapi/hapi-scope-start': 'off',
        'strict': 'off'
    }
}]);
