"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import MorphingBackground from "@/components/ui/MorphingBackground";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import ParticleField from "@/components/ui/ParticleField";

export default function FeaturesDeepDive() {
  const features = [
    {
      emoji: "🌐",
      title: "Structured Identity, Not Just a Domain",
      description: "Your agentic handle becomes a structured endpoint with metadata, permissions, and behavioral logic. Unlike traditional domains that serve static pages, your identity is machine-readable and agent-accessible.",
      visual: "🌐 → 🤖 → ⚡"
    },
    {
      emoji: "🔍",
      title: "Discoverable by Agents, Not Crawlers",
      description: "AI systems don't crawl pages—they query structured endpoints. Your domain appears in the new search layer where agents coordinate, discover services, and execute transactions autonomously.",
      visual: "🔍 → 🧠 → 🤝"
    },
    {
      emoji: "⚡",
      title: "Built-In AI Deployment Protocols",
      description: "Every domain comes with native compute integration. Deploy agents, apps, and services instantly with built-in connections to DigitalOcean, Gradient AI, and Unified AI Compute infrastructure.",
      visual: "📦 → ☁️ → 🚀"
    },
    {
      emoji: "🛡️",
      title: "Instant Compute at the Edge",
      description: "Your domain isn't just an address—it's a compute-ready endpoint. Set access rules, manage permissions, and control how AIs and agents interact with your services at the protocol level.",
      visual: "🛡️ → ⚙️ → 🌍"
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
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            🧩 Not Just Domains. Structured Compute Endpoints.
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            This isn't just domain registration — it's intent-based infrastructure for the new agentic web.
          </p>
        </div>

        {/* Features Grid */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Content Column */}
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="flex items-center space-x-4">
                  <div className="text-5xl">
                    {feature.emoji}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Visual Column */}
              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-12 text-center">
                  <div className="text-6xl mb-6 font-mono tracking-wider text-cyan-400">
                    {feature.visual}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {feature.title.split(",")[0]}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-dark-900 to-dark-800 rounded-3xl p-12 text-white max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6">
              🌐 The Agentic Layer Has Arrived
            </h3>
            <div className="space-y-4 text-lg text-dark-200 mb-8">
              <p>You're not just reserving a name. You're reserving a compute-accessible presence.</p>
              <p>This is the new search layer. AI systems will not crawl pages — they'll query structured endpoints.</p>
              <p className="text-white font-semibold text-xl">And you'll be ready.</p>
            </div>
            
            <div className="bg-dark-800 rounded-2xl p-6 max-w-md mx-auto">
              <div className="text-center space-y-2">
                <div className="text-dark-300">ICANN Web</div>
                <div className="text-2xl">+</div>
                <div className="text-gradient font-bold">AI Compute Layer</div>
                <div className="text-2xl">=</div>
                <div className="text-white font-bold text-xl">The Agentic Web</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
