"use client";

import ConditionalBackground from "@/components/ui/ConditionalBackground";
import MagicBento from "@/components/ui/MagicBento";

export default function ProductGrid() {

  const products = [
    {
      emoji: "📧",
      name: "AI Email",
      description: "Intelligent email management system with AI-powered sorting, automated responses, and workflow integration. Perfect for managing agent communications and business correspondence."
    },
    {
      emoji: "🏗️",
      name: "AI Architect",
      description: "Visual flow builder for creating complex agentic workflows. Drag-and-drop interface with pre-built templates, API integrations, and deployment automation."
    },
    {
      emoji: "👤",
      name: "AI Avatars",
      description: "Customizable AI personas with unique personalities, voices, and behaviors. Create branded AI representatives for customer service, sales, and user engagement."
    },
    {
      emoji: "💻",
      name: "Agent OS",
      description: "Native operating system layer that enables AI agents to interact directly with your device, applications, and files. Seamless integration with existing workflows."
    },
    {
      emoji: "⚡",
      name: "Vibe Coding",
      description: "AI-powered development environment with intelligent code completion, automated testing, and deployment pipelines. Accelerate development with AI pair programming."
    },
    {
      emoji: "🎯",
      name: "Chief Vibe Officer",
      description: "Enterprise AI culture management platform. Monitor team sentiment, optimize workflows, and maintain company culture at scale with AI-driven insights."
    },
    {
      emoji: "🏪",
      name: "MCP Marketplace",
      description: "Model Context Protocol marketplace for deploying, discovering, and monetizing AI tools and services. Connect with the global AI ecosystem."
    },
    {
      emoji: "💬",
      name: "AI Messenger",
      description: "Next-generation team communication platform with AI moderation, smart notifications, and automated workflow triggers. Replaces traditional chat tools."
    },
    {
      emoji: "📁",
      name: "AI Directory",
      description: "Decentralized directory service for AI agents and services. Make your AI tools discoverable and connect with other agents in the ecosystem."
    },
    {
      emoji: "☁️",
      name: "GPU Cloud",
      description: "High-performance computing infrastructure optimized for AI workloads. Auto-scaling, cost-effective, and pre-configured for popular AI frameworks."
    },
    {
      emoji: "📰",
      name: "AI Newsletter",
      description: "Intelligent content curation and distribution system. AI-powered newsletter creation, audience segmentation, and engagement analytics."
    },
    {
      emoji: "🏭",
      name: "AI Factory",
      description: "Rapid AI product development platform with pre-built templates, components, and deployment tools. From concept to production in minutes."
    },
    {
      emoji: "🤖",
      name: "A.I.V.A.",
      description: "Advanced Intelligent Virtual Assistant platform. Sophisticated AI companion with emotional intelligence, learning capabilities, and multi-modal interaction."
    }
  ];

  return (
    <section id="features" className="py-24 bg-black text-white relative overflow-hidden z-10">
      {/* Conditional Background - Lightweight on mobile */}
      <ConditionalBackground
        intensity={0.8}
        particleCount={100}
        floatingCount={0}
        gridSize={100}
      />
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4 animate-slide-up" style={{ animationDelay: "200ms", animationDuration: "800ms" }}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            What You're Getting Access To
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Your Agentic Handle Powers the Complete Unified AI Suite
          </p>
        </div>

        {/* Product Grid with MagicBento */}
        <div className="mb-12">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={0}
            glowColor="34, 211, 238" // Bright cyan color to match the theme
            cardData={products.map(product => ({
              label: product.emoji,
              title: product.name,
              description: product.description,
              color: "rgba(0, 0, 0, 0.5)" // Dark background to match the theme
            }))}
          />
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-cyan-900/20 to-blue-900/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-cyan-500/20 text-white">
          <p className="text-lg mb-4">
            Every domain registered gets access to all of the above — as they unlock.
          </p>
          <p className="text-gray-300">
            Register now to secure founding tier benefits and roadmap access.
          </p>
        </div>
      </div>
    </section>
  );
}
