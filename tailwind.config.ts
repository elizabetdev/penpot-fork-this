import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./cassetteTape/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "custom-gradient":
          "linear-gradient(to bottom, rgba(215, 191, 255, 0.6) 0%, rgba(255, 255, 255, 1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
