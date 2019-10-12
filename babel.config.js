module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        modules: false,
        targets: { browsers: [">1.00%", "not ie 11", "not op_mini all"] }
      }
    ],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ]
};
