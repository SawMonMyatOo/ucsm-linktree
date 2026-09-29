# ucsmsc.org — University of Computer Studies, Mandalay

A link-in-bio page for the university. Built with Next.js 16 (App Router),
TypeScript and Tailwind CSS v4. Deployed on Vercel at **ucsmsc.org**.

---

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
npx tsc --noEmit # typecheck
```

---

## The only two files you need to edit

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | University name, tagline, official website, logo paths, phone, email, address, map, all social links |
| `src/data/links.ts` | The link stack, the faculty grid, the announcements |

No component changes are needed to update content. Both files are marked with
`TODO` comments where placeholder values are still in place.

### Placeholders to replace before going live

- `site.contact.phone` — reception number
- `site.contact.email` — enquiries inbox
- `site.contact.address` — campus address
- `site.socials[].href` — every social profile URL
- `faculties` — confirm the official faculty and department names and codes
- `announcements` — replace with real notices
- `primaryLinks[].href` — every link currently points at `ucsm.edu.mm`; point
  them at the real portal, library, results and calendar pages

---

## Images

Everything is served from `public/`. The placeholders already in place are
generated images with the right dimensions — replace them with the real files
using the **same filenames** and no code changes are needed.

| Path | Size | Used by |
| --- | --- | --- |
| `public/logo.png` | 512×512 | Header avatar, PWA icon, OG fallback |
| `public/logo-light.png` | 512×512 | Cream-on-transparent variant |
| `public/og-image.png` | 1200×630 | Social share preview (Facebook, X, LinkedIn, WhatsApp) |
| `public/assets/hero-bg.jpg` | 1600×900 | Header background |
| `public/assets/campus.jpg` | 1200×800 | Contact / map block |
| `public/assets/pattern.svg` | 180×180 | Subtle overlay motif in the header |
| `public/assets/thumbs/news-*.jpg` | 640×400 | Announcement thumbnails |

Notes:

- Keep the **logo square** — it is rendered inside a circular mask.
- The header background is shown at 35% opacity behind a maroon gradient, so a
  dark, low-contrast photo works best. A flat graphic or a heavily blurred
  campus shot is ideal.
- `og-image.png` is what people see when the link is pasted into a chat app.
  Worth getting right — it is the university's first impression.

If you want to use a different filename, update the path in `src/data/site.ts`
(or the `image` field in `src/data/links.ts`).

---

## Design tokens

Defined in `src/app/globals.css` and mapped into Tailwind via `@theme inline`,
so light and dark mode share one set of class names.

| Token | Light | Dark |
| --- | --- | --- |
| `--brand` | `#7A2028` | `#8E2630` |
| `--brand-hover` | `#631A21` | `#A6323D` |
| `--accent` | `#B8934A` | `#D6B472` |
| `--page` | `#F2F0EA` | `#171012` |
| `--surface` | `#FAF9F5` | `#221518` |
| `--line` | `#E5E1D6` | `#3A2226` |
| `--text` | `#2A2120` | `#F2F0EA` |
| `--muted` | `#6B605C` | `#A99C96` |

Fonts are self-hosted by `next/font` (no Google requests at runtime):
**Source Serif 4** for headings, **Inter** for body.

Dark mode is a manual toggle stored in `localStorage` under `ucsm-theme`, and
an inline script in the root layout applies it before first paint so there is
no flash.

---

## Deploying to Vercel

### Option A — Git (recommended, auto-deploys on every push)

1. Push this folder to GitHub, GitLab or Bitbucket.
2. In Vercel choose **Add New → Project** and import the repository.
3. Framework preset **Next.js** is detected automatically. Leave the build
   command as `npm run build` and the output as the default.
4. Add the environment variable (below), then **Deploy**.

### Option B — CLI

```bash
npm i -g vercel
vercel            # first deploy, links the project
vercel --prod     # production deploy
```

### Environment variable

