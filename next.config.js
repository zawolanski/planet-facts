/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['media.graphcms.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/mercury/overview',
        permanent: true,
      },
    ]
  },
};
