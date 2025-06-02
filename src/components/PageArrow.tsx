"use client";

import { usePathname, useRouter } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import * as motion from "motion/react-client";
import { pageFlow } from "@/lib/pageFlow";

const PageArrows = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentIndex = pageFlow.indexOf(pathname);

  if (currentIndex === -1) return null;

  const prevPage = pageFlow[currentIndex - 1];
  const nextPage = pageFlow[currentIndex + 1];

  return (
    <>
      {prevPage && (
        <button
          onClick={() => router.push(prevPage)}
          className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition z-50"
          aria-label="Previous Page"
        >
          <FaArrowLeft size={20} />
        </button>
      )}
      {nextPage && (
        <motion.button
          onClick={() => router.push(nextPage)}
          className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition z-50"
          aria-label="Next Page"
          animate={nextPage === "/about" ? { opacity: [1, 0.3, 1] } : undefined}
          transition={
            nextPage === "/about"
              ? {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }
              : undefined
          }
        >
          <FaArrowRight size={20} />
        </motion.button>
      )}
    </>
  );
};

export default PageArrows;
