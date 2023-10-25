const path = require("path");

module.exports = {
  entry: "./src/index.js",

  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: "css-loader",
      },
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-react"] },
          },
        ],
      },
    ],
  },

  resolveLoader: {
    alias: {
      "css-loader": path.resolve(__dirname, "loaders/css.loader.js"),
    },
  },

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  mode: process.env.NODE_ENV === "production" ? "production" : "development",
};
