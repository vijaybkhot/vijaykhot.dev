import lineClamp from "@tailwindcss/line-clamp";

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
  perspective: {
    "3d": "1200px",
  },
};

export default config;
