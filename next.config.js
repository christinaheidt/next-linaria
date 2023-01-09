const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(ts|tsx)/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: "@linaria/webpack-loader",
          options: {
            sourceMap: process.env.NODE_ENV !== "production",
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader,
        },
        {
          loader: "css-loader",
          options: {
            sourceMap: process.env.NODE_ENV !== "production",
          },
        },
      ],
    });

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: "linaria.css",
      })
    );

    return config;
  },
};

module.exports = nextConfig;
