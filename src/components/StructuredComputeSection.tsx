"use client";

import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function StructuredComputeSection() {
  const computeFeatures = [
    {
      title: "AI Workflows",
      description: "Pre-architected for intelligent agents and LLMs",
      icon: "🤖"
    },
    {
      title: "Autonomous Agents", 
      description: "Distributed cognition and protocol execution",
      icon: "🧠"
    },
    {
      title: "Data Pipelines",
      description: "Structured execution for intelligent workloads",
      icon: "🔄"
    },
    {
      title: "Tokenomics Logic",
      description: "Fugio + AI Token integration for compute-as-currency",
      icon: "💰"
    },
    {
      title: "Secure Enclaves",
      description: "Zero-knowledge operations and trusted execution",
      icon: "🔒"
    },
    {
      title: "Sovereign Runtime",
      description: "Fully sovereign environments (not rented)",
      icon: "🏛️"
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <ConditionalBackground
        intensity={0.8}
        particleCount={100}
        floatingCount={0}
        gridSize={100}
      />

      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🧠</span>
            <span className="text-cyan-400 font-semibold">Structured Compute</span>
          </div>

          {/* Section Header */}
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              The Engine Behind
            </span>
            <br />
            <span className="text-white">Intelligent Workloads</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            UnifiedAI introduces Structured Compute: a sovereign, AI-optimized compute layer 
            purpose-built for distributed cognition, protocol execution, and autonomous infrastructure deployment.
          </p>

          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 max-w-4xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Unlike Traditional Cloud Platforms:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">✓</span>
                <span className="text-gray-300">Pre-architected for intelligent agents & LLMs</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">✓</span>
                <span className="text-gray-300">Tokenized via Fugio + AI Tokens</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">✓</span>
                <span className="text-gray-300">Modular, adaptive, and composable</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-cyan-400">✓</span>
                <span className="text-gray-300">Compatible with national AI infrastructure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Compute Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {computeFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="relative rounded-xl border border-cyan-500/20 p-1 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GlowingEffect
                variant="cyan"
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1}
              />
              <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-6 h-full border border-cyan-500/10">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-cyan-400">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center">
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              🔁 Integrated with IaaS + Fugio
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              All Structured Compute cycles are provisioned through UnifiedAI's IaaS layer, 
              gated by Fugio and the AI Token stack, enabling compute-as-currency across the ecosystem.
            </p>
            <div className="text-xl font-semibold text-cyan-400">
              "Infrastructure is programmable. Compute is structured. Value is native."
            </div>
          </div>

          <Button
            variant="primary"
            size="lg"
            className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 text-lg font-semibold"
          >
            Access Structured Compute
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
