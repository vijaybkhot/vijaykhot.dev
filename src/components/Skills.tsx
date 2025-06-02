"use client";

import * as motion from "motion/react-client";
import { useMemo } from "react";
import { techIcons as icons } from "@/lib/icons";

const Skills = () => {
  // Memoize featured icons to avoid repeated filter computation
  const featuredIcons = useMemo(
    () => icons.filter((icon) => icon.featured),
    []
  );

  // Duplicate the icons for infinite scroll
  const scrollingIcons = useMemo(
    () => [...featuredIcons, ...featuredIcons],
    [featuredIcons]
  );

  return (
    <section className="pt-4 pb-6 overflow-hidden bg-brand">
      <h2 className="mb-4 text-3xl font-bold text-center text-blue-500">
        Tech Stack
      </h2>

      <div className="relative w-full overflow-visible">
        <motion.div
          className="flex items-center gap-12 whitespace-nowrap"
          style={{ width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
        >
          {scrollingIcons.map(({ name, icon }, index) => (
            <div
              key={`${name}-${index}`}
              className="flex flex-col items-center justify-center min-w-[80px] gap-2"
              title={name}
            >
              <motion.div
                whileHover={{ rotate: 6, y: -3 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="text-5xl cursor-pointer"
              >
                {icon ?? <span className="text-base text-red-500">?</span>}
              </motion.div>
              <span className="text-sm text-slate-300 whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
