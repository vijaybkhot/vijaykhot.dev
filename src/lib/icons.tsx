import { FaAws, FaLock } from "react-icons/fa6";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiRedis,
  SiDocker,
  SiGithub,
  SiGit,
  SiStripe,
  SiTailwindcss,
  SiFirebase,
  SiLeaflet,
  SiSpacex,
  SiApollographql,
  SiMongoose,
  SiOpenai,
  SiHtml5,
  SiCss3,
  SiHandlebarsdotjs,
  SiSupabase,
  SiFigma,
  SiPrisma,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { BiLogoPostgresql } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { TbBrandVercelFilled } from "react-icons/tb";
import Image from "next/image";
import { BsFiletypeJson } from "react-icons/bs";

export const techIcons = [
  // Core Languages
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-500" />,
    featured: true,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-600" />,
    featured: true,
  },
  {
    name: "Python",
    icon: <SiPython className="text-blue-400" />,
    featured: true,
  },
  {
    name: "Java",
    icon: <FaJava className="text-[#ED8B00]" />,
    featured: true,
  },

  // Frontend Frameworks & Styling
  { name: "React", icon: <SiReact className="text-sky-500" />, featured: true },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white" />,
    featured: true,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-sky-400" />,
    featured: true,
  },
  { name: "CSS", icon: <SiCss3 className="text-[#264de4]" />, featured: false },
  {
    name: "HTML",
    icon: <SiHtml5 className="text-[#e34c26]" />,
    featured: false,
  },
  {
    name: "Handlebars",
    icon: <SiHandlebarsdotjs className="text-[#f0772b]" />,
    featured: false,
  },

  // Backend & APIs
  {
    name: "Node.js",
    icon: <SiNodedotjs className="text-green-600" />,
    featured: true,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-gray-700 dark:text-gray-300" />,
    featured: true,
  },
  {
    name: "Supabase",
    icon: <SiSupabase className="text-[#3FCF8E]" />,
    featured: true,
  },
  {
    name: "GraphQL",
    icon: <SiGraphql className="text-pink-500" />,
    featured: true,
  },
  {
    name: "Apollo Client",
    icon: <SiApollographql className="text-[#311C87]" />,
    featured: false,
  },
  {
    name: "JWT Auth",
    icon: <FaLock className="text-gray-600 dark:text-gray-300" />,
    featured: false,
  },
  {
    name: "Webhooks",
    icon: <FiBell className="text-gray-500" />,
    featured: false,
  },

  // Databases & ORMs
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500" />,
    featured: true,
  },
  {
    name: "Mongoose",
    icon: <SiMongoose className="text-[#800000]" />,
    featured: false,
  },
  {
    name: "PostgreSQL",
    icon: <BiLogoPostgresql className="text-[#336791]" />,
    featured: true,
  },
  {
    name: "Prisma",
    icon: <SiPrisma className="text-[#2D3748]" />,
    featured: true,
  },
  {
    name: "Redis",
    icon: <SiRedis className="text-red-500" />,
    featured: true,
  },

  // DevOps & Cloud
  {
    name: "Docker",
    icon: <SiDocker className="text-blue-500" />,
    featured: true,
  },
  { name: "AWS", icon: <FaAws className="text-orange-400" />, featured: true },
  {
    name: "Vercel",
    icon: <TbBrandVercelFilled className="text-black dark:text-white" />,
    featured: false,
  },

  // Auth & Payments
  {
    name: "Firebase Auth",
    icon: <SiFirebase className="text-[#FFCA28]" />,
    featured: false,
  },
  {
    name: "Stripe",
    icon: <SiStripe className="text-purple-600" />,
    featured: true,
  },

  // Third-Party APIs
  {
    name: "SpaceX API",
    icon: <SiSpacex className="text-[#005288]" />,
    featured: false,
  },
  {
    name: "OpenAI API",
    icon: <SiOpenai className="text-[#10A37F]" />,
    featured: false,
  },
  {
    name: "Leaflet",
    icon: <SiLeaflet className="text-[#199900]" />,
    featured: false,
  },

  // Tools
  { name: "Git", icon: <SiGit className="text-orange-500" />, featured: true },
  {
    name: "GitHub",
    icon: <SiGithub className="text-black dark:text-white" />,
    featured: true,
  },
  {
    name: "VS Code",
    icon: <VscVscode className="text-blue-500" />,
    featured: false,
  },
  {
    name: "Figma",
    icon: <SiFigma className="text-[#F24E1E]" />,
    featured: false,
  },
  {
    name: "Bolt",
    icon: (
      <Image
        src="/icons/bolt.webp"
        alt="Bolt Icon"
        width={24}
        height={24}
        className="object-contain"
        loading="lazy"
      />
    ),
    featured: false,
  },

  // Data & Formats
  {
    name: "JSON",
    icon: <BsFiletypeJson className="text-blue-500" />,
    featured: false,
  },
];
