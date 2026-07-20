/* Canonical site metadata reused across metadata, JSON-LD, sitemap, robots.
   This deploys to the GitHub Pages USER SITE (repo r8hitdev.github.io), served
   at the domain root, so there is no base path. asset() is kept as a no-op
   passthrough so public/ URLs stay tidy and a base path can be reintroduced
   later without touching call sites. */
export const BASE_PATH = ''

// Canonical/OG/sitemap URLs point at the deployed user site root.
export const SITE_URL = 'https://r8hitdev.github.io'

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
  twitterHandle: '@r8hitdev',
  socials: [
    'https://github.com/r8hitdev',
    'https://www.linkedin.com/in/r8hitdev',
    'https://twitter.com/r8hitdev',
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
