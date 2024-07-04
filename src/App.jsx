import CTA from './components/CTA'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Partners from './components/Partners'
import Projects from './components/Projects'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Values from './components/Values'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Partners />
        <Services />
        <Values />
        <Projects />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
