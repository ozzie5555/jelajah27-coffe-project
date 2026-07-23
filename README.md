# Jelajah27 Coffee — Frontend

Static, frontend-only landing page for Jelajah27 Coffee.

## Run locally

Because the travel map is loaded as an SVG module, serve the project over HTTP:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Project structure

```text
index.html                  Main semantic page content
styles.css                 CSS entry point
styles/
  core.css                 Tokens, reset, header, hero, story, coffee
  sections.css             Journey, gallery, journal, visit, footer
  enhancements.css         Responsive and later visual refinements
js/
  main.js                  JavaScript entry point
  navigation.js            Mobile menu, sticky header, reveal effects
  journey.js               Featured journey interaction
  gallery.js               Gallery filters
  map.js                   SVG map loading and stop tooltips
  newsletter.js            Newsletter feedback and footer year
assets/map/world-map.svg    Country boundaries and 27 travel points
```

## Common edits

- Main copy, menu, address, and journal: edit `index.html`.
- Colors and typography: edit variables at the top of `styles/core.css`.
- Responsive refinements: edit `styles/enhancements.css`.
- The 27 countries and coordinates are stored inside `assets/map/world-map.svg`.
- Map interaction behavior is in `js/map.js`.

Keep the import order in `styles.css` unchanged because later files intentionally
refine rules from earlier files.
