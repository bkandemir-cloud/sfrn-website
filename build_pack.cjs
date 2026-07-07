const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
  AlignmentType, LevelFormat, ExternalHyperlink, HeadingLevel, BorderStyle,
  WidthType, ShadingType,
} = require('docx');

const NAVY = '040640';
const TEAL = '0C5678';
const MUTED = '5A5D78';
const FONT = 'Trebuchet MS';

const p = (text, opts = {}) =>
  new Paragraph({
    spacing: { after: 160 },
    ...opts.para,
    children: [new TextRun({ text, size: 22, font: FONT, ...opts.run })],
  });

const h1 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 160 },
    children: [new TextRun({ text, bold: true, size: 32, font: FONT, color: NAVY })],
  });

const h2 = (text) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 120 },
    children: [new TextRun({ text, bold: true, size: 26, font: FONT, color: TEAL })],
  });

const bullet = (text, bold = null) =>
  new Paragraph({
    numbering: { reference: 'bullets', level: 0 },
    spacing: { after: 100 },
    children: bold
      ? [new TextRun({ text: bold + ': ', bold: true, size: 22, font: FONT }),
         new TextRun({ text, size: 22, font: FONT })]
      : [new TextRun({ text, size: 22, font: FONT })],
  });

const note = (text) =>
  new Paragraph({
    spacing: { after: 160 },
    shading: { fill: 'E9F2F6', type: ShadingType.CLEAR },
    children: [new TextRun({ text, size: 20, font: FONT, color: TEAL, italics: true })],
  });

const copyBlock = (lines) =>
  new Table({
    width: { size: 9026, type: WidthType.DXA },
    columnWidths: [9026],
    rows: [new TableRow({
      children: [new TableCell({
        width: { size: 9026, type: WidthType.DXA },
        borders: {
          top: { style: BorderStyle.SINGLE, size: 4, color: 'C9D6DD' },
          bottom: { style: BorderStyle.SINGLE, size: 4, color: 'C9D6DD' },
          left: { style: BorderStyle.SINGLE, size: 12, color: TEAL },
          right: { style: BorderStyle.SINGLE, size: 4, color: 'C9D6DD' },
        },
        shading: { fill: 'FBFAF7', type: ShadingType.CLEAR },
        margins: { top: 160, bottom: 160, left: 200, right: 200 },
        children: lines.map((line, i) =>
          new Paragraph({
            spacing: { after: line === '' ? 60 : 100 },
            children: [new TextRun({ text: line, size: 22, font: FONT })],
          })),
      })],
    })],
  });

const children = [];

// Title
children.push(new Paragraph({
  spacing: { after: 60 },
  children: [new TextRun({ text: 'Sixth Form Research Network', bold: true, size: 44, font: FONT, color: NAVY })],
}));
children.push(new Paragraph({
  spacing: { after: 80 },
  children: [new TextRun({ text: 'LinkedIn Page Pack', bold: true, size: 30, font: FONT, color: TEAL })],
}));
children.push(new Paragraph({
  spacing: { after: 240 },
  border: { bottom: { style: BorderStyle.SINGLE, size: 8, color: TEAL, space: 4 } },
  children: [new TextRun({ text: 'Prepared for Dr Beth Kandemir · 7 July 2026 · All copy is draft for your review before publishing', size: 20, font: FONT, color: MUTED, italics: true })],
}));

children.push(p('Everything here aligns the LinkedIn page with sixthformresearchnetwork.co.uk: same copy decisions (no use of "real", "23rd September" date style, the softened state/independent line), same palette (navy and teal on linen), and the same voice. Copy and paste each block straight into LinkedIn.'));

// Section 1
children.push(h1('1. Page setup'));
children.push(h2('Identity'));
children.push(bullet('Sixth Form Research Network', 'Page name'));
children.push(bullet('Showcasing Sixth Form research: Developing versatile skills', 'Tagline'));
children.push(bullet('https://sixthformresearchnetwork.co.uk', 'Website'));
children.push(bullet('Education', 'Industry'));
children.push(bullet('Educational', 'Organisation type'));
children.push(bullet('2-10 employees (reflects the founding team; update as the Network grows)', 'Company size'));
children.push(h2('Specialities (add up to 20; these align with the site)'));
children.push(p('Sixth Form research, student research, EPQ, 16-19 education, research skills, academic publishing, student journals, poster conferences, university preparation, transferable skills, state and independent school partnership.'));

