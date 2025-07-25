"use client";

import { Check, Brain, Zap, Shield, Globe, Coins, Building } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import NewsTicker from "@/components/ui/NewsTicker";

export default function AgentRevolutionSection() {
  const features = [
    { emoji: "🛡️", text: "Decentralized", color: "text-cyan-400" },
    { emoji: "💰", text: "Crypto-Native", color: "text-blue-400" },
    { emoji: "⚡", text: "Fully Tokenized", color: "text-purple-400" },
    { emoji: "🏢", text: "Locally Governed", color: "text-green-400" },
    { emoji: "🌐", text: "Institution-First Distribution", color: "text-pink-400" },
    { emoji: "🧠", text: "Built IRL for IRL impact", color: "text-orange-400" }
  ];

  const summitMandates = [
    { title: "Smart Infrastructure", emoji: "🏗️", desc: "Municipal AI integration" },
    { title: "Automated Manufacturing", emoji: "🏭", desc: "Industrial reshoring" },
    { title: "Workforce Retraining", emoji: "👥", desc: "AI skills development" },
    { title: "Localized AI Solutions", emoji: "🎯", desc: "Community-specific deployment" },
    { title: "Public-Private Partnerships", emoji: "🤝", desc: "Collaborative ecosystems" },
    { title: "AI Ethics & Governance", emoji: "⚖️", desc: "Privacy & transparency" },
    { title: "Economic Resilience", emoji: "💪", desc: "Supply chain sovereignty" },
    { title: "Digital Equity", emoji: "🌐", desc: "Universal AI access" }
  ];

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

  return (
    <section className="py-24 text-white relative overflow-hidden">
      <ConditionalBackground
        intensity={0.7}
        particleCount={100}
        floatingCount={0}
        gridSize={100}
      />

      {/* News Ticker */}
      <NewsTicker items={tickerItems} speed={60} className="mb-8" />

      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-orange-500/10 border border-orange-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🔥</span>
            <span className="text-orange-400 font-semibold">ORIGIN STORY: DETROIT — THE INFLECTION POINT</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Detroit AI Summit
            </span>
            <br />
            <span className="text-white">Federal Mandate Alignment</span>
          </h2>

          <p className="text-xl sm:text-2xl text-gray-300 max-w-5xl mx-auto mb-12">
            At the recent <span className="text-orange-400 font-semibold">Detroit AI & Innovation Summit</span>, Mayor Mike Duggan and city leaders outlined a robust vision to propel Detroit—and by extension, America—into an AI-powered economic future. These initiatives align directly with Trump-era federal mandates on infrastructure reshoring and economic sovereignty.
          </p>
        </div>

        {/* Summit Mandates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          {summitMandates.map((mandate, index) => (
            <div
              key={mandate.title}
              className="bg-black/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-6 text-center hover:border-orange-500/40 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-3">{mandate.emoji}</div>
              <h3 className="text-lg font-bold text-white mb-2">{mandate.title}</h3>
              <p className="text-gray-400 text-xs">{mandate.desc}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
          {features.map((feature, index) => {
            return (
              <div
                key={feature.text}
                className="bg-black/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4 text-center hover:border-cyan-500/30 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform">{feature.emoji}</div>
                <span className="text-white text-sm font-medium">{feature.text}</span>
                <Check className="w-4 h-4 text-green-400 mt-2 mx-auto" />
              </div>
            );
          })}
        </div>

        {/* IRL Response */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-3xl">🚀</span>
            <h3 className="text-2xl font-bold text-orange-400">OUR RESPONSE: THE UNIFIED AI INFRASTRUCTURE ROOT LAYER (IRL)</h3>
          </div>

          <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto">
            Unified AI's Infrastructure Root Layer (IRL) is the real-world operational backbone that activates and embodies these mandates in Detroit and beyond.
            <span className="text-orange-400 font-semibold"> This is not theory—it is IRL deployment driving the new American AI economy.</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-orange-400 font-semibold mb-2">🏛️ Municipal Integration</h4>
              <p className="text-gray-300 text-sm">AI Alley at Trapper's Alley</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-red-400 font-semibold mb-2">🏭 Industrial Deployment</h4>
              <p className="text-gray-300 text-sm">Reshoring with AI workflows</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-blue-400 font-semibold mb-2">🎓 Education & Workforce</h4>
              <p className="text-gray-300 text-sm">Detroit schools AI rollout</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold mb-2">🏙️ Localized Sovereignty</h4>
              <p className="text-gray-300 text-sm">Crypto-native infrastructure</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-cyan-400 font-semibold mb-2">🔒 Data Sovereignty</h4>
              <p className="text-gray-300 text-sm">Secure protocols</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-green-400 font-semibold mb-2">💼 Operator Economy</h4>
              <p className="text-gray-300 text-sm">Real income streams for HITL</p>
            </div>
          </div>

          <p className="text-xl font-bold text-white mt-6">
            Detroit's summit was the spark. <span className="text-orange-400">Unified AI IRL is the engine driving America's sovereign AI infrastructure future</span>—built IRL, built for IRL impact, built for America.
          </p>
        </div>
      </div>
    </section>
  );
}
