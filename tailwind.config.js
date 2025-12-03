// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Point content to all your component files so Tailwind knows where to scan for classes
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      keyframes: {
        // Custom Keyframes for falling background animation
        'falling-shadows': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(110vh)' },
        },
        // Custom Keyframes for the bounce effect (if needed)
        'bounce-custom': {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-15px)' },
          '60%': { transform: 'translateY(-8px)' },
        },
        // Keyframes for the fade-in effect
        'fade-in-key': {
          'from': { opacity: 0, transform: 'translateY(20px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        // Custom Animation Utilities
        'falling-shadows-bg': 'falling-shadows 25s linear infinite', 
        'fade-in': 'fade-in-key 1s ease-out forwards',
        'fade-in-delayed': 'fade-in-key 1s ease-out 0.8s forwards',
        'bounce': 'bounce-custom 2s infinite',
      },
    },
  },
  plugins: [],
}