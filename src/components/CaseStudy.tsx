'use client'

import { useEffect, useState } from 'react'
import type { ComponentType } from 'react'
import { BookText, Flame, Layers, TrendingUp, Wrench, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'

export type CaseStudy = {
  /* Card title shown in the modal header. */
  name: string
  /* Bullets for each locked section — kept terse and scannable on purpose. */
  challenge: string[]
  /* One-liner on ownership (backend/frontend), then the feature bullets. */
  solutionIntro: string
  features: string[]
  techStack: string[]
  impact: string[]
}

function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-8 first:mt-0">
      <h3 className="flex items-center gap-2.5 font-display text-[22px] uppercase tracking-wide text-[#e8e4da]">
        <Icon className="h-5 w-5 text-white/50" strokeWidth={1.75} />
        {title}
      </h3>
      <div className="mt-3">{children}</div>
    </section>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[15px] leading-[1.6] text-white/65"
        >
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function CaseStudyModal({
  study,
  onClose,
}: {
  study: CaseStudy
  onClose: () => void
}) {
  const reduceMotion = useReducedMotion()

  /* Close on ESC and lock the page scroll while the modal is open. */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${study.name} case study`}
    >
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />
      <motion.div
        className="noise-overlay relative flex max-h-[86vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101014] shadow-2xl shadow-black/60"
        initial={{ opacity: 0, y: reduceMotion ? 0 : 24, scale: reduceMotion ? 1 : 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: reduceMotion ? 0 : 16, scale: reduceMotion ? 1 : 0.98 }}
        transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-8">
          <h2 className="font-display text-3xl uppercase tracking-wide text-[#e8e4da] md:text-4xl">
            {study.name}
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-colors hover:border-white/30 hover:text-white"
          >
            <X className="h-4.5 w-4.5" strokeWidth={2} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-6 py-6 md:px-8 md:py-7">
          <Section icon={Flame} title="The Challenge">
            <Bullets items={study.challenge} />
          </Section>

          <Section icon={Wrench} title="The Solution & Features">
            <p className="mb-3 text-[15px] leading-[1.6] text-white/70">
              {study.solutionIntro}
            </p>
            <Bullets items={study.features} />
          </Section>

          <Section icon={Layers} title="The Tech Stack">
            <div className="flex flex-wrap gap-2">
              {study.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[13px] font-medium tracking-wide text-white/75"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          <Section icon={TrendingUp} title="The Impact">
            <Bullets items={study.impact} />
          </Section>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* Book-icon trigger that matches the other circular project actions and
   opens the case-study modal. */
export function CaseStudyButton({ study }: { study: CaseStudy }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${study.name} case study`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-transform hover:scale-110 sm:h-14 sm:w-14"
      >
        <BookText className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
      </button>
      <AnimatePresence>
        {open && <CaseStudyModal study={study} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