children.push(h2('Visual assets (in your Sixth Form Research Network folder)'));
children.push(bullet('SFRN_LinkedIn_Banner.png: cover image, upload under Edit page > Header. Sized 2256 x 382 (LinkedIn displays at 1128 x 191).', 'Banner'));
children.push(bullet('SFRN_LinkedIn_Logo.png: page logo, 800 x 800, pinwheel mark on the site’s linen background.', 'Logo'));
children.push(note('Check the banner on a phone after uploading: LinkedIn crops the sides on small screens, and the page logo overlaps the bottom left corner on desktop. The text sits centre-left to stay clear of both.'));

// Section 2
children.push(h1('2. About section (Overview)'));
children.push(p('Paste into Edit page > About > Description. This reuses the approved website copy, with your edits from today applied. It is well inside LinkedIn’s 2,000 character limit.'));
children.push(copyBlock([
  'The Sixth Form Research Network (SFRN) is a community for Sixth Form student researchers, supported by their teachers as facilitators, at whatever stage they’re at.',
  '',
  'Some students have a finished project to share. Others have work in progress, a subject that has sparked their curiosity, or an interest in research and no idea where to start. Wherever you are, there’s a place for you, and a role to play: presenting your work, sharing a project in progress, or joining the audience to gather ideas for a project you have only just begun.',
  '',
  'SFRN brings together Sixth Form student researchers from state and independent schools, with teachers alongside them as facilitators, and acts as a bridge from the Sixth Form to university and beyond. Our webinars and face-to-face meetings, including poster conferences, put students in front of a small, friendly audience of students, teachers and researchers who ask robust but constructive questions.',
  '',
  'The Network is creating publishing opportunities for Sixth Form students, including a journal dedicated to Sixth Form research, launching in 2027.',
  '',
  'SFRN is a partnership founded by the Sixth Form Colleges Association (SFCA), Kingston Grammar School and The Huish Centre.',
  '',
  'Join our introductory webinar: Wednesday 23rd September 2026, 4.00-5.00pm, online. Register at https://forms.cloud.microsoft/e/HfXTmbGfTH',
]));

// Section 3
children.push(h1('3. Ready-to-publish posts'));
children.push(p('Each post follows LinkedIn best practice: the first two lines carry the hook (that is all that shows before "see more"), short paragraphs with line breaks, three to five hashtags, and one clear call to action. Post from the page, not a personal profile, and tag the partner organisations where suggested.'));

children.push(h2('Post 1: Website launch (publish this week)'));
children.push(copyBlock([
  'Sixth Form research now has a home.',
  '',
  'Our new website is live: sixthformresearchnetwork.co.uk',
  '',
  'The Sixth Form Research Network brings together student researchers from state and independent schools, supported by their teachers as facilitators, at whatever stage they’re at. A finished project, work in progress, or just a spark of curiosity: there’s a place for you.',
  '',
  'On the site you’ll find what we believe, how to get involved, and the first thing to put in your diary: our introductory webinar on Wednesday 23rd September 2026, 4.00-5.00pm, online.',
  '',
  'Take a look, share it with your students or colleagues, and register for the webinar: https://forms.cloud.microsoft/e/HfXTmbGfTH',
  '',
  '#SixthForm #StudentResearch #EPQ #Education #Schools',
]));

children.push(h2('Post 2: Webinar spotlight with Professor Sabine Little (mid July, repeat early September)'));
children.push(copyBlock([
  'How do you publish research before you turn 18?',
  '',
  'That’s one of the questions we’ll explore at the Sixth Form Research Network’s introductory webinar on Wednesday 23rd September 2026, 4.00-5.00pm, online.',
  '',
  'The session includes a conversation with Professor Sabine Little, Professor of Literacy and Multilingualism at the University of Sheffield. She has published more than 50 papers, book chapters and reports, including with young people as co-authors, and she’ll be talking about sharing and publishing work as an under-18 researcher.',
  '',
  'The webinar is for Sixth Form students at every stage, from the simply curious to those with work to share, and for the teachers who support them.',
  '',
  'Register (it’s free): https://forms.cloud.microsoft/e/HfXTmbGfTH',
  '',
  '#SixthForm #StudentResearch #AcademicPublishing #EPQ',
]));

children.push(h2('Post 3: Journal announcement (late July)'));
children.push(copyBlock([
  'In 2027, Sixth Form students will have a journal of their own.',
  '',
  'Sixth Form students deserve publishing opportunities. So the Sixth Form Research Network is launching a journal dedicated to Sixth Form student research: work by students, at every stage, taken seriously.',
  '',
  'It will be free to read online, and we’ll share how to submit your work as plans firm up.',
  '',
  'Want to be part of it? Start at our introductory webinar on Wednesday 23rd September 2026, where we’ll cover how to get involved, whatever stage your research is at.',
  '',
  'Register: https://forms.cloud.microsoft/e/HfXTmbGfTH',
  '',
  '#SixthForm #StudentResearch #AcademicPublishing #StudentVoice',
]));

