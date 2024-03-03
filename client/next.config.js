/* * */

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],

    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://property-dev-notifier.com/api/:path*',
  //     },
  //   ]
  // },
  httpAgentOptions: {
    keepAlive: false,
  },
  reactStrictMode: false,
}

/* * */


module.exports = nextConfig
