// components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import SocialIcon from "./SocialIcon";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] border-t border-zinc-800 text-gray-300 py-10 mt-20">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-6 px-6 mx-auto sm:flex-row">
        {/* Social Icons */}
        <div className="flex gap-6">
          <SocialIcon href="https://github.com/vijaybkhot" ariaLabel="GitHub">
            <FaGithub />
          </SocialIcon>
          <SocialIcon
            href="https://www.linkedin.com/in/vijay-khot"
            ariaLabel="LinkedIn"
          >
            <FaLinkedin />
          </SocialIcon>
          <SocialIcon
            href="https://leetcode.com/vijay_khot"
            ariaLabel="LeetCode"
          >
            <SiLeetcode />
          </SocialIcon>
          <SocialIcon href="mailto:vijay@vijaykhot.com" ariaLabel="Email">
            <FaEnvelope />
          </SocialIcon>
        </div>

        {/* Copyright */}
        <p className="text-sm text-center text-gray-500 sm:text-right">
          © {new Date().getFullYear()} Vijay Khot. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
