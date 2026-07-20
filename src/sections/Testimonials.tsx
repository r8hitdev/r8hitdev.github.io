import { Reveal } from '../components/motion'
import { SectionHeading } from '../components/ui'

type Testimonial = {
  quote: string
  name: string
  role: string
}

const ROW_ONE: Testimonial[] = [
  {
    quote:
      "Rohit reshaped our image with a degree of finesse and vision that surpassed what we'd hoped for. The process felt graceful, and the outcomes speak for themselves.",
    name: 'Elena Brooks',
    role: 'Creative Director @ Halcyon',
  },
  {
    quote:
      'Rohit migrated our entire public site to server-side rendering without a single broken URL. Page loads dropped to one request each, and the analytics finally separate staging from production.',
    name: 'Priya Nair',
    role: 'Engineering Lead @ Shellel',
  },
  {
    quote:
      'The booking backend survived our launch-day spike without a hiccup. The layered caching Rohit designed meant the database barely noticed the traffic.',
    name: 'Daniel Cho',
    role: 'Founder @ Parkcade Pilot',
  },
  {
    quote:
      'Rohit scoped the whole project on our first call, quoted a fixed price, and delivered two days early. Easily the smoothest freelance engagement we have had.',
    name: 'Rohit Verma',
    role: 'Founder @ Craftly Studio',
  },
  {
    quote:
      'We handed Rohit a half-finished codebase and a hard deadline. He untangled it, shipped it, and left documentation our own team still uses every week.',
    name: 'Amelia Hart',
    role: 'CTO @ Loopline',
  },
  {
    quote:
      'Weekly previews meant we always knew exactly where the build stood. No surprises, no jargon — just steady progress until launch day.',
    name: 'Jason Lee',
    role: 'Product Manager @ Northwind',
  },
]

const ROW_TWO: Testimonial[] = [
  {
    quote:
      'Our landing page went from pretty to profitable. Rohit rebuilt it with real attention to speed, and conversions climbed within the first month.',
    name: 'Sofia Marin',
    role: 'Marketing Lead @ Brightline',
  },
  {
    quote:
      'Rohit connected three third-party APIs that our previous contractor called impossible. Everything syncs quietly in the background, exactly as promised.',
    name: 'Arjun Patel',
    role: 'Co-founder @ Stackline',
  },
  {
    quote:
      'The reporting dashboard Rohit built saves our team a full day every week. It just works — and when we asked for changes, they shipped within days.',
    name: 'Grace Kim',
    role: 'Operations @ Fernwood',
  },
  {
    quote:
      'From first call to launched MVP in six weeks. Rohit flagged risks early, suggested cheaper alternatives, and never missed a check-in.',
    name: 'Tom Becker',
    role: 'Founder @ Quartershift',
  },
  {
    quote:
      'As a designer, I dread handoffs. Rohit implemented every screen pixel-perfect and even caught inconsistencies in my own files.',
    name: 'Nadia Rahman',
    role: 'Design Lead @ Studio Palette',
  },
  {
    quote:
      "We've kept Rohit on retainer for a year now. Same reliability on week fifty as on week one — that's rarer than any tech skill.",
    name: 'Leo Fontaine',
    role: 'CEO @ Meridian Labs',
  },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

function TestimonialCard({
  testimonial,
  hidden,
}: {
  testimonial: Testimonial
  hidden?: boolean
}) {
  return (
    <figure
      aria-hidden={hidden}
      className="noise-overlay relative flex w-[340px] shrink-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101014] p-6 sm:w-[400px] sm:p-7"
    >
      <span className="font-display text-5xl leading-[0.6] text-white/90">“</span>
      <blockquote className="mt-5 flex-1 text-[14.5px] leading-[1.75] text-white/70 sm:text-[15px]">
        {testimonial.quote}
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-[13px] font-bold text-white/85">
          {initials(testimonial.name)}
        </span>
        <span>
          <span className="block text-[15px] font-bold uppercase tracking-[0.08em] text-white/95">
            {testimonial.name}
          </span>
          <span className="block text-[14px] text-white/50">{testimonial.role}</span>
        </span>
      </figcaption>
    </figure>
  )
}

function MarqueeLane({
  items,
  reverse,
}: {
  items: Testimonial[]
  reverse?: boolean
}) {
  return (
    <div className="marquee relative -mx-4 overflow-hidden sm:-mx-6 md:-mx-10 lg:-mx-14">
      <div className={`flex w-max ${reverse ? 'marquee-track-reverse' : 'marquee-track'}`}>
        {[false, true].map((hidden) => (
          <div key={String(hidden)} className="flex gap-5 pr-5">
            {items.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                hidden={hidden}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent sm:w-28" />
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-14 md:py-20">
      <SectionHeading
        title="Testimonials"
        intro="A few words from the people I've built with."
      />
      <Reveal className="space-y-5">
        <MarqueeLane items={ROW_ONE} />
        <MarqueeLane items={ROW_TWO} reverse />
      </Reveal>
    </section>
  )
}
