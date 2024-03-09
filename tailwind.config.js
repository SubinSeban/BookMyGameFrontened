const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: ["./src/**/*.{html,js}",
  "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,html}",
  "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,html}",
],
  theme: {
    extend: {},
  },
  plugins: [],
});


