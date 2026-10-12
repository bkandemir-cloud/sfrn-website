export interface NewsVideo {
  src: string;
  poster: string;
  /** Intrinsic size of the file, used to reserve space before it loads. */
  width: number;
  height: number;
  /** Shown above the player, so the quote reads even with the video unplayed. */
  pullQuote: string;
  /** Shown below the player. */
  caption: string;
  /** Plain text, offered under the player. Captions are burned into the picture. */
  transcript: string;
}

export interface NewsPost {
  slug: string;
  title: string;
  date: string; // ISO date
  displayDate: string;
  excerpt: string;
  content: string; // markdown
  video?: NewsVideo;
}

export const news: NewsPost[] = [
  {
    slug: 'introductory-webinar-with-professor-sabine-little',
    title: 'Our introductory webinar with Professor Sabine Little',
    date: '2026-09-25',
    displayDate: '25 September 2026',
    excerpt:
      'On Wednesday 23rd September 2026 we welcomed students, teachers and researchers from across the country to the Sixth Form Research Network’s introductory webinar. Professor Sabine Little joined us to talk about what it takes to develop as a young researcher.',
    video: {
      src: '/media/sabine-little-tree-metaphor.mp4',
      poster: '/media/sabine-little-tree-metaphor.jpg',
      width: 1280,
      height: 720,
      pullQuote: '“I talk about our research like planting a tree.”',
      caption:
        'Professor Sabine Little on how a research project earns its place. Fifty-three seconds from our introductory webinar.',
      transcript: `So what I think really matters when I teach research at our university, I talk about our research like planting a tree. A tree sits within a landscape. You’ve got all the other trees there, and that is research from other authors, and they might have done something that’s really closely related, so your tree might be really close. Or it might be something with just a sort of underlying similar outlook, in which case you might just about be able to see the tree. But when you plant it, the roots go into all of that previous knowledge. That’s why I think reading other research is so important, because it means that when you plant your tree, when you plan your research, you are able to articulate why that tree, that research project, has to be in exactly that place, asking exactly the questions that you’re asking.`,
    },
    content: `On Wednesday 23rd September 2026, we welcomed students, teachers and researchers from across the country to the Sixth Form Research Network’s introductory webinar. Professor Sabine Little, Professor of Literacy and Multilingualism at the University of Sheffield, joined us to talk about what it takes to develop as a young researcher: the ethics of research, why not all research experience is good experience and what publishing realistically looks like for a Sixth Form student today.

Huge thanks to Sabine Little for such a generous conversation and to everyone who came along to ask such thoughtful questions. Particular thanks to Debbie Bogard, Noni Csogor, Emma Fielding and Beth Kandemir for their instrumental work getting the Network off the ground.

The Sixth Form Research Network is a partnership co-founded by Sixth Form Colleges Association, Kingston Grammar School, Richard Huish College and Capital City College.

Our [call for papers](/call-for-papers/) for the Sixth Form Research Network Journal is open.

Our first webinar took place on Wednesday 23rd September 2026. Details of the next webinar, coming up early in 2027, will be available soon.

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
