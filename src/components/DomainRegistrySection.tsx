"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Search, Globe, Zap, Brain, Code, Star, ArrowRight } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function DomainRegistrySection() {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "identity", name: "AI-native Identity & Handles", icon: Globe, count: "LIVE", color: "text-cyan-400" },
    { id: "compute", name: "Token-gated Structured Compute", icon: Zap, count: "ACTIVE", color: "text-blue-400" },
    { id: "fugio", name: "Fugio + AI Token Integration", icon: Brain, count: "NATIVE", color: "text-purple-400" },
    { id: "iaas", name: "UnifiedAI IaaS/SaaS/PaaS Suite", icon: Code, count: "FULL", color: "text-green-400" },
    { id: "sovereign", name: "Sovereign Trust Layer", icon: Star, count: "OPTIONAL", color: "text-pink-400" },
  ];

  return (
    <section id="registry" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <ConditionalBackground 
        intensity={0.6}
        particleCount={80}
        floatingCount={0}
        gridSize={120}
      />

      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-16 animate-slide-up" style={{ animationDelay: "200ms", animationDuration: "800ms" }}>
          <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">⚙️</span>
            <span className="text-cyan-400 font-semibold">Infrastructure Access</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              What You're Getting
            </span>
            <br />
            <span className="text-white">Access To</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Root-level digital infrastructure for intelligent agents and sovereign systems.
            AI-native identity, token-gated compute, and exclusive access to our full stack.
          </p>
        </div>

        {/* Search Preview */}
        <div className="max-w-4xl mx-auto mb-16 animate-slide-up" style={{ animationDelay: "400ms", animationDuration: "800ms" }}>
            <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-cyan-500/20">
              {/* Search Bar */}
              <div className="relative mb-8">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search handles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                />
              </div>

              {/* Category Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <div
                      key={category.id}
                      className="bg-black/30 backdrop-blur-sm rounded-xl p-4 border border-gray-600 hover:border-cyan-500/30 transition-all duration-200 group cursor-pointer"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Icon className={`w-5 h-5 ${category.color} group-hover:scale-110 transition-transform duration-200`} />
                        <span className="text-white font-medium text-sm">{category.name}</span>
                      </div>
                      <div className="text-right">
                        <span className={`text-lg font-bold ${category.color}`}>{category.count}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sample Handles Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  { name: "structuredcompute", category: "compute", price: 299, premium: true },
                  { name: "agentsgpt", category: "aiagent", price: 199, premium: false },
                  { name: "iaas", category: "infrastructure", price: 399, premium: true },
                  { name: "aiserver", category: "compute", price: 249, premium: true },
                  { name: "neuralprocessor", category: "compute", price: 199, premium: false },
                  { name: "quantumcompute", category: "compute", price: 499, premium: true },
                ].map((handle) => (
                  <div
                    key={handle.name}
                    className={`bg-black/30 backdrop-blur-sm rounded-xl p-4 border transition-all duration-200 hover:scale-105 ${
                      handle.premium 
                        ? "border-yellow-500/40 bg-gradient-to-br from-yellow-500/5 to-orange-500/5" 
                        : "border-gray-600 hover:border-cyan-500/30"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="text-white font-semibold">{handle.name}</h4>
                      {handle.premium && (
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        handle.category === 'compute' ? 'bg-blue-500/20 text-blue-400' :
                        handle.category === 'aiagent' ? 'bg-purple-500/20 text-purple-400' :
                        handle.category === 'infrastructure' ? 'bg-cyan-500/20 text-cyan-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {handle.category}
                      </span>
                      <span className="text-cyan-400 font-bold">${handle.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <a href="/registry">
                  <Button
                    variant="gradient"
                    size="lg"
                    className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 text-lg shadow-2xl shadow-cyan-500/25"
                  >
                    🎯 View the Full Stack
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-slide-up" style={{ animationDelay: "600ms", animationDuration: "800ms" }}>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">130+</div>
              <div className="text-gray-300">Available Handles</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-300">Compute Endpoints</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-purple-400 mb-2">$79+</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">∞</div>
              <div className="text-gray-300">Possibilities</div>
            </div>
          </div>
      </div>
    </section>
  );
}
