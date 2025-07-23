"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Zap, Globe, Building2 } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function DetroitHeroSection() {
  const [currentText, setCurrentText] = useState(0);
  
  const heroTexts = [
    "Detroit: Where Agents Are Made IRL",
    "The Future Is Local. The Future Is Agent-Based.",
    "The Future Is IRL: Infrastructure Root Layer."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <ConditionalBackground
        intensity={0.8}
        particleCount={60}
        floatingCount={0}
        gridSize={120}
      />

      {/* Detroit Skyline Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />

      <div className="container-max section-padding relative z-10 text-center">
        {/* Detroit Movement Badge */}
        <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8 animate-slide-up">
          <span className="text-2xl">🏗️</span>
          <span className="text-cyan-400 font-semibold">Infrastructure Root Layer</span>
        </div>

        {/* Main Hero Text */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            {heroTexts[currentText]}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-5xl mx-auto animate-slide-up" style={{ animationDelay: "400ms" }}>
          From the streets of Trapper's Alley to city halls and campuses across Michigan, 
          we're not just announcing an AI product — we're unveiling the{" "}
          <span className="text-cyan-400 font-semibold">Infrastructure Root Layer</span>, 
          where AI agents live and operate in real life.
        </p>

        {/* Key Value Props */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "600ms" }}>
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <Building2 className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
            <h3 className="text-lg font-bold text-white mb-2">Built IRL</h3>
            <p className="text-gray-300 text-sm">Anchored in Detroit, deployed globally</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <Zap className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
            <h3 className="text-lg font-bold text-white mb-2">Agent-Native</h3>
            <p className="text-gray-300 text-sm">Every prompt leads to real action</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
            <Globe className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
            <h3 className="text-lg font-bold text-white mb-2">Sovereign</h3>
            <p className="text-gray-300 text-sm">Decentralized, crypto-native, locally governed</p>
          </div>
        </div>

        {/* Trump Era Mandate Alert */}
        <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-12 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "800ms" }}>
          <div className="flex items-center justify-center space-x-3 mb-4">
            <span className="text-2xl">🚨</span>
            <h3 className="text-xl font-bold text-red-400">Backed by Trump-Era Reshoring Mandates</h3>
          </div>
          <p className="text-gray-300 text-lg">
            <span className="text-cyan-400 font-semibold">Free K–12 AI Handles via VibeCoder</span>
            <br />
            Every school. Every city. Every state. AI-native by default — IRL.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: "1000ms" }}>
          <Button
            variant="gradient"
            size="lg"
            className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 text-lg shadow-2xl shadow-cyan-500/25"
          >
            Deploy Now - Institutional Pre-Registration
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            className="bg-black/50 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg"
          >
            Watch "The Agent Chair" Premiere
          </Button>
        </div>

        {/* Detroit Positioning */}
        <div className="mt-16 animate-slide-up" style={{ animationDelay: "1200ms" }}>
          <p className="text-lg text-gray-400 mb-4">
            <span className="text-cyan-400 font-semibold">Detroit is first</span> — but your city is next.
          </p>
          <p className="text-2xl font-bold text-white">
            This is Unified AI.
            <br />
            <span className="text-cyan-400">America's Local Intelligence Stack.</span>
            <br />
            <span className="text-gray-300">Built by us. Powered by agents. Imported from Detroit.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
