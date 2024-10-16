// @ts-expect-error missing types
import styleMigrate from '@stylistic/eslint-plugin-migrate'

import { wangyjhh } from './src'

export default wangyjhh(
    {
        vue: true,
        react: true,
        solid: true,
        svelte: true,
        astro: true,
        typescript: true,
        formatters: true,
        type: 'lib',
    },
    {
        ignores: [
            'fixtures',
            '_fixtures',
        ],
    },
    {
        files: ['src/**/*.ts'],
        rules: {
            'perfectionist/sort-objects': 'error',
        },
    },
    {
        files: ['src/configs/*.ts'],
        plugins: {
            'style-migrate': styleMigrate,
        },
        rules: {
            'style-migrate/migrate': ['error', { namespaceTo: 'style' }],
        },
    },
)
