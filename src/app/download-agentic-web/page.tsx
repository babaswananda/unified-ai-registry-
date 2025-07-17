"use client";

import { Button } from "@/components/ui/Button";
import ParticleField from "@/components/ui/ParticleField";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Code, Terminal, Cpu, Layers, GitBranch, Zap } from "lucide-react";

export default function DownloadAgenticWebPage() {
  const devTools = [
    {
      icon: Code,
      title: "Vibe Coder SDK",
      description: "Full-stack coding environment with built-in AI assistants and agent deployment tools.",
      features: ["AI-powered IDE", "Agent templates", "Real-time collaboration", "Deployment pipelines"]
    },
    {
      icon: Layers,
      title: "Agent Builder Tools",
      description: "Visual and code-based tools for creating, training, and deploying autonomous agents.",
      features: ["Drag-drop agent builder", "Custom model integration", "Behavior scripting", "Testing sandbox"]
    },
    {
      icon: Cpu,
      title: "Infrastructure APIs",
      description: "Direct access to modular compute, storage, and networking infrastructure.",
      features: ["Compute orchestration", "Auto-scaling", "Edge deployment", "Cost optimization"]
    },
    {
      icon: GitBranch,
      title: "A2A + MCP Integration",
      description: "Agent-to-Agent and Multi-Cloud Processing protocol integration keys.",
      features: ["Cross-platform agents", "Protocol bridges", "Identity management", "Secure messaging"]
    }
  ];

  const codeExample = `// Deploy an AI agent in 3 lines
import { UnifiedAI } from '@unified-ai/sdk';

const agent = new UnifiedAI.Agent({
  handle: 'mycompany.ai',
  capabilities: ['chat', 'automation', 'analysis'],
  deployment: 'global-edge'
});

await agent.deploy();
// Your agent is now live at mycompany.ai`;

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      <AnimatedGrid
        gridSize={80}
        lineColor="rgba(0, 255, 255, 0.05)"
        pulseColor="rgba(0, 255, 255, 0.2)"
        intensity={0.6}
      />
      <ParticleField
        particleCount={80}
        color="rgba(0, 255, 255, 0.4)"
        darkColor="rgba(0, 255, 255, 0.6)"
      />

      <div className="relative z-10 pt-24">
        {/* Header */}
        <section className="py-24 text-center">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Developer Portal</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <h1 className="text-6xl lg:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  download.agenticweb
                </span>
              </h1>
              <h2 className="text-3xl lg:text-4xl text-gray-300 mb-8 font-semibold">
                Deploy Agents. Rewrite the Web.
              </h2>
              <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Access the complete developer toolkit for building on the agentic web. 
                SDKs, APIs, infrastructure, and deployment tools for the next generation of AI applications.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Code Preview */}
        <ScrollReveal direction="up" delay={600}>
          <section className="py-16">
            <div className="container-max section-padding">
              <div className="max-w-4xl mx-auto">
                <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 text-sm font-mono">agent-deploy.js</span>
                  </div>
                  <pre className="text-cyan-400 font-mono text-sm leading-relaxed overflow-x-auto">
                    <code>{codeExample}</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Developer Tools */}
        <section className="py-24">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <h3 className="text-4xl font-bold text-center mb-16">
                Build with Professional Tools
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {devTools.map((tool, index) => (
                <ScrollReveal 
                  key={tool.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={400 + index * 200}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300">
                    <tool.icon className="w-12 h-12 text-cyan-400 mb-6" />
                    <h4 className="text-2xl font-bold mb-4">{tool.title}</h4>
                    <p className="text-gray-400 mb-6 leading-relaxed">{tool.description}</p>
                    <ul className="space-y-2">
                      {tool.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <span className="text-cyan-400">•</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Access Levels */}
        <section className="py-24 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <h3 className="text-4xl font-bold text-center mb-16">
                Developer Access Tiers
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal direction="up" delay={400}>
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                  <h4 className="text-2xl font-bold mb-4">Indie Developer</h4>
                  <p className="text-gray-400 mb-6">Perfect for solo developers and small teams</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Basic SDK access</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>5 agent deployments</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Community support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Basic compute allocation</span>
                    </li>
                  </ul>
                  <Button variant="secondary" className="w-full">
                    Request Access
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={600}>
                <div className="bg-gradient-to-b from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/30 relative">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      RECOMMENDED
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Professional</h4>
                  <p className="text-gray-400 mb-6">For growing teams and production apps</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Full SDK + APIs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Unlimited agents</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Advanced compute</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>A2A/MCP protocols</span>
                    </li>
                  </ul>
                  <Button variant="gradient" className="w-full bg-gradient-to-r from-cyan-500 to-blue-500">
                    Request Access
                  </Button>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={800}>
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                  <h4 className="text-2xl font-bold mb-4">Enterprise</h4>
                  <p className="text-gray-400 mb-6">Custom solutions for large organizations</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>White-label solutions</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>Dedicated support</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <span className="text-green-400">✓</span>
                      <span>On-premise deployment</span>
                    </li>
                  </ul>
                  <Button variant="secondary" className="w-full">
                    Contact Sales
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Developer Signup */}
        <section className="py-24">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-4xl font-bold mb-8">
                  Start Building with Agents
                </h3>
                <p className="text-xl text-gray-400 mb-12">
                  Join the developer community building the next generation of AI applications. 
                  Get early access to tools, APIs, and infrastructure.
                </p>

                <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Developer Name"
                        className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      />
                    </div>
                    
                    <input
                      type="text"
                      placeholder="GitHub Username (optional)"
                      className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />

                    <select className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
                      <option>Indie Developer</option>
                      <option>Professional Team</option>
                      <option>Enterprise Organization</option>
                      <option>Research Institution</option>
                    </select>

                    <textarea
                      placeholder="What are you planning to build?"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-gray-600 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />

                    <Button 
                      variant="gradient" 
                      size="lg" 
                      className="w-full group bg-gradient-to-r from-cyan-500 to-blue-500"
                    >
                      <Zap className="w-5 h-5 mr-2" />
                      Request Build Credentials
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer Links */}
        <section className="py-16 border-t border-gray-800">
          <div className="container-max section-padding text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/agents-are-coming"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                ← Back to Agent Message
              </a>
              <a 
                href="/download-new-internet"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                User Portal →
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
