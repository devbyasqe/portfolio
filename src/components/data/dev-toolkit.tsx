import {
  CSS,
  Django,
  DRF,
  Figma,
  Git,
  GitHub,
  HTML5,
  JavaScript,
  JQuery,
  JWT,
  Motion,
  Nextjs,
  PostgreSQL,
  Postman,
  Python,
  ReactIcon,
  ReactQuery,
  ReactRouter,
  Redis,
  Redux,
  SQLite,
  TailwindCSS,
  TypeScript,
} from "../svg/dev-tools";

const frontendTechnologies = [
  {
    label: "HTML5",
    icon: <HTML5 />,
    description:
      "Standard markup language for structuring web content with semantic elements",
    tags: ["markup", "semantic", "web", "structure"],
  },
  {
    label: "CSS",
    icon: <CSS />,
    description: "Stylesheet language for styling and laying out web pages",
    tags: ["styling", "layout", "web", "design"],
  },
  {
    label: "Tailwind CSS",
    icon: <TailwindCSS />,
    description:
      "Utility-first CSS framework for efficient, customizable UI design",
    tags: ["css", "utility", "styling", "framework"],
  },
  {
    label: "JavaScript",
    icon: <JavaScript />,
    description:
      "Dynamic programming language for interactive web functionality",
    tags: ["language", "web", "dynamic", "scripting"],
  },
  {
    label: "TypeScript",
    icon: <TypeScript />,
    description: "Typed superset of JavaScript for enhanced code reliability",
    tags: ["language", "typescript", "javascript", "static-typing"],
  },
  {
    label: "jQuery",
    icon: <JQuery />,
    description:
      "JavaScript library simplifying DOM manipulation and event handling",
    tags: ["library", "dom", "javascript", "legacy"],
  },
  {
    label: "React",
    icon: <ReactIcon />,
    description:
      "JavaScript library for building reusable, component-based user interfaces",
    tags: ["library", "react", "ui", "components"],
  },
  {
    label: "React Router",
    icon: <ReactRouter />,
    description: "Declarative routing for seamless navigation in React apps",
    tags: ["react", "routing", "navigation", "single page application"],
  },
  {
    label: "Redux",
    icon: <Redux />,
    description:
      "Predictable state management for complex JavaScript applications",
    tags: ["state-management", "react", "javascript", "flux"],
  },
  {
    label: "React Query",
    icon: <ReactQuery />,
    description:
      "Powerful library for managing server-state and data fetching in React",
    tags: ["react", "data-fetching", "server-state", "api"],
  },
  {
    label: "Next.js",
    icon: <Nextjs />,
    description:
      "React framework for server-side rendering and static site generation",
    tags: [
      "react",
      "framework",
      "server-side rendering",
      "static site generation",
    ],
  },
  {
    label: "Framer Motion",
    icon: <Motion />,
    description: "React library for creating smooth, declarative animations",
    tags: ["react", "animation", "motion", "ui"],
  },
];

const backendTechnologies = [
  {
    label: "Python",
    icon: <Python />,
    description: "Versatile programming language for rapid backend development",
    tags: ["language", "scripting", "backend", "general-purpose"],
  },
  {
    label: "Django",
    icon: <Django />,
    description:
      "High-level Python framework for secure, scalable web applications",
    tags: ["framework", "python", "web", "mvc"],
  },
  {
    label: "Django REST Framework",
    icon: <DRF />,
    description: "Powerful toolkit for building RESTful APIs with Django",
    tags: ["api", "django", "python", "rest"],
  },
  {
    label: "JWT",
    icon: <JWT />,
    description: "Token-based authentication for secure API access",
    tags: ["authentication", "security", "api", "token"],
  },
  {
    label: "Redis",
    icon: <Redis />,
    description: "In-memory data store for caching and real-time applications",
    tags: ["database", "caching", "in-memory", "nosql"],
  },
];

const databaseTechnologies = [
  {
    label: "SQLite",
    icon: <SQLite />,
    description: "Lightweight, serverless database for embedded applications",
    tags: ["database", "sql", "embedded", "lightweight"],
  },
  {
    label: "PostgreSQL",
    icon: <PostgreSQL />,
    description:
      "Powerful, open-source relational database with advanced features",
    tags: ["database", "sql", "relational", "scalable"],
  },
];

const developmentTools = [
  {
    label: "Git",
    icon: <Git />,
    description: "Distributed version control system for tracking code changes",
    tags: ["version-control", "git", "collaboration", "code"],
  },
  {
    label: "GitHub",
    icon: <GitHub />,
    description:
      "Platform for hosting, collaborating, and managing Git repositories",
    tags: ["git", "repository", "collaboration", "ci-cd"],
  },
  {
    label: "Postman",
    icon: <Postman />,
    description: "API development tool for testing and documenting endpoints",
    tags: ["api", "testing", "development", "documentation"],
  },
  {
    label: "Figma",
    icon: <Figma />,
    description:
      "Cloud-based design tool for UI/UX prototyping and collaboration",
    tags: ["design", "ui-ux", "prototyping", "collaboration"],
  },
];

const techEcosystem = [
  {
    title: "Frontend Development Ecosystem",
    developmentlist: frontendTechnologies,
  },
  {
    title: "Backend Architecture & API Solutions",
    developmentlist: backendTechnologies,
  },
  { title: "Data Management Systems", developmentlist: databaseTechnologies },
  {
    title: "Development & Collaboration Tools",
    developmentlist: developmentTools,
  },
];

export {
  frontendTechnologies,
  backendTechnologies,
  databaseTechnologies,
  developmentTools,
  techEcosystem,
};
