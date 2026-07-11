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
      "At Kitaabh Technologies, I led a 5-person team building a large-scale, schema-driven data entry system spanning 30 sections and 100+ sub-sections, and re-architected a core transaction module into ~60 reusable React components — cutting duplicate code by ~60% and reducing module-level bugs from ~100 to ~15.",
      "I hold a B.E. in Mechanical Engineering and a Full Stack MERN certification, bringing an analytical mindset to every frontend challenge — along with self-directed practice in testing (Vitest, RTL, MSW) to round out reliability across the stack.",
    ],
    stats: [
      { num: "3+", label: "Years experience" },
      { num: "60%", label: "Duplicate code cut" },
      { num: "5", label: "Schedule-3 Team size led" },
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
        "Refactored the sales transaction module into ~60 reusable React components, extending across 10 transaction entry modules — cutting duplicate code by ~60% and reducing bugs from ~100 to ~15",
        "Improved transaction module render speed by ~60% for a 300+ client base using conditional rendering strategies",
        "Built complex data tables with AgGrid and PrimeReact DataTable for large financial datasets (thousands to lakhs of records), including bulk item entry with barcode scanner (USB keyboard-emulation) integration",
        "Led a 5-person team to build the Schedule3 module — a schema-driven data entry system spanning 30 sections and 100+ sub-sections, with dynamic tables, columns, and validation rendered from backend schema",
        "Built role-based and module-level access control across 3 roles (Auditor, Admin, Superadmin) using React Router v6 protected routes",
        "Integrated React frontends with heterogeneous backend systems (Go, Python, Node.js), implementing secure authentication with JWT access and refresh tokens",
        "Used AI-assisted development tools (Windsurf, GitHub Copilot, ChatGPT) for faster prototyping, debugging, and refactoring",
        "Collaborated with CA, QC, backend, and product teams during requirement clarification, testing, and release cycles via GitHub and Bitbucket PR workflows and peer code reviews",
        "Mentored junior developers as an SDE2 on component design, debugging, and React best practices",
      ],
    },
    {
      role: "React JS Developer (SDE-I)",
      company: "Lotus Wireless Technologies Pvt Ltd.",
      location: "Visakhapatnam, India",
      date: "Sep 2023 - Jan 2024",
      points: [
        "Started on the product's transaction module screens, learning production-grade React development, Git workflows, and PR practices",
        "Built reusable UI components and integrated REST APIs for dynamic data rendering under senior developer guidance",
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
      tags: ["Git", "GitHub", "Bitbucket", "Vite", "VS Code", "Figma"],
    },
  ],

  projects: [
    {
      icon: "📑",
      name: "Kitaabh — Transaction & Schedule3 Modules",
      desc: "Led a 5-person team rebuilding core transaction and schedule modules — re-architecting a sales transaction module into ~60 reusable components (10 transaction types, ~60% less duplication), and building a schema-driven Schedule3 system spanning 30 sections and 100+ sub-sections with dynamic tables, columns, and validation.",
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
    // {
    //   icon: "🧪",
    //   name: "React Testing",
    //   desc: "Studied and practiced advanced React testing patterns through a structured testing curriculum on a modern Vite/Vitest/RTL/MSW stack — covering per-test API mock overrides, loading-state testing with controlled promises, and custom hook testing with renderHook.",
    //   tags: ["Vite", "Vitest", "React Testing Library", "MSW"],
    //   url: "",
    // },
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
