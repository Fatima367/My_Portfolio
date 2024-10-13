import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideIn: 'slideIn 1s ease-out forwards',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'lbue': '#011936',
        'baby1': '#0d1f22',
        'pakGreen': '#143601',
        'pg': '#1A4301',
        'pg1': '#245501',
        'metal': '#baf2bb',
        'Xanthous': '#FBB02D',
        'gum': '#111d13',
        'off': '#f4f0bb',
        
    },
    fontFamily: {
      Poppins : ["Poppins, sans-serif"],
      Roboto: ['Roboto', "sans-serif"],
      StyleScript: ["Style Script" ,"cursive"] ,
     Merienda: ["Merienda", 'cursive']

    },
  },
  plugins: [],
},
}
export default config;