children.push(h2('Post 4: One week to go (Wednesday 16th September)'));
children.push(copyBlock([
  'One week today: the Sixth Form Research Network goes live.',
  '',
  'Wednesday 23rd September, 4.00-5.00pm, online. Our introductory webinar covers what the Network is, who it’s for, and how to take part, plus a conversation with Professor Sabine Little on publishing as an under-18 researcher.',
  '',
  'Students: come whether you have a finished project, a work in progress, or just an idea.',
  '',
  'Teachers: bring your students’ work into the community, and see what facilitating looks like.',
  '',
  'There’s still time to register: https://forms.cloud.microsoft/e/HfXTmbGfTH',
  '',
  '#SixthForm #StudentResearch #EPQ #Webinar',
]));

// Section 4
children.push(h1('4. Content plan: July to the webinar and beyond'));
children.push(p('A light, sustainable schedule. One or two posts a week in term time, less in August. Every post either builds credibility, drives webinar registrations, or grows the follower base.'));

const planRows = [
  ['Week', 'Post', 'Purpose'],
  ['w/c 7 July', 'Post 1: website launch', 'Announce the site; establish the page'],
  ['w/c 13 July', 'Post 2: webinar spotlight (Sabine Little)', 'Drive early registrations'],
  ['w/c 20 July', 'Post 3: journal announcement (2027)', 'Signal ambition; follow-worthy news'],
  ['w/c 27 July', 'Partners post: thank SFCA, Kingston Grammar School and The Huish Centre, tagging each', 'Reach their follower bases'],
  ['August (2 posts)', 'Vision series: turn two belief statements from the website into short posts or simple graphics', 'Keep the page warm over the holidays'],
  ['w/c 1 Sept', 'Term-start post: "Bring your research, at any stage" (adapt from the Get Involved page)', 'Catch teachers planning the term'],
  ['w/c 7 Sept', 'Repeat Post 2 with fresh opening line', 'Second registration push'],
  ['16 Sept', 'Post 4: one week to go', 'Urgency'],
  ['23 Sept am', 'Short "today’s the day" post with the registration link and QR code image', 'Final call'],
  ['w/c 28 Sept', 'Recap post: what happened, thank attendees, what’s next (recording if available)', 'Convert attendees into followers'],
];

children.push(new Table({
  width: { size: 9026, type: WidthType.DXA },
  columnWidths: [1800, 4626, 2600],
  rows: planRows.map((row, i) => new TableRow({
    children: row.map((cell, j) => new TableCell({
      width: { size: [1800, 4626, 2600][j], type: WidthType.DXA },
      borders: {
        top: { style: BorderStyle.SINGLE, size: 4, color: 'C9D6DD' },
        bottom: { style: BorderStyle.SINGLE, size: 4, color: 'C9D6DD' },
        left: { style: BorderStyle.SINGLE, size: 4, color: 'C9D6DD' },
        right: { style: BorderStyle.SINGLE, size: 4, color: 'C9D6DD' },
      },
      shading: { fill: i === 0 ? '040640' : (i % 2 === 0 ? 'F4F1EA' : 'FFFFFF'), type: ShadingType.CLEAR },
      margins: { top: 80, bottom: 80, left: 120, right: 120 },
      children: [new Paragraph({
        children: [new TextRun({
          text: cell, size: 20, font: FONT, bold: i === 0,
          color: i === 0 ? 'FFFFFF' : '21233F',
        })],
      })],
    })),
  })),
}));

children.push(h2('Working notes'));
children.push(bullet('Post between 8.00 and 10.00am on weekdays; Tuesday to Thursday tends to perform best for education audiences.'));
children.push(bullet('Tag partner organisations and Professor Little’s university where relevant; ask partners to reshare the launch and webinar posts from their own pages.'));
children.push(bullet('The webinar QR code image is already in your Sixth Form Research Network folder; pair it with the 23rd September posts.'));
children.push(bullet('Reply to every comment as the page in the first hour where you can; it measurably lifts reach.'));
children.push(bullet('When the enquiries email is confirmed, add it to the page and to the website Contact page at the same time.'));

const doc = new Document({
  styles: {
    default: { document: { run: { font: FONT, size: 22 } } },
    paragraphStyles: [
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 32, bold: true, font: FONT, color: NAVY },
        paragraph: { spacing: { before: 360, after: 160 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true,
        run: { size: 26, bold: true, font: FONT, color: TEAL },
        paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 } },
    ],
  },
  numbering: {
    config: [
      { reference: 'bullets',
        levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ],
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
      },
    },
    children,
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync('/tmp/SFRN_LinkedIn_Page_Pack.docx', buffer);
  console.log('written');
});
