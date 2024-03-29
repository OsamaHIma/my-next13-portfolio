import { FacebookIcon, LinkedinIcon, GithubIcon } from "lucide-react";

export const navLinks = [
  {
    id: "/#about",
    name: "About Me",
  },
  {
    id: "/#experience",
    name: "My Experience",
  },
  {
    id: "/#work",
    name: "My Work",
  },
  {
    id: "/#contact",
    name: "Contact Me",
  },
];

export const socialIcons = [
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    url: "https://www.facebook.com/profile.php?id=100078254302916",
  },
  {
    name: "Linkedin",
    icon: <LinkedinIcon />,
    url: "https://www.linkedin.com/in/osama-ibrahim2002/",
  },
  {
    name: "Github",
    icon: <GithubIcon />,
    url: "https://github.com/OsamaHIma",
  },
];

export const mySkills = [
  "React.js",
  "Next.js",
  "Redux toolkit",
  "Three.js",
  "React-three-fiber",
  "Tailwind css",
];

export const workSkills = [
  {
    skill: `Collaborated with back-end and front-end teams to develop and
  maintain web applications using JavaScript, HTML, CSS, and
  Next.js`,
  },
  {
    skill: `Worked with APIs to integrate third-party services, such as
  payment gateways and social media platforms, into web
  applications`,
  },
  {
    skill: `Troubleshot and debugged issues in web applications, both
  independently and in collaboration with other developers, to
  ensure optimal user experience`,
  },
  {
    skill: `Developed and implemented responsive design principles to ensure
  web applications were accessible on a range of devices,
  including desktop and mobile`,
  },
  {
    skill: `Became proficient with Next.js and new packages, such as
  next-auth and framer-motion, to improve application
  performance and user experience`,
  },
  {
    skill: `Developed communication and teamwork skills in a remote work
  environment, collaborating with developers, project managers,
  and clients across different time zones`,
  },
  {
    skill: `Demonstrated adaptability and flexibility by working on multiple
  projects simultaneously and adjusting to changing project
  requirements and timelines`,
  },
  {
    skill: `Maintained knowledge of emerging technologies and industry
  trends through self-directed learning and professional
  development activities`,
  },
];

export const experiences = [
  {
    title: "Html, CSS & JS",
    icon: "/tech/html.png",
    iconBg: "#383E56",
    date: "7-2022 -  10-2022",
    img: "/udacity certification.png",
    certification_link: "https://graduation.udacity.com/confirm/GUFTCZJD",
  },
  {
    title: "JavaScript",
    icon: "/tech/javascript.png",
    iconBg: "#E6DEDD",
    date: "6-2022 -  11-2022",
    img: "/JS certification.jpg",
    certification_link:
      "https://www.udemy.com/certificate/UC-f55c74b0-92d4-492c-b0e9-5bfac8908752/",
  },
  {
    title: "React.js",
    icon: "/tech/reactjs.png",
    iconBg: "#383E56",
    date: "1-2023 -  4-2023",
    img: "/React Certification.jpg",
    certification_link:
      "https://www.udemy.com/certificate/UC-08a4dda0-2560-40f8-9541-e7602dcdc4a6/",
  },
  {
    title: "Front-end course",
    icon: "/tech/html.png",
    iconBg: "#383E56",
    date: "8-2022 -  4-2023",
    img: "/hasoub certification.png",
    certification_link:
      "https://academy.hsoub.com/certificate/EGJEA4XCERP1JUF76BMV8VPR.pdf",
  },
];

