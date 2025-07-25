"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { Button } from "@/components/ui/Button";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import NewsTicker from "@/components/ui/NewsTicker";

export default function UnifiedLandingPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "🤖 Overview" },
    { id: "marketplace", label: "🎯 Marketplace" },
    { id: "infrastructure", label: "🧱 Infrastructure" },
    { id: "deployment", label: "🚀 Deployment" }
  ];

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

  const targetAudience = [
    "Governments & Cities deploying smart infrastructure",
    "Education Leaders rolling AI into schools and campuses",
    "Manufacturers automating with local production",
    "Hospitals & Clinics offering patient-agent portals",
    "Banks & Fintechs launching compliance and support AI",
    "Creators & Entrepreneurs minting, monetizing, fork‑deploying",
    "Developers & Operators building, training, earning"
  ];

  const brandPillars = [
    { title: "Agent-Native", desc: "Every prompt leads to real-world action", emoji: "🤖" },
    { title: "Sovereign", desc: "Decentralized, crypto-native governance", emoji: "🏛️" },
    { title: "Protocol-First", desc: "Build-once, deploy-everywhere", emoji: "🌐" },
    { title: "Policy-Backed", desc: "Trump-Era Reshoring Mandates on tech, labor, and sovereignty", emoji: "🇺🇸" }
  ];

  const launchAssets = [
    { asset: "detroit.aiagents", description: "Free pilot access", price: "$0" },
    { asset: "assistant.aiagents", description: "Institutional assistant roles", price: "$200" },
    { asset: "guardian.aiagents", description: "Security & compliance agents", price: "$200" },
    { asset: "operator.aiagents", description: "Human-in-loop infrastructure ops", price: "$150" },
    { asset: "educator.aiagents", description: "School & campus agents", price: "$200" },
    { asset: "stream.aiagents", description: "Live UGC & media", price: "$200" },
    { asset: "retail.aiagents", description: "Commerce agents & kiosks", price: "$200" },
    { asset: "finance.aiagents", description: "Bank & fintech compliance", price: "$200" }
  ];

  const summitPoints = [
    "Foundational calls for distributed smart infrastructure, AI workforce retraining, public-private deployment, ethical AI governance, and digital equity.",
    "Federal-level reassertion of U.S. leadership in AI, reshoring tech and manufacturing, and AI agent sovereignty at the edge.",
    "The narrative: AI Agents IRL—the outgrowth of vision, now fully operational via Unified AI."
  ];

  const trumpMandates = [
    "Executive Orders on American leadership in AI and infrastructure",
    "National push to reshore manufacturing, compute, and AI expertise",
    "Compliance with NSCAI, CHIPS, and sovereignty/security strategies",
    "Unified AI IRL delivers public infrastructure, education, healthcare, safety, and commerce with sovereign, American-built protocols"
  ];

  const irlFeatures = [
    "City-scale, national-scale infrastructure—operational now",
    "Plug-and-play agents in kiosks, apps, wearables, vehicles",
    "Sovereign compute zones—run your own, don't rent others'",
    "Built-in compliance, public safety, and smart civic architecture",
    "Protocol rollout aligned with federal policy, not vendor sales"
  ];

  const structuredComputeFeatures = [
    "Federated, sovereign compute clusters for public and private workloads",
    "Edge and cloud architectures—agent-optimized, token-based",
    "Modular. Composable. Local-first. Auditable. Secure."
  ];

  const handleRegistryFeatures = [
    "Decentralized protocol-based identity for people, orgs, devices",
    "Multi-modal (voice, screen, kiosk, NFC) identity use cases",
    "Verified agents with IRL permissions, directories, monetization",
    "Global by design, location-aware, infrastructure-anchored"
  ];

  const operatorFeatures = [
    "Real-world deployment training: compute zones, agent dev, registry, compliance",
    "Certification enables city/region-level control of infrastructure",
    "Connect with governments, institutions, and enterprises",
    "Earn USD, tokens, or hybrid compensation"
  ];

  const devSuiteFeatures = [
    "ForkD: Agent creation, forking, monetization framework",
    "VibeCoder: Visual IDE with live testing, workflow design",
    "TestNet, devkits, agent libraries, plugin stores",
    "One-click deployment to global network—live in minutes"
  ];

  const hardwareSuite = [
    { name: "AI Phone", desc: "Fully local AI experience with prebuilt agents", emoji: "📱" },
    { name: "AI Book", desc: "Secure developer laptop for protocol builders", emoji: "💻" },
    { name: "AI Kiosk", desc: "Public touchpoint for services, payments, and identity", emoji: "🏪" },
    { name: "NFC Cards", desc: "Instant connection to verified identity or service portal", emoji: "💳" },
    { name: "On‑Demand Nodes", desc: "Edge compute appliances for rapid deployment", emoji: "🖥️" }
  ];

  return (
    <div className="relative">
      <ConditionalBackground
        intensity={0.3}
        particleCount={20}
        floatingCount={0}
        gridSize={120}
      />

      {/* News Ticker - Add top padding to account for nav */}
      <div className="relative z-20 pt-20">
        <NewsTicker items={tickerItems} speed={60} className="mb-8" />
      </div>
      
      {/* Hero Section */}
      <section className="relative z-20 py-24 text-center">
        <div className="container-max section-padding">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-3 bg-black/50 border border-orange-500/30 px-6 py-3 rounded-full mb-8">
              <span className="text-2xl">🤖</span>
              <span className="text-orange-400 font-bold">AI Agents IRL</span>
            </div>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-orange-400 via-white to-red-400 bg-clip-text text-transparent">
              AI Agents IRL
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            Built in Detroit. Backed by policy. Powered by agents.
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            The intelligent infrastructure rollout begins city by city, country by country. This is a global launch—anchored in Detroit, designed to scale worldwide.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="relative z-20 py-8 border-b border-gray-800">
        <div className="container-max section-padding">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          {/* Overview Tab - Diagonal Brand Pillars */}
          {activeTab === "overview" && (
            <div className="space-y-16">
              <div className="text-center">
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
              <div className="text-center space-y-4">
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
          )}

          {/* Who This Is For Tab - Side Panel Selector */}
          {activeTab === "marketplace" && (
            <div className="flex h-screen">
              {/* Left Sidebar - Role Selector */}
              <div className="w-1/3 bg-gradient-to-b from-cyan-500/10 to-blue-500/10 border-r border-cyan-500/20 p-8">
                <h3 className="text-2xl font-bold text-cyan-400 mb-8">🎯 Select Your Role</h3>
                <div className="space-y-3">
                  {targetAudience.map((audience, index) => (
                    <button
                      key={index}
                      className="w-full p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 border-l-4 border-cyan-500 text-left transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-cyan-500/30 rounded-full flex items-center justify-center text-xl">
                          {index === 0 ? "🏛️" : index === 1 ? "🎓" : index === 2 ? "🏭" : index === 3 ? "🏥" : index === 4 ? "🏦" : index === 5 ? "🎨" : "👨‍💻"}
                        </div>
                        <span className="text-white font-semibold">{audience}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Right: Live Pricing Dashboard */}
              <div className="flex-1 p-8">
                <h3 className="text-3xl font-bold text-orange-400 mb-8">🔥 Live Registry Pricing</h3>
                <div className="space-y-4 h-3/4 overflow-y-auto">
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
            </div>
          )}

          {/* Infrastructure Tab - Interactive Network + Hardware Showcase */}
          {activeTab === "infrastructure" && (
            <div className="h-screen">
              {/* Top: Network Visualization */}
              <div className="h-1/2 relative bg-gradient-to-br from-blue-500/5 to-purple-500/5 border-b border-blue-500/20">
                <h3 className="text-3xl font-bold text-center text-blue-400 pt-8 mb-8">🧱 Infrastructure Network</h3>

                {/* Central IRL Hub */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-xl font-bold text-white">IRL</span>
                  </div>
                </div>

                {/* Simple Grid Nodes */}
                <div className="grid grid-cols-3 gap-8 mt-16">
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

              {/* Bottom: Hardware Carousel */}
              <div className="h-1/2 p-8 bg-gradient-to-br from-pink-500/5 to-purple-500/5">
                <h3 className="text-3xl font-bold text-center text-pink-400 mb-8">🛠️ Hardware Suite</h3>
                <div className="flex space-x-6 overflow-x-auto pb-4">
                  {hardwareSuite.map((hardware, index) => (
                    <div key={index} className="flex-shrink-0 w-72 relative group">
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
            </div>
          )}

          {/* Deployment Tab - Interactive Timeline + Wizard */}
          {activeTab === "deployment" && (
            <div className="h-screen flex">
              {/* Left: Policy Timeline */}
              <div className="w-1/2 p-8 bg-gradient-to-br from-red-500/5 to-blue-500/5 border-r border-red-500/20">
                <h3 className="text-3xl font-bold text-red-400 mb-8">🇺🇸 Policy Timeline</h3>
                <div className="relative h-3/4 overflow-y-auto">
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

              {/* Right: Deployment Wizard */}
              <div className="w-1/2 p-8">
                <h3 className="text-3xl font-bold text-green-400 mb-8">🚀 Deployment Wizard</h3>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Become Operator", desc: "Get certified for infrastructure deployment", icon: "👨‍💻", status: "active" },
                    { step: 2, title: "Launch City", desc: "Deploy city-wide AI infrastructure", icon: "🏙️", status: "pending" },
                    { step: 3, title: "Download Deck", desc: "Get institutional briefing materials", icon: "📊", status: "pending" },
                    { step: 4, title: "Contact Support", desc: "Enterprise rollout assistance", icon: "🤝", status: "pending" }
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      {/* Step Connector Line */}
                      {index < 3 && (
                        <div className="absolute left-6 top-16 w-0.5 h-8 bg-gradient-to-b from-green-500 to-gray-500"></div>
                      )}

                      <div className={`flex items-start space-x-4 transition-all cursor-pointer ${
                        item.status === 'active' ? 'transform scale-105' : ''
                      }`}>
                        {/* Step Number Circle */}
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg border-2 ${
                          item.status === 'active'
                            ? 'bg-green-500 border-green-400 text-white animate-pulse'
                            : 'bg-gray-700 border-gray-500 text-gray-400'
                        }`}>
                          {item.step}
                        </div>

                        {/* Step Content */}
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
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto" style={{ display: 'none' }}>
            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white px-6 py-3 font-semibold"
            >
              Deploy IRL
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-6 py-3 font-semibold"
            >
              Pre-register
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-3 font-semibold"
            >
              Watch "The Agent Chair"
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="relative z-20 py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-cyan-400">🎯 Who This Is For</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto mb-12">
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
            <p className="text-xl font-bold text-white">
              Don't just use AI. <span className="text-cyan-400">Own your role in it.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Launch Tools & Registry Handles */}
      <section className="relative z-20 py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-orange-400">🔥 Launch Tools & Registry Handles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-5xl mx-auto">
            {launchAssets.map((asset, index) => (
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
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                    <div className="font-bold text-orange-400">{asset.asset}</div>
                    <div className="md:col-span-2 text-gray-300 text-sm">{asset.description}</div>
                    <div className="text-white font-bold">{asset.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Origin Context */}
      <section className="relative z-20 py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-24">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-red-400">📍 Origin Context: Global in Focus</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              At the 2025 Detroit AI & Innovation Summit, leaders introduced America's AI future:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
            {summitPoints.map((point, index) => (
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
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400 font-bold">•</span>
                    <p className="text-gray-300">{point}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Root Layer */}
      <section className="relative z-20 py-24">
        <div className="container-max section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-blue-400">🧱 Infrastructure Root Layer (IRL)</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Unified AI IRL is a protocol stack, not a product:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 max-w-4xl mx-auto">
            {irlFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-blue-500/20 p-1 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GlowingEffect
                  variant="blue"
                  spread={25}
                  glow={true}
                  disabled={false}
                  proximity={40}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400 font-bold">•</span>
                    <p className="text-gray-300">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Compute Network */}
      <section className="relative z-20 py-40">
        <div className="container-max section-padding">
          <div className="text-center mb-24">
            <h2 className="text-6xl sm:text-7xl font-bold mb-12">
              <span className="text-green-400">⚙️ Structured Compute Network</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
            {structuredComputeFeatures.map((feature, index) => (
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
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex items-start space-x-6">
                    <span className="text-green-400 font-bold text-2xl">•</span>
                    <p className="text-gray-300 text-xl leading-relaxed">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handle Registry & Identity */}
      <section className="relative z-20 py-40">
        <div className="container-max section-padding">
          <div className="text-center mb-24">
            <h2 className="text-6xl sm:text-7xl font-bold mb-12">
              <span className="text-purple-400">🪪 Handle Registry & Identity</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
            {handleRegistryFeatures.map((feature, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-purple-500/20 p-1 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GlowingEffect
                  variant="purple"
                  spread={25}
                  glow={true}
                  disabled={false}
                  proximity={40}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex items-start space-x-6">
                    <span className="text-purple-400 font-bold text-2xl">•</span>
                    <p className="text-gray-300 text-xl leading-relaxed">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operator Class Training */}
      <section className="relative z-20 py-40">
        <div className="container-max section-padding">
          <div className="text-center mb-24">
            <h2 className="text-6xl sm:text-7xl font-bold mb-12">
              <span className="text-orange-400">🚀 Operator Class Training & Certification</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
            {operatorFeatures.map((feature, index) => (
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
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex items-start space-x-6">
                    <span className="text-orange-400 font-bold text-2xl">•</span>
                    <p className="text-gray-300 text-xl leading-relaxed">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Developer Toolchain */}
      <section className="relative z-20 py-40">
        <div className="container-max section-padding">
          <div className="text-center mb-24">
            <h2 className="text-6xl sm:text-7xl font-bold mb-12">
              <span className="text-cyan-400">💻 Developer Toolchain</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
            {devSuiteFeatures.map((feature, index) => (
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
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex items-start space-x-6">
                    <span className="text-cyan-400 font-bold text-2xl">•</span>
                    <p className="text-gray-300 text-xl leading-relaxed">{feature}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Structured Compute */}
      <section className="relative z-20 py-24">
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

      {/* Hardware & Manufacturing */}
      <section className="relative z-20 py-40">
        <div className="container-max section-padding">
          <div className="text-center mb-24">
            <h2 className="text-6xl sm:text-7xl font-bold mb-12">
              <span className="text-pink-400">🛠️ Hardware & Manufacturing</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-7xl mx-auto mb-16 leading-relaxed">
              Locally manufacturable via contract manufacturing programs.
              <br />
              Built to deliver sovereignty, privacy, and infrastructure control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {hardwareSuite.map((hardware, index) => (
              <div
                key={index}
                className="relative rounded-xl border border-pink-500/20 p-1 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GlowingEffect
                  variant="pink"
                  spread={25}
                  glow={true}
                  disabled={false}
                  proximity={40}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-8 text-center">
                  <div className="text-6xl mb-6">{hardware.emoji}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{hardware.name}</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">{hardware.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trump-era Mandates */}
      <section className="relative z-20 py-40">
        <div className="container-max section-padding">
          <div className="text-center mb-24">
            <h2 className="text-6xl sm:text-7xl font-bold mb-12">
              <span className="text-red-400">🧭 Aligned with Trump-Era Mandates</span>
              <br />
              <span className="text-white">& Federal Policy</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
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
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-8">
                  <div className="flex items-start space-x-6">
                    <span className="text-red-400 font-bold text-2xl">•</span>
                    <p className="text-gray-300 text-xl leading-relaxed">{mandate}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-20 py-24">
        <div className="container-max section-padding text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">
            <span className="text-orange-400">🔥 Launch is Now</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            AI Agents IRL—the new operational layer for smart societies.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white px-6 py-3 font-semibold"
            >
              Become Operator
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-6 py-3 font-semibold"
            >
              Launch City
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-6 py-3 font-semibold"
            >
              Download Infra Deck
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-6 py-3 font-semibold"
            >
              Contact for Institutional Rollout
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>


    </div>
  );
}
