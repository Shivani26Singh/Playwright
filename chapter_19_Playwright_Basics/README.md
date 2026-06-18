# Chapter 19 - Playwright Basics

## Prerequisites

- Node.js (v24.15.0 or later)
- npm (comes with Node.js)

## Installation

```bash
# Install all dependencies
npm install
```

This installs:
- `playwright` - Browser automation library
- `@playwright/test` - Playwright's test runner
- `@types/node` - TypeScript type definitions for Node.js

## Install Browsers

```bash
# Install Chromium, Firefox, and WebKit browsers
npx playwright install
```

## Run Tests

```bash
# Run all tests
npx playwright test

# Run tests in a specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Run a specific test file
npx playwright test tests/example.spec.ts

# Show browser UI (headed mode)
npx playwright test --headed

# Step-by-step debug mode
npx playwright test --debug

# Run test matching name
npx playwright test -g "has title"

# Interactive UI mode
npx playwright test --ui

# Open HTML test report
npx playwright show-report
```

## VS Code - How to Run Individual Tests

Do NOT use Code Runner (Ctrl+Alt+N). That tries to use `ts-node` which won't work for Playwright.

Instead, use one of these methods:

1. **Playwright Test extension** - Install the [Playwright Test for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright) extension and click the green play button next to each test.

2. **Terminal** - Open the terminal (Ctrl+`) and run:
   ```bash
   npx playwright test tests/example.spec.ts
   ```

## Troubleshooting

### `ts-node` is not recognized

This happens when VS Code's Code Runner extension tries to execute `.ts` files directly. Playwright tests are NOT run with `ts-node`. Always use `npx playwright test` instead.

### `Cannot find name 'process'` TypeScript error

This project includes a `tsconfig.json` that tells TypeScript where to find Node.js type definitions (`@types/node`). If this file is missing, create it with:

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "module": "node16",
    "moduleResolution": "node16",
    "types": ["node"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Firefox: `msvcp140_1.dll` is missing

Firefox requires the Visual C++ Redistributable. Download and install it from Microsoft:

[Visual C++ Redistributable (vc_redist.x64.exe)](https://aka.ms/vs/17/release/vc_redist.x64.exe)

After installing, restart your terminal and run the tests again.

### If Firefox still fails

You can skip Firefox and run only Chromium:

```bash
npx playwright test --project=chromium
```
