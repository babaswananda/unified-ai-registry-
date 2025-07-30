"use client";

import { Factory, Zap, Settings, Award } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { Button } from "@/components/ui/Button";

export default function ContractManufacturingSection() {
  const services = [
    {
      emoji: "⚡",
      title: "AI-optimized assembly",
      description: "Intelligent manufacturing processes",
      color: "text-cyan-400"
    },
    {
      emoji: "⚙️",
      title: "Rapid prototyping",
      description: "Fast iteration and testing",
      color: "text-blue-400"
    },
    {
      emoji: "🏆",
      title: "Device certification pipelines",
      description: "Complete compliance workflows",
      color: "text-green-400"
    }
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
          <div className="inline-flex items-center space-x-3 bg-orange-500/10 border border-orange-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🏭</span>
            <span className="text-orange-400 font-semibold">Contract Manufacturing</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Contract Manufacturing — Now Open
            </span>
            <br />
            <span className="text-white">Powered by AI Factory</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Unified AI is now offering contract manufacturing infrastructure to qualified partners and product teams.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          {services.map((service, index) => {
            return (
              <SpotlightCard
                key={service.title}
                className="border-orange-500/20"
              >
                <div className="p-8 text-center" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="text-4xl mb-6">{service.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>

        {/* AI Factory Highlight */}
        <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 mb-16 text-center animate-slide-up" style={{ animationDelay: "400ms" }}>
          <Factory className="w-16 h-16 text-orange-400 mb-6 mx-auto" />
          <h3 className="text-2xl font-bold text-orange-400 mb-4">
            Available through AI Factory
          </h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Our AI-powered manufacturing infrastructure combines intelligent automation 
            with rapid prototyping capabilities and complete certification pipelines.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <div className="bg-black/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-8 max-w-3xl mx-auto mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Scale Your Product?
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Inquire now for manufacturing partnership opportunities with qualified partners and product teams.
            </p>
            
            <Button
              variant="gradient"
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white px-8 py-4 text-lg"
            >
              Inquire About Manufacturing Partnership
            </Button>
          </div>
          
          <p className="text-gray-400">
            Partnership opportunities available for qualified teams and established product lines.
          </p>
        </div>
      </div>
    </section>
  );
}
