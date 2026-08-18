---
name: calculator-maintainer
description: "Use when updating calculator logic, adding arithmetic operations, or verifying Jest coverage for this sample repo."
---

# Calculator Maintainer

- Keep the calculator API consistent with the existing CommonJS export pattern.
- Add both the implementation and matching Jest coverage in the same change.
- Validate with the project’s existing CI command: npm test.
- Include guard behavior for invalid division and modulo cases.
- Prefer small, explicit arithmetic functions that are easy to test in GitHub Actions.
