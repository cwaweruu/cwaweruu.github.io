# Cindy Waweru — Portfolio Website

Built with plain HTML, CSS, and vanilla JS. No frameworks, no build tools. Works on GitHub Pages out of the box.

## File structure

```
/
├── index.html                   Home
├── about.html                   About & career timeline
├── research.html                4 EU publications
├── projects.html                Projects overview with filter
├── project-clv.html             Case study: CLV in BigQuery
├── project-ab-testing.html      Case study: A/B Testing (R)
├── project-cohort.html          Case study: Subscription cohort SQL
├── project-hr-analytics.html    Case study: HR Power BI
├── project-sales-powerbi.html   Case study: Regional revenue Power BI
├── project-just-transition.html Case study: EU Just Transition (EESC)
├── skills.html                  Skills & tools
├── contact.html                 Contact
└── assets/
    ├── style.css                All styles (design system + page layouts)
    └── js/
        └── main.js              Nav, scroll, reveal, project filter
```

## Deploy to GitHub Pages

1. Create a repo named `your-username.github.io`
2. Push all files to the `main` branch root
3. Settings → Pages → Source: main / root
4. Live at `https://your-username.github.io`

**Custom domain:** Add a `CNAME` file in root with your domain name, e.g. `cindywaweru.com`

## Update content

- **New project:** Duplicate any `project-*.html`. Add a card in `projects.html` with `data-cat="Your Category"`.
- **New publication:** Add a `.pub-card` block in `research.html`.
- **CV download:** Add your PDF to `assets/`, then replace `href="#"` in `contact.html` with `href="assets/CindyWaweru_CV.pdf"`.
- **Headshot:** Add `assets/headshot.jpg` and insert an `<img>` in `about.html` within `.about-sidebar`.

## Fonts

Playfair Display + Plus Jakarta Sans loaded from Google Fonts via `<link>` tags in each page `<head>`. The site degrades gracefully to Georgia + system sans-serif if Google Fonts is unavailable.
