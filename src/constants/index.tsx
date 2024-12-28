import { FacebookIcon, LinkedinIcon, GithubIcon } from "lucide-react";

export const navLinks = [
  // {
  //   id: "/#about",
  //   name: "About Me",
  // },
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
  {
    id: "/Osama-Ibrahim-CV.pdf",
    name: "Download CV",
    isDownload: true, // Add this flag to handle download behavior differently in your navigation component
  },
];

export const socialIcons = [
  {
    name: "Facebook",
    icon: <FacebookIcon className="size-5" />,
    url: "https://www.facebook.com/profile.php?id=100078254302916",
  },
  {
    name: "Linkedin",
    icon: <LinkedinIcon className="size-5" />,
    url: "https://www.linkedin.com/in/osama-ibrahim2002/",
  },
  {
    name: "Github",
    icon: <GithubIcon className="size-5" />,
    url: "https://github.com/OsamaHIma",
  },
];

export const mySkills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Redux toolkit",
  "Three.js",
  "React-three-fiber",
  "Tailwind CSS",
  "Inertia.js",
  "Bootstrap",
  "SCSS",
  "React Query",
  "Preact Signals",
  "i18next",
];

export const workSkills = [
  {
    skill: "Skills.workSkills.skill1",
  },
  {
    skill: "Skills.workSkills.skill2",
  },
  {
    skill: "Skills.workSkills.skill3",
  },
  {
    skill: "Skills.workSkills.skill4",
  },
  {
    skill: "Skills.workSkills.skill5",
  },
  {
    skill: "Skills.workSkills.skill6",
  },
  {
    skill: "Skills.workSkills.skill7",
  },
  {
    skill: "Skills.workSkills.skill8",
  },
];

