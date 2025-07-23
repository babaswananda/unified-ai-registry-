"use client";

import { Mail, Brain, Zap, Bot, Clock } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function AIEmailSection() {
  const features = [
    {
      emoji: "⚡",
      title: "Real-time intelligent sorting",
      description: "AI automatically organizes your inbox",
      color: "text-cyan-400"
    },
    {
      emoji: "🧠",
      title: "Memory-aware AI assistance",
      description: "Context from all your conversations",
      color: "text-blue-400"
    },
    {
      emoji: "🤖",
      title: "Intelligent autoresponders",
      description: "Natively intelligent, context-aware responses",
      color: "text-purple-400"
    },
    {
      emoji: "📧",
      title: "Email = AI inbox now",
      description: "Your communication hub reimagined",
      color: "text-green-400"
    }
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
          <div className="inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">📬</span>
            <span className="text-green-400 font-semibold">AI Email</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              IS LIVE
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Every registered user now gets access to AI Email, powered through their Unified handle.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          {features.map((feature, index) => {
            return (
              <div
                key={feature.title}
                className="bg-black/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 hover:border-green-500/40 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-4">{feature.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Professional Communication */}
        <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-2xl p-8 mb-16 text-center animate-slide-up" style={{ animationDelay: "400ms" }}>
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="text-4xl">📧</div>
            <h3 className="text-2xl font-bold text-green-400">Professional Communication Reimagined</h3>
          </div>
          
          <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
            This is how professionals will communicate from here forward. 
            AI-native email that understands context, manages priorities, and enhances productivity.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-black/30 rounded-lg p-4">
              <div className="text-2xl mb-2">⏰</div>
              <h4 className="text-white font-semibold mb-1">Real-time Processing</h4>
              <p className="text-gray-300 text-sm">Instant intelligent responses</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="text-2xl mb-2">🧠</div>
              <h4 className="text-white font-semibold mb-1">Context Awareness</h4>
              <p className="text-gray-300 text-sm">Remembers all conversations</p>
            </div>
            <div className="bg-black/30 rounded-lg p-4">
              <div className="text-2xl mb-2">🤖</div>
              <h4 className="text-white font-semibold mb-1">AI Integration</h4>
              <p className="text-gray-300 text-sm">Powered by your AI handle</p>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <div className="bg-black/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-green-400 mb-4">
              Email Just Got Intelligent
            </h3>
            <p className="text-xl text-gray-300">
              Available now for all registered Unified AI users. 
              Your handle is your gateway to the future of professional communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
