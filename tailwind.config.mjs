/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FACC15',   // Amarelo vibrante (Ação & Destaque)
        secondary: '#1E3A8A', // Azul escuro autoritário (Segurança & Autoridade)
        accent: '#000000',    // Preto absoluto
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
