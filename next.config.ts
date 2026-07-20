import type { NextConfig } from 'next'

// Deploys to the GitHub Pages USER SITE https://r8hitdev.github.io/ (repo name
// r8hitdev.github.io), which serves at the domain root — so no basePath is
// needed. If this ever moves to a project repo, restore basePath/assetPrefix.
const nextConfig: NextConfig = {
  output: 'export',
  // Hide the Next.js dev indicator ("N" badge) shown during `next dev`.
  devIndicators: false,
}

export default nextConfig
