# Contributing to AIVerse

Thank you for your interest in contributing to AIVerse! This project is built for learners — both those studying Artificial Intelligence and those learning open-source collaboration. Every contribution, no matter how small, helps.

## Code of Conduct

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold a welcoming and respectful community.

## Ways to Contribute

- Fix typos, grammar, or spacing issues
- Improve accessibility (alt text, focus styles, ARIA labels)
- Enhance responsive design on mobile and tablet
- Polish CSS animations and hover effects
- Improve form validation and user feedback
- Add or update educational content
- Report bugs via [GitHub Issues](https://github.com/siddhitripathi25/AIverse/issues)
- Suggest new features or learning topics

## Getting Started

### 1. Fork and Clone

```bash
git clone https://github.com/YOUR-USERNAME/AIverse.git
cd AIverse
```

### 2. Create a Branch

```bash
git checkout -b fix/your-change-name
```

Use a descriptive branch name, for example:

- `fix/newsletter-typo`
- `feat/add-favicon`
- `improve/mobile-timeline`

### 3. Make Your Changes

Open `index.html` (or the relevant page) directly in your browser to preview changes. No build step or server is required.

```bash
open index.html   # macOS
```

### 4. Test Your Changes

Before submitting, verify:

- [ ] Pages load correctly by opening HTML files in the browser
- [ ] Navigation works on desktop and mobile
- [ ] Dark mode toggle still works
- [ ] FAQ accordion functions on `faq.html`
- [ ] Contact form shows success message on `contact.html`
- [ ] No horizontal scrolling on mobile viewport
- [ ] Changes do not break existing functionality

### 5. Commit and Push

Write clear commit messages:

```bash
git add .
git commit -m "Fix typo in newsletter section"
git push origin fix/your-change-name
```

### 6. Open a Pull Request

1. Go to the [AIVerse repository](https://github.com/siddhitripathi25/AIverse)
2. Click **New Pull Request**
3. Describe what you changed and why
4. Link any related issue (e.g. `Closes #12`)

## Project Guidelines

### Tech Stack

Use **only** HTML5, CSS3, and vanilla JavaScript. Do not add:

- React, Vue, Angular, or other frameworks
- Bootstrap, Tailwind, or CSS frameworks
- Backend code or build tools

The site must run by simply opening `index.html`.

### File Organization

| Type | Location |
|---|---|
| HTML pages | Project root (`index.html`, `ai-basics.html`, etc.) |
| Styles | `css/style.css`, `css/responsive.css`, `css/animations.css` |
| Scripts | `js/script.js`, `js/faq.js`, `js/darkmode.js` |
| Images | `images/` |
| Icons | `icons/` |

### HTML

- Use semantic elements (`header`, `nav`, `main`, `section`, `article`, `footer`)
- Maintain proper heading hierarchy (`h1` → `h2` → `h3`)
- Add `alt` text to images and `aria-label` where helpful
- Keep navbar and footer consistent across pages

### CSS

- Use CSS variables defined in `:root` for colors and spacing
- Follow the existing mobile-first responsive approach
- Add new responsive rules to `responsive.css`
- Add animations to `animations.css`
- Match existing naming conventions (BEM-like class names)

### JavaScript

- Use vanilla JavaScript only — no external JS libraries
- Wrap code in IIFEs to avoid global scope pollution
- Add brief comments explaining non-obvious logic
- Keep feature-specific code in the appropriate file (`faq.js`, `darkmode.js`, `script.js`)

### Content

- Write meaningful, accurate AI-related content
- Do not use placeholder or lorem ipsum text
- Keep tone educational, clear, and beginner-friendly

## Good First Issues

New to open source? Look for issues labeled `good first issue`. Here are some examples:

- Fix "recieve" → "receive" in the newsletter section (`index.html`)
- Add a favicon to all pages
- Make border-radius consistent across card components
- Add `:focus-visible` styles to social link buttons
- Improve mobile timeline layout on small screens
- Add email format validation to the contact form

## Pull Request Checklist

- [ ] Changes are focused on a single improvement
- [ ] Code follows existing project conventions
- [ ] Site remains fully functional (no broken pages or features)
- [ ] Tested in the browser on at least one screen size
- [ ] Commit message clearly describes the change

## Need Help?

- Open a [GitHub Issue](https://github.com/siddhitripathi25/AIverse/issues) with your question
- Check existing issues and pull requests for similar work
- Visit the [FAQ page](faq.html) for common questions about the project

---

Thank you for helping make AI education accessible to everyone. **Learn. Build. Contribute.**
