import type { ComponentType } from 'react'
import { Link, Play } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'
import { Reveal } from '../components/motion'
import { CaseStudyButton, type CaseStudy } from '../components/CaseStudy'
import { SectionHeading, solidButtonClass } from '../components/ui'

type Project = {
  name: string
  description: string
  tags: string[]
  color: string
  caseStudy?: CaseStudy
  github?: string
  live?: string
  demo?: string
}

const PROJECTS: Project[] = [
  {
    name: 'Parkcade',
    description:
      'A real-time parking management system with role-based access and the booking logic behind slot reservations. Redis caching and tuned PostgreSQL queries keep slot management responsive under concurrent load, while OpenFGA enforces who can book, manage, and audit every slot.',
    tags: ['NODE.JS', 'OPENFGA', 'REDIS', 'POSTGRESQL', 'PRISMA', 'DOCKER'],
    color: '#8B5CF6',
    github: 'https://github.com/r8hitpatil/Parkcade',
    demo: 'https://github.com/r8hitpatil/Parkcade/tree/main/Demo',
    caseStudy: {
      name: 'Parkcade',
      challenge: [
        'Slot reservations had to stay consistent under heavy concurrent load.',
        'Access had to be enforced at the API — not just hidden in the UI.',
        'Booking, managing, and auditing each needed distinct, provable permissions.',
      ],
      solutionIntro:
        'Built the real-time booking backend and access layer end to end.',
      features: [
        'Role-based access with OpenFGA',
        'Real-time slot reservation & booking logic',
        'Redis-cached, concurrency-safe slot management',
        'Tuned PostgreSQL queries via Prisma',
        'Dockerized deployment',
      ],
      techStack: ['Node.js', 'OpenFGA', 'Redis', 'PostgreSQL', 'Prisma', 'Docker'],
      impact: [
        'Slot management stays responsive under concurrent load.',
        'Every action is permission-checked and auditable at the API.',
      ],
    },
  },
  {
    name: 'QuizForge',
    description:
      'A serverless quiz generator that uses Google Generative AI to create assessments from a single user prompt. It processes topics in the background using an event queue, providing a scalable solution for classrooms and teams — Firebase handles hosting and real-time result sync.',
    tags: ['GENERATIVE AI', 'FIREBASE', 'REACT', 'JAVASCRIPT'],
    color: '#22D3EE',
    github: 'https://github.com/r8hitpatil/QuizForge-GenAI-quiz-app',
    live: 'https://quiz-gen-ai-app.web.app/',
    caseStudy: {
      name: 'QuizForge',
      challenge: [
        'Generate full assessments from a single user prompt.',
        'Absorb unpredictable AI processing time without blocking users.',
        'Scale for classrooms and teams on a serverless budget.',
      ],
      solutionIntro:
        'Built a serverless generator with background processing and real-time sync.',
      features: [
        'AI assessment generation from one prompt',
        'Background topic processing via an event queue',
        'Real-time result sync',
        'Firebase hosting & auth',
      ],
      techStack: ['Generative AI', 'Firebase', 'React', 'JavaScript'],
      impact: [
        'Scales for classrooms and teams without dedicated servers.',
        'Results land the moment generation finishes — no polling.',
      ],
    },
  },
  {
    name: 'Pulseboard',
    description:
      'A real-time analytics dashboard streaming events over WebSockets with room-based channels, offering usage trends, uptime monitoring, and anomaly flags per workspace. A layered cache — CDN edge, in-memory, then MongoDB — keeps traffic spikes away from the database.',
    tags: ['NESTJS', 'SOCKET.IO', 'MONGODB', 'REDIS', 'TAILWIND CSS'],
    color: '#34D399',
    caseStudy: {
      name: 'Pulseboard',
      challenge: [
        'Stream live events to many workspaces without hammering the database.',
        'Keep dashboards responsive during traffic spikes.',
        'Isolate each workspace’s data across shared channels.',
      ],
      solutionIntro:
        'Built the real-time streaming backend and the layered caching in front of it.',
      features: [
        'WebSocket event streaming with room-based channels',
        'Usage trends & uptime monitoring',
        'Per-workspace anomaly flags',
        'Layered cache — CDN edge → in-memory → MongoDB',
      ],
      techStack: ['NestJS', 'Socket.io', 'MongoDB', 'Redis', 'Tailwind CSS'],
      impact: [
        'Traffic spikes stay off the database.',
        'Each workspace sees isolated, real-time metrics.',
      ],
    },
  },
]

