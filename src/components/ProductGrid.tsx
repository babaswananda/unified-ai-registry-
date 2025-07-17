"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParticleField from "@/components/ui/ParticleField";
import MorphingBackground from "@/components/ui/MorphingBackground";
import AnimatedGrid from "@/components/ui/AnimatedGrid";

export default function ProductGrid() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleItems(prev => {
        if (prev.length < products.length) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 150);

    return () => clearInterval(timer);
  }, []);

  const products = [
    {
      emoji: "📧",
      name: "AI Email",
      description: "Instant inbox for agents & workflows"
    },
    {
      emoji: "🏗️",
      name: "AI Architect",
      description: "Build and deploy agentic flows"
    },
    {
      emoji: "👤",
      name: "AI Avatars",
      description: "Persona-level UI agents"
    },
    {
      emoji: "💻",
      name: "Agent OS",
      description: "Device-native agent layer"
    },
    {
      emoji: "⚡",
      name: "Vibe Coding",
      description: "AI-assisted coding OS"
    },
    {
      emoji: "🎯",
      name: "Chief Vibe Officer",
      description: "Enterprise AI culture layer"
    },
    {
      emoji: "🏪",
      name: "MCP Marketplace",
      description: "Deploy & monetize AI"
    },
    {
      emoji: "💬",
      name: "AI Messenger",
      description: "Replaces Slack/Discord"
    },
    {
      emoji: "📁",
      name: "AI Directory",
      description: "Discoverable AI presence"
    },
    {
      emoji: "☁️",
      name: "GPU Cloud",
      description: "Agent-ready compute"
    },
    {
      emoji: "📰",
      name: "AI Newsletter",
      description: "Smart communication feed"
    },
    {
      emoji: "🏭",
      name: "AI Factory",
      description: "Build AI products with templates"
    },
    {
      emoji: "🤖",
      name: "A.I.V.A.",
      description: "Advanced humanoid AI companion platform"
    }
  ];

  return (
    <section id="features" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Effects - Same as agents-are-coming */}
      <MorphingBackground intensity={0.8} />
      <AnimatedGrid
        gridSize={100}
        lineColor="rgba(0, 255, 255, 0.03)"
        pulseColor="rgba(0, 255, 255, 0.2)"
        intensity={0.8}
      />
      <ParticleField
        particleCount={100}
        color="rgba(0, 255, 255, 0.4)"
        darkColor="rgba(0, 255, 255, 0.6)"
      />
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What You're Getting Access To
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Your Agentic Handle Powers the Complete Unified AI Suite
            </p>
          </div>
        </ScrollReveal>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {products.map((product, index) => (
            <div
              key={product.name}
              className={`group bg-black/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-500 ${
                visibleItems.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: visibleItems.includes(index) ? 'translateY(0)' : 'translateY(32px)'
              }}
            >
              {/* Emoji */}
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                {product.emoji}
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-cyan-500/20 text-white">
          <p className="text-lg mb-4">
            Every domain registered gets access to all of the above — as they unlock.
          </p>
          <p className="text-gray-300">
            Register now to secure founding tier benefits and roadmap access.
          </p>
        </div>
      </div>
    </section>
  );
}
