import colors from "tailwindcss/colors";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        gray: colors.stone,
        border: colors.stone[200],
        primary: colors.stone[900],
        secondary: colors.stone[500],
        background: colors.stone[50],
        accent: colors.orange,
      },
    },
  },
  plugins: [typography],
};
