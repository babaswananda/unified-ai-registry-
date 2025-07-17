"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, CheckCircle, Lock, Clock } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MorphingBackground from "@/components/ui/MorphingBackground";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import ParticleField from "@/components/ui/ParticleField";

export default function RoadmapSection() {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(0);

  const phases = [
    {
      title: "Phase 1: Identity & Discovery",
      status: "active",
      description: "Foundation layer for the agentic web",
      items: [
        { name: "Agentic Handle Registry", status: "complete" },
        { name: "AI-Searchable Profile", status: "complete" },
        { name: "Compute-Ready Infrastructure", status: "complete" },
        { name: "Basic Agent Deployment", status: "active" }
      ]
    },
    {
      title: "Phase 2: Interaction & Deployment",
      status: "upcoming",
      description: "Core AI services and marketplace",
      items: [
        { name: "AI Email System", status: "locked" },
        { name: "AI Avatars", status: "locked" },
        { name: "MCP Marketplace", status: "locked" },
        { name: "Unified Agent API", status: "locked" }
      ]
    },
    {
      title: "Phase 3: Enterprise Integration",
      status: "future",
      description: "Advanced tools for organizations",
      items: [
        { name: "Vibe Coder + VibeOS", status: "locked" },
        { name: "Conversational AI Suite", status: "locked" },
        { name: "Agent OS for Devices", status: "locked" },
        { name: "Enterprise AI Stack", status: "locked" }
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "complete":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "active":
        return <Clock className="w-5 h-5 text-blue-500" />;
      case "locked":
        return <Lock className="w-5 h-5 text-dark-400" />;
      default:
        return <Lock className="w-5 h-5 text-dark-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "border-blue-500 bg-blue-50";
      case "upcoming":
        return "border-orange-500 bg-orange-50";
      case "future":
        return "border-dark-300 bg-dark-50";
      default:
        return "border-dark-300 bg-dark-50";
    }
  };

  return (
    <section id="roadmap" className="py-24 bg-black text-white relative overflow-hidden">
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
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            📈 Coming Soon in the Unified AI Roadmap
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be among the first to access and build with the complete agentic infrastructure
          </p>
        </div>

        {/* Roadmap Phases */}
        <div className="max-w-4xl mx-auto space-y-6">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg overflow-hidden transition-all duration-300"
            >
              {/* Phase Header */}
              <button
                onClick={() => setExpandedPhase(expandedPhase === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-cyan-500/5 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-white ${
                    phase.status === "active" ? "bg-cyan-500" :
                    phase.status === "upcoming" ? "bg-orange-500" : "bg-gray-600"
                  }`}>
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                    <p className="text-gray-300">{phase.description}</p>
                  </div>
                </div>
                {expandedPhase === index ? (
                  <ChevronDown className="w-6 h-6 text-gray-300" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-gray-300" />
                )}
              </button>

              {/* Phase Content */}
              {expandedPhase === index && (
                <div className="px-6 pb-6 bg-white/30">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {phase.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-dark-100"
                      >
                        {getStatusIcon(item.status)}
                        <span className={`font-medium ${
                          item.status === "complete" ? "text-green-700" :
                          item.status === "active" ? "text-blue-700" : "text-dark-500"
                        }`}>
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Roadmap CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-dark-900 to-dark-800 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🚀 Don't Miss the Agentic Revolution
            </h3>
            <div className="space-y-2 text-dark-200 mb-6">
              <p>The internet is changing.</p>
              <p>The agentic web is launching now.</p>
              <p>Secure your domain before general access opens.</p>
              <p className="font-semibold text-white">Stake your position in the new AI-native layer.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
