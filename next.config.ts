import type { NextConfig } from 'next'

// Project page deploys under https://r8hitpatil.github.io/freelance/, but only
// production builds need the base path. In `next dev` we keep it empty so the
// app stays at http://localhost:3000/ instead of 404-ing at the root.
const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  // Hide the Next.js dev indicator ("N" badge) shown during `next dev`.
  devIndicators: false,
  ...(isProd
    ? { basePath: '/freelance', assetPrefix: '/freelance' }
    : {}),
}

export default nextConfig
