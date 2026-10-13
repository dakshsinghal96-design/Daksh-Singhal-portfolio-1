# Daksh Sinhghal — Portfolio

A premium personal portfolio built around the existing Project Archive. Every
archive record, category, legacy path and live URL is preserved; the archive is
now one page of a five-page site rather than the whole site.

**Stack:** Vite · React 18 · TypeScript · Tailwind CSS · React Router · three.js

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot reload |
| `npm run build` | Type-check then build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript, no emit |
| `npm run gen:projects` | Regenerate `src/data/projects.ts` from the archive |
| `node scripts/mirror-archive.mjs` | Re-download the archived builds into `public/` |

---

## The archive: `public/p/` and `public/s/`

The archived builds are **in this repository**, mirrored from the deployed
archive (the original repo was not available). Vite copies `public/` to `dist/`
verbatim, so they keep the exact URLs they have always had:

```
public/
  p/    211 single-file builds  → served at /p/…
  s/    12 multi-file builds    → served at /s/…
```

`public/` is ~60 MB. No single file approaches GitHub's 100 MB limit (largest is
14.4 MB). Because Vercel checks the filesystem before applying the SPA rewrite
in `vercel.json`, real files under `/p/` and `/s/` always win over the router.

Verified: **223/223 builds resolve** as real files, and **11 of the 12**
multi-file builds load every asset cleanly in a browser.

### The archive is excluded from the SPA rewrite — deliberately

`vercel.json` rewrites unmatched paths to `index.html`, but the rule carries a
negative lookahead so `/p/` and `/s/` are never rewritten:

```json
{ "source": "/((?!p/|s/).*)", "destination": "/index.html" }
```

Without it, a **missing** file inside a legacy build receives `index.html` with
a `200` instead of a `404` — a stylesheet that is silently HTML, a script that
fails to parse, and no clear signal about what is actually wrong. That masking
is not hypothetical: it hid a genuinely missing `s/marque-car/poster.jpg` until
the rule was tightened, at which point the file was found and restored.

Real files still win (Vercel checks the filesystem first), and app routes still
get the SPA. The trade-off is that a mistyped archive URL now returns a plain
Vercel 404 rather than the styled in-app 404 — correct HTTP semantics for what
is a file, not a route.

To re-mirror (safe to re-run; skips files already present):

```bash
node scripts/mirror-archive.mjs https://project-archive-nu.vercel.app
```

### Repairs applied

Three builds shipped **root-absolute** asset references — `href="/style.css"`
rather than `href="style.css"` — so they requested their assets from the site
root and got a 404. This is broken on the current production site too; it is not
a regression. The references were made relative:

| Build | Was | Now |
| --- | --- | --- |
| `s/aegis` | `/style.css`, `/app.js` | `style.css`, `app.js` |
| `s/open-space` | `/assets/…` | `assets/…` |
| `s/tabs` | `/assets/…` | `assets/…` |

### Two builds are incomplete, and are labelled as such

Neither is fixable from the deployed copy — the missing pieces are **not
published there either**. Rather than hide that, each carries a `limitation` in
`src/data/projects.ts` (shown on its project card) and an in-page banner.

**`s/goyral-map` — "Partial legacy build — original assets unavailable."**

Its markup loads `../css/…` and `../js/…` (Bootstrap, jQuery, popper,
`config.js`, `loader.js`, `popup.js`) from `/s/css/` and `/s/js/`. Those paths
404 upstream. Only `index.html`, `login.html` and `register.html` were ever
deployed, so the archive's original *"7-page app"* note overstated it and has
been corrected to *"Map records system — index, login and register pages"*.

All three published pages stay reachable. **The asset references were left
completely intact** — dropping the original `/s/css` and `/s/js` folders back in
restores the build with no further edits.

**`s/hammerr-core` — "Interactive frontend available — live backend unavailable."**

A static export of an app that expected a server. It polls 15 `/api/*` endpoints
which 404 on the original deployment too, so there is no backend to restore. A
small shim in its `index.html` intercepts those calls and answers **503
`backend_unavailable` locally**, which stops the 1.8-second poll loop from
flooding the console with network errors.

The shim returns an explicit failure and **never fabricates a success payload** —
nothing in it implies the backend is online. Delete the shim and the banner to
restore the original behaviour verbatim; both are marked with an `ARCHIVE NOTE`
comment at the top of the file.

---

## Where the content lives

Everything editable is under `src/data/`. Nothing personal is hardcoded in a
component.

| File | Holds | Status |
| --- | --- | --- |
| `profile.ts` | Name, bio, photo/résumé paths, contact channels, education, SEO | **Contact + education are `null`** |
| `projects.ts` | All 243 archive records | Complete — auto-generated |
| `achievements.ts` | Awards, hackathons, certifications | **Empty — awaiting real records** |
| `skills.ts` | Skills grouped by discipline, each with evidence | Complete; confidence labels unset |
| `journey.ts` | About-page timeline | Complete |

