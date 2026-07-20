import type { ComponentType } from 'react'
import { ArrowRight, FileSearch, Lock, Network } from 'lucide-react'
import {
  SiDocker,
  SiGithub,
  SiGraphql,
  SiNestjs,
  SiRedis,
  SiRedux,
} from '@icons-pack/react-simple-icons'
import { Reveal } from '../components/motion'
import { SectionHeading, solidButtonClass } from '../components/ui'

type BrandIcon = ComponentType<{ size?: number; color?: string; strokeWidth?: number }>

type CoverLine = { text: string; color: string }

type Post = {
  title: string
  date: string
  accent: string
  icon: BrandIcon
  iconColor: string
  lines: CoverLine[]
}

const POSTS: Post[] = [
  {
    title: 'Docker Tutorial: Master Docker from Scratch',
    date: '21 Apr 2023',
    accent: '#2496ED',
    icon: SiDocker,
    iconColor: '#2496ED',
    lines: [
      { text: 'Docker', color: '#FFFFFF' },
      { text: 'From Scratch', color: '#2496ED' },
    ],
  },
  {
    title: 'Learn RTK Query in Next.js in 5 Minutes',
    date: '27 Aug 2023',
    accent: '#764ABC',
    icon: SiRedux,
    iconColor: '#764ABC',
    lines: [
      { text: 'RTK Query', color: '#FFD60A' },
      { text: '& React', color: '#61DAFB' },
    ],
  },
  {
    title: 'Building a Chat with PDF — RAG Application',
    date: '2 Jun 2024',
    accent: '#10B981',
    icon: FileSearch,
    iconColor: '#10B981',
    lines: [
      { text: 'Chat with PDF', color: '#FFFFFF' },
      { text: 'RAG · NestJS', color: '#10B981' },
    ],
  },
  {
    title: 'GraphQL in NestJS: A Concise 5-Minute Guide',
    date: '27 Mar 2024',
    accent: '#E10098',
    icon: SiGraphql,
    iconColor: '#E10098',
    lines: [
      { text: 'GraphQL', color: '#E10098' },
      { text: 'in NestJS', color: '#FFFFFF' },
    ],
  },
  {
    title: 'Scalable REST APIs with NestJS: A Testing-Driven Guide',
    date: '7 Mar 2024',
    accent: '#E0234E',
    icon: SiNestjs,
    iconColor: '#E0234E',
    lines: [
      { text: 'NestJS', color: '#FFFFFF' },
      { text: 'Testing-Driven', color: '#E0234E' },
    ],
  },
  {
    title: 'Scaling Real-Time Communication with Redis Pub/Sub',
    date: '2 Jun 2024',
    accent: '#FF4438',
    icon: SiRedis,
    iconColor: '#FF4438',
    lines: [
      { text: 'Redis', color: '#FF4438' },
      { text: 'Pub / Sub', color: '#FFFFFF' },
    ],
  },
  {
    title: 'GitHub API Rate Limit Exceeded Problem',
    date: '19 May 2023',
    accent: '#A78BFA',
    icon: SiGithub,
    iconColor: '#EDEDED',
    lines: [
      { text: 'GitHub API', color: '#FFFFFF' },
      { text: 'Rate Limits', color: '#A78BFA' },
    ],
  },
  {
    title: 'How to Find the First and Last Address in an IP Block',
    date: '31 May 2023',
    accent: '#F59E0B',
    icon: Network,
    iconColor: '#F59E0B',
    lines: [
      { text: 'IP Addressing', color: '#F59E0B' },
      { text: 'Subnets 101', color: '#FFFFFF' },
    ],
  },
  {
    title: 'Why Is HTTP Stateless?',
    date: '30 May 2023',
    accent: '#FB7185',
    icon: Lock,
    iconColor: '#FB7185',
    lines: [
      { text: 'HTTP', color: '#FFFFFF' },
      { text: 'Stateless?', color: '#FB7185' },
    ],
  },
]

/* Flat, typographic cover — bold two-line title, a diagonal accent band,
   and an oversized ghost icon cropped at the corner. */
function PostCover({ post }: { post: Post }) {
  return (
    <div
      className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/5"
      style={{ background: 'linear-gradient(135deg, #171a21 0%, #0d0e12 100%)' }}
    >
      {/* Diagonal accent band */}
      <span
        className="pointer-events-none absolute -right-6 -top-8 h-[160%] w-24 rotate-[18deg]"
        style={{ backgroundColor: `${post.accent}12` }}
      />
      {/* Accent baseline */}
      <span
        className="pointer-events-none absolute bottom-0 left-0 h-1 w-full"
        style={{
          background: `linear-gradient(90deg, ${post.accent} 0%, transparent 70%)`,
        }}
      />
      {/* Oversized ghost icon, cropped at the corner */}
      <span className="pointer-events-none absolute -bottom-7 -right-5 rotate-[-10deg] opacity-[0.16]">
        <post.icon size={130} color={post.accent} strokeWidth={1.5} />
      </span>
      {/* Title lines */}
      <div className="absolute left-5 top-5 leading-tight">
        {post.lines.map((line) => (
          <p
            key={line.text}
            className="text-[20px] font-bold uppercase tracking-[0.1em] sm:text-[22px]"
            style={{ color: line.color }}
          >
            {line.text}
          </p>
        ))}
      </div>
      {/* Full-color icon anchor */}
      <span className="absolute bottom-4 left-5">
        <post.icon size={22} color={post.iconColor} strokeWidth={1.5} />
      </span>
    </div>
  )
}

export default function Blogs() {
  return (
    <section id="blogs" className="py-14 md:py-20">
      <SectionHeading
        title="Blog"
        intro="I write articles to reinforce my knowledge and help out others who might be building something similar."
      />
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((post, index) => (
          <Reveal key={post.title} delay={(index % 3) * 0.08}>
          <article
            className="noise-overlay group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#131419] p-4 transition-colors hover:border-white/25 sm:p-5"
          >
            <PostCover post={post} />
            <h3 className="mt-5 line-clamp-2 text-[18px] font-bold uppercase leading-snug tracking-wide text-white/95">
              {post.title}
            </h3>
            <div className="mt-auto flex items-center justify-between pt-6">
              <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-white/45">
                {post.date}
              </span>
              <a
                href="#"
                aria-label={`Read ${post.title}`}
                className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/85 transition-all hover:scale-105 hover:text-white group-hover:border-white/30"
              >
                <ArrowRight className="h-4.5 w-4.5" strokeWidth={2} />
              </a>
            </div>
          </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a href="#" className={solidButtonClass}>
          More Blogs
        </a>
      </div>
    </section>
  )
}
