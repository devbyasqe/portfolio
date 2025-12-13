import { TProject } from "@/lib/types";

const massMailerX: TProject = {
  highlight: false,
  name: "MassMailerX",
  overview: {
    summary:
      "A flexible Python tool for sending bulk emails with styled HTML, attachments, and reliable delivery.",
    description:
      "MassMailerX is built for anyone who needs to send large batches of emails without the headache. It supports HTML-styled messages with inline CSS, plus a plain-text fallback for clients that don’t render HTML well. You can load recipients from CSV or text files, attach files automatically from a directory, and rely on detailed logging to track every run. With a modular structure and strong error handling, the tool is easy to extend or plug into existing workflows.",
  },
  features: [
    "Bulk email delivery in one straightforward run",
    "HTML emails with inline CSS and a clean plain-text fallback",
    "Automatic file attachments from a chosen folder",
    "Load recipients from CSV or TXT with validation",
    "Modular structure that’s easy to modify",
    "Detailed logs for successful sends and errors",
    "Graceful handling of SMTP and file-related issues",
    "Built on Python’s email and smtplib libraries for dependable delivery",
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
    img: "/projects/massmailerx/preview.webp",
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
      "A modern shipping services site that presents global freight solutions with clean design, gentle motion, and an easy-to-follow layout.",
    description:
      "Nexus Sea Carriers is a front-end showcase built with Next.js, Tailwind, and Framer Motion. The site highlights key logistics services with a clear structure, responsive design, and smooth transitions that guide visitors effortlessly across sections. The project focuses on clarity and speed, keeping the experience lightweight while still feeling polished. It’s built to be deployed instantly on Vercel and can be expanded with APIs or backend services whenever needed.",
  },
  features: [
    "Fully responsive design for phones, tablets, and desktops",
    "Smooth Framer Motion transitions across pages and components",
    "Clean Tailwind-based UI with consistent styling",
    "Organized sections for services, tracking, logistics, and company details",
    "Ready for Vercel deployment with no backend setup",
    "Simple structure that can scale into a full logistics platform",
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
    video: "/projects/nexusseacarriers/preview.webm",
    poster: "/projects/nexusseacarriers/poster.webp",
  },
  thumbnail: {
    video: "/projects/nexusseacarriers/thumbnail.webm",
    poster: "/projects/nexusseacarriers/poster.webp",
  },
};

const weeb: TProject = {
  highlight: true,
  name: "Weeb",
  overview: {
    summary:
      "An anime discovery app built for people who want quick access to shows, manga, characters, and creators through a clean, fast, and smooth interface.",
    description:
      "Weeb pulls data from the Jikan API and turns it into a polished browsing experience. You can search across anime, manga, characters, people, and studios, then dive into rich detail pages with staff credits, episode info, recommendations, and related titles. The app surfaces trending, top-rated, and currently airing shows, along with curated sections for deeper exploration. Large datasets use infinite scroll for a smoother flow. Zustand manages global state, Axios handles API calls, Lenis keeps scrolling fluid, and Motion brings the UI to life with subtle animations.",
  },
  features: [
    "Powerful search across anime, manga, characters, people, and studios",
    "Rich detail pages with staff, producers, recommendations, and episode lists",
    "Curated sections for trending, top-rated, new, and currently airing titles",
    "Infinite scroll for big lists like characters and search results",
    "Clean Motion-powered animations throughout the UI",
    "Dark mode with fully responsive layouts",
    "State management with Zustand",
    "Smooth scrolling using Lenis",
  ],
  stacks: ["Next.Js", "Tailwind Css", "Motion", "Lenis", "Axios", "Zustand"],
  tags: ["Next.Js"],
  repositoryUrl: [
    {
      label: "Source Code",
      link: "https://github.com/devbyasqe/weeb",
    },
  ],
  liveDemo: "https://asqe-weeb.vercel.app/",
  preview: {
    video: "/projects/weeb/preview.webm",
    poster: "/projects/weeb/poster.webp",
  },
  thumbnail: {
    video: "/projects/weeb/thumbnail.webm",
    poster: "/projects/weeb/poster.webp",
  },
};

export const myProjects: TProject[] = [weeb, nexusSeaCarriers, massMailerX];
