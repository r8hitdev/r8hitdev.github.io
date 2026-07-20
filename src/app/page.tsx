import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import About from '../sections/About'
import Testimonials from '../sections/Testimonials'
import Blogs from '../sections/Blogs'
import Contact from '../sections/Contact'
import Services from '../sections/Services'
import Skills from '../sections/Skills'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] px-4 py-6 text-white antialiased sm:px-6 sm:py-8 md:px-10 md:py-10 lg:px-14">
      <div className="mx-auto max-w-6xl xl:max-w-[1400px]">
        <Hero />
        <Projects />
        <About />
        <Testimonials />
        <Blogs />
        <Contact />
        <Services />
        <Skills />
        <footer className="flex flex-col items-center gap-2 border-t border-white/10 pt-8 pb-4 text-center">
          <p className="text-[13px] uppercase tracking-[0.22em] text-white/50">
            Rohit Patil
          </p>
          <p className="text-[14px] text-white/40">
            © 2026 Rohit Patil · Built with Next.js, TypeScript & Tailwind CSS
          </p>
        </footer>
      </div>
    </main>
  )
}
