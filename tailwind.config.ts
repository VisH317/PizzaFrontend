import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '300px',
      'md': '900px',
      'lg': '1500px',
      'xl': '2400px',
    },
    extend: {
      backgroundImage: {
        'pizza': "url('../../public/pizza_image.jpg')"
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config;
