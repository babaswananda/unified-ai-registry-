"use client";

import { Smartphone, Watch, Headphones, Glasses, Laptop, BookOpen, Cpu } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/Button";

export default function HardwareSuiteSection() {
  const hardwareDevices = [
    {
      name: "Unified AI Phone",
      emoji: "📱",
      description: "AI-native mobile experience",
      color: "text-cyan-400"
    },
    {
      name: "Unified AI Watch",
      emoji: "⌚",
      description: "Wearable AI companion",
      color: "text-blue-400"
    },
    {
      name: "Unified AI Pods",
      emoji: "🎧",
      description: "Immersive audio AI",
      color: "text-purple-400"
    },
    {
      name: "Unified AI Glasses",
      emoji: "🕶️",
      description: "Augmented reality AI",
      color: "text-green-400"
    },
    {
      name: "Unified AI Book",
      emoji: "💻",
      description: "Portable AI workstation",
      color: "text-orange-400"
    },
    {
      name: "Unified AI Notepad",
      emoji: "📓",
      description: "Digital-physical hybrid",
      color: "text-pink-400"
    },
    {
      name: "Unified CGPU",
      emoji: "🧠",
      description: "Creator GPU Unit",
      color: "text-red-400"
    }
  ];

  const preloadedFeatures = [
    "Your personal AI Agents",
    "VibeCoder development environment",
    "Mobile Chat, Group Chat, and Webinar tools",
    "Identity synced to your AI handle"
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden">
      <ConditionalBackground 
        intensity={0.8}
        particleCount={110}
        floatingCount={0}
        gridSize={90}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">📱</span>
            <span className="text-cyan-400 font-semibold">Unified AI Hardware Suite</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              PREORDER NOW
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Unified hardware is not about specs. It's about{" "}
            <span className="text-cyan-400 font-semibold">sovereignty, privacy, and native AI control.</span>
          </p>
        </div>

        {/* Hardware Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          {hardwareDevices.map((device, index) => {
            return (
              <div
                key={device.name}
                className="relative rounded-xl border border-cyan-500/20 p-1 transition-all duration-300 hover:scale-105 group"
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
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {device.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{device.name}</h3>
                  <p className="text-gray-300 text-sm">{device.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Preloaded Features */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
            Each device comes preloaded with:
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {preloadedFeatures.map((feature, index) => (
              <div
                key={feature}
                className="bg-black/30 border border-gray-600 rounded-lg p-4 text-center hover:border-cyan-500/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-white text-sm font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Statement */}
        <div className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 mb-16 text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <h3 className="text-3xl font-bold text-purple-400 mb-4">
            Hardware isn't just hardware.
          </h3>
          <p className="text-xl text-gray-300">
            It's your physical interface to the AI-native world.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "800ms" }}>
          <Button
            variant="gradient"
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white px-8 py-4 text-lg"
          >
            Preorder Unified AI Hardware
          </Button>
          
          <p className="text-gray-400 mt-4">
            Limited quantities available. Reserve your spot in the AI-native future.
          </p>
        </div>
      </div>
    </section>
  );
}
