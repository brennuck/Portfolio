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
  subtitle: `Full Stack Web Developer`,
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.JPG',
  paragraphOne: `Since I was a kid, I’ve been obsessed with computers. I grew up using hacking as a tool to get what I wanted - From accessing my computer's terminal to add more time to my screen limit to jailbreaking a Nintendo Wii. Now, I’m more excited than ever to grow my hacking skills professionally in web development.`,
  paragraphTwo: '',
  paragraphThree:
    'Skills: HTML | CSS | LESS | Sass | Styled Components | JavaScript | Git | GitHub | React | Redux | Node | Express | Netlify | Heroku | PostgreSQL | Python',
  resume: 'https://drive.google.com/file/d/1FVIQxgJARWO9i_shOWSgIfTWCfmax0KC/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'Brav.png',
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
    url: 'https://dad-jokes-bw.herokuapp.com/',
    repo: 'https://github.com/build-dad-jokes/back_end', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project.jpg',
    title: 'Party Planner',
    info: `Party Planner is a web application that allows the user to plan parties.`,
    info2:
      'Collaborated with a 5 person team to create this application in 1 week. Solely responsible for the front end of the project.',
    url: '',
    repo: 'https://github.com/party-planner-bw/bw-april-SG2--partyPlanner-FE', // if no repo, the button will not show up
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
