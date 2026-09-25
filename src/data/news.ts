export interface NewsPost {
  slug: string;
  title: string;
  date: string; // ISO date
  displayDate: string;
  excerpt: string;
  content: string; // markdown
}

export const news: NewsPost[] = [
  {
    slug: 'our-first-webinar',
    title: 'Our first webinar',
    date: '2026-09-25',
    displayDate: '25 September 2026',
    excerpt:
      'Our first webinar took place on Wednesday 23rd September 2026. Details of the next webinar, coming up early in 2027, will be available soon.',
    content: `Our first webinar took place on Wednesday 23rd September 2026. Details of the next webinar, coming up early in 2027, will be available soon.

Follow us on [LinkedIn](https://www.linkedin.com/company/sixthformresearchnetwork) for news of the next webinar and other opportunities to get involved.`,
  },
  {
    slug: 'introducing-the-sixth-form-research-network',
    title: 'Introducing the Sixth Form Research Network, join our launch webinar',
    date: '2026-07-07',
    displayDate: '7 July 2026',
    excerpt:
      'We are launching SFRN with an introductory webinar on Wednesday 23rd September 2026, 4.00–5.00pm, including a conversation with Professor Sabine Little on sharing and publishing work as an under-18 researcher.',
    content: `We're launching SFRN with an introductory webinar on Wednesday 23rd September 2026, 4.00–5.00pm. Come and find out what the Network is, who it's for, at every stage from the simply curious to those with work to share, and how to take part.

The session includes a conversation with Professor Sabine Little on sharing and publishing work as an under-18 researcher. Professor Little is Professor of Literacy and Multilingualism at the University of Sheffield, and has published more than 50 papers, book chapters and reports, including with young people as co-authors.

*Update: this webinar took place on Wednesday 23rd September 2026. Details of the next webinar, coming up early in 2027, will be available soon.*`,
  },
];
