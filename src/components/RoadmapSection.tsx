"use client";


import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function RoadmapSection() {

  const phases = [
    {
      title: "🚀 Phase 1: Foundation Layer",
      subtitle: "Q1 2025 - The Agentic Web Begins",
      status: "active",
      progress: 85,
      description: "Building the sovereign infrastructure for agentic web",
      timeline: "January - March 2025",
      items: [
        { name: "🌐 Unified AI Registry Launch", status: "complete", description: "Domain registration for AI agents and services" },
        { name: "🔐 Crypto-Native Identity System", status: "complete", description: "Handshake DNS + ENS integration" },
        { name: "⚡ Basic Compute Infrastructure", status: "complete", description: "GPU/CPU orchestration for agent deployment" },
        { name: "🤖 Agent Deployment Framework", status: "active", description: "One-click agent hosting and management" },
        { name: "📡 API Gateway & SDK", status: "active", description: "Developer tools for agentic web integration" }
      ]
    },
    {
      title: "🌟 Phase 2: Intelligence Layer",
      subtitle: "Q2 2025 - AI Services Ecosystem",
      status: "upcoming",
      progress: 0,
      description: "Core AI services and autonomous agent marketplace",
      timeline: "April - June 2025",
      items: [
        { name: "🧠 AI Agent Marketplace", status: "locked", description: "Discover, deploy, and monetize AI agents" },
        { name: "💬 AI Communication Suite", status: "locked", description: "AI Email, Chat, and Avatar systems" },
        { name: "🔄 MCP Protocol Integration", status: "locked", description: "Multi-cloud processing and agent coordination" },
        { name: "🎯 Smart Contract Automation", status: "locked", description: "Blockchain-native agent operations" },
        { name: "📊 Analytics & Monitoring", status: "locked", description: "Real-time agent performance insights" }
      ]
    },
    {
      title: "🏢 Phase 3: Enterprise & Scale",
      subtitle: "Q3 2025 - Production-Ready Platform",
      status: "future",
      progress: 0,
      description: "Enterprise-grade tools and massive scale deployment",
      timeline: "July - September 2025",
      items: [
        { name: "🏭 Enterprise AI Stack", status: "locked", description: "White-label solutions for organizations" },
        { name: "💻 VibeOS & Development Suite", status: "locked", description: "Complete AI-native operating environment" },
        { name: "🌍 Global Edge Network", status: "locked", description: "Worldwide low-latency agent deployment" },
        { name: "🔒 Government-Grade Security", status: "locked", description: "National security compliance and auditing" },
        { name: "📱 Mobile & IoT Integration", status: "locked", description: "Agents on every device and platform" }
      ]
    },
    {
      title: "🌌 Phase 4: Autonomous Web",
      subtitle: "Q4 2025 - The Future Arrives",
      status: "future",
      progress: 0,
      description: "Fully autonomous internet with AI-to-AI commerce",
      timeline: "October - December 2025",
      items: [
        { name: "🤝 Agent-to-Agent Commerce", status: "locked", description: "Autonomous economic transactions" },
        { name: "🧬 Self-Evolving Infrastructure", status: "locked", description: "AI that improves and scales itself" },
        { name: "🌐 Decentralized Governance", status: "locked", description: "Community-driven protocol evolution" },
        { name: "🚁 Physical AI Integration", status: "locked", description: "Robots, drones, and IoT device control" },
        { name: "🔮 Predictive Intelligence", status: "locked", description: "AI that anticipates and prevents problems" }
      ]
    },
    {
      title: "🚀 Phase 5: Beyond Earth",
      subtitle: "2026+ - Interplanetary Scale",
      status: "visionary",
      progress: 0,
      description: "Space-ready infrastructure for multi-planetary civilization",
      timeline: "2026 and Beyond",
      items: [
        { name: "🛰️ Satellite Agent Networks", status: "locked", description: "Space-based AI infrastructure" },
        { name: "🌙 Lunar Computing Nodes", status: "locked", description: "Moon-based data centers and processing" },
        { name: "🚀 Mars Colony Integration", status: "locked", description: "AI infrastructure for Mars settlements" },
        { name: "⭐ Interstellar Communication", status: "locked", description: "AI-powered deep space networks" },
        { name: "🌌 Universal AI Protocol", status: "locked", description: "Standard for all intelligent civilizations" }
      ]
    }
  ];





  const getProgressColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-cyan-500";
      case "upcoming":
        return "bg-cyan-400";
      case "future":
        return "bg-gray-500";
      case "visionary":
        return "bg-gray-400";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <section id="roadmap" className="py-24 text-white relative overflow-hidden">
      {/* Background Effects */}
      <ConditionalBackground
        intensity={0.6}
        particleCount={50}
        floatingCount={0}
        gridSize={100}
      />
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🗺️</span>
            <span className="text-cyan-400 font-semibold">Roadmap to the Future</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Infrastructure Deployment
            </span>
            <br />
            <span className="text-white">Timeline</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Phased rollout of sovereign AI infrastructure components and capabilities
          </p>
        </div>

        {/* Roadmap Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 via-cyan-400 to-gray-600 h-full rounded-full opacity-30"></div>

          {/* Timeline Phases */}
          <div className="space-y-16">
            {phases.map((phase, index) => (
              <div
                key={`phase-${index}`}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-16 h-16 rounded-full border-4 border-black flex items-center justify-center font-bold text-white text-xl shadow-2xl ${getProgressColor(phase.status)}`}>
                    {index + 1}
                  </div>
                  {/* Pulse Animation for Active Phase */}
                  {phase.status === 'active' && (
                    <div className="absolute inset-0 rounded-full bg-cyan-500 animate-ping opacity-20"></div>
                  )}
                </div>

                {/* Phase Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div
                    className="card relative bg-black/60 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 transition-all duration-500 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
                    style={{
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
                    {/* Status Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                        phase.status === "active" ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30" :
                        phase.status === "upcoming" ? "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20" :
                        "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                      }`}>
                        {phase.status.toUpperCase()}
                      </div>
                      <div className="text-sm text-gray-400">
                        📅 {phase.timeline}
                      </div>
                    </div>

                    {/* Phase Header */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{phase.title}</h3>
                      <p className="text-lg text-cyan-400 font-medium mb-3">{phase.subtitle}</p>
                      <p className="text-gray-300 leading-relaxed">{phase.description}</p>
                    </div>

                    {/* Progress Section */}
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-semibold text-gray-300">Infrastructure Progress</span>
                        <span className="text-lg font-bold text-cyan-400">{phase.progress}%</span>
                      </div>
                      <div className="relative w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-2000 ease-out ${getProgressColor(phase.status)} relative`}
                          style={{ width: `${phase.progress}%` }}
                        >
                          {/* Animated Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    {/* Key Milestones Preview */}
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Key Deliverables</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {phase.items.slice(0, 2).map((item, itemIndex) => (
                          <div
                            key={`milestone-${index}-${itemIndex}`}
                            className="flex items-center space-x-3 p-3 bg-black/40 rounded-lg border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300"
                          >
                            <div className="text-sm">{item.name.split(' ')[0]}</div>
                            <div className="flex-1">
                              <span className="text-white text-sm font-medium">{item.name.substring(item.name.indexOf(' ') + 1)}</span>
                            </div>
                            <div className={`w-2 h-2 rounded-full ${
                              item.status === 'complete' ? 'bg-green-400' :
                              item.status === 'active' ? 'bg-cyan-400 animate-pulse' :
                              'bg-gray-500'
                            }`}></div>
                          </div>
                        ))}
                        {phase.items.length > 2 && (
                          <div className="text-center pt-2">
                            <span className="text-xs text-gray-500">+{phase.items.length - 2} more deliverables</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
