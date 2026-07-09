import { Hero } from '../components/Hero'
import { Problems } from '../components/Problems'
import { Solutions } from '../components/Solutions'
import { HowItWorks } from '../components/HowItWorks'
import { Pricing } from '../components/Pricing'
import { Referral } from '../components/Referral'
import { Clients } from '../components/Clients'
import { About } from '../components/About'
import { FinalCTA } from '../components/FinalCTA'

export function HomePage() {
  return (
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
  )
}
