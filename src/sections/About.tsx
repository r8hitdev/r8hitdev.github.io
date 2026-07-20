import { Reveal } from '../components/motion'
import { SectionHeading } from '../components/ui'

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20">
      <SectionHeading
        title="About Me"
        intro="The person behind the projects — and what it's like to work with me."
      />
      <Reveal className="mx-auto max-w-4xl">
        <p className="text-[22px] font-semibold leading-[1.6] text-white/60 sm:text-[26px] md:text-[30px]">
          I'm a <span className="text-white">freelance developer</span> who takes
          products from the first call to{' '}
          <span className="text-white">production</span> — websites, dashboards, and
          the backends behind them. Clients come back for scopes{' '}
          <span className="text-white">agreed in writing</span>, a preview link in{' '}
          <span className="text-white">week one</span>, honest updates every week,
          and code the <span className="text-white">next developer</span> can pick
          up without me in the room.
        </p>
        <p className="mt-8 text-[22px] font-semibold leading-[1.6] text-white/60 sm:text-[26px] md:text-[30px]">
          No agencies, no hand-offs, no surprises — just{' '}
          <span className="text-white">one person</span> who treats your product
          like it ships tomorrow.
        </p>
      </Reveal>
    </section>
  )
}
