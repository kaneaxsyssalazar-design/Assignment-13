# Assignment 12 – Web Component Library (UI Garden)

A UI component library built with **React, TypeScript (Create React App), styled-components and Storybook**, with Jest + React Testing Library tests, packaged in a Docker image that serves the production build on **http://localhost:8083**.

> Naming: `salazar_kane` stands for `lastName_firstName`. Container: `salazar_kane_coding_assignment12`. Docker working dir: `/salazar_kane_ui_garden`.

## Components

Button, Label, Text, Table, TableHeader, TableRow, TableCell, TableFooter, Dropdown, RadioButton, Img, HeroImage, Card.

Each folder in `src/components/<Name>/` contains:

| File | Purpose |
|---|---|
| `<Name>.tsx` | The styled component |
| `<Name>.types.tsx` | TypeScript props interface |
| `<Name>.stories.tsx` | Storybook stories (Default + Disabled, with Controls) |
| `<Name>.tests.tsx` | Jest / React Testing Library tests |
| `index.ts` | Re-exports the component and its types |

Shared colours, the disabled style and the breakpoint live in `src/theme.ts`.

## How the app was made

1. **Scaffold** a Create React App project with the TypeScript template (`react-scripts` 5, React 18).
2. **Install styling and test tools:** `styled-components`, `jest-styled-components`, `@testing-library/react`, `@testing-library/jest-dom`.
3. **Add Storybook 8** with the Create React App preset (`@storybook/react-webpack5`, `@storybook/preset-create-react-app`, addon-essentials). Config is in `.storybook/`. `ajv@8` is added as a dev dependency to fix a known dependency clash between Create React App and Storybook's webpack.
4. **Build each component** with styled-components. Each takes props for text and colours plus a `disabled` prop. Disabled components use the shared `disabledCss` (grey background `#cccccc`, grey text, `cursor: not-allowed`). Responsiveness comes from fluid widths and a `@media (max-width: 600px)` rule in each component.
5. **Write stories** with `argTypes` so the Storybook **Controls** panel can change text, background colour and the disabled flag. Every component has a *Default* and a *Disabled* story.
6. **Write tests.** Every component has tests that check it is visible, that its background colour changes to `#cccccc` when disabled, and that the cursor is `not-allowed` when disabled. Test files end in `.tests.tsx`, so the `test` scripts pass `--testMatch "**/src/**/*.tests.tsx"` to Jest.
7. **Showcase app:** `src/App.tsx` renders every component in default and disabled states.
8. **Dockerize:** a two-stage `Dockerfile` runs `npm run build` in a Node image, then copies the build into an nginx image that listens on port 8083.

## Prerequisites

- Node 18+ and npm
- Docker Desktop (for the Docker steps)

## Run locally

```bash
npm install --legacy-peer-deps
npm start              # showcase app at http://localhost:8083
```

## Run Storybook

```bash
npm run storybook      # http://localhost:8083
```

Both `npm start` and Storybook use port 8083, so run only one at a time. To use a different Storybook port, edit the `storybook` script in `package.json`.

In Storybook, open any component and use the **Controls** panel to change text and background colour, or switch to the **Disabled** story.

## Run the tests

```bash
npm run test:ci        # single run, expect 13 suites / 39 tests passing
npm test               # watch mode
```

## Docker build and run (production build on port 8083)

```bash
docker build -t salazar_kane_coding_assignment12 .
docker run -d -p 8083:8083 --name salazar_kane_coding_assignment12 salazar_kane_coding_assignment12
```

Open http://localhost:8083.

Useful commands:

```bash
docker ps                                                  # container is listed
docker exec salazar_kane_coding_assignment12 pwd           # prints /salazar_kane_ui_garden
docker rm -f salazar_kane_coding_assignment12              # stop and remove
```

## Verifying the requirements

| Requirement | How to check |
|---|---|
| 13 components, 5 files each | `ls src/components/*` |
| styled-components | `styled.*` usage in each `<Name>.tsx` |
| Responsive | Resize the browser at http://localhost:8083 (breakpoint 600px) |
| Controls for text and background colour | Storybook → component → Controls panel |
| Default + disabled state, greyed out, `not-allowed` cursor | Storybook *Default* / *Disabled* stories |
| At least 2 tests per component | `npm run test:ci` |
| Docker: production build, container name, working dir | `docker ps`, `docker exec ... pwd` |

## Troubleshooting

- **`react-scripts: not found`:** run `npm install --legacy-peer-deps` first.
- **Storybook `Cannot find module 'ajv/dist/compile/codegen'`:** run `npm install --save-dev ajv@^8 --legacy-peer-deps`.
- **Port 8083 already in use:** stop `npm start`, Storybook or the container.
