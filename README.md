# AI Self-Healing QA Demo

This project demonstrates a broken Playwright test and a simple self-healing bot that repairs the locator.

## Video Flow

1. Open this folder in VS Code.
2. Run `npm install`.
3. Run `npm test`.
4. Show that the test fails because `#login-button` does not exist.
5. Run `npm run heal`.
6. Show the bot replacing `#login-button` with `[data-testid='sign-in-button']`.
7. Run `npm test` again.
8. Explain that AI-assisted healing should suggest or patch changes, but humans should review the diff.

## Commands

```bash
npm install
npm test
npm run heal
npm test
```

## Key Demo Message

Self-healing automation does not mean tests magically fix everything. A good workflow has four steps:

1. Detect the failure.
2. Understand the likely cause.
3. Suggest or apply a safe locator change.
4. Rerun tests and ask for human review before merging.
