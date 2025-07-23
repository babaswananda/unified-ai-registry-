import Navigation from "@/components/Navigation";
import DetroitHeroSection from "@/components/DetroitHeroSection";
import AgentRevolutionSection from "@/components/AgentRevolutionSection";
import StructuredComputeSection from "@/components/StructuredComputeSection";
import HyperlocalHandlesSection from "@/components/HyperlocalHandlesSection";
import InstitutionalMandatesSection from "@/components/InstitutionalMandatesSection";
import HITLSection from "@/components/HITLSection";
import DevCommunitySection from "@/components/DevCommunitySection";
import ForkdSection from "@/components/ForkdSection";
import VibeCoderSection from "@/components/VibeCoderSection";
import AIAgentsDevKitSection from "@/components/AIAgentsDevKitSection";
import UnifiedAIMarketplaceSection from "@/components/UnifiedAIMarketplaceSection";
import UnifiedAIDirectorySection from "@/components/UnifiedAIDirectorySection";
import GMT7Section from "@/components/GMT7Section";
import HardwareSuiteSection from "@/components/HardwareSuiteSection";
import ContractManufacturingSection from "@/components/ContractManufacturingSection";
import AIEmailSection from "@/components/AIEmailSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden relative">
      {/* Background Effects - Same as agents-are-coming */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white dark:bg-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <Navigation />
      <DetroitHeroSection />
      <AgentRevolutionSection />
      <StructuredComputeSection />
      <HyperlocalHandlesSection />
      <InstitutionalMandatesSection />
      <HITLSection />
      <DevCommunitySection />
      <ForkdSection />
      <VibeCoderSection />
      <AIAgentsDevKitSection />
      <UnifiedAIMarketplaceSection />
      <UnifiedAIDirectorySection />
      <GMT7Section />
      <HardwareSuiteSection />
      <ContractManufacturingSection />
      <AIEmailSection />
      <CallToActionSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
