import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DomainRegistrySection from "@/components/DomainRegistrySection";
import ProductGrid from "@/components/ProductGrid";
import FeaturesDeepDive from "@/components/FeaturesDeepDive";
import UnifiedAIComputeSection from "@/components/UnifiedAIComputeSection";
import InfrastructureSection from "@/components/InfrastructureSection";
import PricingSection from "@/components/PricingSection";
import RoadmapSection from "@/components/RoadmapSection";
import FoundingMemberSection from "@/components/FoundingMemberSection";
import DeveloperSection from "@/components/DeveloperSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Effects - Same as agents-are-coming */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <Navigation />
      <HeroSection />
      <DomainRegistrySection />
      <ProductGrid />
      <FeaturesDeepDive />
      <UnifiedAIComputeSection />
      <InfrastructureSection />
      <PricingSection />
      <RoadmapSection />
      <FoundingMemberSection />
      <DeveloperSection />
      <Footer />
    </main>
  );
}
