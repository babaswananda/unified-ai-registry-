"use client";

import { ArrowRight } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { Button } from "@/components/ui/Button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import NewsTicker from "@/components/ui/NewsTicker";

export default function UnifiedLandingPage() {

  const tickerItems = [
    "detroit.aiagents - $0",
    "assistant.aiagents - $200",
    "guardian.aiagents - $200", 
    "operator.aiagents - $150",
    "educator.aiagents - $200",
    "stream.aiagents - $200",
    "retail.aiagents - $200",
    "finance.aiagents - $200",
    "manufacturing.aifactory - $100",
    "blockchain.devcommunity - $75",
    "protocol.agenticweb - $299",
    "infrastructure.newinternet - $399"
  ];

  const brandPillars = [
    { emoji: "🤖", title: "Agent-Native", desc: "Every prompt leads to real-world action" },
    { emoji: "🏛️", title: "Sovereign", desc: "Decentralized, crypto-native governance" },
    { emoji: "🌐", title: "Protocol-First", desc: "Build-once, deploy-everywhere" },
    { emoji: "🇺🇸", title: "Policy-Backed", desc: "Trump-Era Reshoring Mandates on tech, labor, and sovereignty" }
  ];

  const targetAudience = [
    "Government agencies seeking AI-powered infrastructure for public services",
    "Educational institutions implementing AI-driven learning and administrative systems",
    "Manufacturing companies deploying AI for production optimization and supply chain management",
    "Healthcare organizations integrating AI for patient care and operational efficiency",
    "Financial institutions adopting AI for fraud detection and customer service",
    "Creative agencies leveraging AI for content generation and client solutions"
  ];

  const launchAssets = [
    { asset: "detroit.aiagents", description: "Primary registry handle for Detroit-based AI infrastructure", price: "$0" },
    { asset: "assistant.aiagents", description: "Personal AI assistant deployment handles", price: "$200" },
    { asset: "guardian.aiagents", description: "Security and monitoring AI agent handles", price: "$200" },
    { asset: "operator.aiagents", description: "Infrastructure operator certification handles", price: "$150" },
    { asset: "educator.aiagents", description: "Educational AI system deployment handles", price: "$200" },
    { asset: "stream.aiagents", description: "Real-time data processing AI handles", price: "$200" },
    { asset: "retail.aiagents", description: "Commerce and retail AI integration handles", price: "$200" },
    { asset: "finance.aiagents", description: "Financial services AI deployment handles", price: "$200" },
    { asset: "manufacturing.aifactory", description: "Industrial AI and automation handles", price: "$100" },
    { asset: "blockchain.devcommunity", description: "Blockchain development community access", price: "$75" },
    { asset: "protocol.agenticweb", description: "Agentic web protocol implementation rights", price: "$299" },
    { asset: "infrastructure.newinternet", description: "Next-generation internet infrastructure handles", price: "$399" }
  ];

  const irlFeatures = [
    "Sovereign compute clusters with local data residency",
    "AI-native identity and authentication systems",
    "Decentralized governance protocols for public sector use",
    "Edge-first deployment for real-world sensor integration",
    "Crypto-native billing and resource allocation",
    "Open-source toolchain for transparency and auditability"
  ];

  const hardwareSuite = [
    { emoji: "📱", name: "AI Kiosks", desc: "Public service terminals with local AI processing" },
    { emoji: "🚗", name: "Vehicle Integration", desc: "Automotive AI systems for smart transportation" },
    { emoji: "🏭", name: "Industrial Sensors", desc: "Manufacturing and infrastructure monitoring" },
    { emoji: "🏥", name: "Healthcare Devices", desc: "Medical AI systems for patient care" },
    { emoji: "🏫", name: "Educational Terminals", desc: "Learning systems for schools and universities" },
    { emoji: "🏛️", name: "Government Stations", desc: "Public sector service delivery systems" }
  ];

  const trumpMandates = [
    "Reshoring of critical technology infrastructure to American soil",
    "Reduction of dependency on foreign cloud providers for government data",
    "Investment in domestic AI capabilities for national security",
    "Support for American manufacturing and technology sovereignty",
    "Implementation of secure, auditable AI systems for public sector use"
  ];

  return (
    <div className="relative">
      <ConditionalBackground 
        intensity={0.3}
        particleCount={20}
        floatingCount={0}
        gridSize={120}
      />
      
      {/* News Ticker */}
      <div className="relative z-20 pt-20">
        <NewsTicker items={tickerItems} speed={60} className="mb-8" />
      </div>
      
      {/* Hero Section */}
      <section className="relative z-20 py-16 text-center">
        <div className="container-max section-padding">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-black/50 border border-orange-500/30 px-6 py-3 rounded-full mb-8">
              <span className="text-2xl">🤖</span>
              <span className="text-orange-400 font-bold">AI Agents IRL</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-white to-red-400 bg-clip-text text-transparent">
              AI Agents IRL
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-4 leading-relaxed">
            Built in Detroit. Backed by policy. Powered by agents.
          </p>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            The intelligent infrastructure rollout begins city by city, country by country. This is a global launch—anchored in Detroit, designed to scale worldwide.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-orange-400 mb-12">Core Principles</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {brandPillars.map((pillar, index) => (
              <div
                key={index}
                className="relative p-6 rounded-2xl border border-orange-500/20 bg-gradient-to-br from-orange-500/10 to-red-500/10 transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{pillar.emoji}</div>
                <h4 className="text-lg font-bold text-white mb-2">{pillar.title}</h4>
                <p className="text-gray-300 text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center space-y-4 mt-12">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 text-lg font-bold rounded-full">
              🚀 Deploy IRL Infrastructure
            </Button>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" className="border border-blue-500 text-blue-400 hover:bg-blue-500/10">
                📋 Pre-register
              </Button>
              <Button variant="ghost" className="border border-purple-500 text-purple-400 hover:bg-purple-500/10">
                🎬 Watch "The Agent Chair"
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <h3 className="text-3xl font-bold text-center text-cyan-400 mb-12">🎯 Who This Is For</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetAudience.map((audience, index) => (
              <button
                key={index}
                className="w-full p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border-l-4 border-cyan-500 text-left transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-cyan-500/30 rounded-full flex items-center justify-center text-xl">
                    {index === 0 ? "🏛️" : index === 1 ? "🎓" : index === 2 ? "🏭" : index === 3 ? "🏥" : index === 4 ? "🏦" : "🎨"}
                  </div>
                  <span className="text-white font-semibold">{audience}</span>
                </div>
              </button>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl font-bold text-white">
              Don't just use AI. <span className="text-cyan-400">Own your role in it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Launch Tools & Registry Handles */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <h3 className="text-3xl font-bold text-center text-orange-400 mb-12">🔥 Launch Tools & Registry Handles</h3>
          <div className="space-y-4 max-w-5xl mx-auto">
            {launchAssets.map((asset, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-orange-500/20 hover:bg-orange-500/5 transition-colors">
                <div className="flex items-center space-x-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <div className="font-mono text-orange-400 font-bold">{asset.asset}</div>
                    <div className="text-gray-400 text-sm">{asset.description}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-xl">{asset.price}</div>
                  <Button className="bg-orange-500 hover:bg-orange-400 text-white px-4 py-1 text-sm mt-2">
                    Buy Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Network */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <h3 className="text-3xl font-bold text-center text-blue-400 mb-12">🧱 Infrastructure Network</h3>

          <div className="relative mb-16">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-xl font-bold text-white">IRL</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-16">
              {irlFeatures.slice(0, 6).map((feature, index) => (
                <div key={index} className="relative">
                  <GlowingEffect
                    variant="blue"
                    spread={20}
                    glow={true}
                    disabled={false}
                    proximity={30}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <div className="bg-black/70 border border-blue-500/30 rounded-lg p-4 text-center hover:bg-blue-500/10 transition-colors">
                    <div className="text-blue-400 font-semibold text-sm">{feature}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Suite */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <h3 className="text-3xl font-bold text-center text-pink-400 mb-12">🛠️ Hardware Suite</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareSuite.map((hardware, index) => (
              <div key={index} className="relative group">
                <GlowingEffect
                  variant="pink"
                  spread={25}
                  glow={true}
                  disabled={false}
                  proximity={40}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-pink-500/10 p-8 text-center transform group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 transform group-hover:rotate-12 transition-transform duration-300">{hardware.emoji}</div>
                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">{hardware.name}</h4>
                    <p className="text-gray-300 text-sm mb-6">{hardware.desc}</p>
                    <div className="space-y-2">
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 font-bold">
                        View Specs
                      </Button>
                      <div className="text-pink-400 font-mono text-xs">SKU: {hardware.name.replace(/\s+/g, '').toUpperCase()}-001</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy & Deployment */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Policy Timeline */}
            <div>
              <h3 className="text-3xl font-bold text-red-400 mb-8">🇺🇸 Policy Timeline</h3>
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-blue-500"></div>
                <div className="space-y-8">
                  {trumpMandates.map((mandate, index) => (
                    <div key={index} className="relative pl-16">
                      <div className="absolute left-6 w-4 h-4 bg-red-500 rounded-full border-4 border-black"></div>
                      <div className="bg-black/30 border border-red-500/20 rounded-lg p-4">
                        <div className="text-red-400 font-semibold mb-2">Federal Mandate {index + 1}</div>
                        <p className="text-gray-300 text-sm">{mandate}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Deployment Wizard */}
            <div>
              <h3 className="text-3xl font-bold text-green-400 mb-8">🚀 Deployment Wizard</h3>
              <div className="space-y-6">
                {[
                  { step: 1, title: "Become Operator", desc: "Get certified for infrastructure deployment", icon: "👨‍💻", status: "active" },
                  { step: 2, title: "Launch City", desc: "Deploy city-wide AI infrastructure", icon: "🏙️", status: "pending" },
                  { step: 3, title: "Download Deck", desc: "Get institutional briefing materials", icon: "📊", status: "pending" },
                  { step: 4, title: "Contact Support", desc: "Enterprise rollout assistance", icon: "🤝", status: "pending" }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    {index < 3 && (
                      <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-green-500 to-gray-500"></div>
                    )}

                    <div className={`flex items-start space-x-4 transition-all cursor-pointer ${
                      item.status === 'active' ? 'transform scale-105' : ''
                    }`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 ${
                        item.status === 'active'
                          ? 'bg-green-500 border-green-400 text-white animate-pulse'
                          : 'bg-gray-700 border-gray-500 text-gray-400'
                      }`}>
                        {item.step}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl">{item.icon}</span>
                            <h4 className={`font-bold text-lg ${
                              item.status === 'active' ? 'text-green-400' : 'text-white'
                            }`}>{item.title}</h4>
                          </div>
                          <Button className={`${
                            item.status === 'active'
                              ? 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400'
                              : 'bg-gray-600 cursor-not-allowed'
                          } text-white px-4 py-2 text-sm`}>
                            {item.status === 'active' ? '▶ Start' : '🔒 Locked'}
                          </Button>
                        </div>
                        <p className="text-gray-300 text-sm pl-11">{item.desc}</p>
                        {item.status === 'active' && (
                          <div className="mt-2 pl-11">
                            <div className="w-full bg-gray-700 rounded-full h-2">
                              <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full w-1/3 animate-pulse"></div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-xl font-bold text-white mb-4">
                  AI Agents IRL—the new operational layer for smart societies.
                </p>
                <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 text-lg font-bold rounded-full">
                  🚀 Begin Full Deployment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
