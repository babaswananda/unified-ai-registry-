"use client";

import { Users, RefreshCw, Shield, Brain, CheckCircle } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function HITLSection() {
  const features = [
    {
      emoji: "🔄",
      title: "Real-time HITL Dashboards",
      description: "Monitor and guide AI decisions in real-time",
      color: "text-cyan-400"
    },
    {
      emoji: "🧠",
      title: "Prompt Feedback Cycles",
      description: "Continuous learning from human input",
      color: "text-blue-400"
    },
    {
      emoji: "🛡️",
      title: "Cultural Safeguards",
      description: "Human oversight for ethical AI deployment",
      color: "text-green-400"
    },
    {
      emoji: "👥",
      title: "Shared Intelligence Loops",
      description: "Collaborative human-AI intelligence networks",
      color: "text-purple-400"
    }
  ];

  const participants = [
    "Creators", "Developers", "Strategists", "Artists", "Engineers"
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden">
      <ConditionalBackground 
        intensity={0.7}
        particleCount={100}
        floatingCount={0}
        gridSize={110}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-orange-500/10 border border-orange-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🔁</span>
            <span className="text-orange-400 font-semibold">Human-in-the-Loop (HITL)</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              GLOBAL MOVEMENT
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            This is not AI replacing humans. This is AI deployed to enhance human agency. 
            <span className="text-orange-400 font-semibold"> HITL is a cultural protocol, not just a technical one.</span>
          </p>
        </div>

        {/* Participants Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          {participants.map((participant, index) => (
            <div
              key={participant}
              className="bg-black/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-4 text-center hover:border-orange-500/40 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl mb-2">👤</div>
              <h3 className="text-white font-semibold text-sm">{participant}</h3>
            </div>
          ))}
        </div>

        {/* Core Message */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 mb-16 text-center animate-slide-up" style={{ animationDelay: "400ms" }}>
          <h3 className="text-2xl font-bold text-orange-400 mb-4">We Stay in the Loop</h3>
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            Everyone in the Unified ecosystem participates in the training, refining, governing, and deploying of AI. 
            <span className="text-white font-semibold"> No passive consumption. Only active creation.</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-green-400 mb-2 mx-auto" />
              <h4 className="text-white font-semibold mb-1">Not Surveillance</h4>
              <p className="text-gray-300 text-sm">Human oversight, not monitoring</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-green-400 mb-2 mx-auto" />
              <h4 className="text-white font-semibold mb-1">Not Replacement</h4>
              <p className="text-gray-300 text-sm">AI enhancement, not substitution</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <CheckCircle className="w-6 h-6 text-green-400 mb-2 mx-auto" />
              <h4 className="text-white font-semibold mb-1">Not Bias Loops</h4>
              <p className="text-gray-300 text-sm">Active human guidance</p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up" style={{ animationDelay: "600ms" }}>
          {features.map((feature, index) => {
            return (
              <div
                key={feature.title}
                className="bg-black/50 backdrop-blur-sm border border-gray-600 rounded-xl p-6 hover:border-orange-500/30 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-4">{feature.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "800ms" }}>
          <div className="bg-black/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-orange-400 mb-4">
              This is reintegration.
            </h3>
            <p className="text-xl text-gray-300">
              A global human-driven AI movement where every participant shapes the future of intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
