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
    slug: 'introducing-the-sixth-form-research-network',
    title: 'Introducing the Sixth Form Research Network, join our launch webinar',
    date: '2026-07-07',
    displayDate: '7 July 2026',
    excerpt:
      'We are launching SFRN with an introductory webinar on Wednesday 23rd September 2026, 4.00–5.00pm, including a conversation with Professor Sabine Little on sharing and publishing work as an under-18 researcher.',
    content: `We're launching SFRN with an introductory webinar on Wednesday 23rd September 2026, 4.00–5.00pm. Come and find out what the Network is, who it's for, at every stage from the simply curious to those with work to share, and how to take part.

The session includes a conversation with Professor Sabine Little on sharing and publishing work as an under-18 researcher. Professor Little is Professor of Literacy and Multilingualism at the University of Sheffield, and has published more than 50 papers, book chapters and reports, including with young people as co-authors.

[Register to join us](https://forms.cloud.microsoft/e/HfXTmbGfTH).`,
  },
];
