export type Partner = {
  /** Name exactly as it should appear on the site. */
  name: string;
  /** Path to the full logo lockup in `public/`. Omit until the partner supplies artwork. */
  logo?: string;
  /**
   * Path to a symbol-only mark in `public/`, for partners whose artwork is the
   * mark alone. The name is set beside it in the site typeface.
   */
  mark?: string;
  /**
   * Alt text, when the wording inside the artwork differs from `name`. Falls
   * back to `name`.
   */
  alt?: string;
  /** Intrinsic pixel size of the logo or mark file, so the browser can reserve space. */
  width?: number;
  height?: number;
};

/**
 * Founding partners, in the order they appear on the home and about pages.
 * Partners without a `logo` or `mark` are set as a wordmark in the site typeface
 * until their artwork arrives; drop the file into `public/images/partners/` and
 * add the fields to swap it in.
 *
 * Logo files are trimmed to the artwork with no surrounding whitespace, so the
 * grid can size them consistently. Portrait lockups (taller than they are wide)
 * are given more height in `PartnerGrid.astro` so they do not read as smaller
 * than the horizontal ones.
 */
export const partners: Partner[] = [
  {
    name: 'Sixth Form Colleges Association (SFCA)',
    logo: '/images/partners/sixth-form-colleges-association.png',
    alt: 'Sixth Form Colleges Association',
    width: 702,
    height: 208,
  },
  {
    name: 'Kingston Grammar School',
    logo: '/images/partners/kingston-grammar-school.png',
    width: 720,
    height: 208,
  },
  {
    name: 'Richard Huish College',
    logo: '/images/partners/richard-huish-college.png',
    width: 216,
    height: 320,
  },
  {
    name: 'Capital City College',
    mark: '/images/partners/capital-city-college-mark.png',
    width: 195,
    height: 208,
  },
];
