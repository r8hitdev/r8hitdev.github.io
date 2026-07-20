'use client'

import type { ComponentType, ReactNode } from 'react'
import { useEffect, useRef, useState } from 'react'
import { Linkedin } from 'lucide-react'
import { SiGithub, SiGmail, SiX } from '@icons-pack/react-simple-icons'
import type { MotionValue } from 'motion/react'
import { motion, useReducedMotion, useSpring } from 'motion/react'
import { asset } from '../lib/site'

type SocialIcon = ComponentType<{ className?: string; strokeWidth?: number }>

const SOCIALS: { icon: SocialIcon; label: string; href: string }[] = [
  { icon: SiGithub, label: 'GitHub', href: 'https://github.com/r8hitpatil' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/r8hitpatil' },
  { icon: SiGmail, label: 'Gmail', href: 'mailto:dev.rohitpatil.25@gmail.com' },
  { icon: SiX, label: 'Twitter / X', href: 'https://twitter.com/r8hitpatil' },
]

const springConfig = { stiffness: 55, damping: 18, mass: 0.6 }

// Base drift for a cursor at the viewport edge (px / degrees)...
const BASE_X = 72
const BASE_Y = 52
const BASE_ROTATE = 6
// ...multiplied by up to (1 + PROXIMITY_BOOST) as the cursor nears the image.
const PROXIMITY_BOOST = 2.2

function ParallaxWrapper({
  active,
  x,
  y,
  rotate,
  children,
}: {
  active: boolean
  x: MotionValue<number>
  y: MotionValue<number>
  rotate: MotionValue<number>
  children: ReactNode
}) {
  if (!active) return <div>{children}</div>
  return <motion.div style={{ x, y, rotate }}>{children}</motion.div>
}

export default function Hero() {
  const reduceMotion = useReducedMotion()

  // Motion values in `style` render differently on server vs client (hydration
  // warning), so the parallax is only attached after mount.
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  const cardRef = useRef<HTMLDivElement>(null)
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)
  const rotate = useSpring(0, springConfig)

  // Track the pointer across the whole viewport so the drift never snaps at
  // the hero's boundary; the effect strengthens as the cursor nears the image.
  useEffect(() => {
    if (reduceMotion) return
    function onPointerMove(event: PointerEvent) {
      const nx = event.clientX / window.innerWidth - 0.5
      const ny = event.clientY / window.innerHeight - 0.5

      let boost = 1
      const rect = cardRef.current?.getBoundingClientRect()
      if (rect) {
        const distance = Math.hypot(
          event.clientX - (rect.left + rect.width / 2),
          event.clientY - (rect.top + rect.height / 2),
        )
        const reach = Math.max(rect.width, rect.height)
        boost = 1 + PROXIMITY_BOOST * Math.max(0, 1 - distance / reach)
      }

      x.set(nx * BASE_X * boost)
      y.set(ny * BASE_Y * boost)
      rotate.set(nx * BASE_ROTATE * boost)
    }
    window.addEventListener('pointermove', onPointerMove)
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [reduceMotion, x, y, rotate])

  return (
    <section
      id="top"
      className="flex min-h-[calc(100svh-3rem)] flex-col pt-4 sm:min-h-[calc(100svh-4rem)] md:min-h-[calc(100svh-5rem)] md:pt-8"
    >
      <div className="grid flex-1 grid-cols-1 content-center items-center gap-6 md:gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-display text-[52px] uppercase leading-none tracking-wide text-[#e8e4da] sm:text-7xl lg:text-[88px] xl:text-[104px]">
            Hi, I'm <span className="whitespace-nowrap">Rohit Patil!</span>
          </h1>
          <p className="mt-5 max-w-3xl text-[15px] leading-[1.8] text-white/60 md:text-base xl:mt-7 xl:text-lg">
            A Pune-based backend engineer shipping production services in Node.js, NestJS,
            and PostgreSQL. Comfortable with RBAC, Redis caching, Prisma, and Docker — I
            own a backend from API design through to the database, and ship frontends in
            React and Angular when the product calls for it.
          </p>
        </motion.div>

        {/* Photo card: spring parallax toward the cursor + slow idle float */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, delay: reduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ParallaxWrapper active={mounted && !reduceMotion} x={x} y={y} rotate={rotate}>
            <motion.div
              ref={cardRef}
              animate={mounted && !reduceMotion ? { y: [0, -8, 0] } : undefined}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="noise-overlay relative min-h-[380px] overflow-hidden rounded-2xl bg-[#324444] sm:min-h-[440px] xl:min-h-[540px]"
            >
              <img
                src={asset('/profile.png')}
                alt="Portrait of Rohit Patil"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            </motion.div>
          </ParallaxWrapper>
        </motion.div>
      </div>

      {/* Socials pinned to the bottom-left of the hero */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-4 pt-10 pb-2"
      >
        {SOCIALS.map(({ icon: Icon, label, href }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            {...(href.startsWith('http')
              ? { target: '_blank', rel: 'noreferrer' }
              : {})}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-[0_4px_16px_rgba(0,0,0,0.4)] transition-transform hover:scale-110 sm:h-14 sm:w-14 xl:h-16 xl:w-16"
          >
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 xl:h-7 xl:w-7" strokeWidth={2} />
          </a>
        ))}
      </motion.div>
    </section>
  )
}
