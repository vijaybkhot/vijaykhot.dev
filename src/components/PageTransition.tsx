"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <div className="relative overflow-hidden shadow-xl shadow-black/10 rounded-xl">
          <motion.div
            key={pathname}
            initial={{
              opacity: 0,
              y: 30,
              scale: 0.98,
              filter: "blur(4px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -30,
              scale: 0.98,
              filter: "blur(4px)",
            }}
            transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
            className="w-full h-full"
          >
            {children}
          </motion.div>
        </div>
      </AnimatePresence>
    </div>
  );
}
