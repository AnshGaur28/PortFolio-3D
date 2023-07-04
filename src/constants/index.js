import {
  book,
  scholarshipPEC,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    tripguide,
    threejs,
    bot,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: nodejs,
    },
    {
      title: "Data Structures And Algorithms",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  

  
  const projects = [
    {
      name: "Scholarship System",
      description:
        "Web-based platform that allows users to lookup and manage their collge personal infomation from the  portal  and apply for scholarships , upload documents to the portal for verification and also apply for financial aid online efficiently.",
      tags: [
        {
          name: "Javascript",
          color: "yellow-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "ejs",
          color: "yellow-text-gradient",
        },
        {
          name: "passwordjs",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
      ],
      image: scholarshipPEC,
      source_code_link: "https://github.com/AnshGaur28/Scholaship-System",
    },
    {
      name: "Book Advertisement",
      description:
        "Web application that enables users to buy a specific  book . This project is basically to show UI/UX using bootstrap and vanilla JS and some scss modifications.",
      tags: [
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: book,
      source_code_link: "https://github.com/AnshGaur28/Book-Advertisement-",
    },
    {
      name: "Discord AI-Bot",
      description:
        "A comprehensive Discord bot that is very easy to code and is very useful to be implemented. This Bot answers questions that start with a '!' mark ie(!When did Cold War happen) using the ChatGpt Model . ",
      tags: [
        {
          name: "discordjs",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "express",
          color: "pink-text-gradient",
        },
      ],
      image: bot,
      source_code_link: "https://github.com/AnshGaur28/AIBOT",
    },
  ];
  
  export { services, technologies, projects };