# hetong07.github.io

Personal homepage and blog of Tong He — [hetong07.github.io](https://hetong07.github.io).

Built with [Astro](https://astro.build) (based on the
[Astro Nano](https://github.com/markhorn-dev/astro-nano) theme) and deployed to
GitHub Pages via GitHub Actions.

## Development

```sh
npm install      # install dependencies
npm run dev      # start dev server at localhost:4321
npm run build    # build to ./dist
npm run preview  # preview the production build locally
```

## Structure

- `src/pages/index.astro` — homepage / bio
- `src/content/blog/` — blog posts (Markdown / MDX)
- `src/consts.ts` — site metadata and social links
- `.github/workflows/deploy.yml` — build + deploy to GitHub Pages

Content lives as Markdown in Git; pushing to `main` rebuilds and redeploys the
site automatically.
