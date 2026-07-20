import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Anton, Syne } from 'next/font/google'
import './globals.css'
import { ScrollProgress } from '../components/motion'
import { asset, SITE, SITE_URL } from '../lib/site'

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE.title,
  description: SITE.description,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE_URL }],
  creator: SITE.name,
  alternates: { canonical: '/' },
  // Favicon lives in public/favicon.ico; asset() applies the /freelance base
  // path in production so the link resolves under the project page.
  icons: {
    icon: asset('/favicon.ico'),
    shortcut: asset('/favicon.ico'),
    apple: asset('/favicon.ico'),
  },
  keywords: [
    'Rohit Patil',
    'backend engineer',
    'full-stack developer',
    'Node.js',
    'NestJS',
    'PostgreSQL',
    'React',
    'Angular',
    'Pune',
    'freelance developer',
  ],
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE_URL,
    siteName: SITE.name,
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/profile.png', alt: `${SITE.name} — ${SITE.role}` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.title,
    description: SITE.description,
    creator: SITE.twitterHandle,
    images: ['/profile.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

/* Person schema — helps search engines link this page to Rohit as an entity
   and surface the social profiles / role in results. */
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.name,
  url: SITE_URL,
  image: `${SITE_URL}/profile.png`,
  jobTitle: SITE.role,
  email: `mailto:${SITE.email}`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: SITE.locality,
    addressCountry: SITE.country,
  },
  knowsAbout: SITE.skills,
  sameAs: SITE.socials,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${syne.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
