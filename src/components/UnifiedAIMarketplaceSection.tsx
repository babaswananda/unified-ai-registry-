"use client";

import { CheckCircle, ArrowRight } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/Button";

export default function UnifiedAIMarketplaceSection() {
  const features = [
    "Native payment integration",
    "License your AI creations", 
    "Browse exclusive infrastructure utilities",
    "Tokenized contracts + commercial APIs"
  ];

  const marketplaceCategories = [
    { emoji: "🤖", name: "AI Agents", description: "Intelligent automation" },
    { emoji: "🛠️", name: "AI Tools", description: "Development utilities" },
    { emoji: "👤", name: "Personalities", description: "Custom AI characters" },
    { emoji: "⚙️", name: "Services", description: "Professional AI services" }
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden">
      <ConditionalBackground 
        intensity={0.7}
        particleCount={100}
        floatingCount={0}
        gridSize={110}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🔍</span>
            <span className="text-blue-400 font-semibold">Unified AI Marketplace</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Official AI Marketplace
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            The official marketplace for AI tools, agents, personalities, and services.
            <br />
            <span className="text-blue-400 font-semibold">
              Build, buy, sell, license, or deploy AI capabilities within a trusted ecosystem.
            </span>
          </p>
        </div>

        {/* Marketplace Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          {marketplaceCategories.map((category, index) => (
            <div
              key={category.name}
              className="relative rounded-xl border border-blue-500/20 p-1 transition-all duration-300 hover:scale-105"
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
              <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-6 text-center h-full">
                <div className="text-3xl mb-3">{category.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center space-x-3 bg-black/30 rounded-lg p-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-white text-sm font-medium">{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-xl font-bold text-blue-400 mb-4">
              → Open for listing, launching, and licensing now.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 py-4 text-lg"
            >
              Submit Your Tool or Agent
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              className="bg-black/50 backdrop-blur-sm border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 px-8 py-4 text-lg"
            >
              Browse Marketplace
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
