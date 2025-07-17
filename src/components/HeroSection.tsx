"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import TypewriterText from "@/components/ui/TypewriterText";
import ParticleField from "@/components/ui/ParticleField";
import MorphingBackground from "@/components/ui/MorphingBackground";
import ScrollReveal from "@/components/ui/ScrollReveal";
import FloatingElements from "@/components/ui/FloatingElements";
import AnimatedGrid from "@/components/ui/AnimatedGrid";

export default function HeroSection() {
  const powerFeatures = [
    { emoji: "🚀", label: "Deploy Instantly", desc: "Launch AI agents in seconds" },
    { emoji: "🌐", label: "Global Network", desc: "Worldwide edge infrastructure" },
    { emoji: "⚡", label: "Lightning Fast", desc: "Sub-millisecond response times" },
    { emoji: "🛡️", label: "Sovereign Control", desc: "You own your AI infrastructure" },
    { emoji: "🔮", label: "Future-Proof", desc: "Built for the next decade of AI" },
    { emoji: "💎", label: "Premium Access", desc: "Exclusive founding member benefits" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Effects - Exact same as agents-are-coming */}
      <MorphingBackground intensity={0.8} />
      <AnimatedGrid
        gridSize={100}
        lineColor="rgba(0, 255, 255, 0.03)"
        pulseColor="rgba(0, 255, 255, 0.2)"
        intensity={0.8}
      />
      <ParticleField
        particleCount={120}
        color="rgba(0, 255, 255, 0.4)"
        darkColor="rgba(0, 255, 255, 0.6)"
      />

      {/* Floating Elements */}
      <FloatingElements count={12} />

      <div className="relative z-10 container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <ScrollReveal direction="left" delay={200} duration={1000}>
            <div className="space-y-8">
            {/* Sunrise Badge */}
            <ScrollReveal direction="scale" delay={400}>
              <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
                <span className="text-2xl">🔥</span>
                <span className="text-cyan-400 font-medium">Sunrise Registry Now Open</span>
              </div>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal direction="up" delay={600}>
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    <TypewriterText
                      texts={[
                        "The Agentic Web",
                        "The AI Revolution",
                        "The Future Internet",
                        "The Agent Economy"
                      ]}
                      speed={100}
                      deleteSpeed={0}
                      pauseDuration={3000}
                    />
                  </span>
                  <br />
                  <span className="text-white">Starts Here</span>
                </h1>
              
              <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto">
                <TypewriterText
                  texts={[
                    "Register your domain in the AI-native internet.",
                    "Deploy agents, control compute, and scale globally.",
                    "Show up in the new search layer where AI discovers services.",
                    "Build the future of agentic infrastructure.",
                    "Own your piece of the autonomous web revolution."
                  ]}
                  speed={50}
                  deleteSpeed={0}
                  pauseDuration={4000}
                />
              </div>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal direction="up" delay={1000}>
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Button
                  variant="gradient"
                  size="lg"
                  className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl shadow-2xl shadow-cyan-500/25"
                >
                  Register Domain
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-black/50 border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl backdrop-blur-sm"
                >
                  Join Waitlist
                </Button>
              </div>
            </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Right Column - Power Features */}
          <ScrollReveal direction="right" delay={400} duration={1200}>
            <div className="relative">
              <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-cyan-500/20 relative overflow-hidden">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Why Choose UnifiedAI?
                    </span>
                  </h3>
              
                  <div className="grid grid-cols-1 gap-4">
                    {powerFeatures.map((feature, index) => (
                      <ScrollReveal
                        key={feature.label}
                        direction="left"
                        delay={800 + index * 100}
                        duration={600}
                      >
                        <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 group">
                          <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                            {feature.emoji}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {feature.label}
                            </h4>
                            <p className="text-gray-400 text-sm">{feature.desc}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
