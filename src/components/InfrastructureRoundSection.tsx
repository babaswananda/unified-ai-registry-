"use client";

import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function InfrastructureRoundSection() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden border-b border-red-500/20">
      {/* Background Effects */}
      <ConditionalBackground
        intensity={0.8}
        particleCount={100}
        floatingCount={0}
        gridSize={100}
      />

      <div className="container-max section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Alert Badge */}
          <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🏗️</span>
            <span className="text-cyan-400 font-semibold">The Agentic Stack</span>
          </div>

          {/* Main Message */}
          <div className="space-y-6 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What We're Building
            </h2>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto">
              UnifiedAI is not a service built on someone else's infrastructure—it IS the infrastructure.
              Designed for national-scale applications and entrepreneurial-scale deployments.
            </p>
          </div>

          {/* IRL Components - 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* AI-Crypto Native */}
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <div className="text-center mb-4">
                <span className="text-4xl">🧠</span>
                <h3 className="text-xl font-bold text-cyan-400 mt-2">AI-Crypto Native</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span>Fugio + AI Tokens</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span>Token-gated Access</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span>AI-native Identity</span>
                </div>
              </div>
            </div>

            {/* Structured Compute */}
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <div className="text-center mb-4">
                <span className="text-4xl">⚙️</span>
                <h3 className="text-xl font-bold text-cyan-400 mt-2">Structured Compute</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span>AI-optimized Workloads</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span>Sovereign Runtime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span>Tokenized Compute</span>
                </div>
              </div>
            </div>

            {/* Sovereign Infrastructure */}
            <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <div className="text-center mb-4">
                <span className="text-4xl">🏛️</span>
                <h3 className="text-xl font-bold text-cyan-400 mt-2">Sovereign Infrastructure</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span>National-scale Deployment</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span>Zero Big Tech Dependency</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-cyan-400">•</span>
                  <span>Full-spectrum Control</span>
                </div>
              </div>
            </div>
          </div>

          {/* Target Audience */}
          <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <span className="text-3xl">🏛️</span>
              <h3 className="text-2xl lg:text-3xl font-bold text-cyan-400">
                Only For Infrastructure Holders
              </h3>
            </div>

            <p className="text-lg text-gray-300 mb-6">
              If you're building systems that deploy, route, and govern intelligence, you're in the right place.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="space-y-3">
                <h4 className="text-cyan-400 font-semibold">Governments & Cities</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Smart systems deployment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Sovereign digital infrastructure</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-cyan-400 font-semibold">Industrial Supply Chain</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Factories & logistics modernization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>IoT & RFID integration</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-cyan-400 font-semibold">Education & Learning</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Autonomous learning systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Educational AI deployment</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-cyan-400 font-semibold">Software & AI Devs</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Digital intelligence builders</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-cyan-400">✓</span>
                    <span>Distributed AI activation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
