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

## Content rules (important)

- Copy comes from Beth's "SFRN Website Copy (DRAFT).docx". Do not rewrite her text; flag any additions for her to vet.
- British English throughout. Never use em dashes (commas, colons or parentheses instead; en dashes for ranges are fine). Never use the word "genuine" or "genuinely".
- Author/owner: Dr Beth Kandemir.

## Still to confirm (from the draft copy)

- General enquiries email (draft suggests hello@sixthformresearchnetwork.co.uk); Contact page currently points to LinkedIn instead
- Partner logos for the Partners section
- Submission route for "Bring your research"
- Contact form (optional fields drafted: Name, Email, School/college, Message); needs a form backend before adding
- Journal (`/journal/`) is a coming-soon placeholder. The journal will be published via ISSUU; a read