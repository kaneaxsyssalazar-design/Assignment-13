# Project Overview: UI Garden (Assignment 12)

A React component library with Storybook documentation, automated tests and a Docker deployment. This document lists everything in the project and why it is there.

## 1. Tools and technologies

| Tool | What it does | Why I used it |
|---|---|---|
| **React 18** | Builds the UI out of reusable components | Required by the assignment; components are the natural unit of a library |
| **TypeScript** | Adds types to JavaScript | Catches mistakes early and documents each component's props in `.types.tsx` files |
| **Create React App** (`react-scripts`) | Project scaffold, dev server, test runner and production build | Required by the assignment; gives a working build with no manual configuration |
| **styled-components** | Writes CSS inside the component files, driven by props | Required by the assignment; lets `backgroundColor` and `disabled` props change the styling directly |
| **Storybook 8** | Shows each component on its own page with a Controls panel | Required by the assignment; lets me change text and colours and compare Default and Disabled without building a whole app |
| **Jest + React Testing Library** | Runs tests that render components and check the result | Checks that components are visible and that their disabled styling works |
| **jest-dom / jest-styled-components** | Extra test checks such as `toBeVisible()` and `toHaveStyle()` | Lets tests check real CSS values like the background colour |
| **Docker + nginx** | Packages the production build into a container served on port 8083 | Required by the assignment; makes the app run the same on any machine |
| **Git + GitHub** | Version control and the submission link | Required for submission |
| **ajv@8, web-vitals, `.npmrc` (`legacy-peer-deps`)** | Dependency fixes | Create React App and Storybook disagree about some package versions; these settings resolve that |

## 2. Project structure

```
ui_garden/
├── Dockerfile              Builds the app and serves it with nginx on port 8083
├── nginx.conf              nginx settings (port 8083, serves the build folder)
├── .dockerignore           Keeps node_modules and build output out of the Docker build
├── .gitignore              Keeps node_modules and build output out of git
├── .npmrc                  legacy-peer-deps=true (avoids dependency conflicts)
├── package.json            Dependencies and the scripts (start, test:ci, storybook, build)
├── tsconfig.json           TypeScript settings
├── README.md               Setup and run instructions
├── public/index.html       The single HTML page React renders into
├── .storybook/             Storybook configuration (main.ts, preview.ts)
└── src/
    ├── index.tsx           Entry point: mounts <App /> into the page
    ├── App.tsx             Demo page showing every component, with a "Disable all" toggle
    ├── theme.ts            Shared colours, breakpoint, disabled style and placeholder image
    ├── setupTests.ts       Loads jest-dom and jest-styled-components for every test
    └── components/
        ├── index.ts        Exports all 13 components from one place
        └── <Name>/         One folder per component (see section 3)
```

## 3. The components

Each component has its own folder with the five files the assignment requires:

| File | What it does | Why |
|---|---|---|
| `<Name>.tsx` | The styled component itself | The actual UI |
| `<Name>.types.tsx` | The TypeScript interface for the props | Documents and checks what each component accepts |
| `<Name>.stories.tsx` | Storybook stories: *Default* and *Disabled* | Shows both states and provides Controls |
| `<Name>.tests.tsx` | Automated tests | Proves the requirements are met |
| `index.ts` | Re-exports the component and its types | Lets other code import with `import { Button } from './components'` |

**The 13 components and what each is for**

| Component | Renders | Notes |
|---|---|---|
| Button | `<button>` | Press effect: darkens and shrinks while held; hover shade; keyboard focus ring |
| Label | `<label>` | Text tag with a background colour |
| Text | `<p>` | Paragraph text with configurable colours |
| Table | `<table>` in a scroll wrapper | Scrolls sideways on small screens |
| TableHeader | `<thead>` | Header section of a table |
| TableRow | `<tr>` | A row |
| TableCell | `<td>` or `<th>` (`as="th"`) | A cell, with padding and borders |
| TableFooter | `<tfoot>` | Footer section of a table |
| Dropdown | `<select>` | Takes an `options` list and a placeholder |
| RadioButton | `<input type="radio">` in a label | Whole label is coloured and greyed together |
| Img | `<img>` | Falls back to a placeholder if the URL is empty or fails; greyscale when disabled |
| HeroImage | Large banner with title, subtitle and background image | Shrinks padding and font size on mobile |
| Card | Box with optional image, title and content | Full width on mobile |

