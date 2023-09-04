/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["files.stripe.com", 'epic-projects.nyc3.digitaloceanspaces.com'],
  },
}

module.exports = nextConfig
