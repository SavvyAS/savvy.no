/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    additionalData: `
      @import "styles/variables.scss"; 
      @import "styles/mixins.scss";
    `
  },
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
