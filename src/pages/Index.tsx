import TopBar from "@/components/landing/TopBar";
import HeroSection from "@/components/landing/HeroSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import IndispensableSection from "@/components/landing/IndispensableSection";
import RecipeShowcase from "@/components/landing/RecipeShowcase";
import BonusSection from "@/components/landing/BonusSection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FAQSection from "@/components/landing/FAQSection";
import LandingFooter from "@/components/landing/LandingFooter";

const Index = () => (
  <div className="min-h-screen bg-background">
    <TopBar />
    <HeroSection />
    <BenefitsSection />
    <IndispensableSection />
    <RecipeShowcase />
    <BonusSection />
    <PricingSection />
    <TestimonialsSection />
    <FAQSection />
    <LandingFooter />
  </div>
);

export default Index;
