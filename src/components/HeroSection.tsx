"use client";

import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";


export default function HeroSection() {


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Conditional Background - Lightweight on mobile, full animations on desktop */}
      <ConditionalBackground
        intensity={0.8}
        particleCount={120}
        floatingCount={12}
        gridSize={100}
      />

      <div className="relative z-10 w-full">
        <div className="text-center space-y-8 px-4 sm:px-6 lg:px-8">
          {/* Brand Badge */}
          <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full backdrop-blur-sm mb-8 animate-scale-in" style={{ animationDelay: "400ms" }}>
            <span className="text-2xl">🚨</span>
            <span className="text-cyan-400 font-medium">UnifiedAI Is Live</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6 animate-slide-up max-w-none w-full mx-auto" style={{ animationDelay: "600ms" }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                UnifiedAI
              </div>
              <div className="text-white mb-3">
                The Global Compute<br />
                and Intelligence Grid<br />
                for the New Internet.
              </div>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
              Own your handle. Train your agent. Power your platform. Deploy anywhere.
            </p>

            <p className="text-lg font-semibold text-cyan-400 mb-8">
              Decentralized. Sovereign. Crypto-native. Operator-first.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "1000ms" }}>
            <a href="/registry">
              <Button
                variant="gradient"
                size="md"
                className="group bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-6 py-3 text-base font-semibold shadow-lg shadow-cyan-500/20"
              >
                🔐 Claim Your Handle
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>

            <Button
              variant="secondary"
              size="md"
              className="bg-black/50 border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 px-6 py-3 text-base backdrop-blur-sm"
            >
              📄 View Full Stack Deck
            </Button>

            <Button
              variant="secondary"
              size="md"
              className="bg-black/50 border border-cyan-500/30 text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 px-6 py-3 text-base backdrop-blur-sm"
            >
              🚀 Request Access
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
