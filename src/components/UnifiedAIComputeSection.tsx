"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import ParticleField from "@/components/ui/ParticleField";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import MorphingBackground from "@/components/ui/MorphingBackground";

export default function UnifiedAIComputeSection() {
  const coreCapabilities = [
    {
      emoji: "⚡",
      title: "Dynamic GPU/CPU Orchestration",
      description: "Scale instantly. Spin up compute in seconds, run parallel agent fleets, and optimize workloads on-demand with zero downtime or overprovisioning."
    },
    {
      emoji: "🔧",
      title: "AI Framework Freedom",
      description: "Support for PyTorch, TensorFlow, JAX, and all major ML frameworks out-of-the-box — giving your developers and models complete flexibility."
    },
    {
      emoji: "📦",
      title: "Containerized Agent Environments",
      description: "Run agents in secure, lightweight containers managed by our smart orchestrator — ensuring continuous uptime, resilience, and update agility."
    },
    {
      emoji: "🔄",
      title: "Model Lifecycle Management",
      description: "Host, update, and version models with rollback capabilities and real-time audit trails. You own the lifecycle from training to inference."
    },
    {
      emoji: "🚀",
      title: "Zero-Setup AI Pipelines",
      description: "Launch full AI workflows — from fine-tuning to deployment to feedback loops — with pre-configured modules designed for agentic speed."
    },
    {
      emoji: "🌍",
      title: "Edge-Ready Compute Fabric",
      description: "Run agents globally across low-latency edge locations, ensuring instant responsiveness and proximity to user environments or connected devices."
    }
  ];

  const integrationFeatures = [
    "API & SDK integration support across cloud vendors",
    "Real-time interoperability between UnifiedAI agents and external LLMs",
    "UnifiedAI identity + access governance over all connected pipelines",
    "Agent-to-agent signaling layer for composable, cross-cloud collaboration"
  ];

  const developerFeatures = [
    "Streamlined CLI & Admin UI",
    "Usage and cost tracking per agent",
    "Secret management and permissioned access",
    "Developer-first documentation and template libraries"
  ];

  return (
    <section className="py-32 bg-black text-white relative overflow-hidden">
      {/* Background Elements - Same as agents-are-coming */}
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
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-white">
              UnifiedAI Compute
            </h2>
            <h3 className="text-2xl lg:text-3xl text-gray-300 font-semibold">
              Elastic Agentic Infrastructure, Built for the Autonomous Web
            </h3>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              UnifiedAI Compute is the sovereign backbone for Structured AI Workloads. Designed to power
              the full lifecycle of autonomous agents, microservices, and distributed intelligence — this
              infrastructure is your command center for everything AI-native.
            </p>
          </div>
        </ScrollReveal>

        {/* Core Capabilities */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-white mb-12 text-center">
              🔧 Core Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreCapabilities.map((capability, index) => (
                <ScrollReveal
                  key={capability.title}
                  direction="up"
                  delay={600 + index * 100}
                  duration={600}
                >
                  <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:scale-105 transition-all duration-300 group">
                    <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{capability.emoji}</div>
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 mb-4 transition-colors duration-300">
                      {capability.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {capability.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Integrations Layer */}
        <ScrollReveal direction="up" delay={800}>
          <div className="bg-black/50 backdrop-blur-sm rounded-xl p-12 text-white mb-20 relative overflow-hidden border border-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold mb-4 text-white">
                  🤝 UnifiedAI Integrations Layer
                </h3>
                <p className="text-2xl text-cyan-400 mb-6">
                  "Plug into the World's Intelligence"
                </p>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  UnifiedAI supports native integration with the world's leading AI ecosystems — from A2A
                  (Agent-to-Agent) protocols to MCP (Multi-Cloud Processing) environments. You can seamlessly
                  connect agents across Anthropic, OpenAI, Google Vertex AI, and more, while maintaining total
                  control through your own UnifiedAI registry.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-lg text-green-400 mb-6 font-semibold">
                    ✅ This means full access to the extended capabilities of third-party models, tools, 
                    and chains — without giving up sovereignty.
                  </p>
                  <div className="space-y-3">
                    {integrationFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-black/30 rounded-lg p-6 backdrop-blur-sm border border-cyan-500/20">
                  <p className="text-gray-300 leading-relaxed">
                    Our integration layer secures your namespace dominance for emerging protocol standards —
                    including A2A and MCP — while positioning UnifiedAI as a sovereign mesh above all major clouds.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Developer Experience & Privacy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left" delay={1000}>
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                💻 Developer Experience
              </h3>
              <div className="space-y-4">
                {developerFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-green-400">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={1200}>
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                🔒 Privacy by Design
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                Encrypted data movement. Isolated compute zones. Full auditability. UnifiedAI Compute
                is infrastructure built for national-grade confidentiality and trust.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
