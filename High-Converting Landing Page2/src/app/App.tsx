import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { TrustSection } from "./components/TrustSection";
import { ProblemSection } from "./components/ProblemSection";
import { SolutionSection } from "./components/SolutionSection";
import { ServicesSection } from "./components/ServicesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { PricingSection } from "./components/PricingSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <Navbar />
      <HeroSection />
      <TrustSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <HowItWorksSection />
      <PricingSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}
