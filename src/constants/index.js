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
    chat_support,
    dukaan,
    learnhub,
    data_analytics,
  } from "../assets";
  

  
  // Navigation links
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
  
  // Services offered
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
      title: "Data Structures and Algorithms",
      icon: creator,
    },
  ];
  
  // Technologies used
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
      name: "Git",
      icon: git,
    },
  ];
  
  // Projects
  const projects = [
    {
      name: "E-Dukaan",
      description: "Designed and developed a uni-vendor platform to sell and manage products. Implemented payment gateway with Razorpay and an Admin Dashboard.",
      tags: [
        {
          name: "React.js",
          color: "pink-text-gradient",
        },
        {
          name: "Express.js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Redux Toolkit",
          color: "green-text-gradient",
        },
        {
          name: "Razorpay",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
      ],
      image: dukaan,
      source_code_link: "https://github.com/AnshGaur28/E-dukaan",
    },
    {
      name: "Responsive Data Analytics Landing Page ",
      description:
        "Web application that enables users to buy a specific  book . This project is basically to show UI/UX using bootstrap and vanilla JS and some scss modifications.",
      tags: [
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        
      ],
      image: data_analytics,
      source_code_link: "https://github.com/AnshGaur28/Book-Advertisement-",
    },
    {
      name: "Chat Support System",
      description: "A web application based on React and Tailwind to facilitate one-on-one chat among chat support admins and clients using Socket.io. Supports chat-transfer among admins and creation of client-rooms.",
      tags: [
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Express.js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Redux Toolkit",
          color: "green-text-gradient",
        },
        {
          name: "Socket.io",
          color: "pink-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Chakra UI",
          color: "blue-text-gradient",
        },
        {
          name: "Prompt Engineering",
          color: "blue-text-gradient",
        },
      ],
      image: chat_support,
      source_code_link: "https://github.com/AnshGaur28/Chatapp",
    },
    {
      name: "AI Chatbot",
      description: "Developed an AI chatbot using Retrieval Augmented Generation to answer questions related to a given vector database as a knowledge store. Utilized prompt engineering, OpenAI, and Langchain to get responses specific to user needs.",
      tags: [
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Mongoose",
          color: "blue-text-gradient",
        },
        {
          name: "OpenAI",
          color: "pink-text-gradient",
        },
        {
          name: "Langchain",
          color: "blue-text-gradient",
        },
        {
          name: "FastAPI",
          color: "green-text-gradient",
        },
        {
          name: "Weaviate",
          color: "blue-text-gradient",
        },
      ],
      image: bot,
      source_code_link: "https://github.com/AnshGaur28/RAG",
    },
    {
      name: "Learnhub",
      description: "Web application for learning concepts through tutorials, blogs, and notes. Allows users to register as multiple roles, add and access educational content.",
      tags: [
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
      ],
      image: learnhub,
      source_code_link: "https://github.com/AnshGaur28/LearnHub",
    },
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
    }
    
  ];
  
  export { services, technologies, projects };
  