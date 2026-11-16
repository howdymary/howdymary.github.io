# Where Eragon Goes Next

Independent product and market research by Mary Liu. Research date: **16 November 2026**.

Live destination: https://howdymary.github.io/eragon/

## Run locally

From the repository root, run `python3 -m http.server 8765` and open http://localhost:8765/eragon/. No installation or build is required. JavaScript modules require HTTP rather than opening the HTML file directly.

## Files

- `index.html`: editorial narrative, controls, sources, value-model form.
- `styles.css`: responsive layouts, motion preferences, and print styles.
- `app.js`: atlas views/filters, source-linked account dialogs, scroll narrative, deployment stories, and value-model UI.
- `data.js`: the single editable source of account research, sources, categories, customer anchors, commercial bets, and proposed deployments.
- `value.js`: financial calculation, separate from its interface.
- `research.json`: downloadable snapshot, generated from `data.js` by validation.
- `assets/mark.svg`: original vector favicon.

## Update research

Edit `data.js`. Every prospect needs public company evidence and a linked source, a clearly labeled workflow hypothesis, constraint, discovery questions, and a checked date. Priority represents Mary’s recommendation; confidence concerns adjacency, not intent. A company homepage is not proof of a budget or current project. Keep triggers unknown until evidenced. Do not turn proposed deployments into customer claims.

Run `npm run check` (or `node validate.mjs`) in this directory after edits. This checks research integrity, URL/anchor consistency, and economic edge cases, then updates `research.json`.

The model reports capacity value after illustrative costs, not guaranteed cash savings. It allows negative benefit if future human handling is greater than the baseline. Input bounds are enforced before showing results.

## Publishing

The existing `howdymary/howdymary.github.io` repository publishes from `main`, root directory, using GitHub Pages’ branch-based deployment. Only add/update the `eragon/` directory. No repository-wide configuration changes are needed. Relative asset URLs support the `/eragon/` path; account deep links use `#account-COMPANY_ID` and do not require server rewrites.

Fonts load from Google Fonts with system fallbacks. All diagrams are original SVG/HTML. There are no analytics, trackers, APIs, forms that transmit data, or backend dependencies.

## Accessibility and interaction checks

The map has an equivalent table view and full account research in a native dialog. Escape closes dialogs; focus returns to the opener. Deployment tabs support arrow/Home/End navigation. Product stages have explicit buttons as an alternative to scrolling. Reduced motion disables smooth scrolling and transition effects. Phone layouts render company groups as readable rows. Every filter has a visible label, and counts are announced through a live status.

## Research limitations

Eragon product and deployment statements are attributed company claims. All 26 other accounts are prospective hypotheses; none was contacted. The dataset does not establish customer spend, purchase intent, tooling, or unserved workflow volume. Menlo category figures are annualized research estimates and not Eragon TAM. Newfront’s WTW relationship and incumbent AI overlap are reflected in prioritization.
