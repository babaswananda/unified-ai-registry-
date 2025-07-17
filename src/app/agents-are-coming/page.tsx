"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import TypewriterText from "@/components/ui/TypewriterText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { ArrowRight, Eye, Zap, Globe } from "lucide-react";

export default function AgentsAreComingPage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden relative">
      {/* Conditional Background - Lightweight on mobile */}
      <ConditionalBackground
        intensity={0.8}
        particleCount={120}
        floatingCount={8}
        gridSize={100}
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        
        {/* Header Message */}
        <ScrollReveal direction="scale" delay={500}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8 backdrop-blur-sm">
              <span className="text-2xl">🛰️</span>
              <span className="text-cyan-400 font-medium">Transmission Received</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal direction="up" delay={800}>
          <div className="text-center mb-16 max-w-4xl">
            <h1 className="text-6xl lg:text-8xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                A Message from the
              </span>
              <br />
              <span className="text-white">AI Agents</span>
            </h1>
            
            <div className="text-2xl lg:text-3xl text-gray-300 mb-8 h-20">
              {showMessage && (
                <TypewriterText 
                  texts={[
                    "They're not just coming. They're already here.",
                    "They're not chatbots. They're compute.",
                    "Modular. Decentralized. Self-aware. Yours.",
                    "The next web isn't built on pages. It's built on agents."
                  ]}
                  speed={60}
                  deleteSpeed={30}
                  pauseDuration={3000}
                />
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Agent Matrix Visualization */}
        <ScrollReveal direction="scale" delay={1200}>
          <div className="bg-black/50 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-2xl">
            <div className="grid grid-cols-3 gap-4 mb-6">
              {[
                { emoji: "🧠", label: "Neural" },
                { emoji: "🔗", label: "Connected" },
                { emoji: "⚡", label: "Instant" },
                { emoji: "🛡️", label: "Secure" },
                { emoji: "🌐", label: "Global" },
                { emoji: "🚀", label: "Autonomous" }
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className="text-center p-4 bg-cyan-500/5 rounded-xl border border-cyan-500/10 hover:border-cyan-500/30 transition-all duration-300"
                  style={{ animationDelay: `${1400 + index * 100}ms` }}
                >
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <div className="text-cyan-400 text-sm font-medium">{item.label}</div>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <div className="text-cyan-400 font-mono text-sm mb-2">AGENT_STATUS: ACTIVE</div>
              <div className="text-gray-400 text-xs">Infrastructure: UNIFIED_AI_REGISTRY</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Sunrise Access */}
        <ScrollReveal direction="up" delay={1600}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 bg-orange-500/10 border border-orange-500/20 px-6 py-3 rounded-full mb-6 backdrop-blur-sm">
              <span className="text-2xl">🌅</span>
              <span className="text-orange-400 font-medium">Sunrise Access Opens Soon</span>
            </div>
            <p className="text-xl text-gray-300 mb-8">
              Secure your command handle in the agentic web
            </p>
          </div>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal direction="up" delay={1800}>
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <Button 
              variant="gradient" 
              size="lg" 
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-12 py-6 text-xl shadow-2xl shadow-cyan-500/25"
            >
              <Zap className="w-6 h-6 mr-3" />
              Secure Sunrise Handle
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-black/50 border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 px-12 py-6 text-xl backdrop-blur-sm"
            >
              <Eye className="w-6 h-6 mr-3" />
              View Transmission
            </Button>
          </div>
        </ScrollReveal>

        {/* Portal Links */}
        <ScrollReveal direction="up" delay={2000}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
            <a 
              href="/download-new-internet"
              className="group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">🌐</div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    download.newinternet
                  </h3>
                  <p className="text-gray-400 text-sm">For users & institutions</p>
                </div>
              </div>
            </a>
            
            <a 
              href="/download-agentic-web"
              className="group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="text-3xl">⚙️</div>
                <div>
                  <h3 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    download.agenticweb
                  </h3>
                  <p className="text-gray-400 text-sm">For developers & builders</p>
                </div>
              </div>
            </a>
          </div>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal direction="up" delay={2200}>
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-4">
              The infrastructure is live. The era has begun.
            </p>
            <a 
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              → Return to Unified AI Registry
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Ambient Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
    </main>
  );
}