Set in **Vercel → Project → Settings → Environment Variables** for all
environments:

```
NEXT_PUBLIC_SITE_URL=https://www.ucsmsc.org
```

It is used for the canonical URL, Open Graph tags, the sitemap, `robots.txt`
and the QR code on the page. The default is already `https://www.ucsmsc.org`,
so the site works even if you skip this.

In production `src/proxy.ts` serves the site **only** on
`https://www.ucsmsc.org` and `https://ucsmsc.org`. Any other host (a Vercel
preview URL, a typo domain) and plain `http` are 308-redirected to
`https://www.ucsmsc.org`; local development is unaffected. To keep an extra
host reachable, add it to the server-only `ALLOWED_HOSTS` variable:

```
ALLOWED_HOSTS=my-project.vercel.app
```

A copy lives in `.env.example`.

---

## Custom domain: ucsmsc.org

1. Deploy the project to Vercel first.
2. In Vercel go to **Project → Settings → Domains**.
3. Add `ucsmsc.org`. Vercel will show it as needing a DNS configuration.
4. At your domain registrar, add these records:

   | Type | Name | Value |
   | --- | --- | --- |
   | `A` | `@` | `76.76.21.21` |
   | `CNAME` | `www` | `cname.vercel-dns.com` |

5. Set `www` as the redirect target to the apex: **Domains → `www.ucsmsc.org`
   → Redirect to `ucsmsc.org`**.
6. Wait for DNS to propagate (usually minutes, up to 48h). Vercel provisions
   TLS automatically once the records resolve — no action needed.

If your registrar does not support a bare `CNAME` for `@` (some do), use an
`ALIAS`/`ANAME` record pointing at `cname.vercel-dns.com` instead. Vercel's
domain page shows the exact records it expects for your account.

---

## Project structure

```
public/
  logo.png  logo-light.png  og-image.png
  assets/
    hero-bg.jpg  campus.jpg  pattern.svg  thumbs/
src/
  app/
    layout.tsx          fonts, metadata, theme script
    page.tsx            section composition + JSON-LD
    globals.css         design tokens, keyframes, dark mode
    manifest.ts  robots.ts  sitemap.ts  icon.svg  not-found.tsx
  components/
    site-header.tsx     hero, logo, verified badge, nav, theme toggle
    link-list.tsx       the linktree stack (Official Website featured)
    announcements.tsx   notice board
    faculty-grid.tsx    department cards
    social-row.tsx      social channel grid
    contact-footer.tsx  contact cards, campus image, map embed
    share-qr.tsx        QR code, share, copy link, save QR
    glyph.tsx  social-icon.tsx  section-heading.tsx
    reveal.tsx  local-date.tsx  theme-toggle.tsx  inline-script.tsx
  data/
    site.ts             ← edit this
    links.ts            ← edit this
  lib/
    icons.ts            lucide icon registry + IconName type
    brand-icons.ts      inline brand glyphs + BrandName type
```

### Adding a new link card

Append to `primaryLinks` in `src/data/links.ts`. The `icon` field must be a key
of `iconRegistry` in `src/lib/icons.ts`.

### Adding a new icon

Add the lucide import and a key to `iconRegistry` in `src/lib/icons.ts`. It
becomes a valid `icon` value immediately.

Social brand glyphs are hand-inlined in `src/lib/brand-icons.ts` because
lucide-react 1.x no longer ships brand icons.

---

## Accessibility and SEO

- Semantic landmarks, one `h1`, labelled sections, visible focus rings
- `prefers-reduced-motion` disables the scroll reveal animations
- `Organization`/`CollegeOrUniversity` JSON-LD embedded on the page
- Open Graph + Twitter card metadata, `sitemap.xml`, `robots.txt`, and a
  web manifest for "add to home screen"
- External links open with `rel="noopener noreferrer"`
- Dates render through a client component plus an inline script so they are
  formatted in the visitor's locale without a hydration mismatch
