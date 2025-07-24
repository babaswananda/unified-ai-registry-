"use client";

import { Code, Palette, Users, Zap, Eye, GitBranch } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function VibeCoderSection() {

  const vibeCoderFeatures = [
    {
      emoji: "💻",
      title: "Language-fluid",
      description: "Code in any language, seamlessly",
      color: "text-cyan-400"
    },
    {
      emoji: "🎨",
      title: "Vibe-mapped",
      description: "Visual coding that matches your style",
      color: "text-purple-400"
    },
    {
      emoji: "⚡",
      title: "Agent-optimized",
      description: "Built for AI agent development",
      color: "text-blue-400"
    },
    {
      emoji: "👁️",
      title: "Visual build layer",
      description: "See your code come to life",
      color: "text-green-400"
    }
  ];

  const vibathonFeatures = [
    {
      emoji: "👥",
      title: "Build in public",
      description: "Collaborative development",
      color: "text-orange-400"
    },
    {
      emoji: "🍴",
      title: "Fork others",
      description: "Learn from the community",
      color: "text-pink-400"
    },
    {
      emoji: "⚡",
      title: "Real-time feedback",
      description: "Instant community input",
      color: "text-cyan-400"
    },
    {
      emoji: "🚀",
      title: "Push to handle",
      description: "Deploy directly to your AI handle",
      color: "text-blue-400"
    }
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden">
      <ConditionalBackground 
        intensity={0.7}
        particleCount={90}
        floatingCount={0}
        gridSize={100}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-purple-500/10 border border-purple-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🧠</span>
            <span className="text-purple-400 font-semibold">Vibathon + VibeCoder</span>
          </div>

          {/* ASCII VibeCoder Logo */}
          <div className="mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            <pre className="text-cyan-400 font-mono text-xs sm:text-sm lg:text-base leading-tight bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
{`██╗   ██╗██╗██████╗ ███████╗     ██████╗ ██████╗ ██████╗ ███████╗██████╗
██║   ██║██║██╔══██╗██╔════╝    ██╔════╝██╔═══██╗██╔══██╗██╔════╝██╔══██╗
██║   ██║██║██████╔╝█████╗      ██║     ██║   ██║██║  ██║█████╗  ██████╔╝
╚██╗ ██╔╝██║██╔══██╗██╔══╝      ██║     ██║   ██║██║  ██║██╔══╝  ██╔══██╗
 ╚████╔╝ ██║██████╔╝███████╗    ╚██████╗╚██████╔╝██████╔╝███████╗██║  ██║
  ╚═══╝  ╚═╝╚═════╝ ╚══════╝     ╚═════╝ ╚═════╝ ╚═════╝ ╚══════╝╚═╝  ╚═╝`}
            </pre>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              COLLABORATIVE DEV SUITE
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            This isn't just code. This is <span className="text-purple-400 font-semibold">Vibe Coding.</span>
          </p>
        </div>

        {/* VibeCoder Section */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-purple-400 mb-6 text-center">
              🎨 VibeCoder: The Official Unified AI Editor
            </h3>
            
            <p className="text-lg text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              The official Unified AI editor and visual build layer — language-fluid, vibe-mapped, 
              and optimized for building agents, immersive flows, and entire AI-powered environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vibeCoderFeatures.map((feature, index) => {
                return (
                  <div
                    key={feature.title}
                    className="bg-black/30 border border-gray-600 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl mb-3">{feature.emoji}</div>
                    <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                    <p className="text-gray-300 text-sm">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Vibathon Section */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <div className="bg-gradient-to-r from-orange-500/10 to-pink-500/10 border border-orange-500/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-orange-400 mb-6 text-center">
              🏆 Vibathon: Build in Public
            </h3>
            
            <p className="text-lg text-gray-300 text-center mb-8 max-w-3xl mx-auto">
              Build in public. Fork others. Get feedback in real time. Push updates to your handle.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vibathonFeatures.map((feature, index) => {
                return (
                  <div
                    key={feature.title}
                    className="relative rounded-xl border border-gray-600 p-1 transition-all duration-300 hover:scale-105"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <GlowingEffect
                      variant="default"
                      spread={25}
                      glow={true}
                      disabled={false}
                      proximity={40}
                      inactiveZone={0.01}
                      borderWidth={1}
                    />
                    <div className="relative bg-black/30 rounded-lg p-6 text-center h-full">
                      <div className="text-3xl mb-3">{feature.emoji}</div>
                      <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                      <p className="text-gray-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <div className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-purple-400 mb-4">
              Where Culture Engineers Co-Build the Future
            </h3>
            <p className="text-xl text-gray-300">
              This is where developers, creators, and culture engineers co-build what the world will use next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
