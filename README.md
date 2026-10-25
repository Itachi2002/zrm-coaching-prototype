# ZRM Coaching — academic prototype

A clickable, responsive website prototype for **ZRM Coaching**, the personal training and online coaching practice founded by Zoe Robin May. It is built for academic usability testing.

This is not a live service. The intake form does not send, store, or share anything. There is no checkout, booking system, or client login.

A bar at the top of every screen reads: **Academic Prototype — Not accepting real applications**.

## Stack

- React
- Vite
- Tailwind CSS

## Run it locally

Requirements: Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually `http://localhost:5173/`.

`npm run dev` serves the site from `/` so local testing stays simple.

## Production build

```bash
npm run build
npm run preview
```

A local production build uses the base path `/zrm-coaching-prototype/`. Preview it at:

`http://localhost:4173/zrm-coaching-prototype/`

`npm run build` writes the static site to `dist/`.

## Base path

Vite chooses the base path in this order:

1. `VITE_BASE_PATH`, if you set it in the shell or in a `.env` file
2. The repository name from `GITHUB_REPOSITORY`, which GitHub Actions provides
3. Otherwise `/` for `npm run dev`, and `/zrm-coaching-prototype/` for `npm run build`

Copy `.env.example` to `.env` only if you need to override that. For a custom domain served from the root of the domain, set:

```bash
VITE_BASE_PATH=/
```

The GitHub Actions workflow sets `VITE_BASE_PATH` from the repository name, so a repo called `zrm-coaching-prototype` is published at `/zrm-coaching-prototype/`.

## Publish on GitHub Pages

1. Create a GitHub repository. Name it `zrm-coaching-prototype` if you want the default path. A public repository is the straightforward option for GitHub Pages.
2. Push this project to the `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main`, or run the **Deploy to GitHub Pages** workflow from the Actions tab.

The workflow file is `.github/workflows/deploy.yml`. It installs dependencies, builds with the repository name as the base path, and deploys the `dist` folder.

When the job finishes, the site is at:

`https://<github-username>.github.io/zrm-coaching-prototype/`

If the repository name is different, the URL uses that name instead. You do not need to edit the workflow for the path to match.

The first deployment can ask you to approve the `github-pages` environment. Approve it in the Actions tab if GitHub prompts you.

## What is real, and what is still a placeholder

- The hero and About portrait are the supplied studio photograph of Zoe Robin May.
- The footer uses the supplied ZRM Coaching logo. The header wordmark is set in type so it stays readable on the photograph.
- In-gym photography is a marked placeholder. It is not a client, a result, or a stock stand-in.
- About Zoe includes a **Needs confirmation** list for qualifications, location, and Zoe’s own story. Do not treat those lines as facts.
- Instagram and TikTok point at `@zoerobinmay` and are labelled **Prototype link · not verified**.
- No reviews, client results, or prices are invented. Pricing is described as shared on enquiry.

To swap the portrait or logo later, replace:

- `src/assets/zoe-robin-may.jpg`
- `src/assets/zrm-logo.jpg`

A wider photograph (around 2400px) will stay sharper as the full-bleed hero. Biography lines live in `src/content.js`.

## The enquiry form

The form at **Start your journey** is a demo:

- It checks name, email format, support topic, coaching path, and a prototype acknowledgement.
- On submit it shows a success message and clears the fields.
- There is no `fetch`, no database, and no saved application.
- Programme buttons on Body & Beyond and Personal Training scroll to the form and preselect that path.

## Usability testing notes

- Navigation uses in-page anchors and shows the current section.
- The mobile menu opens from a labelled button, closes with Escape, and can be used from the keyboard.
- FAQ answers open and close from the question buttons.
- A skip link is the first focusable control.
- The layout is mobile first. Check a narrow phone width and a desktop width.
