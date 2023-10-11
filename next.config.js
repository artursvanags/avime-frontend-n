const { withStoreConfig } = require("./store-config");
const store = require("./store.config.json");

module.exports = withStoreConfig({
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.externals.push({
      "@aws-sdk/signature-v4-multi-region":
        "commonjs @aws-sdk/signature-v4-multi-region",
    });

    return config;
  },
  experimental: {
    serverActions: true,
  },
  features: store.features,
  reactStrictMode: true,
  images: {
    domains: [
      "medusa-public-images.s3.eu-west-1.amazonaws.com",
      "localhost",
      "medusa-server-testing.s3.amazonaws.com",
      "images.unsplash.com",
      "cdn.avime.au",
      "avime-cdn.syd1.digitaloceanspaces.com",
    ],
  },
});

console.log("next.config.js", JSON.stringify(module.exports, null, 2));
