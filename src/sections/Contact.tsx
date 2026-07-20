'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { Reveal } from '../components/motion'
import { SectionHeading, SectionLabel, solidButtonClass } from '../components/ui'

const fieldClass =
  'w-full border-b border-white/15 bg-transparent py-2.5 text-[15px] text-white/90 placeholder:text-white/30 outline-none transition-colors focus:border-white/60'

const labelClass = 'mb-1 block text-[11px] uppercase tracking-[0.18em] text-white/45'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-14 md:py-20">
      <SectionHeading
        title="Contact"
        intro="Tell me about the product you're building — I'll reply within a day."
      />
      <div className="grid grid-cols-1 gap-4 md:gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Reach me card — minimal typographic cover + grain */}
        <Reveal>
        <div
          className="noise-overlay relative flex h-full min-h-[440px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 p-5 md:p-6"
          style={{ background: 'linear-gradient(135deg, #171a21 0%, #0d0e12 100%)' }}
        >
          {/* Diagonal accent band */}
          <span className="pointer-events-none absolute -right-8 -top-10 h-[170%] w-32 rotate-[18deg] bg-emerald-400/[0.06]" />
          {/* Oversized ghost icon, cropped at the corner */}
          <span className="pointer-events-none absolute -bottom-10 -right-8 rotate-[-10deg] text-emerald-400/[0.14]">
            <Mail className="h-44 w-44" strokeWidth={1.2} />
          </span>
          {/* Accent baseline */}
          <span className="pointer-events-none absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-emerald-400 to-transparent" />
          <a
            href="mailto:dev.rohitpatil.25@gmail.com"
            aria-label="Email Rohit Patil"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black transition-transform hover:scale-110 md:right-6 md:top-6"
          >
            <ArrowUpRight className="h-4.5 w-4.5" strokeWidth={2} />
          </a>
          <div className="relative">
            <SectionLabel align="start">Reach Me</SectionLabel>
            <p className="mt-8 text-[26px] font-bold uppercase leading-tight tracking-[0.1em] text-white sm:text-[30px]">
              Got an idea?
            </p>
            <p className="text-[26px] font-bold uppercase leading-tight tracking-[0.1em] text-emerald-400 sm:text-[30px]">
              Let's talk.
            </p>
          </div>
          <div className="relative">
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-white/70" strokeWidth={1.5} />
              <a
                href="mailto:dev.rohitpatil.25@gmail.com"
                className="text-xl tracking-tight text-white transition-colors hover:text-white/80 sm:text-2xl"
              >
                dev.rohitpatil.25@gmail.com
              </a>
            </p>
            <p className="mt-3 flex items-center gap-3">
              <MapPin className="h-4 w-4 text-white/70" strokeWidth={1.5} />
              <span className="text-[15px] text-white/85">
                Pune, India · Remote worldwide
              </span>
            </p>
          </div>
        </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
        <form
          onSubmit={handleSubmit}
          className="noise-overlay relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101014] p-6 md:p-8"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className={labelClass}>
                Your name
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Jane Founder"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@studio.com"
                className={fieldClass}
              />
            </div>
            <div>
              <label htmlFor="budget" className={labelClass}>
                Budget (optional)
              </label>
              <select
                id="budget"
                name="budget"
                defaultValue=""
                className={`${fieldClass} cursor-pointer [color-scheme:dark]`}
              >
                <option value="" disabled hidden>
                  Select a range
                </option>
                <option value="lt-1k">Under $1,000</option>
                <option value="1k-5k">$1,000 – $5,000</option>
                <option value="5k-10k">$5,000 – $10,000</option>
                <option value="gt-10k">$10,000+</option>
              </select>
            </div>
            <div>
              <label htmlFor="deadline" className={labelClass}>
                Deadline (optional)
              </label>
              <input
                id="deadline"
                name="deadline"
                type="date"
                className={`${fieldClass} [color-scheme:dark]`}
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="details" className={labelClass}>
                Project details
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows={4}
                placeholder="What are we building, and what does success look like?"
                className={`${fieldClass} resize-none`}
              />
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between gap-4">
            <button type="submit" className={`${solidButtonClass} group`}>
              Send Message
              <ArrowRight
                className="ml-2.5 h-4.5 w-4.5 transition-transform group-hover:translate-x-1"
                strokeWidth={2}
              />
            </button>
            <p className="hidden text-right text-[12px] leading-[1.6] text-white/40 sm:block">
              No calls until you want one —<br />
              everything starts in writing.
            </p>
          </div>
          {submitted && (
            <p className="mt-5 text-[14px] text-emerald-300/90">
              Thanks — your message is noted. This demo form doesn't send anywhere yet.
            </p>
          )}
        </form>
        </Reveal>
      </div>
    </section>
  )
}
