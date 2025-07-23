"use client";

import { Building, Zap, Users, Cog, CheckCircle } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function InstitutionalMandatesSection() {
  const mandateAreas = [
    {
      emoji: "🏢",
      title: "Smart Infrastructure",
      description: "AI-integrated municipal systems",
      color: "text-blue-400"
    },
    {
      emoji: "⚙️",
      title: "Automated Manufacturing",
      description: "Industrial AI deployment",
      color: "text-green-400"
    },
    {
      emoji: "👥",
      title: "Workforce Retraining",
      description: "Data-driven skill development",
      color: "text-purple-400"
    },
    {
      emoji: "⚡",
      title: "Localized AI Solutions",
      description: "Municipal deployment systems",
      color: "text-cyan-400"
    }
  ];

  const implementationCapabilities = [
    "Real-time implementation capacity",
    "AI-native infrastructure provisioning", 
    "Turnkey systems for municipal sectors",
    "Commercial sector deployment",
    "Industrial sector integration"
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden">
      <ConditionalBackground 
        intensity={0.5}
        particleCount={60}
        floatingCount={0}
        gridSize={140}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-blue-500/10 border border-blue-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🏛️</span>
            <span className="text-blue-400 font-semibold">Institutional Alignment</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              City-Led AI Mandates
            </span>
          </h2>
        </div>

        {/* Detroit Summit Reference */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-blue-400 mb-6 text-center">
              Detroit AI & Innovation Summit Framework
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              This initiative directly aligns with the policy framework and strategic imperatives set forth by 
              <span className="text-blue-400 font-semibold"> Mayor Mike Duggan during the Detroit AI & Innovation Summit</span> held last week. 
              The summit outlined Detroit's official transition toward an AI-integrated economy, with mandates focused on:
            </p>

            {/* Mandate Areas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {mandateAreas.map((area, index) => {
                return (
                  <div
                    key={area.title}
                    className="bg-black/30 border border-gray-600 rounded-xl p-6 text-center hover:border-blue-500/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl mb-3">{area.emoji}</div>
                    <h4 className="text-white font-bold mb-2">{area.title}</h4>
                    <p className="text-gray-300 text-sm">{area.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-black/30 rounded-xl p-6">
              <h4 className="text-xl font-bold text-cyan-400 mb-4 text-center">
                Unified AI Implementation Response
              </h4>
              <p className="text-gray-300 text-center mb-6">
                Unified AI answers those mandates with comprehensive deployment capabilities:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {implementationCapabilities.map((capability, index) => (
                  <div
                    key={capability}
                    className="flex items-center space-x-3 bg-black/20 rounded-lg p-3"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Positioning */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "400ms" }}>
          <div className="bg-black/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              Mission-Critical Infrastructure for the Next Century
            </h3>
            <p className="text-lg text-gray-300">
              Ready for deployment across municipal, commercial, and industrial sectors — 
              positioning Detroit as the sovereign AI capital of America.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
