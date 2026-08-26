# SFRN Website

Public website for the Sixth Form Research Network (SFRN), live at
https://sixthformresearchnetwork.co.uk.

## Stack

- Astro 5, static output, TypeScript strict
- No Tailwind: custom CSS with custom properties in `src/styles/global.css`
- Content lives as typed TypeScript data in `src/data/` (news posts) and directly in page files
- `marked` + `sanitize-html` render news post markdown
- Deployed via GitHub → Cloudflare Pages (build `npm run build`, output `dist`)

## Design

- Light theme. Palette from the SFRN logo: navy `#040640`, teal `#0c5678`, warm off-white background `#fbfaf7`
- Fonts: Fraunces (serif headings), Inter (body), loaded from Google Fonts
- Logo assets in `public/images/` (full logo and square pinwheel mark)
- Partner logos in `public/images/partners/`, listed in `src/data/partners.ts` and rendered by `src/components/PartnerGrid.astro` (home and about pages). Logo files are trimmed to the artwork with no surrounding whitespace so the grid can size them consistently; portrait lockups get more height than horizontal ones. Use `alt` when the wording inside the artwork differs from the partner's name on the site. A partner with no artwork yet is set as a wordmark in Fraunces; add `logo`, `width` and `height` to swap it in.

## Content rules (important)

- Copy comes from Beth's "SFRN Website Copy (DRAFT).docx". Do not rewrite her text; flag any additions for her to vet.
- British English throughout. Never use em dashes (commas, colons or parentheses instead; en dashes for ranges are fine). Never use the word "genuine" or "genuinely".
- Author/owner: Dr Beth Kandemir.

## Still to confirm (from the draft copy)

- General enquiries email (draft suggests hello@sixthformresearchnetwork.co.uk); Contact page currently points to LinkedIn instead
- Capital City College artwork: the supplied file is the coloured mark only, 195px wide, with no wordmark. The card pairs it with the name set in Fraunces. Ask them for the full lockup as an SVG, or a PNG 600px or wider
- The Huish Centre card uses the Richard Huish College portrait lockup, the only artwork supplied. Confirm with Beth whether the partner should be named as the College or the Centre, and whether they have a horizontal lockup
- Submission route for "Bring your research"
- Contact form (optional fields drafted: Name, Email, School/college, Message); needs a form backend before adding
- Journal (`/journal/`) is a coming-soon placeholder. The journal will be published via ISSUU; a ready-to-use responsive iframe embed snippet is in a comment in `src/pages/journal.astro`. Swap it in when the first issue is live.

## Commands

- `npm run dev` — local dev server
- `npm run build` — production build to `dist/`