export const projects = [
  {
    name: "ChatHub",
    description: `A real-time messaging platform built with the MERN stack,
      enhanced with Next.js for the frontend. The application enables secure
      and seamless communication between users.`,
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "Mongo DB",
      },
      {
        name: "express.js",
      },
      {
        name: "Socket.io",
      },
    ],
    isFeatured: true,
    image: "/chatHub.png",
    source_code_link: "https://github.com/OsamaHIma/ChatHub",
    live_preview: "https://chathub-web.vercel.app/",
  },
  {
    name: "Tumor Scan",
    description:
      "Tumor Scan is a cancer diagnosis platform that leverages advanced imaging and AI. For this project, I gained experience integrating various technologies like Python, Flask, and front-end web development. I was responsible for the full-stack - building the backend APIs, designing the UI/UX, and creating a seamless user experience from front to back. This challenged me to quickly adapt to new skills which was a valuable learning experience.",
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "Next-auth",
      },
      {
        name: "Firebase",
      },
      {
        name: "Tailwind css",
      },
    ],
    isFeatured: true,
    image: "/tumor scan.png",
    // source_code_link: "https://github.com/OsamaHIma/worker-app",
    live_preview: "https://tumor-scan.vercel.app/",
  },
  {
    name: "AI Breed Finder",
    description:
      "This project helps users identify the breed of their pets, whether it's a dog, cat, or any other animal. The AI algorithms analyze the unique characteristics of the pet and provide accurate breed predictions.",
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "Next-auth",
      },
      {
        name: "Firebase",
      },
      {
        name: "Flask",
      },
    ],
    isFeatured: true,
    image: "/ai-breed-finder.png",
    // source_code_link: "https://github.com/OsamaHIma/worker-app",
    live_preview: "https://ai-breed-finder.vercel.app/",
  },
  {
    name: "Translate easy",
    description:
      "Translate-easy is an NPM package that I've built and it's the package that I'm using in my portfolio to handle the translations, which allows for easy integration of Google's Translation API into web applications. It provides customizable components such as LanguageProvider, LanguageSelector, and Translate, making it simple to add language translation capabilities to your web apps.",
    tags: [
      {
        name: "TypeScript",
      },
      {
        name: "Tailwind css",
      },
    ],
    image: "/translate-easy.png",
    isFeatured: true,
    source_code_link: "https://github.com/OsamaHIma/translate-easy",
    live_preview:
      "https://www.npmjs.com/package/translate-easy?activeTab=readme",
  },
  {
    name: "Worker",
    description:
      "This is a company dashboard web application built using Next.js 13, Tailwind CSS, and Next-Auth for authentication. The dashboard allows the company to manage and control various aspects of their system.",
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "Next-auth",
      },
      {
        name: "Chart.js",
      },
      {
        name: "Tailwind css",
      },
    ],
    image: "/worker.png",
    // source_code_link: "https://github.com/OsamaHIma/worker-app",
    live_preview: "https://worker-web.vercel.app/dashboard",
  },
  {
    name: "MEDICALTY",
    description:
      "MEDICALTY is a software program that aims to move away from using paper-based patient files and convert them into electronic files that are easily stored and printable. The project manager can monitor and track doctors, their records, information, and describe the project staff. Additionally, users can track patients' records and reports through the program.",
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "Stripe",
      },
      {
        name: "Next-auth",
      },
      {
        name: "Tailwind css",
      },
    ],
    image: "/medicality.png",
    isFeatured: true,
    source_code_link: "https://github.com/OsamaHIma/MEDICALTY",
    live_preview: "https://medicalty.vercel.app/dashboard",
  },
  {
    name: "Crown Store",
    description:
      "A next.js 13 e-commerce website with dynamic data from sanity and payment using stripe",
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "Stripe",
      },
      {
        name: "Sanity",
      },
      {
        name: "Firebase",
      },
      {
        name: "Tailwind css",
      },
      {
        name: "Redux toolkit",
      },
    ],
    image: "/crwn store.png",
    source_code_link: "https://github.com/OsamaHIma/ecommerce-next13",
    live_preview: "https://crown-store-next13.vercel.app/",
  },
  // {
  //   name: "Refilex",
  //   description: `A redesigned website for "Refilex" company using next.js and react-three-fiber`,
  //   tags: [
  //     {
  //       name: "Next.js",
  //     },
  //     {
  //       name: "Framer Motion",
  //     },
  //     {
  //       name: "Tailwindcss",
  //     },
  //     {
  //       name: "react-three-fiber",
  //     },
  //     {
  //       name: "three.js",
  //     },
  //   ],
  //   image: "/refilex.png",
  //   source_code_link: "https://github.com/OsamaHIma/Refilex-web",
  //   live_preview: "https://refilex-web.vercel.app/",
  // },
  {
    name: "Metaversus",
    description:
      "A modern next.js 13 landing page with some nice animations using framer motion and Tailwindcss.",
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "Framer Motion",
      },
      {
        name: "Tailwindcss",
      },
    ],
    image: "/metaversus.png",
    source_code_link: "https://github.com/OsamaHIma/Metaverse",
    live_preview: "https://metaversuslite.netlify.app/",
  },
  {
    name: "Admin Dashboard",
    description:
      "A full admin dashboard to manage users and sales with some charts to make it easier to collect data.",
    tags: [
      {
        name: "react",
      },
      {
        name: "MUI",
      },
      {
        name: "Nivo charts",
      },
    ],
    image: "/dashboard.png",
    source_code_link: "https://github.com/OsamaHIma/Fancy-admin-dashboard",
    live_preview: "https://fancy-admin-dashboard2002.vercel.app/",
  },
  {
    name: "My other Portfolio",
    description:
      "Built using Three.js was but I added a lot of 3D models which caused the portfolio to take a long time to reload.",
    tags: [
      {
        name: "Three.js",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "SCSS",
      },
    ],
    image: "/my portfolio.png",
    source_code_link: "https://github.com/OsamaHIma/my-3D-portfolio/",
    live_preview: "https://osama3dportfolio.vercel.app/",
  },
  {
    name: "HomyZ",
    description: "A next.js 13 website for Real estate with fancy animations.",
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "Framer motion",
      },
      {
        name: "Tailwindcss",
      },
    ],
    image: "/real-estate.png",
    source_code_link: "https://github.com/OsamaHIma/RealEstate",
    live_preview: "https://real-estate-next13.vercel.app/",
  },
  {
    name: "Safirni",
    description:
      "A next.js 13 website for tourism with full login and signup functionality.",
    tags: [
      {
        name: "Next.js",
      },
      {
        name: "Firebase",
      },
      {
        name: "Tailwindcss",
      },
    ],
    image: "/safirni.png",
    source_code_link: "https://github.com/OsamaHIma/safirni",
    live_preview: "https://safirni.vercel.app/",
  },
  {
    name: "3D Shirt",
    description:
      "Customize your own shirt using 3D change the colors and upload your images",
    tags: [
      {
        name: "React.js",
      },
      {
        name: "Three.js",
      },
      {
        name: "React-three-fiber",
      },
    ],
    image: "/three.js web.png",
    isFeatured: true,
    source_code_link: "https://github.com/OsamaHIma/ThreeJs-Shirt",
    live_preview: "https://3d-shirt-osamahima.vercel.app/",
  },
  {
    name: "Tarkez",
    description:
      "A full website for 'Romooz' company fully optimized to ensure fast loading.",
    tags: [
      {
        name: "React.js",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "React-router",
      },
    ],
    image: "/tarkez.png",
    source_code_link: "https://github.com/OsamaHIma/Romooz-task",
    live_preview: "https://romooz.netlify.app/",
  },

  {
    name: "Youtubey",
    description:
      "This project was my first time to build a full website using HTML, CSS, and JS.",
    tags: [
      {
        name: "Html",
      },
      {
        name: "Bootstrap",
      },
      {
        name: "CSS",
      },
    ],
    image: "/youtubey.png",
    source_code_link: "https://github.com/OsamaHIma/Youtubey",
    live_preview: "https://youtubey.netlify.app/",
  },
];
