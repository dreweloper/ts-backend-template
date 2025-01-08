# Node.js Backend Template with TypeScript

This repository serves as a **template** for starting any backend project built with **Node.js** and **TypeScript**. It aims to save time and streamline the setup process, allowing developers to focus on actual development rather than configurations.

## Key Features

- **TypeScript Setup**: Preconfigured to support modern JavaScript development with TypeScript.
- **Jest Integration**: Includes Jest with its recommended configuration for efficient and scalable testing.
- **ESLint & Prettier**: Ensures clean and consistent code with recommended rules for JavaScript, TypeScript, Jest, and Prettier.
- **Pre-commit Hook**: Automatically runs `npm run lint:fix` and `npm run lint` before committing changes to enforce code standards.
- **GitHub Actions**:
  - Workflows to validate linting and testing on every pull request.
  - Can also be executed manually.

## Prerequisites

- **Node.js**: v22.12.0
- **npm**: v10.9.2

Additionally, it is recommended to have the **ESLint** and **Prettier** extensions installed in your IDE (e.g., Visual Studio Code) for better code formatting and linting.

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:dreweloper/node-ts-backend-template.git
   ```

2. Navigate to the project directory:

   ```bash
   cd node-ts-backend-template
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the setup script to configure Git hooks:

   ```bash
   npm run setup
   ```

## Usage

### Development

Start the development server with hot-reloading:

```bash
npm run dev
```

### Production

Build the project:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Testing

Run tests:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

### Linting

Check for linting errors:

```bash
npm run lint
```

Automatically fix linting errors:

```bash
npm run lint:fix
```

## Project Structure

```plaintext
|-- __tests__/          # Test files (example test included)
|   |-- example.test.ts # Sample test that always passes
|   |-- tsconfig.json   # TypeScript configuration for testing files
|-- .github/workflows/  # GitHub Actions workflows
|   |-- eslint.yml      # Workflow for linting
|   |-- jest.yml        # Workflow for testing
|-- githooks/           # Git hooks configuration
|   |-- pre-commit      # Pre-commit hook script
|-- src/                # Source code folder
|   |-- index.ts        # Main entry point
|-- .gitignore          # Ignored files and folders
|-- eslint.config.mjs   # ESLint configuration
|-- jest.config.js      # Jest configuration
|-- package.json        # Project metadata and scripts
|-- tsconfig.json       # TypeScript configuration
|-- README.md           # Project documentation
```
