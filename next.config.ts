import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pt-br/',
        permanent: true
      },
      {
        source: '/posts/',
        destination: '/pt-br/posts/',
        permanent: true
      },
      {
        source: '/posts/:slug/',
        destination: '/pt-br/posts/:slug/',
        permanent: true
      },
      {
        source: '/tags/:tag/',
        destination: '/pt-br/tags/:tag/',
        permanent: true
      }
    ]
  }
}

export default nextConfig
