"use client";

import { Bot, Settings, User, Cpu, Key, DollarSign } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/Button";

export default function AIAgentsDevKitSection() {
  const devKitTypes = [
    {
      emoji: "🤖",
      title: "Custom agents",
      description: "Build specialized AI personalities",
      color: "text-cyan-400"
    },
    {
      emoji: "⚙️",
      title: "Assistant protocols",
      description: "Create intelligent workflow systems",
      color: "text-blue-400"
    },
    {
      emoji: "👤",
      title: "Domain-native personalities",
      description: "Industry-specific AI characters",
      color: "text-purple-400"
    },
    {
      emoji: "🧠",
      title: "Embedded logic systems",
      description: "Deep integration AI frameworks",
      color: "text-green-400"
    }
  ];

  const benefits = [
    "Global Unified Registry listing",
    "Ecosystem deployment eligibility", 
    "Native economy creation",
    "DevKit monetization rights"
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden">
      <ConditionalBackground 
        intensity={0.6}
        particleCount={70}
        floatingCount={0}
        gridSize={130}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🛠️</span>
            <span className="text-blue-400 font-semibold">AI Agents Dev Kit Registry</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Official Onboarding Is Open
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            If you're building AI agents, register your Dev Kit to be listed in the global Unified Registry.
          </p>
        </div>

        {/* Dev Kit Types */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <h3 className="text-2xl font-bold text-blue-400 mb-8 text-center">If you're building:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devKitTypes.map((type, index) => {
              return (
                <SpotlightCard
                  key={type.title}
                  variant="blue"
                  className="border-blue-500/20"
                  glowSpread={30}
                  glowProximity={48}
                >
                  <div className="p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="text-3xl mb-4">{type.emoji}</div>
                    <h4 className="text-lg font-bold text-white mb-2">{type.title}</h4>
                    <p className="text-gray-300 text-sm">{type.description}</p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>

        {/* Registration Requirements */}
        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-2xl p-8 mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">
            Registration Required for Ecosystem Deployment
          </h3>
          
          <p className="text-lg text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            All AI agents must be registered to be eligible for deployment inside the Unified AI ecosystem.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="bg-black/30 border border-gray-600 rounded-lg p-4 text-center hover:border-blue-500/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-white text-sm font-medium">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Economy Message */}
        <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 mb-16 text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <DollarSign className="w-8 h-8 text-green-400" />
            <h3 className="text-2xl font-bold text-cyan-400">Every Agent = Its Own Economy</h3>
            <DollarSign className="w-8 h-8 text-green-400" />
          </div>
          <p className="text-lg text-gray-300 mb-4">
            Your devkit = your key to that economy.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <Key className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">Register now to unlock your agent's economic potential</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "800ms" }}>
          <Button
            variant="gradient"
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 py-4 text-lg"
          >
            Register Your AI Agent Dev Kit
          </Button>
        </div>
      </div>
    </section>
  );
}
