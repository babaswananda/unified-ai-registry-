import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import FeaturesDeepDive from "@/components/FeaturesDeepDive";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Features - Unified AI",
  description: "Explore the powerful features of the Unified AI platform including sovereign hosting, AI agents, crypto-native handles, and modular protocol deployment.",
  keywords: "AI features, sovereign hosting, AI agents, crypto handles, protocol deployment, agentic web",
  viewport: "width=device-width, initial-scale=1",
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-white dark:bg-black" />
      
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container-max section-padding relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
                <span className="text-cyan-400 font-semibold">Platform Features</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Sovereign Infrastructure
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">For the Agentic Web</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                Discover the comprehensive features that make Unified AI the world's first 
                sovereign hosting infrastructure powered by AI agents, crypto-native handles, 
                and modular protocol deployment.
              </p>
            </div>
          </div>
        </section>

        {/* Features Deep Dive */}
        <FeaturesDeepDive />
        
        {/* Additional Features Section */}
        <section className="py-24 bg-gray-50 dark:bg-black/30">
          <div className="container-max section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Why Choose Unified AI?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Built for the future of autonomous internet infrastructure
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Enterprise Ready",
                  description: "Production-grade infrastructure with 99.9% uptime SLA and enterprise security standards.",
                  icon: "🏢"
                },
                {
                  title: "Developer Friendly",
                  description: "Comprehensive APIs, SDKs, and documentation for seamless integration and deployment.",
                  icon: "👨‍💻"
                },
                {
                  title: "Crypto Native",
                  description: "Built-in cryptocurrency billing, tokenized resources, and blockchain-based authentication.",
                  icon: "₿"
                },
                {
                  title: "AI Powered",
                  description: "Intelligent resource allocation, automated scaling, and AI-driven optimization.",
                  icon: "🤖"
                },
                {
                  title: "Global Scale",
                  description: "Multi-cloud deployment across regions with edge computing capabilities.",
                  icon: "🌍"
                },
                {
                  title: "Open Protocol",
                  description: "Interoperable standards and open-source components for maximum flexibility.",
                  icon: "🔓"
                }
              ].map((feature) => (
                <div
                  key={`feature-${feature.title}`}
                  className="bg-white dark:bg-black/50 rounded-2xl p-8 border border-gray-200 dark:border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
