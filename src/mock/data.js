import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Brennon Nuckols | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Brennon Nuckols',
  subtitle: `I'm a Software Engineer`,
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'Smile.jpeg',
  paragraphOne: `Since I was a kid, I’ve been obsessed with computers. I grew up using hacking as a tool to achieve formerly impossible goals—from accessing my computer’s terminal to add more time to my screen limit to jailbreaking a Nintendo Wii.`,
  paragraphTwo: `Years later, after becoming the head chef at Panda Express at 19 years old, I began searching for a career more aligned with my passions. It was then that I found Lambda School's Full Stack Web Development program. Now, I’m a Full Stack Web Dev with many fully-fledged web apps under my belt, and I'm ready to take on my next challenge.`,
  paragraphThree:
    'Skills: HTML | CSS | LESS | Sass | Styled Components | JavaScript | Git | GitHub | React | Redux | Node | Express | Netlify | Heroku | PostgreSQL | Python | AWS | DynamoDB | GraphQL',
  resume: 'https://drive.google.com/file/d/1FZfescPJ3JyHEo3U6DZYdhibUqgBBFom/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'party1.png',
    title: 'Party Planner',
    info: `Party Planner is a web application that allows the user to plan parties.`,
    info2: 'Solely responsible for everything on the project, from ideation to development.',
    url: 'https://bn-party-planner-frontend.vercel.app/',
    repo: 'https://github.com/Brennon-Party-Planner', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'img2text2.png',
    title: 'IMG 2 TEXT',
    info: 'Img 2 Text is a web application that allows users to convert an image into text.',
    url: 'https://image-text-converter.vercel.app/',
    repo: 'https://github.com/brennuck/ImageTextConverter/tree/master/image_txt', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'covid-map.png',
    title: 'Covid-19 Tracker',
    info: 'Covid-19 Tracker is a web application that shows Covid statitics for each country.',
    info2: 'I created this project in a few hours.',
    url: 'https://covid-map-omega.vercel.app/',
    repo: 'https://github.com/brennuck/Covid_Map/tree/master/front-end', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'show_brav.png',
    title: 'Brāv',
    info:
      'Brāv is an online mediation platform for non-violent conflict resolution. It facilitates a new way to solve problems, large and small.',
    info2:
      'Collaborated with a 9 person cross-discipline team to create the web and mobile application in 8 weeks.',
    url: 'https://www.beabravone.com/',
    repo: 'https://github.com/labs14-brav', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'jokes.png',
    title: 'Dad Jokes',
    info: `Dad Jokes is a web application that allows users to post and read “dad” jokes.`,
    info2: `Collaborated on a 5 person team to create the application in 4 days. Solely responsible for the backend of the project`,
    url: 'https://github.com/build-dad-jokes/back_end',
    repo: 'https://github.com/build-dad-jokes/back_end', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me',
  email: 'brennuck@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/brennuck/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/brennuck',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
