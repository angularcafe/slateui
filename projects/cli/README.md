# SlateUI CLI — Angular UI setup and component generator

The `@slateui/cli` package provides Angular schematics to quickly set up SlateUI in your project and add fully-typed, accessibility-friendly UI directives from the official registry.

## Features

- **Initialize SlateUI**: Configure Tailwind, theme tokens, and base color in one command.
- **Add directives on demand**: Install directives like `button`, `badge`, `accordion`, etc., or add them all at once.

## Installation

Install the CLI as a dev dependency (recommended):

```bash
npm install -D @slateui/cli
# or
yarn add -D @slateui/cli
# or
pnpm add -D @slateui/cli
```

## Quick start

Initialize SlateUI in your Angular application:

```bash
ng g @slateui/cli:init
```

Then add a directive from the registry (example: `button`):

```bash
ng g @slateui/cli:add button
```

Or add everything available:

```bash
ng g @slateui/cli:add --all
```

## Schematics and options

### `init` — Initialize SlateUI

Sets up SlateUI in your project. This will configure Tailwind, add styles, and set your chosen base color.

Usage:

```bash
ng g @slateui/cli:init [options]
```

Options:

- `--project <name>`: Target Angular app project. Defaults to your workspace default.
- `--baseColor <neutral|slate|zinc|stone|gray>`: Base color palette. Default: `neutral`.
- `--confirmOverwrite <y|n>`: When `styles.css` already has content, confirm whether to overwrite.

Examples:

```bash
ng g @slateui/cli:init --baseColor=slate
ng g @slateui/cli:init --project=my-app --baseColor=neutral --confirmOverwrite=y
```

### `add` — Add a SlateUI directive from the registry

Installs directive files from the official SlateUI registry into your project.

Usage:

```bash
ng g @slateui/cli:add <itemName> [options]
```

Options:

- `itemName` (positional): Directive name, e.g., `button`, `badge`, `accordion`.
- `--all` (boolean): Add all available directives.

Examples:

```bash
ng g @slateui/cli:add button
ng g @slateui/cli:add --all
```

## Best practices

- Run `init` before `add` so your theme and styles are in place.
- Commit your changes before running schematics so you can easily review file edits.
- Prefer adding directives incrementally to keep your bundle lean.

- For monorepos with multiple apps, pass `--project <name>` to target the correct app.


## Documentation

Visit [https://slateui.dev/docs/cli](https://slateui.dev/docs/cli) to view the complete documentation.




## License

MIT © SlateUI