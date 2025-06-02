import React from "react";
import clsx from "clsx";

type Variant = "primary" | "outlined";

interface ButtonLinkProps {
  href: string;
  label: string;
  variant?: Variant;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  label,
  variant = "primary",
}) => {
  const baseClasses = "px-6 py-3 rounded-full text-sm font-medium transition";

  const variantClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    outlined:
      "border border-blue-400 text-blue-400 hover:bg-blue-500 hover:text-white",
  };

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={clsx(baseClasses, variantClasses[variant])}
      {...(isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {label}
    </a>
  );
};

export default ButtonLink;
