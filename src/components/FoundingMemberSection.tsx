"use client";

import { Button } from "@/components/ui/Button";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import AnimatedProgressBar from "@/components/ui/AnimatedProgressBar";
import MorphingBackground from "@/components/ui/MorphingBackground";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import ParticleField from "@/components/ui/ParticleField";

export default function FoundingMemberSection() {
  const benefits = [
    {
      emoji: "⚡",
      title: "Early Compute Access",
      description: "First access to GPU cloud and edge compute resources"
    },
    {
      emoji: "✨",
      title: "Unified AI Tools",
      description: "Priority access to the complete AI development suite"
    },
    {
      emoji: "🎖️",
      title: "Premium Badge",
      description: "Founding Member status in the agentic directory"
    },
    {
      emoji: "🛡️",
      title: "First-Mover Positioning",
      description: "Prime placement in the Agentic Web Index"
    }
  ];

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
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

      <div className="relative z-10 container-max section-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-dark-800 to-dark-700 p-4 rounded-2xl mb-8">
            <span className="text-3xl">👑</span>
            <span className="text-2xl font-bold text-white">Founding Members</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-white">
            Join the Founding Circle
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be among the first pioneers to shape the agentic web. Founding members get exclusive access,
            premium positioning, and direct influence on the roadmap.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={`benefit-${benefit.title}`}
              className="card text-center space-y-4 animate-fade-in bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`,
                '--glow-color': '34, 211, 238'
              } as React.CSSProperties}
              onMouseMove={(e) => {
                const card = e.currentTarget;
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--glow-x', `${(x / rect.width) * 100}%`);
                card.style.setProperty('--glow-y', `${(y / rect.height) * 100}%`);
                card.style.setProperty('--glow-intensity', '1');
              }}
              onMouseLeave={(e) => {
                const card = e.currentTarget;
                card.style.setProperty('--glow-intensity', '0');
              }}
            >
              <div className="text-6xl mx-auto">
                {benefit.emoji}
              </div>
              <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Status Bar */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter end={847} className="text-white" /> / <AnimatedCounter end={1000} className="text-white" />
              </div>
              <div className="text-gray-300">Founding spots remaining</div>
            </div>

            <div className="flex-1 max-w-md mx-8">
              <AnimatedProgressBar
                progress={84.7}
                color="bg-gradient-to-r from-orange-400 to-red-400"
                className="mb-2"
              />
              <div className="text-center text-sm text-gray-300">
                <AnimatedCounter end={84.7} suffix="%" className="text-gray-300" /> claimed
              </div>
            </div>

            <div className="text-center md:text-right">
              <div className="text-lg font-semibold text-orange-400 mb-1">
                🟡 Sunrise pricing ends soon
              </div>
              <div className="text-gray-300 text-sm">
                After <AnimatedCounter end={1000} className="text-gray-300" /> registrations
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="gradient"
            size="lg"
            className="text-xl px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-2xl shadow-cyan-500/25"
          >
            <span className="text-2xl mr-3">👑</span>
            Secure My Founding Spot
          </Button>
          <p className="text-gray-300 mt-4">
            Join the exclusive founding circle and help shape the agentic web
          </p>
        </div>
      </div>
    </section>
  );
}
