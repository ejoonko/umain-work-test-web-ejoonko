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
        'umain-stroke': 'rgba(0, 0, 0, 0.1)',
        'umain-off-white': '#FAFAFA',
        'umain-green': '#00703A',
      },
      fontSize: {
        '40px': '40px',
      },
      maxWidth: {
        'default': '1520px',
      },
    },
  },
  plugins: [],
};
export default config;
