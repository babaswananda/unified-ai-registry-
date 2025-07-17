"use client";

import { Button } from "@/components/ui/Button";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MorphingBackground from "@/components/ui/MorphingBackground";
import FloatingElements from "@/components/ui/FloatingElements";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import ParticleField from "@/components/ui/ParticleField";

export default function InfrastructureSection() {
  const infrastructureLayers = [
    {
      emoji: "☁️",
      title: "Structured Compute (Agentic Cloud)",
      description: "Scalable CPU/GPU deployments optimized for distributed autonomous agents. Elastic clusters for containerized AI, edge inference, and event-driven execution."
    },
    {
      emoji: "🌐",
      title: "AI Networking & Identity Routing",
      description: "Every workload, identity, and service is assigned a verifiable AI-native handle — routing all traffic, permissions, and interactions through a secure identity fabric."
    },
    {
      emoji: "💾",
      title: "Dynamic Storage & Retrieval",
      description: "Access AI-native storage protocols optimized for vector embeddings, multimodal datasets, and continuous model feedback cycles."
    },
    {
      emoji: "🔗",
      title: "Cross-Protocol Integration",
      description: "Supports Web2 APIs, Web3 contracts, A2A protocols, and MCP infrastructure. One environment that speaks all languages — across all clouds."
    },
    {
      emoji: "🤖",
      title: "AI Device Layer",
      description: "Physical AI endpoints including phones, watches, glasses, pods, and A.I.V.A. humanoid platforms for complete human-AI interaction."
    }
  ];

  const agenticHostingFeatures = [
    {
      emoji: "🚀",
      title: "One-Click App Deployments",
      description: "Launch production-ready instances of databases (PostgreSQL, Redis, MongoDB), AI models (GPT, LLaMA, Claude), web apps (Node, Python, WordPress), and blockchain nodes."
    },
    {
      emoji: "📦",
      title: "Fully Containerized with Auto-Scheduling",
      description: "Docker-native + AI-optimized autoscaling. Deploy once, replicate anywhere. Works across bare metal, cloud, or hybrid setups."
    },
    {
      emoji: "📊",
      title: "Real-Time Monitoring Dashboard",
      description: "Live stats, logs, auto-backups, alerts powered by your AgentOS infrastructure layer with AI observability built in."
    },
    {
      emoji: "🌍",
      title: "Multi-Cloud & BYOC",
      description: "Supports AWS, GCP, Azure, Vultr, Linode, Hetzner. Users can plug in their own compute or GPUs with dynamic allocation."
    },
    {
      emoji: "💎",
      title: "Crypto-Powered Infrastructure",
      description: "Billing in crypto (ETH, HNS, USDC), token-gated resource access, tokenized domains & agents with smart leasing and staking."
    },
    {
      emoji: "🤖",
      title: "Built-In AI Agent Layers",
      description: "Deploy with an agent attached. Agents monitor uptime, optimize infra, auto-recover, and provide AI observability."
    },
    {
      emoji: "🔧",
      title: "Vibe Coder Interface + API",
      description: "Low-code builder for server setup, agents, tokens with handle-based identity and service provisioning."
    },
    {
      emoji: "🛡️",
      title: "Sovereign DNS + TLD Hosting",
      description: "Deploy all infra on your own TLD (Handshake, ENS). Decentralized, censorship-resistant with full sovereignty."
    }
  ];

  const scaasFeatures = [
    "Distributed manufacturing partner routing (via AI handles)",
    "AI-managed logistics nodes, including shipping, tracking, and insurance",
    "Smart contract fulfillment, asset provenance, and inventory mirroring",
    "Data-layer visibility for factory-to-door transparency",
    "Integration hooks for .MadeinUSA, .MaidenUSA, and verified exporter registries"
  ];

  const taasServices = [
    "AI Email, AI Avatars, Webinar Hosting, AI Scheduling, Mobile.Chat, and other communication layers",
    "VibeCoder IDE, a full-stack coding environment with built-in assistants",
    "Handle-based OS Layer, enabling every organization to deploy their own AI-native digital ecosystem (no hosting fees, no middlemen)",
    "White-labelable Services, including CRM, payment rails, affiliate layers, and digital storefronts",
    "MemeCoinFactory + Tokenization Gateway for creative and community economies",
    "A.I.V.A. Humanoid Platform - Advanced AI companion and physical manifestation endpoint"
  ];

  const partnerTypes = [
    "State-level innovation offices",
    "Educational institutions (K–12 to university)",
    "U.S. exporters, manufacturers, and supply chain nodes",
    "Federal agencies, strategic reserve programs, and infrastructure coalitions",
    "Chamber of Commerce networks and verified business councils"
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
      <FloatingElements count={8} />

      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-20 space-y-6">
            <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-lg mb-8 backdrop-blur-sm">
              <span className="text-2xl">🔲</span>
              <span className="text-cyan-400 font-medium">AGENTIC HOSTING INFRASTRUCTURE</span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Modular. Autonomous. Sovereign.
            </h2>
            <h3 className="text-3xl lg:text-4xl text-gray-300 font-semibold mb-8">
              The world's first sovereign hosting infrastructure powered by AI agents, crypto-native handles, and modular protocol deployment
            </h3>
            <p className="text-xl text-gray-400 max-w-5xl mx-auto leading-relaxed">
              Agent-Powered Infrastructure-as-a-Service (IaaS) with seamless app, AI model, protocol, and server deployment —
              across any cloud, any location, any scale. This isn't a hosting company. You're building the Agentic Web Operating Grid.
            </p>
          </div>
        </ScrollReveal>

        {/* Agentic Hosting Features */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mb-24">
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              🧱 Core Agentic Hosting Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {agenticHostingFeatures.map((feature, index) => (
                <ScrollReveal
                  key={feature.title}
                  direction="up"
                  delay={600 + index * 100}
                  duration={600}
                >
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:scale-105 transition-all duration-300 group">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.emoji}</div>
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 mb-3 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Core Infrastructure Layers */}
        <ScrollReveal direction="up" delay={400}>
          <div className="mb-24">
            <h3 className="text-4xl font-bold text-white mb-12 text-center">
              🏗 Core Infrastructure Layers
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {infrastructureLayers.map((layer, index) => (
                <ScrollReveal
                  key={layer.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={600 + index * 150}
                  duration={700}
                >
                  <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/5 hover:scale-105 transition-all duration-300 group">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{layer.emoji}</div>
                    <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 mb-4 transition-colors duration-300">
                      {layer.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {layer.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Supply Chain as a Service */}
        <ScrollReveal direction="up" delay={800}>
          <div className="bg-black/50 backdrop-blur-sm rounded-xl p-12 text-white mb-24 relative overflow-hidden border border-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 text-center text-white">
                🔄 Supply Chain as a Service (SCaaS)
              </h3>
              <p className="text-xl text-gray-300 mb-8 text-center max-w-4xl mx-auto">
                UnifiedAI offers plug-and-play Supply Chain as a Service infrastructure — engineered for
                American reshoring, logistics transformation, and autonomous fulfillment systems.
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-2xl font-semibold mb-6 text-white">Includes:</h4>
                  <div className="space-y-4">
                    {scaasFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-cyan-400 mt-1 text-xl">•</span>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm border border-cyan-500/20">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Turn your industrial operations into intelligent, trackable, tokenized supply chains —
                    with instant onboarding, government-grade compliance, and global interoperability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Technology as a Service */}
        <ScrollReveal direction="up" delay={1000}>
          <div className="bg-black/50 backdrop-blur-sm rounded-xl p-12 text-white mb-24 relative overflow-hidden border border-cyan-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5" />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 text-center text-white">
                🧠 Technology as a Service (TaaS)
              </h3>
              <p className="text-xl text-gray-300 mb-8 text-center max-w-4xl mx-auto">
                UnifiedAI bundles turnkey, agent-powered tech stacks as on-demand services.
                This is sovereign SaaS, rebuilt for the autonomous internet.
              </p>

              <div className="space-y-4 mb-8">
                {taasServices.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-cyan-400 mt-1 text-xl">•</span>
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>

              <div className="bg-black/30 rounded-xl p-6 backdrop-blur-sm text-center border border-cyan-500/20">
                <p className="text-gray-300 leading-relaxed text-lg font-semibold">
                  TaaS = Everything-as-a-Handle. Deploy tech instantly, scale infinitely, and maintain
                  full stack control — no cloud lock-in, no margin dilution.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Agency & Organization Onboarding */}
        <ScrollReveal direction="up" delay={1200}>
          <div className="bg-black/50 backdrop-blur-sm rounded-xl p-12 border border-cyan-500/20">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-white mb-6">
                🤝 Agency & Organization Onboarding Portal
              </h3>
              <h4 className="text-2xl text-gray-300 mb-6">Deploy Infrastructure with Us</h4>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                UnifiedAI is actively partnering with organizations across sectors to deploy
                sovereign infrastructure solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {partnerTypes.map((type, index) => (
                <ScrollReveal 
                  key={type}
                  direction="up" 
                  delay={1400 + index * 100}
                  duration={500}
                >
                  <div className="bg-black/30 rounded-lg p-6 text-center border border-cyan-500/20">
                    <span className="text-gray-300 font-medium">{type}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-lg text-dark-600 mb-8 max-w-4xl mx-auto">
                👉 If your organization wants to deploy infrastructure — from AI scheduling to national-grade 
                logistics, from school tech to decentralized energy grids — you can do it here.
              </p>
              <p className="text-dark-600 mb-8">
                Use our onboarding portal to set up your infrastructure node, access your organization handle, 
                and join the UnifiedAI registry stack.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="gradient" size="lg" className="shadow-xl">
                  📥 Get Started with Infrastructure Deployment
                </Button>
                <Button variant="secondary" size="lg" className="shadow-lg">
                  📡 Request Partnership Access
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
