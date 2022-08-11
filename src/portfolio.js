const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'Blog',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Cesar Pandares',
  role: 'Front End Engineer',
  description:
    'I am a web developer with four years of experience in web development, analytical and responsible, committed to meeting objectives, self-taught and able to adapt to different working methods. Passionate about technology. I am a self-taught developer and I am always looking for new challenges to learn new technologies and technologies to learn new technologies.',
  // resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/cesar-pandares-91617b177/',
    github: 'https://github.com/cpandares',
  },
}

const projects = [
  

  {
    name: 'Blog',
    description: "Blog developed using laravel 8 + livewire, AdminLte was implemented as an admin template for creating posts. It has a CRUD of categories and tags. One-to-many and many-to-many relationships using Eloquent ORM, access policies, roles, and permissions. Mysql database.",
      image: 'https://res.cloudinary.com/cpandares/image/upload/v1660225810/samples/blog_dyd6eh.png',
    stack: ['Laravel', 'Mysql', 'Liveware', 'Tailwind', 'Bootsrapp'],
    sourceCode: 'https://github.com/cpandares/blod-admin',
    visit: '',
    
  },
  {
    name: 'Posts-TDD',
    description: "CRUD of posts with laravel, focused on unit testing using TDD. Unit tests to verify its performance.",
      image: 'https://res.cloudinary.com/cpandares/image/upload/v1660225811/samples/livewire_b0ogd5.png',
    stack: ['Laravel', 'Mysql', 'Liveware', 'Php Unit', 'TailwindCss'],
    sourceCode: 'https://github.com/cpandares/blod-admin',
    visit: '',
    
  },
  {
    name: 'Eccommerce-Headphones',
    description: "Eccomerce developed with React and NextJs as the framework, backend in sanity.io, has stripe integration in test mode so who can test it, animations with CSS.",
      image: 'https://res.cloudinary.com/cpandares/image/upload/v1660225811/samples/next_w9tapd.png',
    stack: ['React', 'Nextjs', 'Css', 'Stripe'],
    sourceCode: 'https://github.com/cpandares/eccomerce',
    visit: 'https://eccomerce-git-main-cpandares.vercel.app/',
    
  },

  {
    name: 'Ventmove',
    description: "Using React, Symfony, Mysql to create a platform to make for all users create a page and integrate your Online Store, Reservation and Collection System, Online Events, Ticket Sales, Contact Manager (CRM), Financing Campaigns, Blog and Much More.",
      image: 'https://res.cloudinary.com/cpandares/image/upload/v1660225812/samples/vent_xt7vp4.png',
    stack: ['Symfony', 'Mysql', 'React', 'Sass'],
    sourceCode: '',
    visit: 'https://ventmove.com',
    
  },
  {
    name: 'Rv advisor',
    description: "This start a simple e-commerce for users in USA, with Rv vehicles, providing the opportunity to insure their vehicles, offer road assistance, tire insurance, all under the payment of memberships (using stripe). Today it is a whole social network where users can upload their posts, like systems, chat. ",
      image: 'https://res.cloudinary.com/cpandares/image/upload/v1660225812/samples/rv_povtpe.png',
    stack: ['Php', 'Js','Mysql','Git'],
    sourceCode: '',
    visit: 'https://panel.thervadvisor.com/',
    
  },
  {
    name: 'Mern Calendar',
    description: "This is a code repository for the corresponding to an app developed in react & mongoDb with the ability to create users, and add events with a calendar, start date, end date, validations, etc.",
      image: 'https://res.cloudinary.com/cpandares/image/upload/v1660225810/samples/calendar_atxcko.png',
    stack: ['React', 'MongoDb','Node', 'Express'],
    sourceCode: 'https://github.com/cpandares/calendar-react',
    visit: '',
    
  },
  {
    name: 'Journal-app',
    description: "This is a code repository for the corresponding to one app developed in react, redux & firebase, where users can add notes from different memories, add images. Provide login with google.",
      image: 'https://res.cloudinary.com/cpandares/image/upload/v1660225811/samples/journal_jxmmkn.png',
    stack: ['React', 'Firebase', 'Redux'],
    sourceCode: 'https://github.com/cpandares/diario-react-18',
    visit: 'https://app-journalr.netlify.app/auth/login',
    
  },
  {
    name: 'Shop-app',
    description: "Eccomerce developed in React in frontend & sass for styles, is just a test with a api rest free, included axios for petitions http",
      image: 'https://res.cloudinary.com/cpandares/image/upload/v1660227118/samples/screencapture_g8fz4t.png',
    stack: ['React', 'Firebase', 'Sass', 'Axios'],
    sourceCode: 'https://github.com/cpandares/eccomerce-static',
    visit: 'https://shoppingc-app.netlify.app/',
    
  },
  {
    name: 'Search gifs',
    description: "A simple search engine of gifs, using fetch for http petitions, and just css for the styles.",
      image: 'https://res.cloudinary.com/cpandares/image/upload/v1660225811/samples/gifs_aslipx.png',
    stack: ['React', 'Css', 'fetch'],
    sourceCode: 'https://github.com/cpandares/eccomerce-static',
    visit: 'https://cpandares.github.io/react-gift/',
    
  },
 
 
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'TailwindCss',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'pandaresocesar@gmail.com',
}

export { header, about, projects, skills, contact }

