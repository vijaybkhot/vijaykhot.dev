import * as motion from "motion/react-client";
import { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  ariaLabel: string;
  children: ReactNode;
}

const SocialIcon = ({ href, ariaLabel, children }: SocialIconProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-4xl text-gray-300 hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.35)] transition"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.a>
  );
};

export default SocialIcon;
