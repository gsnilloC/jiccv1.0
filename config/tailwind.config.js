module.exports = {
  content: [
    "./app/views/**/*.{erb,haml,html,slim}",
    "./app/helpers/**/*.rb",
    "./app/assets/stylesheets/**/*.css",
    "./app/javascript/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        jicc: {
          // Primary colors
          red: "#D30001",
          orange: "#FFA500",
          yellow: "#FFD700",
          white: "#FFFFFF",

          // Red variations
          "red-light": "#FF4D4D",
          "red-dark": "#990000",

          // Orange variations
          "orange-light": "#FFB84D",
          "orange-dark": "#CC8400",

          // Yellow variations
          "yellow-light": "#FFE44D",
          "yellow-dark": "#CCAC00",

          // Warm neutrals
          "warm-gray": "#F5F5F5",
          "warm-gray-dark": "#E0E0E0",

          // Accent colors
          coral: "#FF7F50",
          peach: "#FFDAB9",
          amber: "#FFBF00",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
