import type { ReactNode } from 'react'
import { ParallaxY } from './motion'

export const cardClass =
  'rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-6'

export const solidButtonClass =
  'inline-flex items-center justify-center rounded-xl border border-white/15 bg-[#0d0d10] px-8 py-3.5 text-base font-bold text-white shadow-[0_0_16px_rgba(255,255,255,0.04)] transition-all hover:border-white/35 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]'

export function SectionLabel({
  children,
  align = 'center',
}: {
  children: ReactNode
  align?: 'center' | 'start'
}) {
  return (
    <div
      className={`flex items-center gap-2 text-[13px] uppercase tracking-[0.22em] text-white/70 ${
        align === 'center' ? 'justify-center' : 'justify-start'
      }`}
    >
      <span>{children}</span>
    </div>
  )
}

export function SectionHeading({ title, intro }: { title: string; intro?: string }) {
  return (
    <ParallaxY range={34} className="mb-10 text-center md:mb-14">
      <h2 className="font-display text-[64px] uppercase leading-none tracking-wide text-[#e8e4da] sm:text-[84px] md:text-[100px] xl:text-[112px]">
        {title}
      </h2>
      {intro && (
        <p className="mx-auto mt-5 max-w-md text-[13px] uppercase leading-[1.9] tracking-[0.18em] text-white/60 md:text-sm xl:max-w-lg xl:text-base">
          {intro}
        </p>
      )}
    </ParallaxY>
  )
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="liquid-glass rounded-full px-3 py-1 text-[13px] tracking-wide text-white/80">
      {children}
    </span>
  )
}
