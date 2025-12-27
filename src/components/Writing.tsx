"use client";

import { FaMedium } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

const articles = [
  {
    title: "Building Production-Grade Idempotency with Redis & Fastify",
    platform: "Medium",
    icon: <FaMedium />,
    // Update link to your actual article
    link: "https://medium.com/javascript-in-plain-english/building-production-grade-idempotency-with-node-js-fastify-and-redis-4876de266222",
    date: "Dec 2025",
    description:
      "A deep dive into distributed state management, handling race conditions, and implementing the 'Check-Then-Act' pattern using Redis locking.",
  },
  {
    title: "Decoupling ML Artifacts: A Pattern for S3 Model Storage",
    platform: "Medium",
    icon: <FaMedium />,
    // Update link to your actual article
    link: "https://medium.com/aws-tip/decoupling-ml-artifacts-a-pattern-for-s3-based-model-storage-in-production-cbe89d042ee1",
    date: "Dec 2025",
    description:
      "Architecting a clean separation between code and model weights. Strategies for versioning, fetching, and caching ML artifacts in production.",
  },
  {
    title: "Testing the Untestable: Integration Testing BullMQ Jobs",
    platform: "Medium",
    icon: <FaMedium />,
    link: "https://medium.com/@vijaysinh.khot/testing-the-untestable-a-guide-to-integration-testing-bullmq-jobs-with-jest-736db303ca2e",
    date: "Oct 2025",
    description:
      "A practical guide to handling the complexity of testing asynchronous job queues, ensuring reliability in distributed message-based architectures.",
  },
];

const Writing = () => {
  return (
    // CHANGED: max-w-4xl -> max-w-6xl to match the Projects section width
    <section id="writing" className="w-full max-w-6xl px-6 py-20 mx-auto">
      <div className="flex items-center justify-between mb-12">
        <h2 className="flex items-center gap-3 text-3xl font-bold text-white">
          <span className="text-blue-500">✍️</span> Selected Writing
        </h2>
        <a
          href="https://medium.com/@vijaysinh.khot"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-sm font-medium text-blue-400 transition sm:block hover:text-blue-300"
        >
          View All Articles →
        </a>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-6 bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 flex flex-col h-full hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-slate-400">
                <span className="text-lg text-white">{article.icon}</span>
                <span>{article.platform}</span>
                <span className="w-1 h-1 rounded-full bg-slate-600" />
                <span>{article.date}</span>
              </div>
              <FiArrowUpRight className="text-xl transition-colors text-slate-500 group-hover:text-blue-400" />
            </div>

            <h3 className="mb-3 text-lg font-bold leading-snug text-white transition-colors group-hover:text-blue-400">
              {article.title}
            </h3>

            <p className="text-sm leading-relaxed text-slate-400 line-clamp-4">
              {article.description}
            </p>
          </a>
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <a
          href="https://medium.com/@vijaysinh.khot"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-400 transition hover:text-blue-300"
        >
          View All Articles →
        </a>
      </div>
    </section>
  );
};

export default Writing;
