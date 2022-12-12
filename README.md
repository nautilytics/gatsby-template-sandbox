## Gatsby Template Cypress Sandbox

Install dependencies:

```bash
npm install
# or
yarn install
```

First, build and serve the static pages:

```bash
npm run serve
# or
yarn serve
```

Then, in a second terminal run Percy w/ your `PERCY_TOKEN`:

```bash
PERCY_TOKEN=<PERCY_TOKEN> npx percy exec -- start-server-and-test serve http://localhost:8000 cypress:headless
```