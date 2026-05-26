import type { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  hero: {
    eyebrow: "Frontend Developer",
    name: "Sivaraj M",
    title: "React Developer · 3 Years of Experience",
    desc: "I build scalable, maintainable web applications with React. Passionate about clean UI, thoughtful state management, and performance-driven engineering.",
    years: 3,
    links: [
      {
        label: "Github",
        url: "https://github.com/sivaraj-codes",
        icon: "github",
      },
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/sivaraj-dev",
        icon: "linkedin",
      },
      {
        label: "sivaraj.webdev@gmail.com",
        url: "mailto:sivaraj.webdev@gmail.com",
        icon: "mail",
      },
      { label: "+91 9489 310240", url: "tel:+919489310240", icon: "phone" },
    ],
    resumeUrl:
      "https://drive.google.com/file/d/1A75wCYNOnavGrp5CF0U8ZaA92CwwC6Rc/view?usp=sharing",
  },

  about: {
    paragraphs: [
      "React Developer based in Chennai, Tamil Nadu, with 3 years of hands-on experience building production-grade web applications. I specialise in component architecture, state management, and form handling.",
      "At Kitaabh Technologies, I developed reusable UI component libraries used across multiple products, integrating Redux Toolkit, Formik, and PrimeReact to deliver seamless user experiences.",
      "I hold a B.E. in Mechanical Engineering and a Full Stack MERN certification, bringing an analytical mindset to every frontend challenge.",
    ],
    stats: [
      { num: "3+", label: "Years experience" },
      // { num: "10+", label: "React projects" },
      { num: "2", label: "Certifications" },
      { num: "B.E.", label: "Mech. Engg." },
    ],
  },

  experience: [
    {
      role: "React JS Developer",
      company: "Kitaabh Technologies Pvt Ltd.",
      location: "Hyderabad, India",
      date: "Feb 2024 - May 2026",
      points: [
        "Developed reusable and scalable UI components used across multiple projects",
        "Built and maintained web applications using React.js following best practices",
        "Implemented state management with Redux Toolkit for efficient data flow",
        "Designed and handled forms using Formik with validation logic",
        "Integrated PrimeReact UI components and React Router for seamless navigation",
      ],
    },
    {
      role: "React JS Developer",
      company: "Lotus Wireless Technologies Pvt Ltd.",
      location: "Visakhapatnam, India",
      date: "Sep 2023 - Jan 2024",
      points: [
        "Contributed to front-end development using React.js",
        "Collaborated with cross-functional teams to deliver responsive UI features",
      ],
    },
  ],

  skills: [
    {
      group: "Core Frontend",
      tags: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    },
    { group: "State Management", tags: ["Redux Toolkit", "React Context"] },
    { group: "Forms & Routing", tags: ["Formik", "React Router", "Yup"] },
    {
      group: "UI Libraries",
      tags: ["PrimeReact", "Material UI", "Responsive Design"],
    },
    { group: "Testing", tags: ["Jest", "Vitest", "React Testing Library"] },
    { group: "Backend & DB", tags: ["Node.js", "Express.js", "MongoDB"] },
    { group: "Tooling", tags: ["Git", "Vite", "VS Code", "Figma"] },
  ],

  projects: [
    {
      icon: "📑",
      name: "Kitaabh",
      desc: "Worked on scalable transaction and accounting modules using reusable React components, Redux Toolkit state management, and PrimeReact data tables. Contributed to improving maintainability, reducing component duplication, and optimizing form workflows and navigation across the product suite.",
      tags: [
        "React.js",
        "Custom Hooks",
        "Redux Toolkit",
        "PrimeReact",
        "AgGrid",
        "React Router",
        "Formik",
        "Yup",
      ],
      url: "https://app.kitaabh.com/#/home",
    },
    {
      icon: "💰",
      name: "Daily Savings Collection App",
      desc: "Developed a full-stack daily savings and accounting application with dynamic form handling, conditional rendering, and validation using Formik and Yup. Built REST APIs and integrated MongoDB for secure data management and transaction tracking.",
      tags: ["React.js", "Formik", "Yup", "Node.js", "Express.js", "MongoDB"],
      url: "https://daily-savings.netlify.app/",
    },
  ],

  certifications: [
    {
      name: "Full Stack Developer (MERN)",
      issuer: "GUVI",
      url: "https://www.guvi.in/share-certificate/1357it656v8N4h83Qm",
    },
    {
      name: "React JS",
      issuer: "GUVI",
      url: "https://www.guvi.in/share-certificate/438z61F379VH5M0625",
    },
  ],

  education: [
    {
      degree: "Bachelor of Engineering",
      field: "Mechanical Engineering",
      institution: "Karpagam College of Engineering",
      location: "Coimbatore, India",
    },
  ],

  contact: {
    headline: "Open to new opportunities",
    subtext:
      "Whether you have a role in mind, a project to collaborate on, or just want to say hello — my inbox is always open.",
    items: [
      {
        label: "sivaraj.webdev@gmail.com",
        url: "mailto:sivaraj.webdev@gmail.com",
        type: "mail",
      },
      { label: "+91 94893 10240", url: "tel:+919489310240", type: "phone" },
      {
        label: "linkedin.com/in/sivaraj-dev",
        url: "https://www.linkedin.com/in/sivaraj-dev",
        type: "linkedin",
      },
      {
        label: "Chennai, Tamil Nadu, India",
        url: "https://maps.app.goo.gl/SFwEcdUUNYsL2ttJ8",
        type: "location",
      },
    ],
  },
};
