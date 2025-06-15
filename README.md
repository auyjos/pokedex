# Pokedex CLI

A **Node.js** + **TypeScript** command-line application that lets you explore regions, catch Pokémon, and manage your Pokédex interactively using the [PokéAPI](https://pokeapi.co/).

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Available Commands](#available-commands)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- 🚀 **Interactive REPL**: A prompt-based interface to enter commands.
- 🌎 **Explore Locations**: View wild Pokémon at a given location.
- 🎯 **Catch Pokémon**: Attempt to catch a Pokémon and add to your collection.
- 🔍 **Inspect Pokémon**: Get detailed info (types, abilities, stats) on a specific Pokémon.
- 🗺️ **Map**: List available locations or page through large location lists (`map`, `mapb`).
- 📔 **Pokédex**: Display all Pokémon you’ve caught so far.
- 🆘 **Help**: View descriptions for each command.
- ❌ **Exit**: Quit the application gracefully.

---

## Installation

1. **Clone the repository**

   ```powershell
   git clone https://github.com/auyjos/pokedex.git
   cd pokedex
   ```

2. **Install dependencies**

   ```powershell
   npm install
   ```

3. **Build (optional)**

   ```powershell
   npm run build
   ```

4. **Run**

   ```powershell
   # via ts-node
   npx ts-node src/main.ts

   # or if built
   node dist/main.js
   ```

---

## Usage

Once the REPL starts, you’ll see a prompt:

```text
Pokedex >
```

Type any of the commands below and press Enter.

---

## Available Commands

| Command            | Description                                      |
| ------------------ | ------------------------------------------------ |
| `help`             | Show help information for all commands            |
| `explore <region>` | List wild Pokémon available in `<region>`         |
| `catch [ball] <name>` | Attempt to catch a Pokémon by its `<name>`, optionally specifying a ball type (`pokeball`, `greatball`, `ultraball`, `masterball`) |
| `inspect <name>`   | Show detailed info about a caught Pokémon        |
| `map`              | List the first page of available locations       |
| `mapb`             | List the previous page of locations (if any)     |
| `pokedex`          | Display all caught Pokémon in your collection     |
| `exit`             | Exit the application                             |


> **Tip**: Commands are case-insensitive and will automatically be cleaned of extra whitespace.

---

## Project Structure

```text
├── src/
│   ├─ main.ts            # Entry point: initializes state & starts REPL
│   ├─ repl.ts            # REPL loop implementation
│   ├─ commands/          # Individual command modules
│   │   ├─ command_catch.ts
│   │   ├─ command_explore.ts
│   │   └─ ...
│   ├─ utils/             # Helpers: input cleaning, caching, API wrapper
│   ├─ types/             # Shared TypeScript type definitions
│   └─ state.ts           # Global application state & command registry
├── tests/                # Jest test suites for commands & REPL
├── package.json          # Project manifest & scripts
└── tsconfig.json         # TypeScript configuration
```

---

## Testing

Tests are written using [Jest](https://jestjs.io/):

```powershell
npm test
```

It will watch for changes if you run:

```powershell
npm test -- --watch
```

---

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m "Add YourFeature"
4. Push to branch: `git push origin feature/YourFeature`
5. Open a pull request explaining your changes.

Please follow existing code style and include tests for new features.

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.
