const path = require("path");

module.exports = {
  addons: ["@storybook/preset-create-react-app", "@storybook/addon-postcss"],
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.@(js|jsx)"],
  core: {
    builder: "webpack5",
  },
  externals: {
    react: "React",
  },
  webpackFinal: async (config) => {
    (config.module.rules = [
      ...config.module.rules,
      {
        test: /\.(js|jsx)$/,
        include: [path.resolve(__dirname, "..")],
        use: [
          {
            loader: require.resolve("babel-loader"),
            options: {
              presets: [require.resolve("babel-preset-react-app")],
            },
          },
        ],
      },
    ]),
      config.resolve.extensions.push(".js", ".jsx");
    return config;
  },
};
