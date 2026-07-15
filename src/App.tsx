import { Routes, Route } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { WhatsAppButton } from './components/WhatsAppButton'
import { UrgencyBanner } from './components/UrgencyBanner'
import { HomePage } from './pages/HomePage'
import { ServicePage } from './pages/ServicePage'

export default function App() {
  return (
    <>
      <UrgencyBanner />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicos/:slug" element={<ServicePage />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
