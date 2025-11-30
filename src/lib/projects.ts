export const projects = [
  {
    title: "Permit Workflow Service",
    featured: true,
    description:
      "A focused backend for construction permitting applications and compliance: deterministic rule engine, guarded state machine, and async PDF packet generation.",
    contribution:
      "Designed and implemented a layered service (API/Domain/Data) with a deterministic rule engine, guarded state transitions, Prisma-backed persistence, and BullMQ worker for Puppeteer-based PDF packet generation. Added Prometheus-compatible metrics, Swagger docs, and secure x-api-key preValidation. Provided Docker setups and seed data for local development.",
    tech: [
      "Node.js",
      "TypeScript",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Puppeteer",
      "Nunjucks",
      "Docker",
      "Jest",
    ],
    image: "",
    embed: "https://www.loom.com/embed/b00db432f22b440086291d0f4854fa77",
    github: "https://github.com/vijaybkhot/permit-workflow-service",
    live: "",
    youtube: "",
    labels: ["Backend", "Worker", "Compliance", "ConTech", "AEC", "PermitTech"],
  },
  {
    title: "Material Forecasting Engine",
    featured: true,
    description:
      "Time-series forecasting service for materials: historical series storage plus model-based forecasts and cached responses.",
    contribution:
      "Built a FastAPI backend with Redis caching, Alembic migrations, and a Next.js App Router frontend. Implemented Docker + docker-compose for local dev, CI with GitHub Actions, and deployments to Heroku, Vercel, and an AWS ECS pipeline (ECR/ALB/ECS). Resolved DB, Alembic and build-time environment issues during production deploys.",
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Alembic",
      "GitHub Actions",
      "Heroku",
      "Vercel",
      "AWS ECS",
    ],
    image: "/projects/material-forecasting-engine.png",
    github: "https://github.com/vijaybkhot/material-forecasting-engine",
    live: "https://material-forecasting-engine.vercel.app/",
    youtube:
      "https://www.youtube.com/embed/NEc9YYhIxww?si=N3MGX7sPXw8v_Zgm&rel=0",
    labels: ["Solo Project", "MVP", "In Progress"],
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
    labels: ["Solo Project", "In Progress", "Email", "Cloud"],
  },

  {
    title: "NexTune",
    featured: false,
    description:
      "A solo-built interactive music management app with full CRUD and search features for artists, albums, companies, and songs.",
    contribution:
      "Independently built the full frontend with Next.js and TypeScript for maintainability and type safety. Developed GraphQL APIs with Apollo Client and integrated Redis caching. Successfully containerized the project and deployed to AWS EC2. Currently working on NGINX server hosting for production. Hosted on Vercel (frontend) and Render (backend); initial load may take a few seconds due to free hosting.",
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
    labels: ["Solo Project"],
  },

  {
    title: "eVoltzo",
    featured: false,
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
    youtube:
      "https://www.youtube.com/embed/p43tNK85-wU?si=r98Xb3QGLUg4Bk6Q&rel=0",
    labels: ["Team Project"],
  },

  {
    title: "Better Food Logs",
    featured: false,
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
    featured: false,
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
    featured: false,
    description:
      "An app for booking device repair services with location-based store discovery, search, and a streamlined booking experience.",
    contribution:
      "Led development, designed data models, and built backend workflows for customers, employees, managers, and admins.",
    tech: ["Node.js", "Express", "MongoDB", "Leaflet", "Stripe", "JWT Auth"],
    image: "/projects/serviceeasy.png",
    github: "https://github.com/vijaybkhot/ServiceEasy",
    live: "https://serviceeasy.onrender.com/",
    youtube:
      "https://www.youtube.com/embed/QGSx0CbL9QA?si=woEGIoN89NQadzXU&rel=0",
    labels: ["Team Project", "Course Project", "Web Programming"],
  },

  {
    title: "Sprint2Health",
    featured: false,
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
    youtube:
      "https://www.youtube.com/embed/pbw8xyw-jNU?si=1E85dZcLdPQXHDG4&rel=0",
    labels: ["Team Project", "Course Project", "Agile Development"],
  },
  {
    title: "Campus Pulse",
    featured: false,
    description:
      "A student-centered platform focused on intuitive discovery and engagement with university events and clubs, emphasizing seamless user experience and interaction design.",
    contribution:
      "Led UI/UX design and user research to ensure an engaging, accessible experience. Created interactive prototypes and collaborated closely on usability testing and feedback-driven improvements.",
    tech: ["React", "Express", "MongoDB", "Figma"],
    image: "/projects/campuspulse.png",
    github: "https://github.com/vijaybkhot/campus-pulse",
    youtube: "https://www.youtube.com/embed/whcI4JllTRQ?rel=0",
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
