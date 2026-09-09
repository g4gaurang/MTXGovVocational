# MTX Gov Vocational Product Prototype

This repository contains a public-facing product landing-page prototype for MTX Gov Vocational, a configurable Vocational Rehabilitation Case Management System for State Vocational Rehabilitation Agencies. It is designed to communicate the product’s participant lifecycle, role-based experiences, fiscal and federal-reporting capabilities, production evidence, architecture, and delivery model.

## Local development

Requirements: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Quality commands

```bash
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/`. Vite uses a relative base path so assets work under a GitHub Pages repository path.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy-pages.yml` runs on pushes to `main` and can also be started manually. It uses Node.js 20, installs locked dependencies, lints, builds, uploads `dist/`, and deploys through the official Pages actions.

Expected URL:

```text
https://g4gaurang.github.io/MTXGovVocational/
```

If Pages has not been configured for the repository, open **Settings → Pages** and set **Source** to **GitHub Actions** once.

## Contact-link placeholder

The demonstration and workshop calls to action currently use `#contact`. Replace these links with an approved contact or scheduling URL before publication.

## Content and claims validation

Repeated product copy, production metrics, role descriptions, capability families, and the editable market claim are maintained in `src/data/content.ts`. Review changes with product, delivery, legal, accessibility, and client-reference owners before publication.

The current evidence distinguishes:

* One identified production product deployment: Colorado Division of Vocational Rehabilitation.
* Washington State quality-oversight experience, which is not a product deployment.
* More than 30 VR implementations represented by broader delivery-team and specialized-partner experience, which is not a count of product customers.

No client logo, seal, screenshot, or endorsement is included.

## Updating production metrics

Update the `metrics` collection and relevant production-story copy in `src/data/content.ts` only after the source and publication approval are documented. Preserve metric qualifiers such as “approximately” and “concurrent users.” Run the claim audit described in `tasks/todo.md`, then lint and build before merging.
