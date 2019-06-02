const path = require("path");
const HWP = require("html-webpack-plugin");
const CWP = require("clean-webpack-plugin");

process.env.NODE_ENV = "production";
process.env.BABEL_ENV = "production";

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "../build"),
    filename: "src/js/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|jpge|gif|svg|bmp|pdf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "src/media/[hash].[ext]"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CWP(["build"], {
      root: path.join(__dirname, "../"),
      verbose: true,
      dry: false
    }),
    new HWP({
      template: "./public/index.html",
      script: "window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () {}"
    })
  ]
};
