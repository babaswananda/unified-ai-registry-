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

  const agentTypes = [
    "Detroit AI Agents",
    "Michigan AI Agents", 
    "School AI Agents",
    "District AI Agents"
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
            <span className="text-2xl">🧠</span>
            <span className="text-orange-400 font-semibold">The AI Agent Revolution</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              The AI Agent Revolution Is Here
            </span>
            <br />
            <span className="text-white">And It Starts IRL</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-12">
            This is the era of local intelligence. Every institution, every entrepreneur, 
            every family — backed by structured compute and localized AI deployment handles.
          </p>
        </div>

        {/* Agent Types Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          {agentTypes.map((type, index) => (
            <div
              key={type}
              className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-500/40 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-white">{type}</h3>
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

        {/* Global Protocol Teaser */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <span className="text-3xl">🌐</span>
            <h3 className="text-2xl font-bold text-cyan-400">Unified AI: The Global AI Agent IRL Protocol</h3>
          </div>
          
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            Detroit leads America's AI revolution, but Unified AI is the Infrastructure Root Layer 
            for agent infrastructure worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-cyan-400 font-semibold mb-2">.aiagents</h4>
              <p className="text-gray-300 text-sm">Global registry</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-blue-400 font-semibold mb-2">.agentsia</h4>
              <p className="text-gray-300 text-sm">French protocol</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-purple-400 font-semibold mb-2">.ai智能体</h4>
              <p className="text-gray-300 text-sm">China protocol</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <h4 className="text-green-400 font-semibold mb-2">.ki-agenten</h4>
              <p className="text-gray-300 text-sm">Germany protocol</p>
            </div>
          </div>
          
          <p className="text-xl font-bold text-white mt-6">
            You're not just claiming a digital handle — you're taking your place in the AI world.
          </p>
        </div>
      </div>
    </section>
  );
}
