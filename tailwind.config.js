/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@magic-ui/react/dist/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "custom-overlay": "url('/overlay.png')",
      },
      backgroundImage: (theme) => ({
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      }),
    },
  },
  plugins: [require("daisyui", "@tailwindcss/aspect-ratio")],
};

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html", // Make sure this includes your HTML files
//     "./src/**/*.{js,jsx,ts,tsx}", // Add .jsx and .js extensions for your JS files
//     "./node_modules/@magic-ui/react/dist/**/*.{js,jsx}", // Include magic-ui if needed
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "custom-overlay": "url('/overlay.png')",
//       },
//       backgroundImage: (theme) => ({
//         "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
//       }),
//     },
//   },
//   plugins: [require("daisyui")],
// };
