# @wangyjhh/eslint-config

This is a personal ESLint configuration preset inspired by [antfu](https://github.com/antfu/eslint-config).

> For more details go [here](https://github.com/antfu/eslint-config/blob/main/README.md)

## Usage

```bash
pnpm i -D eslint @wangyjhh/eslint-config
```

And create `eslint.config.mjs` in your project root:

```js
// eslint.config.mjs
import wangyjhh from '@wangyjhh/eslint-config'

export default wangyjhh()
```

### Add script for package.json

For example:

```json
{
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
    }
}
```

## IDE Support (auto fix on save)

Install [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

Add the following settings to your `.vscode/settings.json`:

```jsonc
{
    // Disable the default formatter, use eslint instead
    "prettier.enable": false,
    "editor.formatOnSave": false,

    // Auto fix
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "explicit",
        "source.organizeImports": "never"
    },

    // Silent the stylistic rules in you IDE, but still auto fix them
    "eslint.rules.customizations": [
        { "rule": "style/*", "severity": "off", "fixable": true },
        { "rule": "format/*", "severity": "off", "fixable": true },
        { "rule": "*-indent", "severity": "off", "fixable": true },
        { "rule": "*-spacing", "severity": "off", "fixable": true },
        { "rule": "*-spaces", "severity": "off", "fixable": true },
        { "rule": "*-order", "severity": "off", "fixable": true },
        { "rule": "*-dangle", "severity": "off", "fixable": true },
        { "rule": "*-newline", "severity": "off", "fixable": true },
        { "rule": "*quotes", "severity": "off", "fixable": true },
        { "rule": "*semi", "severity": "off", "fixable": true }
    ],

    // Enable eslint for all supported languages
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "vue",
        "html",
        "markdown",
        "json",
        "jsonc",
        "yaml",
        "toml",
        "xml",
        "gql",
        "graphql",
        "astro",
        "svelte",
        "css",
        "less",
        "scss",
        "pcss",
        "postcss"
    ]
}
```

## License

[MIT](./LICENSE) License &copy; 2023-PRESENT wangyjhh
