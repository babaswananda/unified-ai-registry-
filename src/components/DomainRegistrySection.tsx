"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Search, Globe, Zap, Brain, Code, Star, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function DomainRegistrySection() {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Handles", icon: Globe, count: 100, color: "text-cyan-400" },
    { id: "compute", name: "Compute Endpoints", icon: Zap, count: 25, color: "text-blue-400" },
    { id: "aiagent", name: "AI Agents", icon: Brain, count: 25, color: "text-purple-400" },
    { id: "developer", name: "Developer Tools", icon: Code, count: 25, color: "text-green-400" },
    { id: "vibe-coder", name: "Vibe Coders", icon: Star, count: 25, color: "text-pink-400" },
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
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
              <Globe className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Domain Registry</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Claim Your Handle
              </span>
              <br />
              <span className="text-white">In the Agentic Web</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Register structured compute endpoints, AI agent handles, and developer tools. 
              Own your piece of the autonomous internet infrastructure.
            </p>
          </div>
        </ScrollReveal>

        {/* Search Preview */}
        <ScrollReveal direction="up" delay={400}>
          <div className="max-w-4xl mx-auto mb-16">
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
                        <span className={`text-2xl font-bold ${category.color}`}>{category.count}</span>
                        <span className="text-gray-400 text-sm ml-1">handles</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sample Handles Preview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[
                  { name: "compute.ai", category: "compute", price: 299, premium: true },
                  { name: "assistant.ai", category: "aiagent", price: 99, premium: false },
                  { name: "dev.stack", category: "developer", price: 79, premium: false },
                  { name: "vibe.code", category: "vibe-coder", price: 249, premium: true },
                  { name: "neural.compute", category: "compute", price: 199, premium: false },
                  { name: "oracle.agent", category: "aiagent", price: 299, premium: true },
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
                        handle.category === 'developer' ? 'bg-green-500/20 text-green-400' :
                        'bg-pink-500/20 text-pink-400'
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
                    Browse Full Registry
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Stats Section */}
        <ScrollReveal direction="up" delay={600}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">100+</div>
              <div className="text-gray-300">Available Handles</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-gray-300">Categories</div>
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
        </ScrollReveal>
      </div>
    </section>
  );
}
