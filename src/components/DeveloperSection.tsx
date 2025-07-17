"use client";

import { Terminal, Code } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import MorphingBackground from "@/components/ui/MorphingBackground";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import ParticleField from "@/components/ui/ParticleField";

export default function DeveloperSection() {
  const devFeatures = [
    {
      emoji: "🔗",
      title: "GitHub Deploy Ready",
      description: "Connect your repositories and deploy agents directly from your codebase",
      code: "git push origin main\n# Auto-deploys to your.agent"
    },
    {
      emoji: "⚙️",
      title: "Agent Configs via JSON",
      description: "Define agent behavior, permissions, and integrations with simple configuration files",
      code: `{
  "agent": {
    "name": "MyAgent",
    "permissions": ["read", "write"],
    "integrations": ["email", "calendar"]
  }
}`
    },
    {
      emoji: "💻",
      title: "CLI and Web UI",
      description: "Manage your agentic infrastructure from the command line or beautiful web interface",
      code: "$ unified-ai deploy\n$ unified-ai status\n$ unified-ai logs"
    },
    {
      emoji: "🔐",
      title: "Secure APIs",
      description: "RESTful APIs with authentication, rate limiting, and comprehensive documentation",
      code: `curl -H "Authorization: Bearer $TOKEN" \\
  https://api.unified-ai.com/v1/agents`
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
            🛠 Built for Developers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Deploy from GitHub, configure with JSON, manage via CLI.
            The agentic web is developer-first from day one.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {devFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-dark-100 hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center space-x-4 mb-6">
                <div className="text-4xl">
                  {feature.emoji}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dark-900">{feature.title}</h3>
                  <p className="text-dark-600">{feature.description}</p>
                </div>
              </div>

              {/* Code Block */}
              <div className="bg-dark-900 rounded-xl p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono whitespace-pre-wrap">
                  {feature.code}
                </pre>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-dark-900 to-dark-800 rounded-2xl p-8 text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build on the Agentic Web?
            </h3>
            <p className="text-dark-200 mb-6">
              Join thousands of developers already building the future of AI-native infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#docs"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-dark-900 rounded-xl font-semibold hover:bg-dark-100 transition-colors"
              >
                <Code className="w-5 h-5 mr-2" />
                View Documentation
              </a>
              <a
                href="#api"
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-dark-900 transition-colors"
              >
                <Terminal className="w-5 h-5 mr-2" />
                API Reference
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
