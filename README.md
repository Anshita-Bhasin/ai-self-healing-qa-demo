# AI Self-Healing QA Demo

This project demonstrates a broken Playwright test and a simple self-healing bot that repairs the locator.

## Commands

```bash
npm install
npm test
npm run heal
npm test
```

##  Demo 

Self-healing automation does not mean tests magically fix everything. A good workflow has four steps:

1. Detect the failure.
2. Understand the likely cause.
3. Suggest or apply a safe locator change.
4. Rerun tests and ask for human review before merging.
