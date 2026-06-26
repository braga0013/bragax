import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Problems } from './components/Problems'
import { Solutions } from './components/Solutions'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { Referral } from './components/Referral'
import { Clients } from './components/Clients'
import { About } from './components/About'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problems />
        <Solutions />
        <HowItWorks />
        <Pricing />
        <Referral />
        <Clients />
        <About />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