## 4. How the main requirements were met

**Styling with styled-components.** Every component uses `styled.<element>` with transient props (`$bg`, `$color`, `$disabled`). The `$` prefix stops styled-components passing those props down to the HTML element, which would cause React warnings.

**Responsive.** Every component has a `@media (max-width: 600px)` rule or fluid widths (`width: 100%`, `max-width`, `overflow-x: auto`), so layouts adapt to phone screens.

**Default and disabled states.** A shared `disabledCss` in `theme.ts` sets a grey background (`#cccccc`), grey text and `cursor: not-allowed`. Every component uses it when `disabled` is true, so the look is identical everywhere and only appears when disabled. Normal backgrounds are white or light blue so they are never mistaken for disabled.

**Storybook controls.** Each story file defines `argTypes` so the Controls panel shows a text box for text, a colour picker for colours and a toggle for `disabled`.

**Tests.** Every component has three tests:
1. *Is visible:* renders the component and checks `toBeVisible()`.
2. *Background colour changes when disabled:* renders with a red background, then re-renders as disabled and checks the background became `#cccccc`.
3. *Not-allowed cursor when disabled:* checks `cursor: not-allowed`.

Test files end in `.tests.tsx`, which Create React App does not detect by default, so the `test` scripts pass `--testMatch "**/src/**/*.tests.tsx"`. Result: 13 suites, 39 tests passing.

**Docker.** `Dockerfile` has two stages:
1. A Node image installs dependencies and runs `npm run build` to create the optimised production files.
2. An nginx image copies only the built files into the working directory `/salazar_kane_ui_garden` and serves them on port 8083 (settings in `nginx.conf`). The final image is small because it contains no Node or source code.

The container is named `salazar_kane_coding_assignment12`.

## 5. Problems met and how they were fixed

| Problem | Cause | Fix |
|---|---|---|
| `react-scripts: not found` | Dependencies not installed | `npm install` |
| Storybook: `Cannot find module 'ajv/dist/compile/codegen'` | Create React App uses ajv 6, Storybook's webpack needs ajv 8 | Added `ajv@^8` as a dev dependency |
| `package.json must be actual JSON` | Merge conflict markers (`<<<<<<< HEAD`) after pulling the starter files from GitHub | Replaced the file with a clean copy |
| `Can't resolve 'web-vitals'` / `./index.css` | Leftover starter files (`index.js`, `App.js`, `reportWebVitals.js`) from the GitHub repo overrode the `.tsx` files | Deleted the stray JavaScript files |
| Components looked disabled when they were not | Light grey default background was too close to the disabled grey | Changed defaults to white and light blue |
| Image URL did not load | A web page address (Flickr) was used instead of a direct image link | Use a direct image URL; added a fallback placeholder and `referrerPolicy` |
| Red warnings in `tsconfig.json` in VS Code | Editor uses a newer TypeScript than the project's 4.9 | Pointed VS Code at the workspace TypeScript; no effect on the build |

## 6. How to run everything

```bash
npm install --legacy-peer-deps
npm run test:ci          # 13 suites, 39 tests
npm run storybook        # http://localhost:8083
npm start                # http://localhost:8083

docker build -t salazar_kane_coding_assignment12 .
docker run -d -p 8083:8083 --name salazar_kane_coding_assignment12 salazar_kane_coding_assignment12
```

Storybook, `npm start` and the container all use port 8083, so run one at a time.

## 7. Requirement checklist

| Requirement | Where it is met |
|---|---|
| React + Create React App + Storybook | `package.json`, `.storybook/` |
| 13 components | `src/components/*` |
| Five files per component | Each component folder |
| styled-components | Every `<Name>.tsx` |
| Responsive | Media queries and fluid widths in each component |
| Controls for text and background colour | `argTypes` in each stories file |
| Default and disabled states, greyed out, `not-allowed` cursor | `theme.ts` (`disabledCss`) used in every component |
| At least 2 tests per component, visible and background colour | `<Name>.tests.tsx` |
| Dockerfile hosting the production build | `Dockerfile`, `nginx.conf` |
| Container name and working directory | `salazar_kane_coding_assignment12`, `/salazar_kane_ui_garden` |
| README with full instructions | `README.md` |

*(`salazar_kane` stands for `lastName_firstName`: replace it if your name differs.)*
