"use client";

import MorphingBackground from "@/components/ui/MorphingBackground";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import ParticleField from "@/components/ui/ParticleField";

export default function FeaturesDeepDive() {

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

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="card text-center space-y-4 bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5"
               style={{ '--glow-color': '34, 211, 238' } as React.CSSProperties}
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
               }}>
            <div className="text-6xl mb-4">🌐</div>
            <h3 className="text-xl font-bold text-white mb-3">Structured Identity, Not Just a Domain</h3>
            <p className="text-gray-300 text-sm">Your agentic handle becomes a structured endpoint with metadata, permissions, and behavioral logic. Unlike traditional domains that serve static pages, your identity is machine-readable and agent-accessible.</p>
            <div className="text-cyan-400 font-mono text-lg mt-4">🌐 → 🤖 → ⚡</div>
            <div className="text-gray-400 text-xs">Structured Identity</div>
          </div>

          <div className="card text-center space-y-4 bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5"
               style={{ '--glow-color': '34, 211, 238' } as React.CSSProperties}
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
               }}>
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-white mb-3">Discoverable by Agents, Not Crawlers</h3>
            <p className="text-gray-300 text-sm">AI systems don't crawl pages—they query structured endpoints. Your domain appears in the new search layer where agents coordinate, discover services, and execute transactions autonomously.</p>
            <div className="text-cyan-400 font-mono text-lg mt-4">🔍 → 🧠 → 🤝</div>
            <div className="text-gray-400 text-xs">Discoverable by Agents</div>
          </div>

          <div className="card text-center space-y-4 bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5"
               style={{ '--glow-color': '34, 211, 238' } as React.CSSProperties}
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
               }}>
            <div className="text-6xl mb-4">⚡</div>
            <h3 className="text-xl font-bold text-white mb-3">Built-In AI Deployment Protocols</h3>
            <p className="text-gray-300 text-sm">Every domain comes with native compute integration. Deploy agents, apps, and services instantly with built-in connections to DigitalOcean, Gradient AI, and Unified AI Compute infrastructure.</p>
            <div className="text-cyan-400 font-mono text-lg mt-4">📦 → ☁️ → 🚀</div>
            <div className="text-gray-400 text-xs">Built-In AI Deployment Protocols</div>
          </div>

          <div className="card text-center space-y-4 bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5"
               style={{ '--glow-color': '34, 211, 238' } as React.CSSProperties}
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
               }}>
            <div className="text-6xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold text-white mb-3">Instant Compute at the Edge</h3>
            <p className="text-gray-300 text-sm">Your domain isn't just an address—it's a compute-ready endpoint. Set access rules, manage permissions, and control how AIs and agents interact with your services at the protocol level.</p>
            <div className="text-cyan-400 font-mono text-lg mt-4">🛡️ → ⚙️ → 🌍</div>
            <div className="text-gray-400 text-xs">Instant Compute at the Edge</div>
          </div>
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
