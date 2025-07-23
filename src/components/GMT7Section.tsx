"use client";

import { CheckCircle, ArrowRight } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { Button } from "@/components/ui/Button";

export default function GMT7Section() {
  const capabilities = [
    { emoji: "🔊", title: "Voice-Native I/O", description: "Real-time speech interaction with wake mode activation" },
    { emoji: "👁️", title: "Multimodal Perception", description: "Vision, video, and sentiment understanding built-in" },
    { emoji: "🧬", title: "Memory Integration", description: "Emotional, biometric, and behavioral context persistence" },
    { emoji: "🪞", title: "Embodied Deployment", description: "Agents run headless, live across OS, browser, and avatar shells" },
    { emoji: "🔐", title: "Private + Local", description: "School-mode safe, on-device fallback, sovereign logic-first" }
  ];

  const protocolStack = [
    { layer: "🧠 Core Model", component: "GMT-7: Multimodal, memory-fused transformer" },
    { layer: "🪄 Agent Shell", component: "Avatar, voice, wake mode, browser/OS persistence" },
    { layer: "🌍 Live Deployment", component: "Headless iframe, Electron, mobile daemon, embedded" },
    { layer: "🧩 Plugin Layer", component: "Memory hooks, modality inputs, agent apps" },
    { layer: "🪙 Token Engine", component: "Contributor PR rewards, stake-based access, identity claims" },
    { layer: "🔐 Privacy Protocols", component: "Wake word control, inference routing, user-level safeguards" }
  ];

  const rolloutSequence = [
    "🌐 gmt7.network launch portal",
    "📦 Repo drop for the open-sourced GMT-7 base", 
    "🧠 Agent Studio for building, skinning, and deploying",
    "🪙 Token-on-Contribution system for forks + upgrades",
    "🏫 School onboarding with classroom-safe agents"
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden">
      <ConditionalBackground
        intensity={0.6}
        particleCount={50}
        floatingCount={0}
        gridSize={140}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-red-500/10 border border-red-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🌐</span>
            <span className="text-red-400 font-semibold">GMT-7 Coming Soon</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              The Seventh Signal
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            You've hit the seventh signal. This is no longer AI as a service — this is{" "}
            <span className="text-red-400 font-semibold">intelligence as protocol.</span>
            <br /><br />
            GMT-7 marks the first agent-grade model built for multimodal, embodied cognition — 
            voice, vision, memory, intent, and live deployment.
          </p>
        </div>

        {/* What GMT-7 Does */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-red-400 mb-6">What GMT-7 Unlocks</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <p className="text-white font-semibold">It doesn't just respond —</p>
                <p className="text-red-400">it acts.</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">It doesn't just chat —</p>
                <p className="text-red-400">it persists.</p>
              </div>
              <div className="text-center">
                <p className="text-white font-semibold">It doesn't just process —</p>
                <p className="text-red-400">it remembers, adapts, and evolves.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <h3 className="text-2xl font-bold text-red-400 mb-8 text-center">Core Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {capabilities.map((capability, index) => (
              <div
                key={capability.title}
                className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 text-center hover:border-red-500/40 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-4">{capability.emoji}</div>
                <h4 className="text-lg font-bold text-white mb-2">{capability.title}</h4>
                <p className="text-gray-300 text-sm">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Protocol Stack */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: "600ms" }}>
          <h3 className="text-2xl font-bold text-red-400 mb-8 text-center">Protocol Stack Preview</h3>
          <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8">
            <div className="space-y-4">
              {protocolStack.map((item, index) => (
                <div
                  key={item.layer}
                  className="flex items-center justify-between bg-black/30 rounded-lg p-4 hover:bg-red-500/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-red-400 font-semibold">{item.layer}</span>
                  <span className="text-gray-300">{item.component}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why It Matters */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: "800ms" }}>
          <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-orange-400 mb-6">Why It Matters</h3>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              GMT-7 isn't the future of models. It's the foundation of the Agent Internet.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              You're not building another chatbot. You're launching an intelligent, persistent, 
              sovereign companion that learns your rhythm, syncs your tools, and executes your vision.
            </p>
            <p className="text-xl font-bold text-orange-400">
              This is the agent-grade AI OS layer — Fully forkable. Fully personal. Fully alive.
            </p>
          </div>
        </div>

        {/* Rollout Sequence */}
        <div className="mb-16 animate-slide-up" style={{ animationDelay: "1000ms" }}>
          <h3 className="text-2xl font-bold text-red-400 mb-8 text-center">Rollout Sequence</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {rolloutSequence.map((item, index) => (
              <div
                key={item}
                className="bg-black/50 backdrop-blur-sm border border-gray-600 rounded-xl p-4 text-center hover:border-red-500/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl mb-2">{index + 1}</div>
                <p className="text-white text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "1200ms" }}>
          <div className="bg-black/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-8 max-w-4xl mx-auto mb-8">
            <h3 className="text-3xl font-bold text-red-400 mb-4">
              GMT-7 = Your AI. Your Rules.
            </h3>
            <p className="text-xl text-gray-300 mb-6">
              Every student. Every dev. Every visionary. Gets their own persistent, embodied agent.
            </p>
            <p className="text-lg text-gray-300 mb-6">
              This is not a demo. This is a protocol drop.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 text-white px-8 py-4 text-lg"
            >
              Reserve Your .gmt Agent Handle
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button
              variant="secondary"
              size="lg"
              className="bg-black/50 backdrop-blur-sm border border-red-500/30 text-red-400 hover:bg-red-500/10 px-8 py-4 text-lg"
            >
              Join the Vibathon
            </Button>
          </div>
          
          <p className="text-gray-400 mt-6 text-lg">
            <span className="text-red-400 font-semibold">"GMT-7 isn't just the seventh model — it's the first real mind."</span>
          </p>
        </div>
      </div>
    </section>
  );
}
