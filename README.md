# Assignment 13: UI Component Library with Code Quality Checks

The UI Garden component library (React, TypeScript, styled-components, Storybook, Jest) from Assignment 12, now with automated code quality checks. Every commit must pass Prettier, ESLint and the test suite locally through a Husky pre-commit hook. The same checks run again on GitHub through GitHub Actions, so code that bypasses the local hook still gets caught.

## Prerequisites

- Node 20 and npm
- Git
- Docker Desktop

## Run locally

```bash
npm install --legacy-peer-deps
npm start
npm run check
```

`npm run check` runs Prettier, ESLint and the tests in order. It is the same command the pre-commit hook and the GitHub workflow use.

| Script                 | What it does                           |
| ---------------------- | -------------------------------------- |
| `npm run format:check` | Checks formatting with Prettier        |
| `npm run format`       | Fixes formatting with Prettier         |
| `npm run lint`         | Runs ESLint with zero warnings allowed |
| `npm run test:ci`      | Runs the Jest tests once               |
| `npm run check`        | Runs all three checks                  |

## Docker

The Dockerfile builds the production build of the React app and serves it on port 8018.

- Container name: `salazar_kane_coding_assignment13`
- Working directory: `/salazar_kane_ui_garden_build_checks`

```bash
docker build -t salazar_kane_coding_assignment13 .
docker run -d --name salazar_kane_coding_assignment13 -p 8018:8018 salazar_kane_coding_assignment13
```

Open [http://localhost:8018](http://localhost:8018) (or [http://127.0.0.1:8018](http://127.0.0.1:8018)).

Useful commands:

```bash
docker ps
docker exec salazar_kane_coding_assignment13 pwd
docker rm -f salazar_kane_coding_assignment13
```

![Component library running at localhost:8018](screenshots/localhost-8018.png)

![docker ps and working directory](screenshots/docker-ps.png)

## Husky pre-commit checks

Husky runs `npm run check` before every commit (`.husky/pre-commit`). The commit is rejected if any of these fail:

1. Prettier
2. ESLint
3. The Jest tests

Each screenshot below shows a commit being blocked.

**Prettier failure** (badly formatted code):

![Prettier failure](screenshots/husky-prettier-fail.png)

**ESLint failure** (unused variable):

![ESLint failure](screenshots/husky-eslint-fail.png)

**Test failure** (a broken assertion):

![Test failure](screenshots/husky-tests-fail.png)

## GitHub Actions

The workflow `.github/workflows/code-quality.yml` runs on every push and pull request to `main`. It installs dependencies with `npm ci`, then runs Prettier, ESLint, the tests and a production build. If any step fails, the run is marked failed and GitHub emails the committer.

To demonstrate it, I bypassed the local hook with `git commit --no-verify` and pushed badly formatted code. The Prettier step failed:

![Failed run](screenshots/actions-red.png)

After
