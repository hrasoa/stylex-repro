const { join } = require("node:path");

module.exports = {
  presets: [["@babel/preset-react", { runtime: "automatic" }]],
  plugins: [
    [
      "@stylexjs/babel-plugin",
      {
        dev: process.env.NODE_ENV === "development",
        test: process.env.NODE_ENV === "test",
        debug: true,
        runtimeInjection: false,
        genConditionalClasses: true,
        treeshakeCompensation: true,
        unstable_moduleResolution: {
          type: "commonJS",
        },
        aliases: {
          "~/*": [join(__dirname, "src/*")],
        },
      },
    ],
  ],
};
