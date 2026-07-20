'use client'

import { useState } from 'react'
import { ChevronDown, Code2 } from 'lucide-react'
import {
  SiAngular,
  SiCss,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGoogleanalytics,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiSocketdotio,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from '@icons-pack/react-simple-icons'
import { Reveal } from '../components/motion'
import { SectionHeading } from '../components/ui'

const CATEGORIES = ['All', 'Languages', 'Frontend', 'Backend', 'Databases', 'Tools'] as const
type Category = (typeof CATEGORIES)[number]

type Skill = {
  name: string
  color: string
  icon: typeof SiReact
  category: Exclude<Category, 'All'>
}

const SKILLS: Skill[] = [
  { name: 'TypeScript', color: '#3178C6', icon: SiTypescript, category: 'Languages' },
  { name: 'JavaScript', color: '#F7DF1E', icon: SiJavascript, category: 'Languages' },
  { name: 'HTML', color: '#E34F26', icon: SiHtml5, category: 'Languages' },
  { name: 'CSS', color: '#9B7CD8', icon: SiCss, category: 'Languages' },
  { name: 'React', color: '#61DAFB', icon: SiReact, category: 'Frontend' },
  { name: 'Next.js', color: '#FFFFFF', icon: SiNextdotjs, category: 'Frontend' },
  { name: 'Angular', color: '#DD0031', icon: SiAngular, category: 'Frontend' },
  { name: 'Redux', color: '#764ABC', icon: SiRedux, category: 'Frontend' },
  { name: 'Tailwind CSS', color: '#06B6D4', icon: SiTailwindcss, category: 'Frontend' },
  { name: 'Node.js', color: '#5FA04E', icon: SiNodedotjs, category: 'Backend' },
  { name: 'Express', color: '#EDEDED', icon: SiExpress, category: 'Backend' },
  { name: 'NestJS', color: '#E0234E', icon: SiNestjs, category: 'Backend' },
  { name: 'GraphQL', color: '#E10098', icon: SiGraphql, category: 'Backend' },
  { name: 'Socket.io', color: '#EDEDED', icon: SiSocketdotio, category: 'Backend' },
  { name: 'Firebase', color: '#FFCA28', icon: SiFirebase, category: 'Backend' },
  { name: 'Swagger', color: '#85EA2D', icon: SiSwagger, category: 'Backend' },
  { name: 'PostgreSQL', color: '#699EFF', icon: SiPostgresql, category: 'Databases' },
  { name: 'MongoDB', color: '#47A248', icon: SiMongodb, category: 'Databases' },
  { name: 'MySQL', color: '#5C9BD6', icon: SiMysql, category: 'Databases' },
  { name: 'Redis', color: '#FF4438', icon: SiRedis, category: 'Databases' },
  { name: 'Prisma', color: '#8FA6FF', icon: SiPrisma, category: 'Databases' },
  { name: 'Mongoose', color: '#E05252', icon: SiMongoose, category: 'Databases' },
  { name: 'Docker', color: '#2496ED', icon: SiDocker, category: 'Tools' },
  { name: 'Git', color: '#F05032', icon: SiGit, category: 'Tools' },
  { name: 'GitHub', color: '#EDEDED', icon: SiGithub, category: 'Tools' },
  { name: 'Postman', color: '#FF6C37', icon: SiPostman, category: 'Tools' },
  { name: 'npm', color: '#CB3837', icon: SiNpm, category: 'Tools' },
  { name: 'Vite', color: '#646CFF', icon: SiVite, category: 'Tools' },
  { name: 'Linux', color: '#FCC624', icon: SiLinux, category: 'Tools' },
  { name: 'Google Analytics 4', color: '#E37400', icon: SiGoogleanalytics, category: 'Tools' },
]

export default function Skills() {
  const [category, setCategory] = useState<Category>('All')
  const [open, setOpen] = useState(false)

  const visible = category === 'All' ? SKILLS : SKILLS.filter((s) => s.category === category)

  return (
    <section id="skills" className="py-14 md:py-20">
      <SectionHeading title="Skills" intro="Explore my skills as a full-stack developer." />
      <Reveal className="noise-overlay relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-8">
        <h3 className="text-xl font-bold tracking-tight text-white/95 md:text-2xl">
          Beyond the Code
        </h3>
        <p className="mt-1.5 text-[15px] text-cyan-100/60 md:text-base">
          The languages, frameworks, and tools I reach for every day.
        </p>

        {/* Filter dropdown */}
        <div className="relative mt-5 inline-block">
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-[#101014] px-4 py-2.5 text-[15px] text-white/85 transition-colors hover:border-white/25"
          >
            <Code2 className="h-4 w-4" strokeWidth={1.5} />
            Filtered By: {category}
            <ChevronDown
              className={`h-4 w-4 text-white/50 transition-transform ${open ? 'rotate-180' : ''}`}
              strokeWidth={1.5}
            />
          </button>
          {open && (
            <div className="absolute left-0 top-full z-10 mt-2 w-44 overflow-hidden rounded-xl border border-white/10 bg-[#101014] py-1 shadow-xl shadow-black/50">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat)
                    setOpen(false)
                  }}
                  className={`block w-full px-4 py-2 text-left text-[15px] transition-colors hover:bg-white/5 ${
                    cat === category ? 'text-white' : 'text-white/60'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Pill cloud */}
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {visible.map((skill) => (
            <span
              key={skill.name}
              className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[14px] font-medium transition-transform duration-200 hover:-translate-y-0.5 hover:scale-105"
              style={{
                color: skill.color,
                borderColor: `${skill.color}59`,
                backgroundColor: '#0e0f13',
                boxShadow: `0 0 16px ${skill.color}1f, inset 0 0 10px ${skill.color}0d`,
              }}
            >
              <skill.icon size={17} color={skill.color} />
              {skill.name}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
