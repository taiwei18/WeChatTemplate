/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "my-blue": "rgb(27, 69, 143)",
        "my-bg-blue": "rgb(28, 62, 122)",
        "my-deep-blue": "#033a92",
        "my-light-blue": "#1b5aa1",
        "my-red": "rgb(169, 33, 37)",
      },
    },
    screens: {
      se: "380px",
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // 添加这一行
  },
};
