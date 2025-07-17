"use client";

import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { ArrowRight, Shield, TrendingUp, Globe, Lock, FileText, Calendar } from "lucide-react";

export default function InvestorsPage() {
  const opportunityMetrics = [
    { value: 3400, suffix: "+", label: "TLD Domains Secured" },
    { value: 12, label: "Industry Verticals" },
    { value: 847, label: "Infrastructure Nodes Ready" },
    { value: 99.9, suffix: "%", label: "Uptime SLA" }
  ];

  const stackLayers = [
    {
      title: "Infra Layer",
      description: "Modular Infra-as-a-Service, GPU hosting, crypto compute"
    },
    {
      title: "Agent Layer", 
      description: "AI Handles, personalities, and orchestration"
    },
    {
      title: "Domain Layer",
      description: "3,400+ TLDs as sector-anchored deployment vectors"
    },
    {
      title: "Device Layer",
      description: "AI Phone, Watch, Pods, Glasses, A.I.V.A. Humanoid"
    },
    {
      title: "Protocol Layer",
      description: "A2A, MCP, Signature, Vibe Coder, Token Gateway"
    }
  ];

  const accessTiers = [
    {
      title: "Genesis Circle",
      description: "Ultra Foundational Stakeholders",
      access: "Direct allocation + permanent position",
      highlight: true
    },
    {
      title: "Infrastructure Backers",
      description: "Hardware, GPU, and compute infrastructure",
      access: "Profit-share via hosting layers"
    },
    {
      title: "Protocol Syndicate",
      description: "Token + deployment-based monetization",
      access: "Handle-level minting and utility rights"
    },
    {
      title: "Operator Alliance",
      description: "Operators and builders across sectors",
      access: "Co-deploy, white-label, license"
    },
    {
      title: "Observer Seat",
      description: "For funds, families, or sovereigns",
      access: "Non-voting insight and early reports"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      <ConditionalBackground
        intensity={0.6}
        particleCount={80}
        floatingCount={0}
        gridSize={120}
      />

      <div className="relative z-10 pt-24">
        {/* Header */}
        <section className="py-24 text-center">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Investor Portal</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <h1 className="text-6xl lg:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  The Infrastructure Is Live.
                </span>
                <br />
                <span className="text-white">The Era Has Begun.</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl text-gray-300 mb-8 font-semibold">
                Own the Operating System of the Agentic Web.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-400 leading-relaxed mb-8">
                  We've quietly built the infrastructure stack that redefines the internet. 
                  Modular Infrastructure as a Service, AI-to-AI protocols, headless structured compute, 
                  crypto-native endpoint networks, zero-trust supply chains, and hardware protocol interlock.
                </p>
                <p className="text-2xl text-cyan-400 font-semibold">
                  This is not a pitch deck. This is an open protocol movement backed by real systems,
                  real ownership, and real global opportunity.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Key Metrics */}
        <ScrollReveal direction="up" delay={800}>
          <section className="py-16 bg-white/5 backdrop-blur-sm">
            <div className="container-max section-padding">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {opportunityMetrics.map((metric, index) => (
                  <div key={metric.label}>
                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                      <AnimatedCounter 
                        end={metric.value} 
                        suffix={metric.suffix || ""} 
                      />
                    </div>
                    <div className="text-gray-400 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Investment Opportunity */}
        <section className="py-24">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <h3 className="text-4xl font-bold text-center mb-16">
                📈 The Opportunity
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ScrollReveal direction="left" delay={400}>
                <div>
                  <h4 className="text-2xl font-bold mb-6">How Agentic Infrastructure Unlocks New Markets:</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Agent-as-a-Service (AaaS) across sectors</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Tokenized leasing, licensing, and compute</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Decentralized data control & authentication</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Interoperable identities, devices, and businesses</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>Trade, manufacturing, and defense-grade deployments</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={600}>
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
                  <h4 className="text-2xl font-bold mb-4 text-cyan-400">
                    We are not raising capital. We are granting access.
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    You're not just investing in software. You're positioning yourself inside the core 
                    infrastructure of the next digital civilization — powered by agents, governed by 
                    cryptographic trust, and embedded across every industry via TLD-anchored domains and protocols.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Stack */}
        <section className="py-24 bg-black/30 backdrop-blur-sm">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <h3 className="text-4xl font-bold text-center mb-16">
                🧬 The Stack (Without the Schematics)
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {stackLayers.map((layer, index) => (
                <ScrollReveal 
                  key={layer.title}
                  direction="up"
                  delay={400 + index * 100}
                >
                  <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    <h4 className="text-lg font-bold mb-3 text-cyan-400">{layer.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{layer.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={1000}>
              <div className="text-center mt-12">
                <p className="text-gray-400 italic">
                  All wrapped in IP-light packaging for legal safety.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Access Tiers */}
        <section className="py-24">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold mb-6">🔒 Access Tiers</h3>
                <p className="text-xl text-gray-400">
                  Choose your level. No cold capital. Every tier includes equity alignment + network advantages.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {accessTiers.map((tier, index) => (
                <ScrollReveal 
                  key={tier.title}
                  direction="up"
                  delay={400 + index * 150}
                >
                  <div className={`rounded-2xl p-8 border transition-all duration-300 ${
                    tier.highlight
                      ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-cyan-500/40 hover:border-cyan-500/60'
                      : 'bg-black/30 border-cyan-500/20 hover:border-cyan-500/30'
                  }`}>
                    {tier.highlight && (
                      <div className="text-center mb-4">
                        <span className="bg-cyan-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                          EXCLUSIVE
                        </span>
                      </div>
                    )}
                    <h4 className="text-xl font-bold mb-3 text-cyan-400">{tier.title}</h4>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <p className="text-gray-400 text-sm">{tier.access}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Due Diligence */}
        <section className="py-24 bg-black/30 backdrop-blur-sm">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold mb-6">📂 Due Diligence Vault</h3>
                <p className="text-xl text-gray-400">
                  Secure access to technical overview, asset holdings, and strategic positioning.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: FileText, title: "Technical Overview", desc: "Redacted technical architecture" },
                { icon: Globe, title: "Asset Holdings", desc: "TLD stack, protocol ownership" },
                { icon: TrendingUp, title: "Market Strategy", desc: "Go-to-market and deployment readiness" },
                { icon: Shield, title: "Legal Posture", desc: "Regulatory and compliance framework" },
                { icon: Lock, title: "Security Model", desc: "Infrastructure security and trust" },
                { icon: Calendar, title: "Roadmap", desc: "Development and deployment timeline" }
              ].map((item, index) => (
                <ScrollReveal 
                  key={item.title}
                  direction="up"
                  delay={400 + index * 100}
                >
                  <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    <item.icon className="w-8 h-8 text-cyan-400 mb-4" />
                    <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={1000}>
              <div className="text-center mt-12">
                <p className="text-cyan-400 font-semibold mb-6">
                  Only unlocked after verification. No exceptions.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center">
                <h3 className="text-4xl font-bold mb-8">
                  Ready to Own the Future?
                </h3>
                <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
                  Join the infrastructure that powers the agentic web. Limited access available 
                  for qualified institutional and strategic investors.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Button 
                    variant="gradient" 
                    size="lg" 
                    className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold px-12 py-6 text-xl"
                  >
                    <Lock className="w-6 h-6 mr-3" />
                    Request Access to Vault
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  
                  <Button 
                    variant="secondary" 
                    size="lg"
                    className="bg-black/50 border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 px-12 py-6 text-xl"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Schedule Founder's Briefing
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer Badge */}
        <section className="py-16 border-t border-cyan-500/20">
          <div className="container-max section-padding text-center">
            <ScrollReveal direction="up" delay={200}>
              <a 
                href="/agents-are-coming"
                className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full hover:bg-cyan-500/20 transition-all duration-300"
              >
                <span className="text-2xl">🛰️</span>
                <span className="text-cyan-400 font-medium">Infrastructure Live. AI Agents Deploying.</span>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
