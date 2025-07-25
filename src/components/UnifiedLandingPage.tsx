"use client";

import { ArrowRight, Shield, Zap, Users, Building, Factory, Heart, DollarSign, ShoppingCart, Globe, Smartphone, Monitor, CreditCard, Server } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { Button } from "@/components/ui/Button";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import NewsTicker from "@/components/ui/NewsTicker";

export default function UnifiedLandingPage() {
  const tickerItems = [
    "detroit.aiagents - FREE for Detroit",
    "assistant.aiagents - $200",
    "guardian.aiagents - $200", 
    "automotive.madeindetroit - $50",
    "frontend.vibecoder - $75",
    "operators.humanintheloop - $150",
    "compute.iaas - $200",
    "multimodal.gmt - $300",
    "earlyaccess.gmt-7 - $500",
    "manufacturing.aifactory - $100",
    "blockchain.devcommunity - $75",
    "protocol.agenticweb - $299",
    "infrastructure.newinternet - $399"
  ];

  const targetAudience = [
    "Local, state, and federal governments deploying AI infrastructure",
    "Public-private partnerships for education, commerce, and transportation", 
    "Developers building AI agents, apps, and city-wide systems",
    "AI hardware manufacturers and sovereign compute providers",
    "Economic development agencies preparing for reshoring",
    "Institutions preparing for post-cloud, post-platform control models",
    "Strategic operators deploying city-by-city protocol integrations"
  ];

  const infrastructureLayers = [
    { layer: "IRL (Infrastructure Root Layer)", description: "Unified protocol root across all cities" },
    { layer: "Compute Zones", description: "Federated structured compute – deployable by city or region" },
    { layer: "Registry Handles", description: "Identity system for people, businesses, devices, and operators" },
    { layer: "AI Agent Layer", description: "Deploy AI agents across web, mobile, smart devices, and IRL kiosks" },
    { layer: "Dev Suite", description: "Build agents, dashboards, and AI-native workflows fast" },
    { layer: "Operator Class", description: "Become certified to deploy the protocol in your city or country" },
    { layer: "Hardware Suite", description: "AI Phone, AI Kiosk, AI Book, NFC-enabled IRL Cards, On-Demand Nodes" }
  ];

  const detroitSummitPoints = [
    "Mayor Duggan emphasized Detroit's role as a proving ground for AI-powered infrastructure.",
    "Focus on equitable AI access, public sector integration, and local economic resilience.",
    "National calls for reshoring compute, domestic chip manufacturing, and AI workforce training.",
    "Federal leaders emphasized AI in transportation, public safety, education, and infrastructure ops."
  ];

  const trumpMandates = [
    "Executive Order 13859 – American Leadership in Artificial Intelligence",
    "Executive Order 13806 – Assessing and Strengthening the Manufacturing and Defense Industrial Base",
    "Made in America Executive Orders – Prioritizing U.S. components and reshoring critical systems",
    "NSCAI Recommendations – National Security Commission on Artificial Intelligence warned of foreign AI dominance"
  ];

  const hardwareSuite = [
    { name: "AI Phone", desc: "Fully local AI experience with prebuilt agents", emoji: "📱", color: "cyan" },
    { name: "AI Book", desc: "Secure developer laptop for protocol builders", emoji: "💻", color: "blue" },
    { name: "AI Kiosk", desc: "Public touchpoint for services, payments, and identity", emoji: "🏪", color: "purple" },
    { name: "NFC IRL Cards", desc: "Instant connection to verified identity or service portal", emoji: "💳", color: "orange" },
    { name: "AI On-Demand Nodes", desc: "Edge compute appliances for rapid deployment", emoji: "🖥️", color: "green" }
  ];

  return (
    <div className="relative z-10">
      <ConditionalBackground 
        intensity={0.6}
        particleCount={80}
        floatingCount={0}
        gridSize={120}
      />
      
      {/* News Ticker */}
      <NewsTicker items={tickerItems} speed={60} className="mb-8" />
      
      {/* Hero Section */}
      <section className="py-24 text-center">
        <div className="container-max section-padding">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-red-500/20 px-6 py-3 rounded-full mb-8">
              <span className="text-2xl">🧠</span>
              <span className="text-red-400 font-semibold">The National Protocol for AI Sovereignty Is Now Live</span>
            </div>
          </div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
              Unified AI Infrastructure
            </span>
            <br />
            <span className="text-white">Rollout</span>
          </h1>
          
          <p className="text-2xl sm:text-3xl text-gray-300 max-w-5xl mx-auto mb-8">
            This is not a startup. This is a global infrastructure launch.
          </p>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-cyan-400">🎯 Who This Is For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto mb-16">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-cyan-500/20 p-1 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GlowingEffect
                  variant="cyan"
                  spread={25}
                  glow={true}
                  disabled={false}
                  proximity={40}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-cyan-400 font-bold">•</span>
                    <p className="text-gray-300">{audience}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-white mb-4">
              <span className="text-cyan-400">🌐 One Protocol. Every Sector.</span>
            </p>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Whether you're deploying AI in schools, retail, transit, or manufacturing, this stack is turnkey.
              <br />
              One infrastructure. One registry. One deployment model.
              <br />
              <span className="text-cyan-400 font-semibold">Local ownership. Sovereign data. Verified operators.</span>
            </p>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-orange-400">💥 What You Get</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto mb-16">
            {infrastructureLayers.map((item, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-orange-500/20 p-1 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GlowingEffect
                  variant="orange"
                  spread={25}
                  glow={true}
                  disabled={false}
                  proximity={40}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <div className="font-bold text-orange-400 text-lg">{item.layer}</div>
                    <div className="md:col-span-2 text-gray-300">{item.description}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detroit Origin */}
      <section className="py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-red-400">📍 ORIGIN: DETROIT SETS THE TONE</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              At the 2025 Detroit AI & Innovation Summit, city and federal leaders laid out America's AI future:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {detroitSummitPoints.map((point, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-red-500/20 p-1 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GlowingEffect
                  variant="red"
                  spread={25}
                  glow={true}
                  disabled={false}
                  proximity={40}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400 font-bold">•</span>
                    <p className="text-gray-300">{point}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-white">
              The summit made clear: <span className="text-red-400">U.S. cities will not be passive consumers of foreign AI.</span>
              <br />
              They will become operators.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Response Layer */}
      <section className="py-24 bg-gradient-to-b from-blue-500/10 to-cyan-500/10">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-blue-400">🧱 INFRASTRUCTURE RESPONSE LAYER (IRL)</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              The Unified AI Infrastructure is not a product.
              <br />
              <span className="text-blue-400 font-semibold">It's a protocol layer. It's live now. City by city.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Smart kiosks, mobile agents, and citizen dashboards all run on a unified protocol.",
              "Local compute zones ensure data doesn't need to be exported to hyperscalers.",
              "IRL systems integrate with transportation, health, public safety, and workforce tools.",
              "Every city deployment is sovereign, scalable, and operator-owned."
            ].map((feature, index) => (
              <SpotlightCard
                key={index}
                variant="blue"
                className="border-blue-500/20"
                glowSpread={30}
                glowProximity={48}
              >
                <div className="p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Compute */}
      <section className="py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-green-400">⚙️ STRUCTURED COMPUTE + EDGE DEPLOYMENTS</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              No more dependency on black-box cloud providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Deploy sovereign compute clusters using the Structured Compute Standard (SCS)",
              "Designed for public sector AI workloads and edge-first data handling",
              "Compatible with AI-powered kiosks, phones, vehicles, and real-world sensors",
              "Built for local resilience, auditability, and national security compliance"
            ].map((feature, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-green-500/20 p-1 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GlowingEffect
                  variant="green"
                  spread={25}
                  glow={true}
                  disabled={false}
                  proximity={40}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400 font-bold">•</span>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handle Registry */}
      <section className="py-24 bg-gradient-to-b from-purple-500/10 to-pink-500/10">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-purple-400">🪪 HANDLE REGISTRY SYSTEM</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Handles are not usernames.
              <br />
              <span className="text-purple-400 font-semibold">They are decentralized, tokenizable, and protocol-native identities.</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Every person, org, service, and device gets a verified, sovereign handle",
              "Works across voice, screen, kiosk, and NFC",
              "Create immersive link-in-bio pages, service portals, or programmable identity dashboards",
              "Integrated with IRL infrastructure and local operator controls"
            ].map((feature, index) => (
              <SpotlightCard
                key={index}
                variant="purple"
                className="border-purple-500/20"
                glowSpread={30}
                glowProximity={48}
              >
                <div className="p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex items-start space-x-3">
                    <span className="text-purple-400 font-bold">•</span>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Hardware Suite */}
      <section className="py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-cyan-400">📱 HARDWARE SUITE</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Every protocol deployment is backed by real hardware:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareSuite.map((hardware, index) => (
              <SpotlightCard
                key={index}
                variant={hardware.color as any}
                className="border-gray-600"
                glowSpread={30}
                glowProximity={48}
              >
                <div className="p-6 text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl mb-4">{hardware.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{hardware.name}</h3>
                  <p className="text-gray-300 text-sm">{hardware.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Trump-era Mandates */}
      <section className="py-24 bg-gradient-to-b from-red-500/10 to-blue-500/10">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-red-400">🇺🇸 STRATEGIC ALIGNMENT:</span>
              <br />
              <span className="text-white">TRUMP-ERA MANDATES RESURFACE</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              The rollout aligns with federal priorities set under Trump-era infrastructure and AI policy:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {trumpMandates.map((mandate, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-red-500/20 p-1 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GlowingEffect
                  variant="red"
                  spread={25}
                  glow={true}
                  disabled={false}
                  proximity={40}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400 font-bold">•</span>
                    <p className="text-gray-300">{mandate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-white">
              This infrastructure delivers the real-world AI backbone to meet those mandates now.
              <br />
              <span className="text-red-400">City by city. Operator by operator. Infrastructure first.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="container-max section-padding text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="text-orange-400">⚡ READY TO DEPLOY?</span>
          </h2>

          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            Get Certified. Deploy Infra. Run Your Zone.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white px-8 py-4 text-lg font-semibold"
            >
              Become an Operator
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 py-4 text-lg font-semibold"
            >
              Launch City Deployment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-8 py-4 text-lg font-semibold"
            >
              Request Briefing Packet
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-8 py-4 text-lg font-semibold"
            >
              Download Protocol PDF
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
