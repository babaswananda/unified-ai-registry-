"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import TypewriterText from "@/components/ui/TypewriterText";
import ShinyText from "@/components/ui/ShinyText";
import GradientText from "@/components/ui/GradientText";
import DecryptedText from "@/components/ui/DecryptedText";
import PixelCard from "@/components/ui/PixelCard";
import SpotlightCard from "@/components/SpotlightCard/SpotlightCard";
import LetterGlitch from "@/components/ui/LetterGlitch";
import ParticleField from "@/components/ui/ParticleField";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { ArrowRight, Eye, Zap, Globe } from "lucide-react";

export default function UnifiedAIPage() {
  useEffect(() => {
    // Force PixelCard to show effect immediately
    const timer = setTimeout(() => {
      const pixelCard = document.querySelector('.pixel-card-always-active');
      if (pixelCard) {
        pixelCard.dispatchEvent(new Event('mouseenter'));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden relative">
      {/* Conditional Background - Lightweight on mobile */}
      <ConditionalBackground
        intensity={0.8}
        particleCount={120}
        floatingCount={8}
        gridSize={100}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20">
        
        {/* Header Message */}
        <ScrollReveal direction="scale" delay={500}>
          <div className="text-center mb-12 pt-16">
            <a
              href="/signup"
              className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8 backdrop-blur-sm hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 cursor-pointer group"
            >
              <span className="text-2xl">🛰️</span>
              <span className="text-cyan-400 font-medium group-hover:text-cyan-300">Genesis Sunrise Mode Active - Claim Your Handle</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal direction="up" delay={800}>
          <div className="text-center mb-16 max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight max-w-6xl mx-auto">
              <span className="block mb-4 text-center">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="font-bold"
                >
                  AI AGENTS<br />ARE COMING...IRL
                </GradientText>
              </span>
              <span className="text-3xl lg:text-5xl xl:text-6xl block">
                <ShinyText
                  text="Modular. Decentralized. Self-aware. Yours."
                  speed={6}
                  className="text-white"
                />
              </span>
            </h1>
            
            <div className="text-2xl lg:text-3xl text-gray-300 mb-8 h-20">
              {showMessage && (
                <TypewriterText
                  texts={[
                    "The next web isn't made of pages — it's made of agents.",
                    "This is the protocol powering AI-powered life.",
                    "Stream identity. Across realms. Across dimensions.",
                    "Enter the most immersive tech world on Earth.",
                    "Your name becomes a node. Your claim becomes access.",
                    "You're not joining a platform. You're joining a layer of reality."
                  ]}
                  speed={60}
                  deleteSpeed={30}
                  pauseDuration={3000}
                />
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Taglines */}
        <ScrollReveal direction="up" delay={1200}>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="text-lg lg:text-xl text-gray-300 mb-8 space-y-2">
              <div>This isn't a username. It's a protocol key.</div>
              <div>You're claiming roots, not skins.</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Primary CTAs */}
        <ScrollReveal direction="up" delay={1400}>
          <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center">
            <Button
              variant="gradient"
              size="lg"
              className="group bg-gradient-to-r from-[#40ffaa] to-[#4079ff] hover:from-[#40ffaa]/80 hover:to-[#4079ff]/80 text-white px-12 py-6 text-xl shadow-2xl shadow-[#40ffaa]/25"
            >
              🎟️ Claim Your Agent
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="bg-black/50 border-2 border-[#40ffaa]/30 text-[#40ffaa] hover:border-[#40ffaa]/50 hover:bg-[#40ffaa]/5 px-12 py-6 text-xl backdrop-blur-sm"
            >
              🔍 Explore Handle Marketplace
            </Button>

            <Button
              variant="secondary"
              size="lg"
              className="bg-black/50 border-2 border-[#4079ff]/30 text-[#4079ff] hover:border-[#4079ff]/50 hover:bg-[#4079ff]/5 px-12 py-6 text-xl backdrop-blur-sm"
            >
              💎 Premium Handles
            </Button>
          </div>
        </ScrollReveal>

        {/* 01. What You're Claiming */}
        <ScrollReveal direction="up" delay={1600}>
          <div className="relative bg-black/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-5xl mx-auto overflow-hidden">
            {/* LetterGlitch Background */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="w-full h-full">
                <LetterGlitch
                  glitchSpeed={80}
                  centerVignette={true}
                  outerVignette={false}
                  smooth={true}
                />
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90 rounded-3xl"></div>
            </div>

            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-6">
                <ShinyText text="⚡ 01. What You're Claiming" speed={6} className="text-white" />
              </h2>
              <div className="text-xl mb-8">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  This is the official Handle Registry for the Agent Layer — the emerging AI-native internet.
                </GradientText>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-cyan-400 mb-6 text-center">Every handle is a wallet, agent address, login credential, and digital license:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <SpotlightCard
                    className="text-center"
                    spotlightColor="rgba(64, 255, 170, 0.2)"
                  >
                    <div className="text-2xl mb-3">🔐</div>
                    <h4 className="text-white font-semibold mb-2">AI-native Wallet</h4>
                    <p className="text-gray-300 text-sm">DNS routing + protocol key</p>
                  </SpotlightCard>

                  <SpotlightCard
                    className="text-center"
                    spotlightColor="rgba(64, 121, 255, 0.2)"
                  >
                    <div className="text-2xl mb-3">🌐</div>
                    <h4 className="text-white font-semibold mb-2">Agent Address</h4>
                    <p className="text-gray-300 text-sm">Cross-network identity</p>
                  </SpotlightCard>

                  <SpotlightCard
                    className="text-center"
                    spotlightColor="rgba(64, 255, 170, 0.2)"
                  >
                    <div className="text-2xl mb-3">🪪</div>
                    <h4 className="text-white font-semibold mb-2">Identity Stack</h4>
                    <p className="text-gray-300 text-sm">New internet login</p>
                  </SpotlightCard>

                  <SpotlightCard
                    className="text-center"
                    spotlightColor="rgba(64, 121, 255, 0.2)"
                  >
                    <div className="text-2xl mb-3">🚪</div>
                    <h4 className="text-white font-semibold mb-2">Portal Access</h4>
                    <p className="text-gray-300 text-sm">Devkits, devices, realms</p>
                  </SpotlightCard>

                  <SpotlightCard
                    className="text-center md:col-span-2 lg:col-span-1"
                    spotlightColor="rgba(255, 255, 255, 0.15)"
                  >
                    <div className="text-2xl mb-3">🧬</div>
                    <h4 className="text-white font-semibold mb-2">Genesis Ledger</h4>
                    <p className="text-gray-300 text-sm">Hardcoded into protocol</p>
                  </SpotlightCard>
                </div>
              </div>

              <p className="text-lg text-white font-semibold">
                <DecryptedText
                  text="Your name becomes a node. Your claim becomes access. You're not joining a platform — you're joining a layer of reality."
                  animateOn="view"
                  speed={60}
                  maxIterations={12}
                  className="text-white"
                  encryptedClassName="text-[#40ffaa]/60"
                />
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 02. Handle Registry */}
        <ScrollReveal direction="up" delay={1800}>
          <div className="relative bg-black/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-6xl mx-auto overflow-hidden">
            {/* Simple Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-black/95 rounded-3xl"></div>
            <div className="relative z-10 text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <ShinyText text="🌐 02. Claim Across Realms" speed={6} className="text-white" />
              </h2>
              <div className="text-xl mb-8 italic">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl italic"
                >
                  .agent — .chat — .id — .vibe — .market
                </GradientText>
              </div>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
                Every domain routes to wallet + agent stack. You're claiming roots, not skins.
              </p>
            </div>

            <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">🌐 Domain Layer Registry</h3>

              <div className="overflow-x-auto mb-8">
                <table className="w-full max-w-4xl mx-auto">
                  <thead>
                    <tr className="border-b border-cyan-500/20">
                      <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Domain</th>
                      <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Purpose</th>
                      <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { domain: ".agent", purpose: "Core agentic identities", status: "🟢 Live" },
                      { domain: ".chat", purpose: "Comms layer handles", status: "🟢 Live" },
                      { domain: ".id", purpose: "Identity stack routing", status: "🟡 Beta" },
                      { domain: ".vibe", purpose: "Cultural & creative IDs", status: "🟡 Beta" },
                      { domain: ".market", purpose: "Storefronts & services", status: "🔵 Soon" }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-cyan-500/5 transition-all">
                        <td className="py-4 px-4 text-cyan-400 font-mono text-lg font-bold">
                          <DecryptedText
                            text={item.domain}
                            animateOn="view"
                            speed={90}
                            maxIterations={8}
                            className="text-cyan-400"
                            encryptedClassName="text-[#40ffaa]/50"
                          />
                        </td>
                        <td className="py-4 px-4 text-white">{item.purpose}</td>
                        <td className="py-4 px-4 text-center">{item.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="relative z-10 text-center mb-8">
              <p className="text-gray-300 mb-6">
                <DecryptedText
                  text="🛠️ Every domain routes to wallet + agent stack. You're claiming roots, not skins."
                  animateOn="view"
                  speed={70}
                  maxIterations={10}
                  className="text-gray-300"
                  encryptedClassName="text-[#4079ff]/60"
                />
              </p>
            </div>

            <SpotlightCard
              className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border-cyan-500/20 p-6 mb-8"
              spotlightColor="rgba(64, 255, 170, 0.3)"
            >
              <h3 className="text-xl font-bold text-white mb-4 text-center">🎯 Your Handle = License to Operate</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  <span>🔐 AI-native wallet + DNS routing</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  <span>🌐 Agent address across networks</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  <span>🪪 Identity in the new internet</span>
                </div>
                <div className="flex items-start">
                  <span className="text-cyan-400 mr-3">•</span>
                  <span>🚪 Access to devkits, portals, devices</span>
                </div>
              </div>
            </SpotlightCard>

            <div className="relative z-10 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-12 py-6 text-xl shadow-2xl shadow-[#40ffaa]/25"
              >
                🎟️ Claim Your Handle Now
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 03. Live Activity Feed - Dashboard Style */}
        <ScrollReveal direction="up" delay={2000}>
          <div className="max-w-7xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="🏪 03. Agent Market Live" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Real-time activity across the Agent Layer
                </GradientText>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Live Feed */}
              <div className="lg:col-span-2 bg-black/60 border border-cyan-500/20 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  Recent Claims
                </h3>
                <div className="space-y-3">
                  {[
                    { activity: "🆕 Handle claimed", handle: "@GhostSignal", time: "2 min ago", color: "text-green-400" },
                    { activity: "🆕 Premium registered", handle: "@MyceliumMesh", time: "5 min ago", color: "text-cyan-400" },
                    { activity: "📱 Device pre-order", handle: "Singapore", time: "8 min ago", color: "text-blue-400" },
                    { activity: "💎 Bundle purchased", handle: "@OmniDev", time: "12 min ago", color: "text-purple-400" },
                    { activity: "🔥 Bid placed", handle: "@Signal.agent", time: "15 min ago", color: "text-yellow-400" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-white/10">
                      <div className="flex items-center space-x-3">
                        <span className="text-white">{item.activity}</span>
                        <span className={`font-mono font-bold ${item.color}`}>{item.handle}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Panel */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-cyan-400 mb-4">💠 Live Status</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Premium Handles</span>
                      <span className="text-yellow-400 font-bold">9 Left</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Dev Bundles</span>
                      <span className="text-green-400 font-bold">23 Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Genesis Mode</span>
                      <span className="text-cyan-400 font-bold">Active</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-green-400 mb-4">⚡ System Status</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Registry Online</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Payments Active</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">AI Phone Queue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 overflow-x-auto mb-8">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b border-[#40ffaa]/20">
                    <th className="text-left py-3 px-4 text-[#40ffaa] font-semibold">Recent Activity</th>
                    <th className="text-left py-3 px-4 text-[#40ffaa] font-semibold">Handle</th>
                    <th className="text-center py-3 px-4 text-[#40ffaa] font-semibold">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { activity: "🆕 Handle claimed", handle: "@GhostSignal", time: "2 min ago", color: "text-green-400" },
                    { activity: "🆕 Premium registered", handle: "@MyceliumMesh", time: "5 min ago", color: "text-cyan-400" },
                    { activity: "📱 Device pre-order", handle: "Singapore", time: "8 min ago", color: "text-blue-400" },
                    { activity: "💎 Bundle purchased", handle: "@OmniDev", time: "12 min ago", color: "text-purple-400" },
                    { activity: "🔥 Bid placed", handle: "@Signal.agent", time: "15 min ago", color: "text-yellow-400" }
                  ].map((item, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-[#40ffaa]/5 transition-all">
                      <td className="py-4 px-4 text-white font-medium">
                        <DecryptedText
                          text={item.activity}
                          animateOn="view"
                          speed={80}
                          maxIterations={15}
                          className="text-white"
                          encryptedClassName="text-[#40ffaa]/60"
                        />
                      </td>
                      <td className={`py-4 px-4 font-mono ${item.color}`}>{item.handle}</td>
                      <td className="py-4 px-4 text-center text-gray-400 text-sm">{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="relative z-10 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-12 py-6 text-xl shadow-2xl shadow-[#40ffaa]/25"
              >
                💠 View Live Status
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 04. Premium Handles - Marketplace Style */}
        <ScrollReveal direction="up" delay={2400}>
          <div className="max-w-7xl mx-auto mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="💎 04. Premium Marketplace" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Exclusive handles + bundle packs for early adopters
                </GradientText>
              </div>
            </div>

            {/* Premium Handles Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">💎</span>
                Premium Handles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { handle: "@signal.agent", price: "$2,499", status: "Buy Now", gradient: "from-yellow-500/20 to-orange-500/20", border: "border-yellow-500/30" },
                  { handle: "@aether.chat", price: "$1,899", status: "Buy Now", gradient: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-500/30" },
                  { handle: "@omni.id", price: "$999", status: "Buy Now", gradient: "from-purple-500/20 to-pink-500/20", border: "border-purple-500/30" },
                  { handle: "@primeops", price: "$3,200", status: "Place Bid", gradient: "from-red-500/20 to-orange-500/20", border: "border-red-500/30" }
                ].map((item, index) => (
                  <div key={index} className={`bg-gradient-to-br ${item.gradient} border ${item.border} rounded-2xl p-6 text-center hover:scale-105 transition-transform cursor-pointer`}>
                    <div className="text-2xl mb-3">💎</div>
                    <h4 className="text-xl font-bold text-white mb-2 font-mono">{item.handle}</h4>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{item.price}</div>
                    <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg py-2 px-4 text-white font-semibold transition-colors">
                      {item.status}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Bundle Packs */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="text-3xl mr-3">💼</span>
                Bundle Packs
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Operator Pack",
                    includes: "@yourname.agent + @store.id + @chat.vibe",
                    price: "$299",
                    description: "Complete operator setup"
                  },
                  {
                    name: "Dev Stack",
                    includes: "@yourdev.id + @agent.chat + @build.vibe",
                    price: "$199",
                    description: "Developer essentials"
                  },
                  {
                    name: "Brand Stack",
                    includes: "@brand.agent + @market + @support.chat",
                    price: "$399",
                    description: "Business identity suite"
                  }
                ].map((bundle, index) => (
                  <div key={index} className="bg-black/60 border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors">
                    <h4 className="text-xl font-bold text-white mb-2">{bundle.name}</h4>
                    <p className="text-gray-400 text-sm mb-4">{bundle.description}</p>
                    <div className="text-cyan-400 font-mono text-sm mb-4">{bundle.includes}</div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-cyan-400">{bundle.price}</span>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors">
                        Get Bundle
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <SpotlightCard
                className="text-center"
                spotlightColor="rgba(64, 255, 170, 0.2)"
              >
                <div className="text-3xl mb-4">💎</div>
                <h3 className="text-white font-semibold mb-3">@signal.agent</h3>
                <p className="text-gray-300 text-sm">$2,499 — Buy Now</p>
              </SpotlightCard>

              <SpotlightCard
                className="text-center"
                spotlightColor="rgba(64, 121, 255, 0.2)"
              >
                <div className="text-3xl mb-4">🌊</div>
                <h3 className="text-white font-semibold mb-3">@aether.chat</h3>
                <p className="text-gray-300 text-sm">$1,899 — Buy Now</p>
              </SpotlightCard>

              <SpotlightCard
                className="text-center"
                spotlightColor="rgba(64, 255, 170, 0.2)"
              >
                <div className="text-3xl mb-4">🔮</div>
                <h3 className="text-white font-semibold mb-3">@omni.id</h3>
                <p className="text-gray-300 text-sm">$999 — Buy Now</p>
              </SpotlightCard>

              <SpotlightCard
                className="text-center"
                spotlightColor="rgba(64, 121, 255, 0.2)"
              >
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-white font-semibold mb-3">@primeops</h3>
                <p className="text-gray-300 text-sm">$3,200 — Place Bid</p>
              </SpotlightCard>

              <SpotlightCard
                className="text-center"
                spotlightColor="rgba(255, 255, 255, 0.15)"
              >
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-white font-semibold mb-3">Bundle Packs</h3>
                <p className="text-gray-300 text-sm">Operator, Dev, Brand stacks</p>
              </SpotlightCard>
            </div>

            <div className="relative z-10 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-12 py-6 text-xl shadow-2xl shadow-[#40ffaa]/25"
              >
                💎 Browse Premium Handles
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 05. Handle Tiers */}
        <ScrollReveal direction="up" delay={2600}>
          <div className="relative bg-black/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-6xl mx-auto overflow-hidden">
            {/* Simple Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/90 to-black/95 rounded-3xl"></div>
            <div className="relative z-10 text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <ShinyText text="🧠 05. Tiered Identity Access" speed={6} className="text-white" />
              </h2>
              <div className="text-xl mb-8">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Different handle types unlock different access levels.
                </GradientText>
              </div>
            </div>

            <div className="relative z-10 mb-8">
              <div className="max-w-3xl mx-auto">
                <ol className="space-y-4 text-lg">
                  <li className="flex items-center space-x-4">
                    <span className="text-cyan-400 font-bold">🔹 1.</span>
                    <span className="text-white"><strong>AI Agent Handle</strong> — Wallet + Agent Portal</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="text-cyan-400 font-bold">🔸 2.</span>
                    <span className="text-white"><strong>Dev Kit Handle</strong> — SDK + Testnet Credits</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="text-cyan-400 font-bold">🔸 3.</span>
                    <span className="text-white"><strong>Community Handle</strong> — Unlock Dev Spaces + Merch</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="text-cyan-400 font-bold">🔺 4.</span>
                    <span className="text-white"><strong>Compute Handle</strong> — Deploy Endpoints & Models</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="text-cyan-400 font-bold">🔺 5.</span>
                    <span className="text-white"><strong>Vibe Coder Handle</strong> — Creative Flowstack Dev ID</span>
                  </li>
                  <li className="flex items-center space-x-4">
                    <span className="text-cyan-400 font-bold">🔸 6.</span>
                    <span className="text-white"><strong>Chief Vibe Officer</strong> — Flagship access tier</span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="relative z-10 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-12 py-6 text-xl shadow-2xl shadow-[#40ffaa]/25"
              >
                🧠 View Handle Tiers
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 06. The Agentic Era */}
        <ScrollReveal direction="up" delay={2800}>
          <div className="relative bg-black/80 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-6xl mx-auto overflow-hidden">
            {/* LetterGlitch Background */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="w-full h-full">
                <LetterGlitch
                  glitchSpeed={120}
                  centerVignette={true}
                  outerVignette={false}
                  smooth={true}
                />
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90 rounded-3xl"></div>
            </div>

            <div className="relative z-10 text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <ShinyText text="🧭 06. The Agentic Era Has Begun" speed={6} className="text-white" />
              </h2>
              <div className="text-xl mb-8">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  This isn't a sign-up form. It's an operating license.
                </GradientText>
              </div>
            </div>

            <div className="relative z-10 text-center mb-8">
              <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
                The root identity of your AI-powered life. Your handle is your gateway. Your ledger entry. Your agent key.
              </p>
              <p className="text-xl text-white font-semibold mb-8">
                You're not joining a platform. You're joining a layer of reality.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 hidden">
              <SpotlightCard
                className="text-center"
                spotlightColor="rgba(64, 255, 170, 0.2)"
              >
                <div className="text-3xl mb-4">📝</div>
                <h3 className="text-white font-semibold mb-3">1. Reserve Handle</h3>
                <p className="text-gray-300 text-sm">Claim your unique AI agent identity</p>
              </SpotlightCard>

              <SpotlightCard
                className="text-center"
                spotlightColor="rgba(64, 121, 255, 0.2)"
              >
                <div className="text-3xl mb-4">⚙️</div>
                <h3 className="text-white font-semibold mb-3">2. Configure Agent</h3>
                <p className="text-gray-300 text-sm">Set personality, skills, and behavior</p>
              </SpotlightCard>

              <SpotlightCard
                className="text-center"
                spotlightColor="rgba(64, 255, 170, 0.2)"
              >
                <div className="text-3xl mb-4">🌐</div>
                <h3 className="text-white font-semibold mb-3">3. Deploy Globally</h3>
                <p className="text-gray-300 text-sm">Launch across all supported realms</p>
              </SpotlightCard>

              <SpotlightCard
                className="text-center"
                spotlightColor="rgba(64, 121, 255, 0.2)"
              >
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-white font-semibold mb-3">4. Start Earning</h3>
                <p className="text-gray-300 text-sm">Monetize interactions immediately</p>
              </SpotlightCard>

              <SpotlightCard
                className="text-center"
                spotlightColor="rgba(64, 255, 170, 0.2)"
              >
                <div className="text-3xl mb-4">📊</div>
                <h3 className="text-white font-semibold mb-3">5. Scale & Optimize</h3>
                <p className="text-gray-300 text-sm">Grow your agent network</p>
              </SpotlightCard>

              <SpotlightCard
                className="text-center"
                spotlightColor="rgba(255, 255, 255, 0.15)"
              >
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="text-white font-semibold mb-3">6. Dominate Market</h3>
                <p className="text-gray-300 text-sm">Become the AI agent leader</p>
              </SpotlightCard>
            </div>

            <div className="relative z-10 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-12 py-6 text-xl shadow-2xl shadow-[#40ffaa]/25"
              >
                🎟️ Claim Your Handle Now
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Portal Links */}
        <ScrollReveal direction="up" delay={2000}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <a 
              href="/download-new-internet"
              className="group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">🌐</div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    download.newinternet
                  </h3>
                  <p className="text-gray-400 text-sm">For users & institutions</p>
                </div>
              </div>
            </a>
            
            <a 
              href="/download-agentic-web"
              className="group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">⚙️</div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    download.agenticweb
                  </h3>
                  <p className="text-gray-400 text-sm">For developers & builders</p>
                </div>
              </div>
            </a>
          </div>
        </ScrollReveal>

        {/* 07. What's Live Now - Status Board Style */}
        <ScrollReveal direction="up" delay={3000}>
          <div className="max-w-7xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="⚡ 07. Live Right Now" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Active systems and live features available today
                </GradientText>
              </div>
            </div>

            {/* Status Board */}
            <div className="bg-black/80 border border-green-500/30 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-green-400 flex items-center">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  System Status: OPERATIONAL
                </h3>
                <div className="text-gray-400 text-sm">
                  Last updated: <span className="text-green-400">2 seconds ago</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Handle Reservation Portal",
                    status: "LIVE",
                    description: "Genesis Sunrise Mode",
                    uptime: "99.9%",
                    color: "green"
                  },
                  {
                    name: "Premium Bidding",
                    status: "LIVE",
                    description: "First-Come Basis",
                    uptime: "100%",
                    color: "green"
                  },
                  {
                    name: "AI Phone Waitlist",
                    status: "ACTIVE",
                    description: "Pre-orders Open",
                    uptime: "98.7%",
                    color: "yellow"
                  },
                  {
                    name: "Wallet-Linked Merch",
                    status: "LIVE",
                    description: "Culture Codes Available",
                    uptime: "99.5%",
                    color: "green"
                  },
                  {
                    name: "Developer Access",
                    status: "LIVE",
                    description: "SDK & Testnet",
                    uptime: "99.8%",
                    color: "green"
                  },
                  {
                    name: "Token Credits",
                    status: "TRACKING",
                    description: "Genesis Accumulation",
                    uptime: "100%",
                    color: "cyan"
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-black/60 border border-white/10 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-white font-semibold">{service.name}</h4>
                      <div className={`px-2 py-1 rounded text-xs font-bold ${
                        service.color === 'green' ? 'bg-green-500/20 text-green-400' :
                        service.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-cyan-500/20 text-cyan-400'
                      }`}>
                        {service.status}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm mb-2">{service.description}</p>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-500">Uptime</span>
                      <span className="text-green-400">{service.uptime}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-cyan-300 mb-4">
                  ⏳ Every action = future token credit. Genesis handles are permanently inscribed.
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-12 py-4 text-lg font-bold"
                >
                  ⚡ Access Live Features
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 08. Sunrise Countdown - Timer Style */}
        <ScrollReveal direction="up" delay={3200}>
          <div className="max-w-6xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="☀️ 08. Sunrise Mode" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Genesis phase. All claims are protected + whitelisted.
                </GradientText>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-gradient-to-br from-orange-500/10 via-yellow-500/10 to-orange-500/10 border border-orange-500/30 rounded-3xl p-8 text-center">
              <div className="mb-8">
                <div className="text-6xl mb-4">☀️</div>
                <h3 className="text-2xl font-bold text-orange-400 mb-2">GENESIS SUNRISE COUNTDOWN</h3>
                <p className="text-gray-300">Phase 2 Launch Timer</p>
              </div>

              {/* Timer Display */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "17", label: "DAYS" },
                  { value: "11", label: "HOURS" },
                  { value: "38", label: "MINUTES" },
                  { value: "14", label: "SECONDS" }
                ].map((time, index) => (
                  <div key={index} className="bg-black/60 border border-orange-500/30 rounded-2xl p-6">
                    <div className="text-4xl lg:text-6xl font-mono font-bold text-orange-400 mb-2">
                      <DecryptedText
                        text={time.value}
                        animateOn="view"
                        speed={150}
                        maxIterations={10}
                        className="text-orange-400"
                        encryptedClassName="text-orange-600/50"
                      />
                    </div>
                    <div className="text-sm text-gray-400 font-semibold tracking-wider">{time.label}</div>
                  </div>
                ))}
              </div>

              {/* Phase Info */}
              <div className="bg-black/40 border border-yellow-500/20 rounded-2xl p-6 mb-6">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">🚀 Phase 2 Includes:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">🪙</span>
                    <span className="text-white">Token Launch</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">🌐</span>
                    <span className="text-white">Ecosystem Rollout</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-yellow-400">🎁</span>
                    <span className="text-white">Genesis Airdrops</span>
                  </div>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-12 py-4 text-xl font-bold shadow-2xl shadow-orange-500/25"
              >
                ☀️ Secure Genesis Access
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 09. Merch Layer - Streetwear Style */}
        <ScrollReveal direction="up" delay={3400}>
          <div className="max-w-7xl mx-auto mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="🧢 09. Culture Codes" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Exclusive drops tied to your handle identity
                </GradientText>
              </div>
            </div>

            {/* Streetwear Collection */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                {
                  design: "Ghost in the Prompt",
                  type: "Hoodie",
                  price: "$89",
                  image: "👻",
                  color: "from-purple-500/20 to-pink-500/20",
                  border: "border-purple-500/30"
                },
                {
                  design: "Your Website's Talking to Me",
                  type: "T-Shirt",
                  price: "$45",
                  image: "🗣️",
                  color: "from-cyan-500/20 to-blue-500/20",
                  border: "border-cyan-500/30"
                },
                {
                  design: "Chief Vibe Officer",
                  type: "Cap",
                  price: "$35",
                  image: "🧢",
                  color: "from-yellow-500/20 to-orange-500/20",
                  border: "border-yellow-500/30"
                },
                {
                  design: "Offline Is a Luxury",
                  type: "Crewneck",
                  price: "$75",
                  image: "📵",
                  color: "from-green-500/20 to-cyan-500/20",
                  border: "border-green-500/30"
                },
                {
                  design: "Not Available in Web2",
                  type: "Hoodie",
                  price: "$95",
                  image: "🚫",
                  color: "from-red-500/20 to-pink-500/20",
                  border: "border-red-500/30"
                },
                {
                  design: "Agent Layer Native",
                  type: "Jacket",
                  price: "$150",
                  image: "🧥",
                  color: "from-gray-500/20 to-white/20",
                  border: "border-gray-500/30"
                }
              ].map((item, index) => (
                <div key={index} className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-2xl p-6 hover:scale-105 transition-transform group cursor-pointer`}>
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-4">{item.image}</div>
                    <div className="bg-black/60 rounded-lg p-4">
                      <h3 className="text-white font-bold text-lg mb-1">"{item.design}"</h3>
                      <p className="text-gray-400 text-sm mb-2">{item.type}</p>
                      <div className="text-2xl font-bold text-cyan-400">{item.price}</div>
                    </div>
                  </div>
                  <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg py-3 text-white font-semibold transition-colors group-hover:bg-cyan-500/20 group-hover:border-cyan-500/40">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {/* Exclusive Access Notice */}
            <div className="bg-black/60 border border-cyan-500/20 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🔐</div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Handle-Linked Exclusivity</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Every item ships to handle-linked wallets only. Verify your identity through the Agent Layer protocol.
                No handle, no merch. No exceptions.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-12 py-4 text-xl font-bold"
              >
                🧢 Browse Full Collection
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 10. Hardware Drop - Product Launch Style */}
        <ScrollReveal direction="up" delay={3600}>
          <div className="max-w-6xl mx-auto mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="📱 10. The AI Phone" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  First native Agent Layer device
                </GradientText>
              </div>
            </div>

            {/* Product Showcase */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* Product Visual */}
              <div className="text-center">
                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-800 to-black rounded-3xl p-12 border border-gray-600/30">
                    <div className="text-9xl mb-6">📱</div>
                    <div className="bg-black/60 rounded-2xl p-6 border border-cyan-500/20">
                      <div className="text-cyan-400 font-mono text-sm mb-2">AGENT LAYER DEVICE</div>
                      <div className="text-white font-bold text-2xl">AI Phone Gen 1</div>
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl -z-10"></div>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Revolutionary Features</h3>
                  <div className="space-y-4">
                    {[
                      { icon: "🗣️", title: "Voice-First Interface", desc: "Natural conversation with your agents" },
                      { icon: "🤖", title: "Agent-Native OS", desc: "Built for AI interaction from the ground up" },
                      { icon: "🔒", title: "Privacy-Routed", desc: "End-to-end encrypted agent communications" },
                      { icon: "🌐", title: "Agent Layer Native", desc: "Direct protocol integration" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-black/40 rounded-xl border border-white/10">
                        <span className="text-2xl">{feature.icon}</span>
                        <div>
                          <h4 className="text-white font-semibold">{feature.title}</h4>
                          <p className="text-gray-400 text-sm">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Keynote Info */}
                <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">🎤</span>
                    <h4 className="text-xl font-bold text-red-400">Live from Invest Fest</h4>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Watch the official announcement and see the AI Phone in action.
                    First look at the future of human-agent interaction.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-3 text-lg font-bold w-full"
                  >
                    📺 Watch Keynote
                  </Button>
                </div>

                {/* Waitlist */}
                <div className="bg-black/60 border border-cyan-500/20 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-cyan-400 mb-3">Join the Waitlist</h4>
                  <p className="text-gray-300 text-sm mb-4">
                    Be among the first to experience Agent Layer hardware. Limited Genesis edition available.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 text-lg font-bold w-full"
                  >
                    📱 Reserve Your Device
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 11. Token Ecosystem - DeFi Style */}
        <ScrollReveal direction="up" delay={3800}>
          <div className="max-w-7xl mx-auto mb-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="🧬 11. Token Ecosystem" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Future token credit system for Genesis holders
                </GradientText>
              </div>
            </div>

            {/* Token Economics */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

              {/* Credit Accumulation */}
              <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/30 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">💰</div>
                  <h3 className="text-xl font-bold text-green-400">Credit Accumulation</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded-lg">
                    <span className="text-gray-300">Handle Claim</span>
                    <span className="text-green-400 font-bold">+100 Credits</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded-lg">
                    <span className="text-gray-300">Premium Purchase</span>
                    <span className="text-green-400 font-bold">+500 Credits</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded-lg">
                    <span className="text-gray-300">Bundle Pack</span>
                    <span className="text-green-400 font-bold">+300 Credits</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-black/40 rounded-lg">
                    <span className="text-gray-300">Device Pre-order</span>
                    <span className="text-green-400 font-bold">+750 Credits</span>
                  </div>
                </div>
              </div>

              {/* Genesis Exclusivity */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">🧬</div>
                  <h3 className="text-xl font-bold text-purple-400">Genesis Exclusivity</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-black/40 rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">Only Genesis-verified handles qualify</div>
                    <div className="text-gray-400 text-sm">No retroactive access. No exceptions.</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">Permanent ledger inscription</div>
                    <div className="text-gray-400 text-sm">Your credits are hardcoded into the protocol.</div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4">
                    <div className="text-white font-semibold mb-2">Early adopter multipliers</div>
                    <div className="text-gray-400 text-sm">Genesis phase = 2x credit accumulation.</div>
                  </div>
                </div>
              </div>

              {/* Airdrop Timeline */}
              <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">🎁</div>
                  <h3 className="text-xl font-bold text-yellow-400">Airdrop Timeline</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div>
                      <div className="text-white font-semibold">Phase 1: Genesis</div>
                      <div className="text-gray-400 text-sm">Credit accumulation active</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div>
                      <div className="text-white font-semibold">Phase 2: Launch</div>
                      <div className="text-gray-400 text-sm">Token distribution begins</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <div>
                      <div className="text-white font-semibold">Phase 3: Ecosystem</div>
                      <div className="text-gray-400 text-sm">Full utility activation</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                  <div className="text-yellow-400 font-bold text-center">☀️ Airdrop begins at ecosystem reveal</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-4 text-xl font-bold"
              >
                🧬 Start Accumulating Credits
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 12. Final CTA - Hero Style */}
        <ScrollReveal direction="up" delay={4000}>
          <div className="max-w-6xl mx-auto mb-12">
            {/* Epic Final Section */}
            <div className="relative">
              {/* Enhanced Background for Final Impact */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <LetterGlitch
                  glitchSpeed={100}
                  centerVignette={true}
                  outerVignette={false}
                  smooth={true}
                />
                <ParticleField
                  particleCount={120}
                  color="rgba(64, 255, 170, 0.3)"
                  darkColor="rgba(64, 255, 170, 0.5)"
                  className="absolute inset-0"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/85 to-black/95 rounded-3xl"></div>

              {/* Content */}
              <div className="relative z-10 text-center py-20 px-8">
                <div className="mb-12">
                  <h2 className="text-5xl lg:text-7xl font-bold mb-6">
                    <ShinyText text="🧭 The Agentic Era" speed={6} className="text-white" />
                  </h2>
                  <div className="text-2xl lg:text-3xl mb-8">
                    <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={8}
                      showBorder={false}
                      className="text-2xl lg:text-3xl font-bold"
                    >
                      HAS BEGUN
                    </GradientText>
                  </div>
                </div>

                <div className="max-w-4xl mx-auto mb-12 space-y-6">
                  <p className="text-2xl text-white font-bold">
                    This isn't a sign-up form. It's an operating license.
                  </p>
                  <p className="text-xl text-gray-300">
                    The root identity of your AI-powered life. Your handle is your gateway. Your ledger entry. Your agent key.
                  </p>
                  <p className="text-2xl text-cyan-400 font-semibold">
                    You're not joining a platform. You're joining a layer of reality.
                  </p>
                </div>

                {/* Final CTA */}
                <div className="space-y-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-20 py-8 text-3xl shadow-2xl shadow-[#40ffaa]/25 font-bold hover:scale-105 transition-transform"
                  >
                    🎟️ CLAIM YOUR HANDLE NOW
                  </Button>

                  <div className="text-gray-400 text-sm">
                    Genesis Sunrise Mode • Limited Time • No Retroactive Access
                  </div>
                </div>

                {/* Final Stats */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">∞</div>
                    <div className="text-gray-300 text-sm">Possibilities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">1</div>
                    <div className="text-gray-300 text-sm">Genesis Phase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">0</div>
                    <div className="text-gray-300 text-sm">Second Chances</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal direction="up" delay={2200}>
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-4">
              The infrastructure is live. The era has begun.
            </p>
            <a
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              → Return to Handle Registry
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Ambient Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
    </main>
  );
}
