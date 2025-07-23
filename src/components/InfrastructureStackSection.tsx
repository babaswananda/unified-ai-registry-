"use client";

import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Server, Cpu, Database, Network, Shield, Zap, Truck, Code, Brain, Factory, Vote, Link } from "lucide-react";

export default function InfrastructureStackSection() {
  const infrastructureLayers = [
    {
      id: "iaas",
      title: "🏗️ Infrastructure as a Service (IaaS)",
      subtitle: "Raw Infrastructure Layer",
      description: "Sovereign compute, storage, and networking resources without dependency on big tech.",
      features: [
        "Sovereign compute clusters (GPU/CPU)",
        "AI-native distributed storage",
        "Identity-based networking fabric",
        "Crypto-native access control"
      ],
      note: "Powers Structured Compute and Agentic Hosting layers above"
    },
    {
      id: "structured-compute",
      title: "⚙️ Structured Compute",
      subtitle: "Programmable Compute Protocol",
      description: "AI-optimized compute layer with tokenized access via Fugio + AI Tokens.",
      features: [
        "Pre-architected for intelligent workloads",
        "Tokenized compute-as-currency",
        "Zero-knowledge execution environments",
        "Agent-to-agent protocol execution"
      ],
      note: "Built on IaaS foundation, enables Agentic Hosting"
    },
    {
      id: "agentic-hosting",
      title: "🤖 Agentic Hosting",
      subtitle: "Packaged Deployment + Orchestration",
      description: "One-click agent deployment with lifecycle management and observability.",
      features: [
        "Containerized agent environments",
        "Auto-scaling and load balancing",
        "Built-in monitoring and analytics",
        "Agent marketplace integration"
      ],
      note: "Utilizes Structured Compute for intelligent orchestration"
    }
  ];

  const serviceOfferings = [
    {
      id: "scaas",
      title: "🔄 Supply Chain as a Service (SCaaS)",
      description: "Plug-and-play supply chain infrastructure for American reshoring and autonomous fulfillment.",
      features: [
        "Distributed manufacturing partner routing (via AI handles)",
        "AI-managed logistics nodes, shipping, tracking, insurance",
        "Smart contract fulfillment and asset provenance",
        "Integration with .MadeinUSA, .MaidenUSA registries",
        "Government-grade compliance and global interoperability"
      ]
    },
    {
      id: "taas",
      title: "🧠 Technology as a Service (TaaS)",
      description: "Sovereign SaaS rebuilt for the autonomous internet. Everything-as-a-Handle.",
      features: [
        "AI Email, Avatars, Scheduling, Mobile.Chat communication layers",
        "VibeCoder IDE with built-in AI assistants",
        "Handle-based OS Layer for AI-native ecosystems",
        "MemeCoinFactory + Tokenization Gateway",
        "A.I.V.A. Humanoid Platform - Advanced AI companion endpoint"
      ]
    },
    {
      id: "iotaas",
      title: "🌐 Internet of Things as a Service (IoTaaS)",
      description: "Connect AI agents to real-world devices, sensors, and edge processors.",
      features: [
        "AI-integrated device orchestration",
        "Real-time hardware monitoring and control",
        "NFC/RFID integration with supply chains",
        "Edge processor deployment and management"
      ]
    },
    {
      id: "dexaas",
      title: "💱 Decentralized Exchange as a Service (DEXaaS)",
      description: "Full stack to launch crypto exchanges, wallet gateways, and liquidity pools.",
      features: [
        "White-labeled exchange deployment",
        "KYC toggles and compliance layers",
        "Fiat on/off ramps integration",
        "Embedded swap routers and liquidity pools"
      ]
    }
  ];

  const mandateAlignment = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Sovereignty Mandates",
      description: "Aligns with Executive Order 14110 on Safe AI and EU AI Act Article 28 requirements for sovereign AI systems"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Critical Infrastructure Resilience",
      description: "Supports NIST Cybersecurity Framework and domestic supply chain independence initiatives"
    },
    {
      icon: <Vote className="w-6 h-6" />,
      title: "Zero Trust Architecture",
      description: "Implements CISA Zero Trust Maturity Model and privacy-preserving AI frameworks"
    }
  ];

  const tokenomicsFlow = [
    {
      token: "FUGIO",
      role: "Native Gas Token",
      usage: "Compute access, infrastructure provisioning, protocol governance"
    },
    {
      token: "AI Token",
      role: "Service Credits",
      usage: "Agent training, API calls, storage, specialized AI services"
    }
  ];

  const technicalArchitecture = [
    {
      layer: "Identity Layer",
      tech: "DID/VC Standards + Custom Schema",
      description: "Structured identity using W3C Decentralized Identifiers with AI-native extensions"
    },
    {
      layer: "Security Layer",
      tech: "TEE + ZK Proofs + MPC",
      description: "Trusted Execution Environments, Zero-Knowledge proofs, Multi-Party Computation"
    },
    {
      layer: "Consensus Layer",
      tech: "Sovereign Governance",
      description: "Token-weighted governance with mandate compliance and jurisdictional flexibility"
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🏗️</span>
            <span className="text-cyan-400 font-semibold">Infrastructure Stack</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              The Agentic Infrastructure
            </span>
            <br />
            <span className="text-white">Stack</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Hierarchical infrastructure layers powering the agentic web. All layers are token-gated via Fugio + AI Token 
            for sovereign access control and economic autonomy.
          </p>
        </div>

        {/* Infrastructure Hierarchy */}
        <div className="space-y-8 mb-16">
          {infrastructureLayers.map((layer, index) => (
            <div
              key={layer.id}
              className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5"
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
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{layer.title}</h3>
                  <p className="text-lg text-cyan-400 font-medium mb-3">{layer.subtitle}</p>
                  <p className="text-gray-300 mb-4">{layer.description}</p>
                  <p className="text-sm text-gray-400 italic">{layer.note}</p>
                </div>
                <div className="text-3xl ml-6">{index + 1}</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {layer.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Complete aaS Stack */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              AI-as-a-Service (Full Final Stack)
            </span>
          </h3>

          <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
            Five core pillars. One service mesh. Each stack can operate independently or unify across your ecosystem.
          </p>

          <div className="space-y-8">
            {/* IaaS */}
            <div className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5"
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
              }}
            >
              <h4 className="text-2xl font-bold text-white mb-4">🏗️ IaaS – Infrastructure as a Service</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">GPU nodes, RAM, storage, multi-cloud fallback, sovereign hardware deployments.</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Sovereign compute clusters (GPU/CPU)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">AI-native distributed storage</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Identity-based networking fabric</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 mb-4">Data localization, compliance zones, encrypted logging.</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Crypto-native access control</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Zero vendor lock-in</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Compliance zone deployment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TaaS */}
            <div className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5"
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
              }}
            >
              <h4 className="text-2xl font-bold text-white mb-4">🧠 TaaS – Technology as a Service</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">Prebuilt modules, open APIs, agent training stacks, SDKs, and deployment kits.</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">AI Email, AI Avatars, Webinar Hosting, AI Scheduling, Mobile.Chat</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">VibeCoder IDE with built-in AI assistants</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Handle-based OS Layer for AI-native ecosystems</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 mb-4">White-labeled agent portals, dashboards, mobile UIs, and wearable integrations.</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">White-labelable CRM, payment rails, affiliate layers</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">MemeCoinFactory + Tokenization Gateway</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">A.I.V.A. Humanoid Platform - Advanced AI companion endpoint</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SCaaS */}
            <div className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5"
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
              }}
            >
              <h4 className="text-2xl font-bold text-white mb-4">🔄 SCaaS – Supply Chain as a Service</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">Full lifecycle stack for logistics, manufacturing, warehousing, sourcing, and tracking.</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Distributed manufacturing partner routing (via AI handles)</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">AI-managed logistics nodes, shipping, tracking, insurance</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Smart contract fulfillment and asset provenance</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 mb-4">AI-integrated inventory, vendor, and contract orchestration.</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Data-layer visibility for factory-to-door transparency</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Integration with .MadeinUSA, .MaidenUSA registries</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Government-grade compliance and global interoperability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* IoTaaS */}
            <div className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5"
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
              }}
            >
              <h4 className="text-2xl font-bold text-white mb-4">🌐 IoTaaS – Internet of Things as a Service</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">Connect AI agents to real-world devices, cameras, scanners, sensors, NFC/RFID, and edge processors.</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">AI-integrated device orchestration</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Real-time hardware monitoring and control</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 mb-4">Control or monitor hardware in real time across global supply chains.</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">NFC/RFID integration with supply chains</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Edge processor deployment and management</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* DEXaaS */}
            <div className="card bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 relative overflow-hidden transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-500/5"
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
              }}
            >
              <h4 className="text-2xl font-bold text-white mb-4">💱 DEXaaS – Decentralized Exchange as a Service</h4>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-300 mb-4">Full stack to launch your own crypto exchange, wallet gateway, swap router, or liquidity pool.</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">White-labeled exchange deployment</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Embedded swap routers and liquidity pools</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 mb-4">KYC toggles, fiat on/off ramps, and embedded compliance layers available.</p>
                  <div className="space-y-2">
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">KYC toggles and compliance layers</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-sm text-gray-300">Fiat on/off ramps integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tokenomics Flow */}
        <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              💰 AI-Crypto Native Tokenomics
            </span>
          </h3>

          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            All layers of UnifiedAI are token-gated via Fugio + AI Token for sovereign access control and economic autonomy.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tokenomicsFlow.map((token, index) => (
              <div key={index} className="text-center p-6 bg-black/30 rounded-xl">
                <h4 className="text-xl font-bold text-cyan-400 mb-2">{token.token}</h4>
                <p className="text-lg font-semibold text-white mb-3">{token.role}</p>
                <p className="text-sm text-gray-300">{token.usage}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              🔧 Technical Architecture
            </span>
          </h3>

          <div className="space-y-6">
            {technicalArchitecture.map((arch, index) => (
              <div key={index} className="flex items-start space-x-6 p-4 bg-black/30 rounded-xl">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-cyan-400 font-bold">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-white mb-1">{arch.layer}</h4>
                  <p className="text-cyan-400 font-medium mb-2">{arch.tech}</p>
                  <p className="text-sm text-gray-300">{arch.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mandate Alignment */}
        <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              ⚖️ Mandate Alignment
            </span>
          </h3>
          
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            UnifiedAI infrastructure aligns with strategic mandates for sovereign digital systems, 
            privacy-preserving AI, domestic reshoring, and citizen-centric technology frameworks.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mandateAlignment.map((mandate, index) => (
              <div key={index} className="text-center p-4">
                <div className="text-cyan-400 mb-3 flex justify-center">{mandate.icon}</div>
                <h4 className="text-lg font-semibold text-white mb-2">{mandate.title}</h4>
                <p className="text-sm text-gray-400">{mandate.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Unified CTA Section */}
        <div className="text-center">
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Register Your Agentic Handle
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Your handle becomes your structured identity, compute endpoint, and gateway to the intelligent web.
              Powered by Fugio + AI Tokens.
            </p>

            {/* Onboarding Flow Preview */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 text-sm">
              <div className="text-center p-3 bg-black/30 rounded-lg">
                <div className="text-cyan-400 font-bold mb-1">1</div>
                <div className="text-gray-300">Claim Handle</div>
              </div>
              <div className="text-center p-3 bg-black/30 rounded-lg">
                <div className="text-cyan-400 font-bold mb-1">2</div>
                <div className="text-gray-300">Set Identity</div>
              </div>
              <div className="text-center p-3 bg-black/30 rounded-lg">
                <div className="text-cyan-400 font-bold mb-1">3</div>
                <div className="text-gray-300">Token Gate</div>
              </div>
              <div className="text-center p-3 bg-black/30 rounded-lg">
                <div className="text-cyan-400 font-bold mb-1">4</div>
                <div className="text-gray-300">Deploy Agents</div>
              </div>
              <div className="text-center p-3 bg-black/30 rounded-lg">
                <div className="text-cyan-400 font-bold mb-1">5</div>
                <div className="text-gray-300">Control Endpoints</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 text-lg font-semibold"
              >
                🔐 Register Your Handle
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="bg-black/50 border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 px-8 py-4 text-lg backdrop-blur-sm"
              >
                📄 View Full Stack Deck
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
