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
    <div className="relative perspective-3d overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ rotateY: 90, scale: 0.98, opacity: 0 }}
          animate={{ rotateY: 0, scale: 1, opacity: 1 }}
          exit={{ rotateY: -90, scale: 0.98, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
          className="w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
