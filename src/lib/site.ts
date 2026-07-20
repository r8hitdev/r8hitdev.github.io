/* Canonical site metadata reused across metadata, JSON-LD, sitemap, robots.
   This is a GitHub Pages PROJECT page, so the deployed URL includes the repo
   path. BASE_PATH must match `basePath` in next.config.ts: only applied in
   production so local dev serves assets from the root. Prefix public/ asset
   URLs (images, etc.) with it via asset(). */
export const BASE_PATH =
  process.env.NODE_ENV === 'production' ? '/freelance' : ''

// Canonical/OG/sitemap URLs always point at the real deployed project page.
export const SITE_URL = 'https://r8hitpatil.github.io/freelance'

/* Prefix a public/ asset path with the base path (e.g. asset('/profile.png')). */
export const asset = (path: string) => `${BASE_PATH}${path}`

export const SITE = {
  name: 'Rohit Patil',
  title: 'Rohit Patil — Backend Engineer',
  role: 'Backend Engineer',
  description:
    'Pune-based backend engineer shipping production services in Node.js, NestJS, and PostgreSQL — with React and Angular frontends when the product calls for it.',
  locality: 'Pune',
  country: 'India',
  email: 'dev.rohitpatil.25@gmail.com',
  twitterHandle: '@r8hitpatil',
  socials: [
    'https://github.com/r8hitpatil',
    'https://www.linkedin.com/in/r8hitpatil',
    'https://twitter.com/r8hitpatil',
  ],
  skills: [
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'React',
    'Angular',
    'Redis',
    'Prisma',
    'Docker',
  ],
}
