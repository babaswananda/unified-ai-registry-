"use client";

import { ArrowRight, CheckCircle, Globe, Zap } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { Button } from "@/components/ui/Button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function AgenticWebSection() {
  const features = [
    {
      emoji: "✅",
      text: "Waitlist open for those who want to launch, deploy, and monetize their own AI agents across web, mobile, and voice."
    },
    {
      emoji: "✅", 
      text: "Your agent = your new website, your new team, your new product line."
    }
  ];

  const tlds = [
    { name: ".agenticweb", description: "Agent-driven web infrastructure", price: "$299" },
    { name: ".newinternet", description: "Next-generation internet protocol", price: "$399" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black text-white relative overflow-hidden">
      <ConditionalBackground 
        intensity={0.5}
        particleCount={60}
        floatingCount={0}
        gridSize={140}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🌐</span>
            <span className="text-cyan-400 font-semibold">Join the Agentic Web</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              THE NEXT ERA
            </span>
            <br />
            <span className="text-white">Of the Internet</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            The next era of the internet is agent-driven. Humans deploy AI agents that act on their behalf across the web. 
            <span className="text-cyan-400 font-semibold"> We're building the Agentic Web Layer now.</span>
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-cyan-500/20 p-1"
            >
              <GlowingEffect
                variant="cyan"
                spread={30}
                glow={true}
                disabled={false}
                proximity={48}
                inactiveZone={0.01}
                borderWidth={1}
              />
              <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl flex-shrink-0">{feature.emoji}</span>
                  <p className="text-lg text-gray-300">{feature.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TLD Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
          {tlds.map((tld, index) => (
            <div
              key={tld.name}
              className="relative rounded-xl border border-cyan-500/20 p-1"
            >
              <GlowingEffect
                variant="cyan"
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1}
              />
              <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-8 text-center">
                <h3 className="text-3xl font-bold text-cyan-400 mb-2">{tld.name}</h3>
                <p className="text-gray-300 mb-4">{tld.description}</p>
                <div className="text-2xl font-bold text-white">{tld.price}</div>
                <div className="text-sm text-gray-400 mt-2">one-time registration</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <span className="text-2xl">📥</span>
              <h3 className="text-2xl font-bold text-cyan-400">Early Access</h3>
            </div>
            
            <p className="text-lg text-gray-300 mb-6">
              Be among the first to deploy AI agents on the new internet infrastructure.
            </p>
            
            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 text-lg font-semibold"
            >
              Sign up for early access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
