/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//     screens: {
//       sm: "640px",
//       md: "768px",
//       lg: "1024px",
//       xl: "1270px",   // digeser dari 1280px
//       "2xl": "1520px" // digeser dari 1536px
//     }
//   },
//   plugins: [],
// }


// export default {
//   theme: {
//     screens: {
//       sm: "40rem",   // 640px
//       md: "48rem",   // 768px
//       lg: "64rem",   // 1024px
//       xl: "80rem",   // 1280px
//       "2xl": "96rem" // 1536px
//     }
//   }
// }


export default {
  theme: {
    screens: {
      sm: {'raw': '(min-width: 640px)'},
      md: {'raw': '(min-width: 768px)'},
      lg: {'raw': '(min-width: 1024px)'},
      xl: {'raw': '(min-width: 1280px)'},
      '2xl': {'raw': '(min-width: 1536px)'},
    },
  },
  plugins: [],
}