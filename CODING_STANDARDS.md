# Coding Standards & Practices

This document outlines the coding conventions and best practices for the `github-actions-sample` project to ensure consistency across all code, including AI-generated code.

## Module System

- **Use CommonJS**: Employ `require()` and `module.exports` for module imports/exports
- **Destructuring Imports**: Use destructuring syntax for importing multiple exports
  ```javascript
  const { add, subtract, multiply } = require("./calculator");
  ```

## Function Declarations

- **Use Function Declarations**: Prefer named function declarations over arrow functions or expressions
  ```javascript
  // ✅ Good
  function add(a, b) {
    return a + b;
  }

  // ❌ Avoid
  const add = (a, b) => a + b;
  const add = function(a, b) { return a + b; };
  ```

- **Keep Functions Simple & Focused**: One responsibility per function
- **Descriptive Names**: Use clear, verb-based names (e.g., `add`, `subtract`, `multiply`)

## Indentation & Formatting

- **Indentation**: Use 2 spaces (never tabs)
- **Line Breaks**: Add blank lines between function definitions for readability
  ```javascript
  function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }
  ```

- **Semicolons**: Use semicolons at the end of statements, especially in `module.exports`
  ```javascript
  module.exports = { add, subtract, multiply };
  ```

## Naming Conventions

- **Variables & Functions**: Use camelCase (lowercase first letter)
  ```javascript
  const userName = "Ashish";
  function calculateTotal() { }
  ```

- **Constants**: Use UPPER_SNAKE_CASE for constants (if applicable)
  ```javascript
  const MAX_VALUE = 1000;
  ```

- **Test Descriptions**: Use descriptive, human-readable strings with present tense
  ```javascript
  test("adds two numbers", () => { });
  test("subtracts with negative result", () => { });
  test("multiplies by zero", () => { });
  ```

## Exports

- **Export Multiple Functions**: Use destructuring in exports for clarity
  ```javascript
  module.exports = { add, subtract, multiply, divide, modulo, power };
  ```

- **One Export Per Line** (if many): Keep exports readable
  ```javascript
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulo,
    power
  };
  ```

## Testing Standards

- **Test Framework**: Use Jest for unit testing
- **Test Structure**: Follow the pattern: `test("description", () => { ... })`
  ```javascript
  test("divides two numbers", () => {
    expect(divide(10, 2)).toBe(5);
  });
  ```

- **Assertions**: Use `expect().toBe()` for exact value matching
- **Test Coverage**: Write 1-2 basic test cases per function
- **Logical Groups**: Test both normal cases and edge cases when appropriate
  ```javascript
  test("multiplies two numbers", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  test("multiplies by zero", () => {
    expect(multiply(7, 0)).toBe(0);
  });
  ```

- **Imports First**: Place all imports at the top of test files before any tests
  ```javascript
  const { add, subtract, multiply } = require("./calculator");

  test("adds two numbers", () => {
    // ...
  });
  ```

## Comments

- **Keep Comments Minimal**: Code should be self-explanatory; use comments only when necessary
- **Simple Format**: Use `//` for single-line comments
- **Avoid Redundant Comments**: Don't comment obvious code
  ```javascript
  // ✅ Good: Explains why, not what
  // Using exponentiation operator for better precision
  return a ** b;

  // ❌ Avoid: Redundant
  // Add a and b
  return a + b;
  ```

## Code Organization

- **File Structure**: Keep files focused on a single responsibility
  ```
  calculator.js        → Core calculator functions
  calculator.test.js   → Test cases for calculator functions
  ```

- **Order in Files**:
  1. Imports at the top
  2. Function declarations
  3. Exports at the bottom

- **File Naming**: Use lowercase with dot notation for test files
  ```
  calculator.js          ✅
  calculator.test.js     ✅
  calculatorHelper.js    ✅
  ```

## Package Configuration

- **package.json Scripts**: Define clear, descriptive script names
  ```json
  {
    "scripts": {
      "test": "jest",
      "build": "node -e \"console.log('Build completed successfully')\""
    }
  }
  ```

## CI/CD Integration

- **Test Automation**: All tests must pass before code is accepted in CI pipeline
- **Consistent Execution**: Use `npm test` to run all tests locally and in CI
- **No Manual Testing**: Automated tests are the source of truth

## Summary Checklist

When adding new code to this project:

- [ ] Use CommonJS (`require`/`module.exports`)
- [ ] Write named function declarations
- [ ] Use 2-space indentation
- [ ] Follow camelCase naming
- [ ] Add 1-2 test cases per function
- [ ] Import functions at top of test files
- [ ] Use `expect().toBe()` for assertions
- [ ] Run `npm test` locally before pushing
- [ ] Keep code simple and readable
- [ ] Add blank lines between functions
- [ ] Use descriptive test names
