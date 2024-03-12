import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'umain-stroke': '#000000',
        'umain-off-white': '#FAFAFA',
        'umain-green': '#00703A',
      },
      fontSize: {
        '40px': '40px',
      }
    },
  },
  plugins: [],
};
export default config;