type ActionIcon = ComponentType<{
  className?: string
  strokeWidth?: number
  fill?: string
}>

function IconAction({
  icon: Icon,
  label,
  href,
  filled,
}: {
  icon: ActionIcon
  label: string
  href: string
  filled?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-transform hover:scale-110 sm:h-14 sm:w-14"
    >
      <Icon
        className="h-5 w-5 sm:h-6 sm:w-6"
        strokeWidth={2}
        {...(filled ? { fill: 'currentColor' } : {})}
      />
    </a>
  )
}

function BrowserMock({ color }: { color: string }) {
  return (
    <div className="relative">
      {/* Main window */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#15171c] shadow-2xl shadow-black/40">
        <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="ml-3 h-4 flex-1 rounded-full bg-white/5" />
        </div>
        <div className="space-y-3 p-4 md:p-5">
          <div
            className="flex h-20 items-end gap-2 rounded-lg p-3 md:h-24"
            style={{
              background: `linear-gradient(135deg, ${color}33 0%, ${color}0d 60%, transparent 100%)`,
            }}
          >
            {[40, 65, 30, 80, 55, 90, 45, 70].map((height, i) => (
              <span
                key={i}
                className="w-full rounded-sm"
                style={{ height: `${height}%`, backgroundColor: `${color}59` }}
              />
            ))}
          </div>
          <div className="h-2 w-3/4 rounded-full bg-white/10" />
          <div className="h-2 w-1/2 rounded-full bg-white/[0.06]" />
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="space-y-2 rounded-lg border border-white/5 bg-white/[0.03] p-3">
                <span
                  className="block h-2 w-2 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-1.5 w-full rounded-full bg-white/10" />
                <div className="h-1.5 w-2/3 rounded-full bg-white/[0.06]" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Floating mini card */}
      <div className="absolute -bottom-5 -left-4 hidden w-36 rounded-lg border border-white/10 bg-[#101014] p-3 shadow-xl shadow-black/50 sm:block">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
          <div className="h-1.5 flex-1 rounded-full bg-white/10" />
        </div>
        <div className="mt-2 h-1.5 w-3/4 rounded-full bg-white/[0.08]" />
        <div className="mt-2 h-1.5 w-1/2 rounded-full bg-white/[0.06]" />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-14 md:py-20">
      <SectionHeading
        title="Projects"
        intro="Backends I own from API design through to the database — with the frontends that put them to work."
      />
      <div className="space-y-5 md:space-y-6">
        {PROJECTS.map((project, index) => (
          <Reveal key={project.name}>
          <article
            className="grid grid-cols-1 items-center gap-8 rounded-3xl border border-white/5 bg-[#101014] p-6 md:p-10 lg:grid-cols-2 lg:gap-12"
          >
            <div className={index % 2 === 1 ? 'lg:order-2' : undefined}>
              <div className="flex items-center gap-4">
                {project.caseStudy && (
                  <CaseStudyButton study={project.caseStudy} />
                )}
                {project.github && (
                  <IconAction
                    icon={SiGithub}
                    label={`${project.name} on GitHub`}
                    href={project.github}
                  />
                )}
                {project.live && (
                  <IconAction
                    icon={Link}
                    label={`${project.name} live site`}
                    href={project.live}
                  />
                )}
                {project.demo && (
                  <IconAction
                    icon={Play}
                    label={`${project.name} demo`}
                    href={project.demo}
                    filled
                  />
                )}
              </div>
              <h3 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">
                {project.name}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-[1.7] text-white/50 sm:text-[17px]">
                {project.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[15px] font-bold tracking-[0.08em] text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className={index % 2 === 1 ? 'lg:order-1' : undefined}>
              <BrowserMock color={project.color} />
            </div>
          </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-8 flex justify-center md:mt-10">
        <a
          href="https://github.com/r8hitpatil?tab=repositories"
          target="_blank"
          rel="noreferrer noopener"
          className={solidButtonClass}
        >
          Show Me All Projects
        </a>
      </div>
    </section>
  )
}
