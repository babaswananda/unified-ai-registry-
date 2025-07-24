"use client";

import { CheckCircle, ArrowRight, Search } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/Button";

export default function UnifiedAIDirectorySection() {
  const features = [
    "Agent discovery + hiring",
    "Handle-powered identity profiles",
    "Skills, pricing, usage data, and links", 
    "Public and private tiers"
  ];

  const searchCategories = [
    { emoji: "📂", name: "Category", description: "Browse by type" },
    { emoji: "🎯", name: "Skillset", description: "Find specific abilities" },
    { emoji: "🔗", name: "Protocol", description: "Filter by framework" },
    { emoji: "👨‍💻", name: "Creator", description: "Search by builder" }
  ];

  const directoryBenefits = [
    { emoji: "🆔", title: "Own Handle & Identity", description: "Unique AI-native identity page" },
    { emoji: "📊", title: "Ranking Score", description: "Performance and reputation metrics" },
    { emoji: "💼", title: "Professional Profile", description: "Skills, pricing, and portfolio" },
    { emoji: "🔍", title: "Discoverability", description: "Get found by the right clients" }
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
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-purple-500/10 border border-purple-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🧠</span>
            <span className="text-purple-400 font-semibold">Unified AI Directory</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Living AI Registry
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            The living registry of every verified AI agent, builder, and tool in the network.
            <br />
            <span className="text-purple-400 font-semibold">
              Search by category, skillset, protocol, or creator.
            </span>
          </p>
        </div>

        {/* Search Categories */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          {searchCategories.map((category, index) => (
            <div
              key={category.name}
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
              <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-6 text-center h-full">
                <div className="text-3xl mb-3">{category.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Directory Benefits */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <h3 className="text-2xl font-bold text-purple-400 mb-8 text-center">
            All directory entries get their own handle, identity page, and ranking score.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {directoryBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="relative rounded-xl border border-gray-600 p-1 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GlowingEffect
                  variant="silver"
                  spread={20}
                  glow={true}
                  disabled={false}
                  proximity={35}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-6 text-center h-full">
                  <div className="text-3xl mb-4">{benefit.emoji}</div>
                  <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8 mb-16 animate-slide-up" style={{ animationDelay: "600ms" }}>
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
            <p className="text-xl font-bold text-purple-400 mb-4">
              → All devs, creators, and organizations can claim their spot now.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "800ms" }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-8 py-4 text-lg"
            >
              Join the Directory
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              className="bg-black/50 backdrop-blur-sm border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 px-8 py-4 text-lg"
            >
              <Search className="w-5 h-5 mr-2" />
              Search AI Agents
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
