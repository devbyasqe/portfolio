import { TProject } from "@/lib/types";

const massMailerX: TProject = {
  highlight: true,
  name: "MassMailerX",
  overview: {
    summary:
      "A high-performance Python-based bulk email sender with HTML styling, dynamic attachments, and robust error handling.",
    description:
      "MassMailerX is a feature-rich and customizable bulk email automation tool built with Python. Perfect for newsletters, marketing campaigns, event invitations, job applications, or any large-scale email distribution. It supports HTML-styled emails with inline CSS and provides a plain-text fallback for maximum compatibility. The tool handles dynamic file attachments, flexible recipient list inputs from CSV/TXT, and incorporates advanced error handling with detailed logging. Designed with a modular architecture, it’s easy to maintain, extend, and adapt for various workflows.",
  },
  features: [
    "Bulk Email Sending: Deliver emails to multiple recipients in a single run.",
    "HTML-Styled Content: Create professional-looking emails with inline CSS and plain-text fallback.",
    "Dynamic Attachments: Automatically attach files (PDF, images, docs, etc.) from a specified directory.",
    "Flexible Recipient Input: Import recipients from CSV or TXT files with built-in validation.",
    "Modular Architecture: Easy to customize, extend, and integrate with other tools.",
    "Detailed Logging: Track successes and failures with timestamps and error details.",
    "Robust Error Handling: Manage SMTP, file, and recipient errors gracefully.",
    "Secure & Reliable: Uses Python’s smtplib and email libraries for dependable delivery.",
  ],
  stacks: ["Python", "HTML", "CSS", "SMTP", "Email MIME"],
  tags: ["Python"],
  repositoryUrl: [
    {
      label: "Source Code",
      link: "https://github.com/devbyasqe/bulk-email-sender",
    },
  ],
  preview: {
    img: "/projects/massmailerx/one.webp",
  },
  thumbnail: {
    img: "/projects/massmailerx/thumbnail.webp",
  },
};

const nexusSeaCarriers: TProject = {
  highlight: true,
  name: "Nexus Sea Carriers",
  overview: {
    summary:
      "NEXUS SEA CARRIERS Shipping provides reliable sea and global freight solutions tailored to businesses of all sizes. From international logistics to smooth local delivery, we focus on efficiency, transparency, and customer trust every step of the way.",
    description:
      "Nexus Sea Carriers (NCS) is a modern web-based shipping platform built with Next.js, Tailwind CSS, and Framer Motion. The project showcases a clean, responsive design with smooth animations to highlight freight services, logistics solutions, and company information. NCS emphasizes clarity and accessibility, making it easy for visitors to explore offerings such as worldwide shipping, tracking, and service details. With a front-end focused stack, the application is lightweight, fast, and deployable on modern hosting platforms like Vercel. It’s designed as a portfolio-ready project to demonstrate expertise in building polished, interactive, and production-quality interfaces.",
  },
  features: [
    "Responsive Layout: Optimized for mobile, tablet, and desktop screens.",
    "Interactive Animations: Powered by Framer Motion for smooth transitions.",
    "Modern UI: Tailwind CSS ensures clean and consistent styling.",
    "Service Sections: Organized details about shipping, tracking, and logistics.",
    "Deployment Ready: Configured for Vercel hosting with zero backend requirements.",
    "Scalable Structure: Easy to extend with APIs or backend services if needed.",
  ],
  stacks: ["Next.Js", "Tailwind Css", "motion"],
  tags: ["Next.Js"],
  liveDemo: "https://asqe-nsc.vercel.app/",
  repositoryUrl: [
    {
      label: "Source Code",
      link: "https://github.com/devbyasqe/Nexus-sea-carriers",
    },
  ],
  preview: {
    img: "/projects/nexusseacarriers/one.webp",
  },
  thumbnail: {
    img: "/projects/nexusseacarriers/thumbnail.webp",
  },
};



export const myProjects: TProject[] = [nexusSeaCarriers, massMailerX];
