import Navigation from "@/components/Navigation";
import DetroitHeroSection from "@/components/DetroitHeroSection";
import WhoThisIsForSection from "@/components/WhoThisIsForSection";
import AgentRevolutionSection from "@/components/AgentRevolutionSection";
import StructuredComputeSection from "@/components/StructuredComputeSection";
import HyperlocalHandlesSection from "@/components/HyperlocalHandlesSection";
import InstitutionalMandatesSection from "@/components/InstitutionalMandatesSection";
import HITLSection from "@/components/HITLSection";
import DevCommunitySection from "@/components/DevCommunitySection";
import ForkdSection from "@/components/ForkdSection";
import WhyNowSection from "@/components/WhyNowSection";
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
import StickyOperatorCTA from "@/components/ui/StickyOperatorCTA";

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
      <WhoThisIsForSection />
      <AgentRevolutionSection />
      <StructuredComputeSection />
      <HyperlocalHandlesSection />

      {/* Enhanced: Institutional Mandates */}
      <div className="relative bg-gradient-to-b from-black via-gray-900 to-black">
        <InstitutionalMandatesSection />
      </div>

      <HITLSection />
      <DevCommunitySection />

      {/* Featured Protocol Drop */}
      <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-y border-orange-500/20">
        <ForkdSection />
      </div>

      <VibeCoderSection />
      <AIAgentsDevKitSection />
      <UnifiedAIMarketplaceSection />
      <UnifiedAIDirectorySection />

      {/* Enhanced: GMT-7 */}
      <div className="relative overflow-hidden bg-gradient-to-b from-red-900/20 via-black to-orange-900/20">
        <GMT7Section />
      </div>

      <HardwareSuiteSection />
      <ContractManufacturingSection />

      <AIEmailSection />
      <WhyNowSection />
      <CallToActionSection />
      <Footer />
      <ScrollToTop />
      <StickyOperatorCTA />
    </main>
  );
}
