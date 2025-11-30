"use client";

import { FaBriefcase, FaBuilding } from "react-icons/fa";

const experiences = [
  {
    role: "Backend Software Developer (Volunteer)",
    company: "The Chad Foundation",
    period: "Oct 2025 - Present",
    description:
      "Acting as Technical Lead, I rescued legacy infrastructure by recovering domains and migrating DNS. I architected a zero-cost serverless donation platform using Netlify Functions. To unblock Google and Stripe verification, I engineered a critical email workaround, implemented SPF/DKIM security, and led MVP scope negotiations.",
  },
  {
    role: "Software Developer (Volunteer)",
    company: "JerseySTEM",
    period: "Aug 2025 - Present",
    description:
      "I architected a decoupled donation pipeline from WordPress to Salesforce using Platform Events and custom PHP middleware. This cut costs by migrating integrations from Zapier to Make.com. I also led recovery efforts for critical production issues like database migration failures and Cloudflare WAF blocks, while advising leadership on secure data strategies.",
  },
  {
    role: "Project Engineer",
    company: "Ichalkaranji Municipal Corporation",
    period: "May 2017 - June 2023",
    description:
      "I orchestrated a $3M+ government housing initiative that enabled 605 families to build homes. I managed the full lifecycle from proposals and permits to fund distribution while leading cross-functional teams. I also modernized reporting by building Python (Pandas) workflows to replace manual tracking.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-4xl px-4 py-20 mx-auto sm:px-6">
      <h2 className="flex items-center gap-3 mb-12 text-3xl font-bold text-white">
        <FaBriefcase className="text-blue-500" />
        Professional Experience
      </h2>

      <div className="relative ml-3 space-y-12 border-l border-slate-700">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-blue-500 bg-[#0f172a]" />

            <div className="flex flex-col mb-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <span className="font-mono text-sm font-medium text-slate-400">
                {exp.period}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3 text-sm font-medium text-blue-400">
              <FaBuilding />
              <span>{exp.company}</span>
            </div>

            <p className="max-w-2xl leading-relaxed text-slate-300">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
