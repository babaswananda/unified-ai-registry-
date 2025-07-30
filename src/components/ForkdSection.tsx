"use client";

import { GitFork, DollarSign, Code, Zap, Link, Shield } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/Button";

export default function ForkdSection() {
  const forkableItems = [
    {
      emoji: "🍴",
      title: "Fork AI agents",
      description: "Clone and customize any agent",
      color: "text-cyan-400"
    },
    {
      emoji: "💻",
      title: "Fork VibeCoder projects",
      description: "Remix development environments",
      color: "text-blue-400"
    },
    {
      emoji: "⚡",
      title: "Fork entire stacks",
      description: "Deploy under your own handle",
      color: "text-purple-400"
    },
    {
      emoji: "💰",
      title: "Get paid when people use your fork",
      description: "Automatic monetization",
      color: "text-green-400"
    }
  ];

  const features = [
    {
      emoji: "💰",
      text: "Monetization is native",
      color: "text-green-400"
    },
    {
      emoji: "🔗",
      text: "Attribution is automatic",
      color: "text-blue-400"
    },
    {
      emoji: "🛡️",
      text: "Every fork is tracked on-chain",
      color: "text-purple-400"
    },
    {
      emoji: "⚡",
      text: "No third-party dependencies",
      color: "text-cyan-400"
    }
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden">
      <ConditionalBackground 
        intensity={0.6}
        particleCount={80}
        floatingCount={0}
        gridSize={120}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Featured Protocol Drop Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/40 px-8 py-4 rounded-full mb-8 shadow-lg shadow-orange-500/20">
            <span className="text-3xl animate-pulse">🔥</span>
            <span className="text-orange-400 font-bold text-lg">FEATURED PROTOCOL DROP</span>
            <span className="text-3xl animate-pulse">🔥</span>
          </div>
          <div className="inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🍴</span>
            <span className="text-green-400 font-semibold">ForkD</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              BUILD, FORK, GET PAID
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            ForkD is the open-sourced layer that allows any user, anywhere to clone or remix 
            any agent, protocol, app, or experience from Unified — and monetize it.
          </p>
          
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-green-400 mb-2">Build once. Fork forever.</h3>
          </div>
        </div>

        {/* Forkable Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          {forkableItems.map((item, index) => {
            return (
              <SpotlightCard
                key={item.title}
                variant="green"
                className="border-green-500/20"
                glowSpread={30}
                glowProximity={48}
              >
                <div className="p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-3xl mb-4">{item.emoji}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
          {features.map((feature, index) => {
            return (
              <div
                key={feature.text}
                className="bg-black/30 border border-gray-600 rounded-lg p-4 text-center hover:border-green-500/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl mb-2">{feature.emoji}</div>
                <span className="text-white text-sm font-medium">{feature.text}</span>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <div className="bg-black/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-green-400 mb-4">
              Open Source. Native Monetization. Automatic Attribution.
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Every fork creates a new economy. Every remix generates value. 
              Every contribution is tracked and rewarded on-chain.
            </p>
            
            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-400 hover:to-blue-400 text-white px-8 py-4 text-lg"
            >
              Start Forking Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
