export const projects = [
  {
    title: "NexTune",
    featured: true,
    description:
      "A solo-built interactive music management app with full CRUD and search features for artists, albums, companies, and songs.",
    contribution:
      "Independently built the full frontend with Next.js and TypeScript for maintainability and type safety. Developed GraphQL APIs with Apollo Client and integrated Redis caching. Currently creating a Docker image for AWS deployment. Hosted on Vercel (frontend) and Render (backend); initial load may take a few seconds due to free hosting.",
    tech: [
      "Next.js",
      "TypeScript",
      "GraphQL",
      "Apollo Client",
      "Redis",
      "Node.js",
      "Express",
      "Tailwind CSS",
      "Docker",
      "AWS",
    ],
    image: "/projects/harmony-hub.png",
    github: "https://github.com/vijaybkhot/NexTune",
    live: "https://nex-tune.vercel.app",
    youtube: "",
    labels: ["Solo Project", "In Progress"],
  },
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
    title: "Email Outreach Platform",
    featured: true,
    description:
      "A robust full-stack platform for personalized email campaigns, contact management, and template-driven outreach. Built for efficiency, scalability, and real-world deliverability.",
    contribution:
      "Led end-to-end development: architected RESTful APIs, designed service layer, implemented Prisma transactions, and solved critical email deliverability issues (SPF, DKIM, DMARC, AWS SES). Integrated rich text editor, live preview, dynamic placeholders, and campaign management. Migrated email infrastructure for sender reputation and production readiness.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "AWS SES",
      "Tailwind CSS",
      "Docker",
      "Jest",
    ],
    image: "/projects/outreachly.png",
    github: "https://github.com/vijaybkhot/outreach-app",
    live: "",
    youtube: "",
    labels: ["Solo Project", "Production-Ready", "Email", "Cloud"],
  },

  {
    title: "Better Food Logs",
    featured: true,
    description:
      "A frictionless food logging app focused on simplicity, speed, and meaningful tracking—designed to avoid the clutter of legacy apps and help users build consistent habits.",
    contribution:
      "Worked on Supabase storage integration, user authentication, syncing between local and Supabase storage, and robust input validation logic.",
    tech: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "Vercel",
      "Bolt",
    ],
    image: "/projects/better-food-logs.png",
    github: "https://github.com/Bediruna/hackathon-better-food-logs",
    live: "https://www.betterfoodlogs.com/",
    youtube: "",
    labels: ["Team Project", "Hackathon Project"],
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
    labels: ["Solo Project"],
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
    labels: ["Team Project", "Course Project", "Web Programming"],
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
    labels: ["Team Project", "Course Project", "Agile Development"],
  },
  {
    title: "Campus Pulse",
    featured: true,
    description:
      "A student-centered platform focused on intuitive discovery and engagement with university events and clubs, emphasizing seamless user experience and interaction design.",
    contribution:
      "Led UI/UX design and user research to ensure an engaging, accessible experience. Created interactive prototypes and collaborated closely on usability testing and feedback-driven improvements.",
    tech: ["React", "Express", "MongoDB", "Figma"],
    image: "/projects/campuspulse.png",
    github: "https://github.com/vijaykhot/campus-pulse",
    youtube: "https://www.youtube.com/embed/whcI4JllTRQ",
    labels: ["Team Project", "Course Project", "HCI", "UI/UX"],
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
