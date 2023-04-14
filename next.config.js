/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "blueclue.bluemarblebio.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "**",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "1337",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "portfolio-strapi-nextjs.herokuapp.com",
        port: "",
        pathname: "**",
      },
      // {
      //   protocol: "https",
      //   hostname: process.env.STRAPI_DOMAIN,
      //   port: "",
      //   pathname: "/_next/image",
      // },
      // {
      //   protocol: "http",
      //   hostname: process.env.STRAPI_DOMAIN,
      //   port: "",
      //   pathname: "/_next/image",
      // },
    ],
  },
};

module.exports = nextConfig;
