"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import TypewriterText from "@/components/ui/TypewriterText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { ArrowRight, Eye, Zap, Globe } from "lucide-react";

export default function ThemeParkPage() {
  const [showMessage, setShowMessage] = useState(false);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 2000);

    // Countdown to ecosystem rollout
    const targetDate = new Date("2025-08-15T10:00:00Z");
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        
        {/* HERO SUMMIT - UnifiedAI Operating System */}
        <ScrollReveal direction="scale" delay={500}>
          <div className="text-center mb-20 max-w-6xl mx-auto pt-20">
            {/* AI Sigil Background Effect */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center opacity-20">
                <div className="w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              </div>

              {/* Main Hero Content */}
              <div className="relative z-10">
                <div className="mb-8">
                  <h1 className="text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                    <span dangerouslySetInnerHTML={{ __html: '&#129504;' }} />{" "}
                    <span className="bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Welcome to UnifiedAI
                    </span>
                  </h1>
                  <h2 className="text-3xl lg:text-4xl text-white font-semibold mb-6">
                    The Operating System of the AI-Crypto Native Internet
                  </h2>
                  <div className="text-xl lg:text-2xl text-gray-300 mb-8">
                    Own your agent. Design your dimension. Monetize your mind.
                  </div>
                  <div className="text-lg text-cyan-400 mb-8">
                    Built for agents, not accounts.<br />
                    Sovereign by design. Cross-realm by default.
                  </div>
                </div>

                {/* Primary CTAs */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-12 py-6 text-xl shadow-2xl shadow-cyan-500/25 rounded-2xl"
                  >
                    🎯 Claim Your Handle
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-black/50 border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 px-12 py-6 text-xl backdrop-blur-sm rounded-2xl"
                  >
                    💎 Join the Ecosystem
                  </Button>

                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-black/50 border-2 border-purple-500/30 text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/5 px-12 py-6 text-xl backdrop-blur-sm rounded-2xl"
                  >
                    🔮 Enter the Realm
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* What Is UnifiedAI? */}
        <ScrollReveal direction="up" delay={1000}>
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">🔗 01. What Is UnifiedAI?</h2>
              <p className="text-xl text-gray-300 mb-8">
                A decentralized protocol and experience layer for AI-powered life.
              </p>

              <div className="text-left max-w-3xl mx-auto mb-8">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">It combines:</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>Agent-first identity (sovereign AI handles)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>Multilingual, multi-dimensional UI</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>Tokenized infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>Streamed AI experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span>Immersive monetization tools</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-white font-semibold">
                UnifiedAI is not just a tool. It's the intelligent bridge between user, machine, and realm.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Why This Matters - Founding Moment */}
        <ScrollReveal direction="up" delay={1400}>
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-4">🎯 Your Handle Is Your License</h2>
              <p className="text-lg text-gray-300 mb-6">
                This isn't a username. It's your access key to the agentic internet. Your handle becomes:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
                  <div className="text-3xl mb-2">🔐</div>
                  <div className="text-cyan-400 text-sm font-medium">Wallet</div>
                </div>
                <div className="text-center p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
                  <div className="text-3xl mb-2">🌐</div>
                  <div className="text-cyan-400 text-sm font-medium">Agent Address</div>
                </div>
                <div className="text-center p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
                  <div className="text-3xl mb-2">🪪</div>
                  <div className="text-cyan-400 text-sm font-medium">AI-Native Identity</div>
                </div>
                <div className="text-center p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
                  <div className="text-3xl mb-2">🚪</div>
                  <div className="text-cyan-400 text-sm font-medium">System Access</div>
                </div>
              </div>
              <p className="text-white font-semibold">You are not joining a platform. You are becoming part of the new digital root layer.</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Live Marketplace Activity */}
        <ScrollReveal direction="up" delay={1400}>
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-4">🏪 Agent Marketplace</h2>
              <p className="text-gray-300 mb-6">Handles are being claimed in real-time:</p>

              {/* Live Feed */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
                  <span className="text-cyan-400 text-sm">🆕 @FuturePrime just registered</span>
                  <span className="text-gray-400 text-xs">2 min ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
                  <span className="text-cyan-400 text-sm">🆕 @NeuralCity claimed VibeCoder</span>
                  <span className="text-gray-400 text-xs">4 min ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-cyan-500/5 rounded-xl border border-cyan-500/10">
                  <span className="text-cyan-400 text-sm">🆕 AI Phone order from Atlanta</span>
                  <span className="text-gray-400 text-xs">7 min ago</span>
                </div>
              </div>

              {/* Status Box */}
              <div className="bg-white/5 rounded-xl border border-white/10 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-cyan-400 font-bold text-xl">💠 12</div>
                    <div className="text-gray-300 text-sm">Premium Tier A handles left</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold text-xl">💠 28</div>
                    <div className="text-gray-300 text-sm">Dev Bundles remaining</div>
                  </div>
                  <div>
                    <div className="text-cyan-400 font-bold text-xl">💠 LIVE</div>
                    <div className="text-gray-300 text-sm">All TLDs active</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* UNIFIED IDENTITY LAYER - Sovereign AI Handles */}
        <ScrollReveal direction="up" delay={1600}>
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-white mb-4">🌐 Unified Identity Layer</h2>
              <h3 className="text-2xl text-cyan-400 mb-4">.AIAGENT Handles — Global, Dimensional & Multilingual</h3>
              <p className="text-xl text-gray-300 mb-8 italic">
                "Every AI Agent needs a name. Every name needs a sovereign home."
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
                UnifiedAI introduces AI-native handles designed for global trust, identity, and interaction. These aren't just domains — they're secure, cross-dimensional identifiers that transcend language, borders, and platforms.
              </p>
            </div>

            {/* Handle Search */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="flex gap-2 mb-6">
                <input
                  type="text"
                  placeholder="Search your sovereign handle…"
                  className="flex-1 bg-black/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none"
                />
                <Button className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-6">
                  Search
                </Button>
              </div>
            </div>

            {/* Sovereign AI Handle Extensions */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">✅ Sovereign AI Handle Extensions (TLDs)</h3>
              <p className="text-gray-300 text-center mb-6">Available in multiple languages to serve global agents and markets:</p>

              <div className="overflow-x-auto">
                <table className="w-full max-w-4xl mx-auto">
                  <thead>
                    <tr className="border-b border-cyan-500/20">
                      <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Language</th>
                      <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Handle (TLD)</th>
                      <th className="text-left py-3 px-4 text-cyan-400 font-semibold">Native Script</th>
                      <th className="text-center py-3 px-4 text-cyan-400 font-semibold">Reserve</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { language: "English", handle: ".aiagents", native: "–", price: "$99/yr" },
                      { language: "German", handle: ".ki-agenten", native: "–", price: "$99/yr" },
                      { language: "Spanish", handle: ".agentesdeia", native: "–", price: "$99/yr" },
                      { language: "Russian", handle: ".agentsia", native: "–", price: "$99/yr" },
                      { language: "Korean", handle: "xn--ai-xy7jg8cuug21c", native: ".ai에이전트", price: "$99/yr" },
                      { language: "Japanese", handle: "xn--ai-xg4ad4fre1nlc", native: ".aiエージェント", price: "$99/yr" },
                      { language: "Chinese", handle: "xn--ai-yo3c219fum3a", native: ".ai智能体", price: "$99/yr" }
                    ].map((item, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-cyan-500/5 transition-all">
                        <td className="py-4 px-4 text-white font-medium">{item.language}</td>
                        <td className="py-4 px-4 text-cyan-400 font-mono text-sm">{item.handle}</td>
                        <td className="py-4 px-4 text-white">{item.native}</td>
                        <td className="py-4 px-4 text-center">
                          <Button size="sm" className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs">
                            {item.price}
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Why It Matters */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20 p-6 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">🔐 Why It Matters</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">🛡️</div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Trust by Design</h4>
                  <p className="text-gray-300 text-sm">Each handle is cryptographically secured and AI-native</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌍</div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Cultural Localization</h4>
                  <p className="text-gray-300 text-sm">Enter any market on their terms, in their language</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🔮</div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Dimension-Aware</h4>
                  <p className="text-gray-300 text-sm">Dynamic response styles and agent behaviors per language/region</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-2">🌐</div>
                  <h4 className="text-cyan-400 font-semibold mb-2">Cross-Realm Identity</h4>
                  <p className="text-gray-300 text-sm">Sync your AI agent's identity across physical and virtual realms</p>
                </div>
              </div>
            </div>

            {/* Global Matrix Note */}
            <div className="text-center mb-8">
              <p className="text-gray-300 text-sm max-w-3xl mx-auto">
                🌍 Each handle is mapped to a unique dimension within the UnifiedAI Matrix — enabling multilingual discovery, sovereign chat identity, agent-to-agent trust, and user-controlled interoperability.
              </p>
            </div>

            {/* Reserve CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">🎟️ Reserve Yours</h3>
              <p className="text-gray-300 mb-6">First-come. First-realm.</p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-12 py-6 text-xl"
              >
                👉 Claim Your Handle
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Enter the Realms */}
        <ScrollReveal direction="up" delay={1800}>
          <div className="bg-black/50 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 mb-12 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">🌀 03. Enter the Realms</h2>
              <p className="text-xl text-gray-300 mb-8">
                UnifiedAI introduces dynamic AI Realms — immersive portals where agents live, learn, and earn.
              </p>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full max-w-4xl mx-auto">
                <thead>
                  <tr className="border-b border-purple-500/20">
                    <th className="text-left py-3 px-4 text-purple-400 font-semibold">Realm Name</th>
                    <th className="text-left py-3 px-4 text-purple-400 font-semibold">Focus</th>
                    <th className="text-center py-3 px-4 text-purple-400 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "AgentOS", focus: "Personal AI Operating System", status: "🟢 Live", color: "text-green-400" },
                    { name: "VibeCoder", focus: "AI-Powered Visual Builder", status: "🟡 Early Access", color: "text-yellow-400" },
                    { name: "ThoughtDrive", focus: "Memory-to-Product Engine", status: "🔵 Coming Soon", color: "text-blue-400" },
                    { name: "DreamRelay", focus: "Story Generator + Film Studio", status: "🔵 Coming Soon", color: "text-blue-400" },
                    { name: "ChatLife", focus: "Sentient Mood OS", status: "🔮 Pre-Alpha", color: "text-purple-400" }
                  ].map((realm, index) => (
                    <tr key={index} className="border-b border-white/10 hover:bg-purple-500/5 transition-all">
                      <td className="py-4 px-4 text-white font-medium">{realm.name}</td>
                      <td className="py-4 px-4 text-gray-300">{realm.focus}</td>
                      <td className={`py-4 px-4 text-center font-semibold ${realm.color}`}>{realm.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-purple-500/20 text-purple-400 border border-purple-500/30 px-12 py-6 text-xl"
              >
                👁️ Explore Realms
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Premium Handles */}
        <ScrollReveal direction="up" delay={1800}>
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">💎 Premium Handles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {[
                  { handle: "@legend.ai", status: "available", price: "$2,499" },
                  { handle: "@alpha.chat", status: "available", price: "$1,899" },
                  { handle: "@devhub.id", status: "available", price: "$999" },
                  { handle: "@metaops", status: "bid open", price: "$3,200" }
                ].map((item, index) => (
                  <div key={index} className="bg-cyan-500/5 rounded-xl border border-cyan-500/10 p-6 hover:border-cyan-500/30 transition-all text-center">
                    <div className="text-cyan-400 font-mono text-xl mb-3">{item.handle}</div>
                    <div className="text-white font-bold text-2xl mb-3">{item.price}</div>
                    <Button size="sm" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white mb-2">
                      {item.status === 'available' ? 'Buy Now' : 'Place Bid'}
                    </Button>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4">
                  🎟️ Reserve Standard Handle
                </Button>
                <Button size="lg" className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 px-8 py-4">
                  🔍 Browse All Premiums
                </Button>
                <Button size="lg" className="bg-white/10 text-white border border-white/20 px-8 py-4">
                  💼 View Bundle Packs
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* CLAIM YOUR HANDLE TIER - Card-Based Layout */}
        <ScrollReveal direction="up" delay={1800}>
          <div className="mb-16 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">🎯 Claim Your Handle Tier</h2>
              <p className="text-xl text-gray-300">Each tier unlocks different capabilities in the Agentic Web</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🧠",
                  title: "AI Agent Handle",
                  desc: "Your core identity. Needed for all agent access.",
                  includes: "Wallet, AI Directory, Access Key",
                  price: "$99",
                  status: "Genesis-only pricing",
                  popular: true
                },
                {
                  icon: "🛠️",
                  title: "Dev Kit Handle",
                  desc: "Build with your dev ID + testnet access",
                  includes: "SDKs, early access, Dev tools",
                  price: "$199",
                  status: "Available now"
                },
                {
                  icon: "🎨",
                  title: "Vibe Coder Handle",
                  desc: "Creative build tools and UI framework",
                  includes: "IDE access, UI/UX tools, Deploy flows",
                  price: "$149",
                  status: "Available now"
                },
                {
                  icon: "💼",
                  title: "Chief Vibe Officer",
                  desc: "Culture and brand leadership tier",
                  includes: "Merch, summit invites, exclusive drops",
                  price: "Invite-only",
                  status: "Limited access"
                },
                {
                  icon: "🌐",
                  title: "Compute Endpoint",
                  desc: "Host agents, apps, and services",
                  includes: "Endpoint hosting, Agent deployment",
                  price: "$299",
                  status: "Pre-public access"
                },
                {
                  icon: "👥",
                  title: "Dev Community",
                  desc: "Auto-generated community access",
                  includes: "Courses, collab pods, governance",
                  price: "Free",
                  status: "Pay to unlock premium"
                }
              ].map((tier, index) => (
                <div key={index} className={`relative bg-black/50 backdrop-blur-xl border rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-300 ${
                  tier.popular ? 'border-cyan-500/30 ring-2 ring-cyan-500/20' : 'border-white/10'
                }`}>
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{tier.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{tier.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{tier.desc}</p>
                    <div className="text-cyan-400 text-sm mb-4">Includes: {tier.includes}</div>
                    <div className="text-2xl font-bold text-white mb-2">{tier.price}</div>
                    <div className="text-xs text-gray-400 mb-6">{tier.status}</div>
                  </div>

                  <Button
                    size="lg"
                    className={`w-full ${
                      tier.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                        : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    }`}
                  >
                    {tier.price === "Invite-only" ? "Request Access" : "Reserve This Tier"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Domain Registry */}
        <ScrollReveal direction="up" delay={2000}>
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-4">🌐 Domain Registry</h2>
              <p className="text-gray-300 mb-6">Every handle is built on a sovereign domain infrastructure. Own the roots — not just the usernames.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {[
                  { domain: ".chat", desc: "messaging & agent comms" },
                  { domain: ".id", desc: "personal identity stacks" },
                  { domain: ".agent", desc: "official agent handles" },
                  { domain: ".vibe", desc: "creative coders & brands" },
                  { domain: ".market", desc: "storefronts" }
                ].map((item, index) => (
                  <div key={index} className="bg-cyan-500/5 rounded-xl border border-cyan-500/10 p-4">
                    <div className="text-cyan-400 font-mono text-lg mb-1">{item.domain}</div>
                    <div className="text-gray-300 text-sm">{item.desc}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <Button size="sm" className="bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  🚀 Register Your Domain Now
                </Button>
              </div>
              <p className="text-gray-400 text-sm">🛠️ All registry purchases include DNS + wallet routing</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Monetization Engine */}
        <ScrollReveal direction="up" delay={2000}>
          <div className="bg-black/50 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 mb-12 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">💰 04. Monetization Engine</h2>
              <p className="text-xl text-gray-300 mb-8">Own and monetize every interaction.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-green-500/5 rounded-xl border border-green-500/10 p-6 text-center">
                <div className="text-3xl mb-4">🏷️</div>
                <h3 className="text-green-400 font-semibold mb-3">Handle-as-a-Service</h3>
                <p className="text-gray-300 text-sm">Rent or resell agent handles</p>
              </div>
              <div className="bg-green-500/5 rounded-xl border border-green-500/10 p-6 text-center">
                <div className="text-3xl mb-4">💎</div>
                <h3 className="text-green-400 font-semibold mb-3">Tokenized Encounters</h3>
                <p className="text-gray-300 text-sm">Charge per convo, unlocks, or dimensions</p>
              </div>
              <div className="bg-green-500/5 rounded-xl border border-green-500/10 p-6 text-center">
                <div className="text-3xl mb-4">🏪</div>
                <h3 className="text-green-400 font-semibold mb-3">Microfranchising</h3>
                <p className="text-gray-300 text-sm">License your realm setup or branded agents</p>
              </div>
              <div className="bg-green-500/5 rounded-xl border border-green-500/10 p-6 text-center">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-green-400 font-semibold mb-3">NFT Memory Drops</h3>
                <p className="text-gray-300 text-sm">Sell moments, thoughts, voice, and style packs</p>
              </div>
              <div className="bg-green-500/5 rounded-xl border border-green-500/10 p-6 text-center">
                <div className="text-3xl mb-4">🛒</div>
                <h3 className="text-green-400 font-semibold mb-3">In-Chat Commerce</h3>
                <p className="text-gray-300 text-sm">One-tap product sales inside agent streams</p>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-green-500/20 text-green-400 border border-green-500/30 px-12 py-6 text-xl"
              >
                💼 Launch My Monetization Stack
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Stream AI Experiences */}
        <ScrollReveal direction="up" delay={2200}>
          <div className="bg-black/50 backdrop-blur-xl border border-blue-500/20 rounded-3xl p-8 mb-12 max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">🚀 05. Stream AI Experiences</h2>
              <p className="text-xl text-gray-300 mb-8">Deliver full AI applications without apps.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-500/5 rounded-xl border border-blue-500/10 p-6">
                <div className="text-3xl mb-4">📱</div>
                <h3 className="text-blue-400 font-semibold mb-3">Embed Agents</h3>
                <p className="text-gray-300 text-sm">Into websites, devices, digital twins</p>
              </div>
              <div className="bg-blue-500/5 rounded-xl border border-blue-500/10 p-6">
                <div className="text-3xl mb-4">📺</div>
                <h3 className="text-blue-400 font-semibold mb-3">Stream AI</h3>
                <p className="text-gray-300 text-sm">Through smart TVs, storefronts, or kiosks</p>
              </div>
              <div className="bg-blue-500/5 rounded-xl border border-blue-500/10 p-6">
                <div className="text-3xl mb-4">🏪</div>
                <h3 className="text-blue-400 font-semibold mb-3">Host Conversations</h3>
                <p className="text-gray-300 text-sm">In retail, trade, and social spaces</p>
              </div>
              <div className="bg-blue-500/5 rounded-xl border border-blue-500/10 p-6">
                <div className="text-3xl mb-4">🔗</div>
                <h3 className="text-blue-400 font-semibold mb-3">Entry Points</h3>
                <p className="text-gray-300 text-sm">Voice, QR, or link-based access</p>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-blue-500/20 text-blue-400 border border-blue-500/30 px-12 py-6 text-xl"
              >
                🧩 Deploy StreamNow AI Agents
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* What's Live Right Now */}
        <ScrollReveal direction="up" delay={2400}>
          <div className="bg-black/50 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-4">⚡ What's Live Now</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                {[
                  "✅ Handle reservations (sunrise protected)",
                  "✅ Premium handle auctions (first come, first served)",
                  "✅ AI email waitlist enrollment",
                  "✅ Merch pre-orders (linked to wallet)",
                  "✅ Dev community onboarding",
                  "✅ Hardware device waitlist (AI Phone)"
                ].map((item, index) => (
                  <div key={index} className="text-green-400 text-sm font-medium">{item}</div>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-white font-semibold text-sm">🔥 These handles will not be available again.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-cyan-400 font-semibold text-sm">💰 Every action now = future token credits.</p>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-white font-semibold text-sm">📜 Genesis buyers are hardcoded into the ledger.</p>
                </div>
              </div>
              <div className="mt-6 p-6 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <div className="text-center">
                  <h3 className="text-cyan-400 font-bold text-lg mb-3">☀️ Sunrise Mode Is Live</h3>
                  <p className="text-gray-300 text-sm mb-4">Handles registered now are protected and whitelisted.</p>
                  <div className="grid grid-cols-4 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{countdown.days}</div>
                      <div className="text-xs text-gray-400">DAYS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{countdown.hours}</div>
                      <div className="text-xs text-gray-400">HOURS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{countdown.minutes}</div>
                      <div className="text-xs text-gray-400">MINS</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{countdown.seconds}</div>
                      <div className="text-xs text-gray-400">SECS</div>
                    </div>
                  </div>
                  <p className="text-white font-semibold text-sm">⏳ Phase 2 launches with ecosystem rollout</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Mid-Page CTA */}
        <ScrollReveal direction="up" delay={2000}>
          <div className="text-center mb-16">
            <Button
              variant="gradient"
              size="lg"
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-12 py-6 text-xl shadow-2xl shadow-cyan-500/25"
            >
              <Zap className="w-6 h-6 mr-3" />
              🎟️ Reserve Your Handle Now
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </ScrollReveal>

        {/* Merch Drops */}
        <ScrollReveal direction="up" delay={2200}>
          <div className="bg-black/50 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-4">🧢 Merch Drops</h2>
              <p className="text-gray-300 mb-6">From the labs of future culture:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  "I Talk to My AI Agent",
                  "Your Website's Talking to Me",
                  "Chief Vibe Officer",
                  "Built Different. Think Agentic.",
                  "Not Human. Not Bot. Something Else.",
                  "Ghost in the Prompt",
                  "Your AI's Favorite AI",
                  "Offline is a Luxury",
                  "Not Available in Web2"
                ].map((item, index) => (
                  <div key={index} className="text-center p-3 bg-purple-500/5 rounded-xl border border-purple-500/10">
                    <div className="text-purple-400 text-sm font-medium">"{item}"</div>
                  </div>
                ))}
              </div>
              <p className="text-orange-400 font-semibold">🔥 Limited drop. All purchases linked to your handle wallet.</p>
            </div>
          </div>
        </ScrollReveal>

        {/* AI Phone & Token Ecosystem */}
        <ScrollReveal direction="up" delay={2400}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-3">📱 AI Phone Pre-Order</h3>
              <p className="text-gray-300 text-sm mb-3">The first native AgentOS hardware device.</p>
              <p className="text-cyan-400 text-sm font-semibold">Live announcement @ Invest Fest Keynote.</p>
              <p className="text-gray-400 text-xs mt-2">📍 Watch the Keynote on StreamNow</p>
              <p className="text-gray-400 text-xs">Live countdown begins soon. Watch, reserve, and stream it all from streamnow/agents.</p>
            </div>

            <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-semibold mb-3">🧬 Token Ecosystem</h3>
              <p className="text-gray-300 text-sm mb-3">Everything you register or purchase now builds your account credit stack for the future.</p>
              <p className="text-gray-400 text-sm mb-2">We're not announcing token details yet, but when we do, you'll already be ahead.</p>
              <p className="text-orange-400 text-sm font-semibold">☀️ Airdrops begin at keynote.</p>
            </div>
          </div>
        </ScrollReveal>

        {/* Founding Moment */}
        <ScrollReveal direction="up" delay={2600}>
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">🧭 Founding Moment</h2>
              <div className="space-y-4 text-gray-300">
                <p>This isn't just a sign-up page.</p>
                <p>This is the gateway to the Agentic Era.</p>
                <p>Your handle isn't a username — it's your operating license.</p>
                <p>Claiming now makes you a founding node in the new AI-powered order.</p>
                <p>The infrastructure is already live.</p>
                <p>The future routes through those who showed up early.</p>
                <p className="text-cyan-400 font-semibold text-xl mt-6">The new interface belongs to those who help build it.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Final CTA Section */}
        <ScrollReveal direction="up" delay={2800}>
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">🎟️ Claim Your Operating License</h2>
            <p className="text-gray-300 mb-6">The Agentic Web is live. The infrastructure is running. Don't just register — hardcode yourself into the new order.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="gradient"
                size="lg"
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-12 py-6 text-xl shadow-2xl shadow-cyan-500/25"
              >
                🎟️ Reserve Handle
                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-black/50 border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 px-12 py-6 text-xl backdrop-blur-sm"
              >
                💎 Explore Premiums
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal direction="up" delay={3000}>
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-4">
              The infrastructure is live. The era has begun.
            </p>
            <a
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              🔁 Return to AgentOS.global Registry Hub
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
