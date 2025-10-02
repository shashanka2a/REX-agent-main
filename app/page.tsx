import { DynamicNavbar } from './components/DynamicNavbar'
import { ScrollProgressIndicator } from './components/ScrollProgressIndicator'
import { HeroSection } from './components/HeroSection'
import { FeaturesGrid } from './components/FeaturesGrid'
import { UseCasesCarousel } from './components/UseCasesCarousel'
import { DeveloperExperienceSection } from './components/DeveloperExperienceSection'
import { CTASection } from './components/CTASection'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white dark">
      <ScrollProgressIndicator />
      <DynamicNavbar />
      <HeroSection />
      <FeaturesGrid />
      <UseCasesCarousel />
      <DeveloperExperienceSection />
      <CTASection />
      <Footer />
    </div>
  )
}
