import type { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  hero: {
    eyebrow: "Frontend Developer",
    name: "Sivaraj M",
    title: "React Developer (SDE-II) · 3 Years of Experience",
    desc: "I build scalable, maintainable web applications with React — leading schema-driven systems, re-architecting legacy modules into reusable components, and shipping performance-focused, production-grade UI.",
    years: 3,
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/sivaraj-dev",
        icon: "linkedin",
      },
      {
        label: "Github",
        url: "https://github.com/sivaraj-codes",
        icon: "github",
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
      "React Developer (SDE-II) based in Chennai, Tamil Nadu, with 3 years of hands-on experience building and leading production-grade web applications in fintech/accounting products.",
      "At Kitaabh Technologies, I built a large-scale, schema-driven data entry system (Schedule3 module) spanning 30 sections and 100+ sub-sections, and re-architected a core transaction module into ~60 reusable React components — cutting duplicate code by ~40% and reducing module-level bugs from ~100 to ~20.",
      "I hold a B.E. in Mechanical Engineering and a Full Stack MERN certification, bringing an analytical mindset to every frontend challenge — along with self-directed practice in testing (Vitest, RTL, MSW) to round out reliability across the stack.",
    ],
    stats: [
      { num: "3+", label: "Years experience" },
      { num: "40%", label: "Duplicate code cut" },
      { num: "30", label: "Schedule-3 sections built" },
      { num: "2", label: "Certifications" },
    ],
  },

  experience: [
    {
      role: "React JS Developer (SDE-II)",
      company: "Kitaabh Technologies Pvt Ltd.",
      location: "Hyderabad, India",
      date: "Feb 2024 - May 2026",
      points: [
        "Re-architected the sales transaction module into ~60 reusable React and TypeScript components, extending across 10 transaction entry modules — cutting duplicate code by ~40% and reducing bugs from ~100 to ~20",
        "Optimized application performance using React.memo, useMemo, useCallback, lazy loading, conditional rendering, and code splitting, improving load and rendering performance by ~30% for a 300+ client base",
        "Built complex data tables with AgGrid and PrimeReact DataTable for large financial datasets (thousands to lakhs of records), including bulk item entry with barcode scanner (USB keyboard-emulation) integration",
        "Developed the Schedule3 module — a schema-driven data entry system spanning 30 sections and 100+ sub-sections, with dynamic tables, columns, and validation rendered from backend schema",
        "Built scalable routing architecture using React Router v6, implementing protected routes, nested layouts, lazy-loaded modules, and role-based access control",
        "Integrated React frontends with heterogeneous backend systems (Go, Python, Node.js) using RESTful APIs, asynchronous data fetching, JSON data exchange, JWT authentication, and session management",
        "Implemented unit and component tests using Vitest, React Testing Library, and MSW to validate components, custom hooks, and API interactions, improving reliability and reducing regressions",
        "Leveraged AI-assisted development tools (Windsurf, GitHub Copilot, ChatGPT) to accelerate prototyping, debugging, refactoring, and documentation",
        "Collaborated with Product, QA, Chartered Accountants, and backend teams to translate business requirements into scalable technical solutions, participating in architecture discussions and code reviews via GitHub and Bitbucket pull request workflows",
        "Mentored junior developers as an SDE2 on reusable component architecture, React best practices, Git workflows, debugging techniques, and testing practices",
      ],
    },
    {
      role: "React JS Developer (SDE-I)",
      company: "Lotus Wireless Technologies Pvt Ltd.",
      location: "Visakhapatnam, India",
      date: "Sep 2023 - Jan 2024",
      points: [
        "Contributed to the development of production-grade React.js applications for accounting and financial modules",
        "Built reusable React components and integrated RESTful APIs using React.js and TypeScript",
        "Worked with Formik, React Router, responsive UI development, and modern frontend development practices",
        "Participated in debugging, code reviews, Git workflows, and Agile development under senior developer guidance",
      ],
    },
  ],

  skills: [
    {
      group: "Core Frontend",
      tags: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
    },
    {
      group: "State Management",
      tags: ["Redux Toolkit", "RTK Query", "React Context"],
    },
    { group: "Forms & Routing", tags: ["Formik", "Yup", "React Router v6"] },
    {
      group: "UI Libraries",
      tags: ["AgGrid", "PrimeReact", "Material UI", "Responsive Design"],
    },
    {
      group: "Testing",
      tags: ["Jest", "Vitest", "React Testing Library", "MSW"],
    },
    {
      group: "Backend & DB",
      tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT"],
    },
    {
      group: "Tooling",
      tags: [
        "Git",
        "GitHub",
        "Bitbucket",
        "Vite",
        "VS Code",
        "GitHub Copilot",
        "ChatGPT",
        "Windsurf",
      ],
    },
  ],

  projects: [
    {
      icon: "📑",
      name: "Kitaabh — Transaction & Schedule3 Modules",
      desc: "Rebuilt core transaction and schedule modules — re-architecting a sales transaction module into ~60 reusable components (10 transaction types, ~40% less duplication), and building a schema-driven Schedule3 system spanning 30 sections and 100+ sub-sections with dynamic tables, columns, and validation.",
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
      desc: "Developed a full-stack daily savings and accounting application with dynamic form handling, conditional rendering, and validation using Formik and Yup. Built REST APIs and integrated MongoDB for secure data management and transaction tracking. Used by 10 real-time customers for daily savings entry.",
      tags: ["React.js", "Formik", "Yup", "Node.js", "Express.js", "MongoDB"],
      url: "https://daily-savings.netlify.app/",
    },
  ],

  certifications: [
    {
      name: "React JS",
      issuer: "GUVI",
      url: "https://www.guvi.in/share-certificate/438z61F379VH5M0625",
    },
    {
      name: "Full Stack Developer (MERN)",
      issuer: "GUVI",
      url: "https://www.guvi.in/share-certificate/1357it656v8N4h83Qm",
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
