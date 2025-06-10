export const projects = [
  {
    title: "eVoltzo",
    featured: true,
    description:
      "A platform that connects EV owners with underused charging stations through real-time booking, map discovery, and role-based access.",
    contribution:
      "Built the backend, including data models, booking logic, Stripe payments, webhooks, earnings dashboard, and seed scripts.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Firebase Auth",
      "Stripe",
      "Leaflet",
      "Tailwind CSS",
      "Docker",
      "AWS",
    ],
    image: "/projects/evoltzo.png",
    github: "https://github.com/gvaswani98/cs-554-final-project",
    // live: "https://d1jbturyp4djjd.cloudfront.net/",
    live: "",
    youtube: "https://www.youtube.com/embed/p43tNK85-wU?si=r98Xb3QGLUg4Bk6Q",
    labels: ["Team Project", "Best Project"],
  },

  {
    title: "NexTune",
    featured: true,
    description:
      "A solo-built interactive music management app with full CRUD and search features for artists, albums, companies, and songs.",
    contribution:
      "Migrating the frontend to Next.js with TypeScript for improved maintainability and type safety. Deployed on Vercel (frontend) and Render (backend); initial load may take a few seconds due to free hosting. Previously built the full React frontend, integrated GraphQL APIs.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "Redis",
      "Node.js",
      "Express",
      "Tailwind CSS",
    ],
    image: "/projects/harmony-hub.png",
    github: "https://github.com/vijaybkhot/NexTune",
    live: "https://nex-tune.vercel.app",
    youtube: "",
    labels: ["Solo Project", "In Progress"],
  },

  {
    title: "SpaceX Explorer",
    featured: true,
    description:
      "A statically generated app to browse and explore launches, rockets, and related SpaceX data in an interconnected, paginated UI.",
    contribution:
      "Independently built the full app using static generation and metadata routing. Created reusable components and dynamic routes for all entity types.",
    tech: ["Next.js", "React", "Tailwind CSS", "SpaceX API", "Vercel"],
    image: "/projects/spacex-explorer.png",
    github: "https://github.com/vijaybkhot/SpaceX-Explorer",
    live: "https://space-x-explorer-beta.vercel.app/",
    youtube: "",
    labels: ["Course Project"],
  },
  {
    title: "ServiceEasy",
    featured: true,
    description:
      "An app for booking device repair services with location-based store discovery, search, and a streamlined booking experience.",
    contribution:
      "Led development, designed data models, and built backend workflows for customers, employees, managers, and admins.",
    tech: ["Node.js", "Express", "MongoDB", "Leaflet", "Stripe", "JWT Auth"],
    image: "/projects/serviceeasy.png",
    github: "https://github.com/vijaykhot/serviceeasy",
    live: "https://serviceeasy.onrender.com/",
    youtube: "https://www.youtube.com/embed/QGSx0CbL9QA?si=woEGIoN89NQadzXU",
    labels: ["Team Project"],
  },

  {
    title: "Sprint2Health",
    featured: true,
    description:
      "A voice-enabled assistant that helps seniors manage appointments, health data, and medication reminders with secure communication.",
    contribution:
      "Collaborated on feature development across sprints. Built voice interaction flow, data dashboards, encryption, and Agile task management.",
    tech: [
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Handlebars",
      "OpenAI API",
      "Express",
      "JavaScript",
      "CSS",
      "HTML",
    ],
    image: "/projects/sprint2health.png",
    github: "https://github.com/harsh9802/sprint-to-health",
    live: "",
    youtube: "https://www.youtube.com/embed/pbw8xyw-jNU?si=1E85dZcLdPQXHDG4",
    labels: ["Team Project"],
  },
  {
    title: "Campus Pulse",
    featured: false,
    description:
      "A student-focused platform for discovering and participating in university events and clubs.",
    contribution:
      "Built secure authentication and backend APIs as part of a collaborative team project.",
    tech: ["React", "Express", "MongoDB", "JWT"],
    image: "/projects/campuspulse.png",
    github: "https://github.com/vijaykhot/campus-pulse",
    labels: ["Team Project"],
  },
  {
    title: "Natours",
    featured: false,
    description:
      "A booking platform for guided tours, supporting user roles, payments, and secure access control.",
    contribution:
      "Built as part of a structured bootcamp project to apply backend architecture principles and best practices.",
    tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Stripe"],
    github: "https://github.com/vijaykhot/natours-api",
    live: null,
    labels: ["Course Project"],
  },
];
