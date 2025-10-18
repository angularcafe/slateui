module.exports = {
  "src/**/*.{js,ts,jsx,tsx}": [
    (files) => `npx eslint --fix ${files.join(" ")} --concurrency auto`,
  ],
  "src/**/*.{html,css,scss,js,ts,jsx,tsx,json}": (files) =>
    `npx prettier --write ${files.join(" ")}`,
};
