# Contributing to SlateUI

Thank you for your interest in contributing to SlateUI! This document provides guidelines and information for contributors.

## Table of Contents

- [Project Overview](#project-overview)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Contributing Guidelines](#contributing-guidelines)
- [Development Workflow](#development-workflow)
- [Code Standards](#code-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Submitting Changes](#submitting-changes)

## Project Overview

SlateUI is a monorepo containing three main projects:

- **`projects/ui`** - Core UI component library with directive-based components
- **`projects/cli`** - CLI tool and schematics for easy integration
- **`projects/docs`** - Documentation website and examples

## Development Setup

### Prerequisites

- Node.js 18+ 
- Angular 20.0+
- npm, yarn, or pnpm

### Fork the Repository

1. Go to [https://github.com/angularcafe/slateui](https://github.com/angularcafe/slateui)
2. Click the "Fork" button in the top-right corner
3. Choose your GitHub account as the destination
4. Wait for the forking process to complete

### Initial Setup

```bash
# Fork the repository on GitHub first, then clone your fork
git clone https://github.com/YOUR_USERNAME/slateui.git
cd slateui

# Add the original repository as upstream
git remote add upstream https://github.com/angularcafe/slateui.git

# Install dependencies
npm install
```

### Keep Your Fork Updated

```bash
# Fetch the latest changes from upstream
git fetch upstream

# Switch to main branch
git checkout main

# Merge the latest changes
git merge upstream/main

# Push to your fork
git push origin main
```

## Project Structure

```
slateui/
├── projects/
│   ├── ui/                    # Core UI library
│   │   ├── src/
│   │   │   ├── directives/   # UI directive components
│   │   │   └── public-api.ts  # Public API exports
│   │   ├── ng-package.json   # Library build configuration
│   │   └── package.json      # UI package configuration
│   │
│   ├── cli/                   # CLI and schematics
│   │   ├── src/
│   │   │   ├── lib/          # CLI source code
│   │   │   └── public-api.ts # CLI public API
│   │   ├── schematics/       # Angular schematics
│   │   │   ├── add/          # Component addition schematics
│   │   │   ├── init/         # Project initialization schematics
│   │   │   └── collection.json
│   │   └── package.json      # CLI package configuration
│   │
│   └── docs/                  # Documentation site
│       ├── src/               # Documentation source
│       ├── public/            # Static assets
│       └── package.json      # Docs package configuration
│
├── dist/                      # Build outputs
├── package.json              # Root package configuration
└── angular.json              # Angular workspace configuration
```

## Contributing Guidelines

### What We're Looking For

- **Bug fixes** - Help us squash bugs and improve stability
- **New components** - Add new UI directives following our patterns
- **Documentation** - Improve docs, add examples, fix typos
- **Performance improvements** - Optimize existing components
- **Accessibility enhancements** - Improve ARIA compliance and keyboard navigation
- **CLI improvements** - Enhance the developer experience

### What We're NOT Looking For

- Breaking changes to existing APIs without discussion
- New dependencies without strong justification
- Style changes that don't align with our design system

## Development Workflow

### 1. Create a Feature Branch

```bash
# Make sure you're on the main branch and up-to-date
git checkout main
git pull upstream main

# Create and switch to a new branch
git checkout -b feature/your-feature-name

# For bug fixes
git checkout -b fix/issue-description

# For documentation
git checkout -b docs/description
```

### 2. Make Your Changes

Work on your changes in the appropriate project directory:

```bash
# For UI components
cd projects/ui

# For CLI/schematics
cd projects/cli

# For documentation
cd projects/docs
```

### 3. Build and Verify

```bash
# Build all projects
npm run build

# Build specific project
npm run build:ui
npm run build:cli
npm run build:docs
```

## Code Standards

### General Guidelines

- Follow Angular style guide conventions
- Use TypeScript strict mode
- Write self-documenting code with clear variable names
- Add JSDoc comments for public APIs

### UI Component Standards

- All components must be directive-based
- Use Angular Primitives for accessibility
- Follow the established naming convention: `ui[ComponentName]`
- Include proper ARIA attributes and keyboard navigation
- Support both light and dark themes

### CLI/Schematics Standards

- Follow Angular schematics best practices
- Include proper error handling and validation
- Provide clear user feedback and progress indicators
- Support both npm and yarn package managers

### Documentation Standards

- Write clear, concise explanations
- Include practical examples
- Use consistent formatting and structure
- Keep content up-to-date with code changes

## Testing

### Unit Tests

- Write tests for all new functionality
- Maintain good test coverage (>80%)
- Use Angular testing utilities
- Mock external dependencies appropriately

### Integration Tests

- Test component interactions
- Verify accessibility features
- Test responsive behavior
- Validate theme switching

### E2E Tests

- Test CLI commands end-to-end
- Verify documentation examples work
- Test component playground functionality

## Documentation

### Code Documentation

- Document all public APIs
- Include usage examples
- Document accessibility features
- Explain customization options

### User Documentation

- Keep README.md up-to-date
- Document breaking changes
- Provide migration guides
- Include troubleshooting sections

## Submitting Changes

### 1. Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "feat(ui): add new button variant

- Add outline variant to button component
- Include proper ARIA attributes
- Update documentation"
```

### 2. Push and Create Pull Request

```bash
# Push your branch
git push origin feature/your-feature-name

# Create PR on GitHub
# Use the PR template and fill out all sections
```

### 3. Pull Request Guidelines

- **Title**: Clear, descriptive title (e.g., "feat(ui): add new button variant")
- **Description**: Detailed explanation of changes and reasoning
- **Type**: Use conventional commit types (feat, fix, docs, style, refactor, test, chore)
- **Scope**: Specify the project area (ui, cli, docs)
- **Breaking Changes**: Note any breaking changes clearly
- **Tests**: Confirm tests pass and coverage is maintained
- **Documentation**: Update relevant documentation

### 4. Review Process

- All PRs require at least one review
- Address review feedback promptly
- Maintainers may request changes or additional tests
- Once approved, maintainers will merge your PR

## Getting Help

- **Issues**: Check existing issues before creating new ones
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Documentation**: Review our docs and examples
- **Community**: Join our community channels

## Code of Conduct

We are committed to providing a welcoming and inclusive environment for all contributors. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## License

By contributing to SlateUI, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to SlateUI! 🎉
