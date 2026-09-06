# Personal Homepage — Build Plan

**Owner:** hetong07 · **Live URL:** `https://hetong07.github.io`
**Stack:** Astro (from the **Astro Nano** template) · **Host:** GitHub Pages via GitHub Actions
**Strategy:** Blog first, on an extensible base (profile + portfolio already stubbed in Nano)
**Review:** OpenAI **Codex** does an independent code review before deploy

## Phase 0 — Prerequisites (one-time)
- [ ] Install Node LTS: `brew install node`
- [ ] Confirm GitHub account `hetong07`

## Phase 1 — Scaffold
- [ ] Initialize from Astro Nano into `/Users/tonghe/Projects/homepage`
- [ ] Verify local dev server runs (`npm run dev` → localhost:4321)
- [ ] Trim template demo content down to a clean starting point

## Phase 2 — Blog (deliverable now)
- [ ] Configure site metadata (name, URL, description, socials)
- [ ] Set up blog content collection + write 1 real sample post
- [ ] Confirm post listing, tags, RSS, sitemap work
- [ ] Keep Projects + About pages stubbed for later (nav ready)

## Phase 3 — Codex review checkpoint
- [ ] Run `codex exec` to review scaffolded code: correctness, Astro best
      practices, config/SEO, accessibility, deploy-readiness
- [ ] Triage findings, fix what's valid, note disagreements

## Phase 4 — Deploy
- [ ] `git init` → create `hetong07.github.io` repo → push
- [ ] Add Astro's official GitHub Pages workflow
- [ ] Settings → Pages → Source: GitHub Actions
- [ ] Verify live site

## Later (no rewrite needed)
- **Profile** → fill in Nano's About page, un-hide nav link
- **Portfolio** → populate Nano's Projects collection
- **Custom domain** → optional, via Pages settings
