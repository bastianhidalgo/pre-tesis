/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
  }
  
  module.exports = {
    nextConfig,
    env: {
      SERVIDOR: process.env.SERVIDOR
    },
    resolve: {
        fallback: {
          "fs": false,
          "stream": require.resolve("stream-browserify"),
          "zlib": require.resolve("browserify-zlib")
        }
      }
  }