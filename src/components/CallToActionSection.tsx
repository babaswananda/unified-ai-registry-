"use client";

import { Key, Code, Smartphone, ArrowRight } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { Button } from "@/components/ui/Button";

export default function CallToActionSection() {
  const actions = [
    {
      emoji: "🔑",
      title: "Register Your Handle",
      description: "Claim your permanent AI identity and activate your agent",
      color: "text-cyan-400"
    },
    {
      emoji: "🛠️",
      title: "Submit Your DevKit",
      description: "List your AI agent in the registry and unlock monetization",
      color: "text-blue-400"
    },
    {
      emoji: "📱",
      title: "Preorder Unified Hardware",
      description: "Reserve your physical interface to the AI-native world",
      color: "text-purple-400"
    },
    {
      emoji: "🧠",
      title: "Join Directory + Marketplace",
      description: "Be searchable. Be hireable. Be part of the ecosystem economy",
      color: "text-green-400"
    },
    {
      emoji: "🍴",
      title: "Fork Something Now",
      description: "Remix the future and get paid for your forks",
      color: "text-orange-400"
    }
  ];

  const hashtags = [
    "#unifiedAI",
    "#forkd", 
    "#humanintheloop",
    "#vibecoder",
    "#AInative"
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden">
      <ConditionalBackground
        intensity={0.6}
        particleCount={60}
        floatingCount={0}
        gridSize={120}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-yellow-500/10 border border-yellow-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🚀</span>
            <span className="text-yellow-400 font-semibold">Ready to Launch?</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Join the AI-Native World
            </span>
          </h2>
        </div>

        {/* Action Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          {actions.map((action, index) => {
            return (
              <div
                key={action.title}
                className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8 text-center hover:border-yellow-500/40 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-6">{action.emoji}</div>
                <h3 className="text-xl font-bold text-white mb-4">{action.title}</h3>
                <p className="text-gray-300">{action.description}</p>
              </div>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-2xl p-8 mb-16 text-center animate-slide-up" style={{ animationDelay: "400ms" }}>
          <h3 className="text-2xl font-bold text-yellow-400 mb-6">
            Fork something and make it better.
          </h3>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 text-lg"
            >
              Register Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-8 py-4 text-lg"
            >
              Join Marketplace
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white px-8 py-4 text-lg"
            >
              Claim DevKit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Hashtags */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {hashtags.map((hashtag, index) => (
              <span
                key={hashtag}
                className="bg-black/50 backdrop-blur-sm border border-gray-600 px-4 py-2 rounded-full text-cyan-400 font-semibold hover:border-cyan-500/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {hashtag}
              </span>
            ))}
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm border border-yellow-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-yellow-400 mb-4">
              Join the Movement
            </h3>
            <p className="text-xl text-gray-300">
              The future is human-coded, AI-enhanced, and built by creators like you. 
              <br />
              <span className="text-yellow-400 font-semibold">Welcome to Unified AI.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
