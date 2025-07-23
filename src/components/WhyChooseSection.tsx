"use client";

import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function WhyChooseSection() {
  const powerFeatures = [
    { emoji: "🚀", label: "Deploy Instantly", desc: "Launch AI agents in seconds" },
    { emoji: "🌐", label: "Global Network", desc: "Worldwide edge infrastructure" },
    { emoji: "⚡", label: "Lightning Fast", desc: "Sub-millisecond response times" },
    { emoji: "🛡️", label: "Sovereign Control", desc: "You own your AI infrastructure" },
    { emoji: "🔮", label: "Future-Proof", desc: "Built for the next decade of AI" },
    { emoji: "💎", label: "Premium Access", desc: "Exclusive founding member benefits" }
  ];

  return (
    <section className="py-16 bg-black text-white relative overflow-hidden border-b border-cyan-500/20">
      {/* Background Effects */}
      <ConditionalBackground
        intensity={0.6}
        particleCount={50}
        floatingCount={0}
        gridSize={100}
      />

      <div className="container-max section-padding relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Why Choose UnifiedAI?
              </span>
            </h2>
            <p className="text-lg text-gray-300">
              Six pillars of infrastructure excellence for the agentic web
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {powerFeatures.map((feature, index) => (
              <div
                key={`power-feature-${feature.label}`}
                className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:transform hover:scale-105"
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
                <div className="text-center space-y-3">
                  <div className="text-4xl mb-3">{feature.emoji}</div>
                  <h3 className="text-lg font-bold text-white">
                    {feature.label}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
