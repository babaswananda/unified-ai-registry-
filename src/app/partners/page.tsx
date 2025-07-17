"use client";

import { Button } from "@/components/ui/Button";
import ParticleField from "@/components/ui/ParticleField";
import MorphingBackground from "@/components/ui/MorphingBackground";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Globe, Zap, Users, Building, GraduationCap, Factory } from "lucide-react";

export default function PartnersPage() {
  const partnerTiers = [
    {
      icon: Shield,
      title: "Government & Sovereign Tier",
      subtitle: "Mandate-aligned Partners",
      partners: [
        "Trade Agencies & Chambers",
        "Infrastructure Funds & Public-Private Programs", 
        "National AI & Industrial Strategy Bodies",
        "CBDC-linked Banking Integrations",
        "Defense Supply Chain Operators",
        "Energy & Smart City Consortiums"
      ],
      description: "Built with national digitization mandates in mind — our protocol stack plugs into mission-critical modernization efforts."
    },
    {
      icon: Building,
      title: "Enterprise Tier",
      subtitle: "Corporate Partners",
      partners: [
        "Tier 1 Manufacturers",
        "Multinational Logistics Firms",
        "Commercial Banks & Digital Wallets",
        "Cloud & GPU Infrastructure Providers",
        "Telecom, IoT, and Smart Device Makers",
        "EV, Robotics, and Hardware Innovators"
      ],
      description: "Your company becomes a node in the Agentic Web — with branded agents, infrastructure deployment rights, and licensed AI-native services."
    },
    {
      icon: Zap,
      title: "AI / Tech Innovators",
      subtitle: "Technical Partners",
      partners: [
        "Model Trainers & Open-Weight Labs",
        "AI Phone & Hardware Co-Manufacturers",
        "Headless Compute & Modular Device Makers",
        "On-Chain Identity & DePIN Protocols",
        "VCs & Crypto Ecosystem Infrastructure Funds"
      ],
      description: "We provide the canvas for your agents, apps, and compute endpoints — wrapped in sovereign endpoints powered by TLDs and token-native rails."
    },
    {
      icon: Users,
      title: "Operator-Level Partners",
      subtitle: "Deployment Partners",
      partners: [
        "Localized Web3 + AI + Cloud Agents",
        "Regional Hosting Facilities",
        "Language and Culture-Specific Agent Builders",
        "White-label Handle Providers",
        "Education, Certification & Curriculum Agencies",
        "Trade Show, Exhibitor & B2B Marketplaces"
      ],
      description: "You control territory, deployment, or vertical. We provide the core AI stack and the agentic deployment rights."
    }
  ];

  const partnerBenefits = [
    "Exclusive licensing rights by sector or geography",
    "Branded handle and agent issuance under TLD layer",
    "Co-governance in protocol evolution",
    "Infrastructure revenue shares",
    "Access to early model deployment + hardware priority",
    "Private briefings and deployment toolkits"
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navigation />
      
      {/* Background Effects */}
      <MorphingBackground intensity={0.8} />
      <AnimatedGrid 
        gridSize={100}
        lineColor="rgba(0, 255, 255, 0.03)"
        pulseColor="rgba(0, 255, 255, 0.2)"
        intensity={0.8}
      />
      <ParticleField 
        particleCount={100}
        color="rgba(0, 255, 255, 0.4)"
        darkColor="rgba(0, 255, 255, 0.6)"
      />

      <div className="relative z-10 pt-24">
        {/* Header */}
        <section className="py-24 text-center">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Strategic Partners</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <h1 className="text-6xl lg:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Aligned with Operators,
                </span>
                <br />
                <span className="text-white">Institutions, and Sovereign Infrastructures</span>
              </h1>
              <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                We don't do affiliates. We architect vertical, sovereign partnerships where 
                distribution, deployment, and domain ownership converge.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="py-24">
          <div className="container-max section-padding">
            <div className="space-y-24">
              {partnerTiers.map((tier, index) => (
                <ScrollReveal 
                  key={tier.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={200 + index * 200}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl flex items-center justify-center">
                          <tier.icon className="w-8 h-8 text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white">{tier.title}</h3>
                          <p className="text-cyan-400 text-lg">{tier.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {tier.description}
                      </p>
                      
                      <Button 
                        variant="gradient" 
                        className="bg-gradient-to-r from-cyan-500 to-blue-500 group"
                      >
                        Apply for Partnership
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                    
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                        <h4 className="text-xl font-bold text-cyan-400 mb-6">Partner Types:</h4>
                        <div className="space-y-3">
                          {tier.partners.map((partner, idx) => (
                            <div key={idx} className="flex items-start space-x-3">
                              <span className="text-cyan-400 mt-1">•</span>
                              <span className="text-gray-300">{partner}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Benefits */}
        <section className="py-24 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold mb-6">🏷️ All Partners Gain</h3>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Exclusive access, revenue sharing, and co-governance in the agentic web infrastructure.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerBenefits.map((benefit, index) => (
                <ScrollReveal 
                  key={benefit}
                  direction="up"
                  delay={400 + index * 100}
                >
                  <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    <div className="flex items-start space-x-3">
                      <span className="text-cyan-400 text-xl mt-1">✓</span>
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Marketplace & Directory Integration */}
        <section className="py-24">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold mb-6">🔁 Automatic Ecosystem Integration</h3>
                <p className="text-xl text-gray-400 max-w-4xl mx-auto">
                  Every registration on the Agentic Infrastructure automatically unlocks marketplace and directory access.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollReveal direction="left" delay={400}>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20">
                  <h4 className="text-2xl font-bold text-green-400 mb-6">🛍️ AI Marketplace Access</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Every handle becomes a sellable agent, product, or service</li>
                    <li>• List agent-powered services (chat, tasking, scheduling, automation)</li>
                    <li>• Sell digital goods, tools, courses, or consultations</li>
                    <li>• Enable token-gated or fiat payment models</li>
                    <li>• No code. Fully agent-ready commerce backend</li>
                  </ul>
                  <p className="text-green-400 font-semibold mt-6">
                    Turn your handle into a storefront in the agent economy.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={600}>
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
                  <h4 className="text-2xl font-bold text-purple-400 mb-6">📇 AI Directory Inclusion</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Instantly listed in the Agentic Web Directory</li>
                    <li>• Indexed by function, sector, language, geography, and vertical</li>
                    <li>• Discoverable by other users, buyers, government orgs, and partners</li>
                    <li>• Reputation layer + verified status baked in</li>
                    <li>• Searchable by keywords, credentials, or capabilities</li>
                  </ul>
                  <p className="text-purple-400 font-semibold mt-6">
                    The new Yellow Pages of intelligent agents — cross-industry, trust-layered, and marketplace-linked.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-24">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-8">🔑 Partnership Onboarding</h3>
                <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
                  Want to join the Operator Web?
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    variant="gradient" 
                    size="lg" 
                    className="group bg-gradient-to-r from-cyan-500 to-blue-500 px-12 py-6 text-xl"
                  >
                    Apply to Partner
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="bg-black/50 border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 px-12 py-6 text-xl"
                  >
                    Schedule Partner Strategy Call
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
