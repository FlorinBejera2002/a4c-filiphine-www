import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  plugins: [],
  theme: {
    extend: {
      
      boxShadow: {
        'outline-red': '0 0 10px 5px rgba(255, 0, 0, 0.5)'
      },
      colors: {
        accent: '#003566'
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair', 'sans-serif']
    },

    }
  }
}

export default config