import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          base: "#8B6F5E",
          mid: "#A08070",
          light: "#C9B5AB",
          pale: "#F2EBE7",
        },
        sage: {
          base: "#71896F",
          mid: "#92A990",
          light: "#C8D5C7",
          pale: "#EFF4EE",
        },
        steel: {
          base: "#6593A6",
          mid: "#88ADBF",
          light: "#B8CFD8",
          pale: "#E8F0F3",
        },
        mist: {
          base: "#D8DFE1",
          light: "#E4EAEC",
          lighter: "#EDF1F2",
          pale: "#F2F5F6",
        },
        ivory: "#F8F4F1",
        ink: "#3D2E27",
        muted: "#8A7A72",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Jost", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(61, 46, 39, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
