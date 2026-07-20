import { Database, Gauge, Layers, Server, ShieldCheck, Zap } from 'lucide-react'
import { Reveal } from '../components/motion'
import { SectionHeading } from '../components/ui'

const SERVICES = [
  {
    icon: Server,
    title: 'Backend & API Development',
    description:
      'REST and JSON APIs in Node.js and NestJS, designed so each page or client loads from a single request.',
    tags: ['Node.js', 'NestJS', 'REST'],
    wide: true,
  },
  {
    icon: Layers,
    title: 'Full-Stack Web Apps',
    description:
      'React and Angular frontends on one rendering stack — including SSR migrations with client hydration and zero URL changes.',
    tags: ['React', 'Angular', 'SSR'],
  },
  {
    icon: Zap,
    title: 'Real-Time Systems',
    description:
      'WebSocket features with Socket.io and Firebase: live dashboards, room-based messaging, and synced state.',
    tags: ['Socket.io', 'Firebase', 'WebSockets'],
  },
  {
    icon: Database,
    title: 'Database Design & Caching',
    description:
      'PostgreSQL and MongoDB schemas with Prisma or Mongoose, plus layered caches from CDN edge to in-memory.',
    tags: ['PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    icon: ShieldCheck,
    title: 'Auth & Access Control',
    description:
      'Role-based access with OpenFGA and RBAC patterns that are enforced at the API, not just hidden in the UI.',
    tags: ['OpenFGA', 'RBAC', 'JWT'],
  },
  {
    icon: Gauge,
    title: 'Performance & Analytics',
    description:
      'Query tuning for concurrent load, and GA4 wired with environment-specific config so production data stays clean.',
    tags: ['Query Tuning', 'GA4', 'Caching'],
    wide: true,
  },
]

export default function Services() {
  return (
    <section id="services" className="py-14 md:py-20">
      <SectionHeading
        title="Services"
        intro="From API design through to the database — with the polish that keeps it fast in production."
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
        {SERVICES.map((service, index) => (
          <Reveal
            key={service.title}
            delay={(index % 3) * 0.08}
            className={service.wide ? 'lg:col-span-2' : undefined}
          >
          <div
            className="noise-overlay group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25 md:p-7"
          >
            <div className="flex items-start justify-between">
              <span className="text-[30px] font-bold leading-none tracking-tight text-white/15 transition-colors group-hover:text-white/40">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#101014] transition-colors group-hover:border-white/25">
                <service.icon
                  className="h-5 w-5 text-white/70 transition-colors group-hover:text-white"
                  strokeWidth={1.5}
                />
              </span>
            </div>
            <h3 className="mt-6 text-[17px] font-bold tracking-tight text-white/95">
              {service.title}
            </h3>
            <p className="mt-2 flex-1 text-[14px] leading-[1.7] text-white/55 sm:text-[14.5px]">
              {service.description}
            </p>
            <p className="mt-5 text-[11px] uppercase tracking-[0.18em] text-white/35">
              {service.tags.join('  ·  ')}
            </p>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
