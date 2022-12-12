## Gatsby Template Cypress Sandbox

First, build the static pages:

```bash
npm run build
# or
yarn build
```

Second, run the development server:
```bash
npm run develop
# or
yarn develop
```

Then, in a second terminal run Percy w/ your `PERCY_TOKEN`:

```bash
PERCY_TOKEN=<PERCY_TOKEN> npx percy exec -- cypress run --spec 'cypress/e2e/app.cy.ts' --config video=false,screenshotOnRunFailure=false
```