**Anything `null` or empty is hidden in production.** No placeholder text like
`[COLLEGE NAME]` is ever rendered — the UI shows a neutral empty state instead,
and links/buttons that have no destination are not drawn at all.

### Regenerating the project data

`projects.ts` is generated, not hand-written. The generator reads the archive's
own `const D = [...]` array, so the archive stays the source of truth:

```bash
npm run gen:projects -- ./legacy-archive.html
# or straight from production:
npm run gen:projects -- https://project-archive-nu.vercel.app/
```

Stats (99 projects · 223 viewable · 12 live · 243 builds) are **computed**, never
typed in, so they cannot drift.

---

## Design system

- Dark-first, with a light theme; surfaces are CSS variables so both themes
  share one set of components.
- Base `#120F17`, deep `#09070D`, raised `#181220`, ink `#F8F7FC`,
  muted `#B8AEC6`, shard `#896ABD`, violet `#A855F7`, azure `#4079FF`,
  mint `#40FFAA`.
- Space Grotesk for headings, Inter for body.

### AeroShards

One instanced WebGL shard field, mounted **once** in `App.tsx` above `<Routes>`,
so navigation never rebuilds the canvas. All motion happens in the vertex
shader; bloom and chromatic aberration are approximated in the fragment shader
rather than through a post-processing chain, which keeps it to a single draw
call and avoids a second render target.

It degrades in three steps:

1. **Low-power device** — fewer shards, lower detail, reduced bloom, pixel ratio capped at 1.5.
2. **`prefers-reduced-motion`** — one static frame, no animation loop, no pointer interaction.
3. **No WebGL / context lost** — a palette-matched CSS gradient. The page never blanks or throws.

It also pauses when the tab is hidden, and releases every frame, listener,
geometry, material and the renderer on unmount.

Pointer interaction is tracked on `window`, because the wrapper is
`pointer-events: none` and must never intercept a click.

### GradientText

Used only for the hero name and a few short headings. The gradient is painted
onto real text via `background-clip`, so it stays selectable and accessible —
never an image or canvas. It stops animating under reduced motion and falls back
to solid violet where `background-clip: text` is unsupported.

---

## Deploying

**Nothing has been deployed from here, and no production deploy should happen
until a preview has been reviewed.**

The Vercel CLI is not authenticated on this machine (`VERCEL_TOKEN` unset, no
CLI credentials, project not linked), so the preview has to be created by a
signed-in user. Preview first:

```bash
npx vercel login          # interactive, one time

# Link to the EXISTING project — do NOT create a new one.
npx vercel link           # answer: link to existing project → pick the project
                          # serving project-archive-nu.vercel.app

npx vercel                # PREVIEW deployment; prints the preview URL
```

Confirm before promoting:

```bash
cat .vercel/project.json  # verify projectId/orgId are the existing project
npx vercel ls             # confirm the deployment target
```

Only after the preview has been reviewed and approved:

```bash
npx vercel --prod
```

Verify locally first:

```bash
npm install
npm run lint && npm run typecheck && npm run build
npm run preview     # then click through a few /p/ and /s/ links
```

Whichever route you take, update the Vercel project settings — the old site had
no build step:

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

`vercel.json` sends unmatched paths to `index.html` for client-side routing.
Real files are served first, so `/p/…` and `/s/…` are unaffected.

### Option A — push into the existing repo (preferred)

Keeps the history and updates the **same** Vercel project, so the domain and all
settings carry over.

```bash
git clone <your-archive-repo-url> archive && cd archive
git checkout -b portfolio-redesign

# copy the app in, keeping the repo's own p/ and s/ if it has them
rsync -a --exclude node_modules --exclude dist --exclude public/p --exclude public/s \
      /c/CLAUDE/portfoio/ .
# if the repo keeps p/ and s/ at the root, move them under public/
git mv p public/p 2>/dev/null; git mv s public/s 2>/dev/null

npm install && npm run build && npm run preview
git add -A
git commit -m "Redesign portfolio around the existing project archive"
git push -u origin portfolio-redesign
```

Vercel builds the branch as a preview and comments the URL. Merge to promote.

### Option B — deploy this directory as-is

Use when the original repo is genuinely gone. It carries the mirrored archive,
so everything works, but it starts fresh history. Link it to the **existing**
Vercel project so the domain is kept rather than creating a second one:

```bash
git init && git add -A
git commit -m "Portfolio redesign with mirrored project archive"

npx vercel link          # choose the EXISTING project, do not create a new one
npx vercel --prod
```

Do not create a new Vercel project unless you intend to move the domain.
