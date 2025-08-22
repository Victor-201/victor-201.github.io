# Victor Nguyen IT Portfolio

A modern, responsive personal portfolio for IT professionals, built with **React**, **Vite**, **TailwindCSS**, and **Framer Motion**.

## Features

- Minimalist IT-style UI
- Responsive (mobile-first)
- Dark/Light mode with TailwindCSS
- Smooth animations via Framer Motion
- Sections: About, Skills, Projects, Contact
- Data-driven via `siteData.js` or `siteData.json`
- Basic SEO (title, description, viewport)
- Easy deploy to GitHub Pages

## Folder Structure

```
src/
├─ assets/       # Images, avatars, icons
├─ components/   # Reusable UI/layout components
├─ pages/        # Page components (About, Skills, Projects, Contact)
├─ data/         # Static data (siteData.js/json)
├─ hooks/        # Custom hooks (useTheme, useI18n, ...)
├─ utils/        # Utilities, framer variants
├─ App.tsx
└─ main.tsx
```

## Getting Started

### Prerequisites

- Node.js >= 18
- npm / pnpm / yarn

### Installation

```bash
git clone https://github.com/<username>/<repo-name>.git
cd <repo-name>
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment (GitHub Pages)

1. Edit `vite.config.ts`:

   ```ts
   export default defineConfig({
     base: "/<repo-name>/",
     plugins: [react()],
   });
   ```

2. Deploy:

   ```bash
   npm run deploy
   ```

3. Access your site at:

   ```
   https://<username>.github.io/<repo-name>/
   ```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT © 2025 Victor Nguyen
