# Cindy Waweru — Portfolio Website

Personal portfolio built with plain HTML, CSS, and vanilla JavaScript. Hosted on GitHub Pages.

---

## File structure

```
/
├── index.html                  Home page
├── about.html                  About & career timeline
├── research.html               EU publications (4 reports)
├── projects.html               Projects overview with filter
├── project-clv.html            Case study: CLV analysis in BigQuery
├── project-ab-testing.html     Case study: A/B testing at Udacity
├── project-cohort.html         Case study: Subscription cohort analysis
├── project-hr-analytics.html   Case study: HR analytics in Power BI
├── project-sales-powerbi.html  Case study: Regional revenue dashboard
├── project-just-transition.html Case study: EU Just Transition modelling
├── skills.html                 Skills & tools
├── contact.html                Contact page
└── assets/
    ├── css/
    │   ├── main.css            Design system (tokens, nav, footer, components)
    │   └── pages.css           Page-specific layouts
    └── js/
        └── main.js             Nav, scroll effects, project filter, animations
```

---

## How to update content

**Add a new project:**
1. Duplicate any `project-*.html` file and rename it
2. Update all content inside the new file
3. Add a new card block in `projects.html` with the matching `data-category` attribute

**Add a new publication:**
Add a new `.pub-card` block in `research.html`, following the same structure as the existing four.

**Add your CV for download:**
1. Place your PDF in `assets/` — e.g. `assets/CindyWaweru_CV.pdf`
2. Open `contact.html` and find the `href="#"` on the Download CV button
3. Replace `#` with `assets/CindyWaweru_CV.pdf`

**Add a headshot:**
1. Add `assets/images/headshot.jpg` (recommended: square crop, min 400×400px)
2. In `about.html`, add an `<img>` tag inside `.about-sidebar`

---

## Deployment on GitHub Pages

1. Create a repository named `your-username.github.io`
2. Push all files to the `main` branch root
3. Go to Settings → Pages → Source: main branch / root
4. Your site is live at `https://your-username.github.io`

**Custom domain (optional):**
1. Buy a domain (e.g. `cindywaweru.com`) from Namecheap — ~$12/year
2. Create a file named `CNAME` in the root containing just your domain: `cindywaweru.com`
3. In your domain registrar, add a CNAME DNS record pointing to `your-username.github.io`
4. In GitHub Pages settings, add your custom domain

---

## Design tokens (quick reference)

All colours and spacing are in `assets/css/main.css` under `:root`. The key variables:

- `--color-primary`: #0A5C47 (deep teal)
- `--color-accent`: #C47A1E (warm amber)
- `--color-bg`: #F9F7F4 (warm off-white)
- `--font-serif`: DM Serif Display (headings)
- `--font-sans`: Sora (body)

---

## Contact

cindy.w.waweru@gmail.com · linkedin.com/in/cindywaweru
