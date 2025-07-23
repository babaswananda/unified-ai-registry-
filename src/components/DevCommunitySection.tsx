"use client";

import { CheckCircle, ArrowRight, Code, Zap, Shield, TestTube, Factory, Brain } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { Button } from "@/components/ui/Button";

export default function DevCommunitySection() {
  const devTools = [
    { emoji: "🛠️", title: "VibeCoder Dev Studio", description: "Built w/ Vibathon", color: "text-cyan-400" },
    { emoji: "🎒", title: "AI Agent DevKit Registry", description: "Complete development toolkit", color: "text-blue-400" },
    { emoji: "🔐", title: "Credentialed Publishing", description: "Handle Infrastructure", color: "text-green-400" },
    { emoji: "🧪", title: "TestNet Deployments", description: "New agent types", color: "text-purple-400" },
    { emoji: "💼", title: "Contract Manufacturing", description: "AI Factory slots", color: "text-orange-400" },
    { emoji: "🧠", title: "GMT-7 Early Access", description: "Generative Multimodal Transformer", color: "text-pink-400" }
  ];

  const workflow = [
    { step: "Fork", icon: Code, description: "Clone existing flows and agents" },
    { step: "Register", icon: Shield, description: "Claim your handle and credentials" },
    { step: "Launch", icon: Zap, description: "Deploy to the protocol" },
    { step: "Earn", icon: Factory, description: "Monetize your deployments" }
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden">
      <ConditionalBackground 
        intensity={0.6}
        particleCount={70}
        floatingCount={0}
        gridSize={130}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">👾</span>
            <span className="text-cyan-400 font-semibold">Dev Community</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              FORK, BUILD, AND MONETIZE
            </span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Join the dev ecosystem behind Unified AI — fork flows, build on the protocol, create plug-ins, and get paid. 
            <span className="text-cyan-400 font-semibold">This isn't open source. It's open protocol.</span>
          </p>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            You don't just code apps. You code agents, infrastructure, and economies.
          </p>
        </div>

        {/* Dev Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          {devTools.map((tool, index) => (
            <div
              key={tool.title}
              className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-4">{tool.emoji}</div>
              <h3 className={`text-lg font-bold mb-2 ${tool.color}`}>{tool.title}</h3>
              <p className="text-gray-300 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>

        {/* Workflow */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-16 text-center animate-slide-up" style={{ animationDelay: "400ms" }}>
          <h3 className="text-2xl font-bold text-cyan-400 mb-6">All deployments are monetizable</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {workflow.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="flex flex-col items-center">
                  <div className="bg-cyan-500/20 rounded-full p-4 mb-4">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{item.step}</h4>
                  <p className="text-gray-300 text-sm text-center">{item.description}</p>
                  {index < workflow.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-cyan-400 mt-4 hidden md:block" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <Button
            variant="gradient"
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 text-lg font-semibold"
          >
            Join Dev Community
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