export const experiences = [
  {
    title: "Front-end Developer",
    company: "Tazamun Information Technology",
    location: "Experience.locations.tazamun",
    date: "Experience.dates.tazamun",
    icon: "/companies/tazamun.jpg",
    description: "Experience.descriptions.tazamun",
  },
  {
    title: "Front-end Developer",
    company: "Etrevago",
    location: "Experience.locations.etrevago",
    date: "Experience.dates.etrevago",
    icon: "/companies/etrevago.png",
    description: "Experience.descriptions.etrevago",
  },
];
export const certificates = [
  {
    title: "Html, CSS & JS",
    icon: "/tech/html.png",
    company: "udacity",
    iconBg: "#383E56",
    date: "7-2022 -  10-2022",
    img: "/udacity certification.png",
    certification_link: "https://graduation.udacity.com/confirm/GUFTCZJD",
    description: "Experience.descriptions.htmlCert",
  },
  {
    title: "JavaScript",
    icon: "/tech/javascript.png",
    company: "Udemy",
    iconBg: "#E6DEDD",
    date: "6-2022 -  11-2022",
    img: "/JS certification.jpg",
    certification_link:
      "https://www.udemy.com/certificate/UC-f55c74b0-92d4-492c-b0e9-5bfac8908752/",
    description: `Advanced JavaScript programming certification covering modern JS features and practices:
    • Deep dive into ES6+ features and modern JavaScript syntax
    • Asynchronous programming with Promises and async/await
    • Object-oriented programming principles in JavaScript
    • Functional programming concepts and best practices
    • Browser APIs and local storage management`,
  },
  {
    title: "React.js",
    icon: "/tech/reactjs.png",
    company: "Udemy",
    iconBg: "#383E56",
    date: "1-2023 -  4-2023",
    img: "/React Certification.jpg",
    certification_link:
      "https://www.udemy.com/certificate/UC-08a4dda0-2560-40f8-9541-e7602dcdc4a6/",
    description: `Comprehensive React.js certification focusing on modern React development:
    • Building single-page applications with React.js
    • State management with React Hooks and Context API
    • Component lifecycle and performance optimization
    • Integration with REST APIs and handling asynchronous data
    • Testing React applications with Jest and React Testing Library`,
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
    name: "ArabGiftCard Corporate",
    description: "descriptions.arabGiftCardCorp",
    tags: [
      { name: "Next.js", img: "/tech/nextjs.png" },
      { name: "TypeScript", img: "/tech/typescript.svg" },
      { name: "Tailwind CSS", img: "/tech/tailwind.svg" },
      { name: "Sanity.io", img: "/tech/sanity.svg" },
    ],
    isFeatured: true,
    image: "/projects/arabgiftcard.png",
    live_preview: "https://arabgiftcard.ae",
  },
  {
    name: "Astashirni",
    description: "descriptions.astashirni",
    tags: [
      { name: "Laravel", img: "/tech/laravel.svg" },
      {
        name: "Inertia.js",
        img: "/tech/inertiajs.png",
      },
      { name: "React.js", img: "/tech/reactjs.png" },
      { name: "TypeScript", img: "/tech/typescript.svg" },
      { name: "Tailwind CSS", img: "/tech/tailwind.svg" },
    ],
    isFeatured: true,
    image: "/projects/astashirni.png",
    live_preview: "https://astashirni.com/landing",
  },
  {
    name: "Orenus",
    description: "descriptions.orenus",
    tags: [
      { name: "React.js", img: "/tech/reactjs.png" },
      { name: "TypeScript", img: "/tech/typescript.svg" },
      { name: "Laravel", img: "/tech/laravel.svg" },
      {
        name: "React Query",
        img: "/tech/react-query.png",
      },
      {
        name: "Inertia.js",
        img: "/tech/inertiajs.png",
      },
    ],
    isFeatured: true,
    image: "/projects/orenus.png",
    live_preview: "https://orenus.net",
  },
  {
    name: "ArabGiftCard E-commerce",
    description: "descriptions.arabGiftCardEcom",
    tags: [
      { name: "React.js", img: "/tech/reactjs.png" },
      { name: "TypeScript", img: "/tech/typescript.svg" },
      { name: "Tailwind CSS", img: "/tech/tailwind.svg" },
      {
        name: "React Query",
        img: "/tech/react-query.png",
      },
    ],
    isFeatured: true,
    image: "/projects/arabgiftcard-store.png",
    live_preview: "https://arabgiftcard.com",
  },

  {
    name: "ChatHub",
    description: "descriptions.chatHub",
    tags: [
      { name: "Next.js", img: "/tech/nextjs.png" },
      { name: "Mongo DB", img: "/tech/mongo.png" },
      { name: "express.js", img: "/tech/exp1.svg" },
      { name: "Socket.io", img: "/tech/socket_io.svg" },
      { name: "Tailwind CSS", img: "/tech/tailwind.svg" },
    ],
    isFeatured: true,
    image: "/projects/chatHub.png",
    source_code_link: "https://github.com/OsamaHIma/ChatHub",
    live_preview: "https://chathub-web.vercel.app/",
  },
  {
    name: "Tumor Scan",
    description: "descriptions.tumorScan",
    tags: [
      { name: "Next.js", img: "/tech/nextjs.png" },
      {
        name: "Next-auth",
        img: "/tech/next-auth.png",
      },
      { name: "Firebase", img: "/tech/firebase.svg" },
      { name: "Tailwind css", img: "/tech/tailwind.svg" },
    ],
    isFeatured: true,
    image: "/projects/tumor scan.png",
    // source_code_link: "https://github.com/OsamaHIma/worker-app",
    live_preview: "https://tumor-scan.vercel.app/",
  },
  {
    name: "AI Breed Finder",
    description: "descriptions.aiBreedFinder",
    tags: [
      { name: "Next.js", img: "/tech/nextjs.png" },
      {
        name: "Next-auth",
        img: "/tech/next-auth.png",
      },
      { name: "Firebase", img: "/tech/firebase.svg" },
      { name: "Tailwind CSS", img: "/tech/tailwind.svg" },
    ],
    isFeatured: true,
    image: "/projects/ai-breed-finder.png",
    // source_code_link: "https://github.com/OsamaHIma/worker-app",
    live_preview: "https://ai-breed-finder.vercel.app/",
  },
];
