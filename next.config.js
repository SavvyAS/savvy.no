/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  sassOptions: {
    additionalData: `@import "assets/styles/variables.scss"; @import "assets/styles/mixins.scss";`
  }
}

module.exports = nextConfig
