import {
  frontend,
  backend,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  vue,
  github,
  material,
  mobx,
  sass,
  next,
  graphql,
  bullz,
  glassfrog,
  bunz,
  wom,
  cajun,
  coverhunt,
  icwt,
  makersImg,
  datarockets,
  outside,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "experience",
    title: "Experiences",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Fullstack Developer",
    icon: backend,
  },
  {
    title: "Best Teammate",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: "html",
    icon: html,
  },
  {
    name: "css",
    icon: css,
  },
  {
    name: "javascript",
    icon: javascript,
  },
  {
    name: "typescript",
    icon: typescript,
  },
  {
    name: "react",
    icon: reactjs,
  },
  {
    name: "reduxtoolkit",
    icon: redux,
  },
  {
    name: "node",
    icon: nodejs,
  },
  {
    name: "vue",
    icon: vue,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "mobx",
    icon: mobx,
  },
  {
    name: "tailwind",
    icon: tailwind,
  },
  {
    name: "material",
    icon: material,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "graphql",
    icon: graphql,
  },
];

const experiences = [
  {
    title: "FrontEnd Developer Intern",
    company_name: "SkyDreams",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Jan 2019 - Feb 2019 - 2 months",
  },
  {
    title: "Team Lead, Frontend Developer, Mentor",
    company_name: "Makers",
    icon: makersImg,
    iconBg: "#333333",
    date: "Mar 2019 - Jun 2022 - 2 years 4 months",
  },
  {
    title: "Team Lead, Middle Frontend Developer",
    company_name: "InCodeWeTrust",
    icon: icwt,
    iconBg: "#333333",
    date: "Jul 2021 - Nov 2021 - 5 months",
  },
  {
    title: "Frontend Developer",
    company_name: "Datarockets",
    icon: datarockets,
    iconBg: "#333333",
    date: "Dec 2021 - May 2023 - 1 year 6 months",
  },
    {
    title: "FullStack Developer",
    company_name: "Outside Digital",
    icon: outside,
    iconBg: "#333333",
    date: "Sep 2023 - currently",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Bunz",
    description:
      "Every day, thousands of people meet on Bunz to trade for everything from clothing and furniture to houseplants and art.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bunz,
    demo: "https://bunz.com/",
  },
  {
    id: "project-2",
    name: "Cajun Koi",
    description:
      "Cajun Koi is a gamified project that helps people with topics such as selfimprovement, productivity, entrepreneurship and creativity.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: cajun,
    demo: "https://www.cajunkoi.com/",
  },

  {
    id: "project-3",
    name: "Glassfrog",
    description:
      "Holacracy support tool that helps design and maintain the Holacracy structure in organizations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: glassfrog,
    demo: "https://www.glassfrog.com/",
  },
  {
    id: "project-4",
    name: "Bullz",
    description:
      "BULLZ is a social app, focused on video recommendations for all things web3, crypto and blockchain.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: bullz,
    demo: "https://www.bullz.com/",
  },
  {
    id: "project-5",
    name: "WOM",
    description: `The WOM Protocol is a brand new user-generated marketing channel that leverages the most effective form of marketing: honest word-of-mouth recommendations.`,
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: wom,
    demo: "https://www.womprotocol.io/",
  },
];

export { services, technologies, experiences, projects };
