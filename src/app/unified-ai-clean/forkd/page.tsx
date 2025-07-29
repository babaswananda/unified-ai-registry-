"use client";

import { Button } from "@/components/ui/Button";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import LetterGlitch from "@/components/ui/LetterGlitch";
import ShinyText from "@/components/ui/ShinyText";

export default function ForkDPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Dark Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20"></div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        
        {/* ForkD Manifesto - Full Page */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative border-[1px] border-red-500/30 rounded-3xl p-12 bg-black/80 backdrop-blur-xl">
            <GlowingEffect
              spread={50}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={1}
            />
            
            <div className="relative z-10">
              <h1 className="text-6xl font-bold mb-8">
                🔨 ForkD: Where Builders Reclaim the Stack
              </h1>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div>
                  <ul className="space-y-4 text-xl text-left">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 text-2xl">•</span>
                      <span className="text-white">We don't wrap models. We retrain them.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 text-2xl">•</span>
                      <span className="text-white">We don't fine-tune for headlines. We fine-tune for outcomes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 text-2xl">•</span>
                      <span className="text-white">We don't subscribe. We rebuild.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3 text-2xl">•</span>
                      <span className="text-white font-bold text-xl">We don't ask permission. We fork the fucking code.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-left">
                  <h2 className="text-3xl font-bold text-red-400 mb-6">💥 The Illusion of Progress</h2>
                  <p className="text-gray-300 mb-6 text-lg">Fast but fragile. Articulate but inaccurate. Polished confusion masquerading as productivity.</p>
                  <p className="text-white font-semibold text-lg">You've been building on models trained to answer, not to solve. That ends here.</p>
                </div>
              </div>
              
              <div className="text-center border-t border-red-500/20 pt-8 mb-8">
                <h2 className="text-4xl font-bold text-orange-400 mb-6">🛠️ ForkD = Quality Control</h2>
                <p className="text-2xl text-gray-300 mb-6">While they hallucinate with confidence, we deploy with clarity.</p>
                <p className="text-2xl text-white font-bold mb-8">ForkD is the firewall. ForkD is resistance. ForkD is where builders reclaim compute.</p>
              </div>

              {/* QC on AI Block */}
              <div className="border border-red-500/30 rounded-lg p-8 bg-red-900/20 mb-8">
                <h3 className="text-3xl font-bold text-red-400 mb-4">🔍 QC on AI?</h3>
                <p className="text-xl text-white mb-4">
                  Every model deployment. Every training run. Every inference call.
                </p>
                <p className="text-lg text-red-300">
                  ForkD is the watchdog. The quality gate. The resistance against hallucinated progress.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg" 
                  className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white px-12 py-6 text-xl border-0 font-bold"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  🔥 Join the Resistance
                </Button>
                <Button 
                  size="lg" 
                  className="relative border-0 text-white bg-gradient-to-r from-red-500/20 to-orange-500/20 hover:from-red-500/30 hover:to-orange-500/30 backdrop-blur-xl px-12 py-6 text-xl transition-all duration-300"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  👁️ Access ForkD Stack
                </Button>
              </div>

              {/* Secret Message */}
              <div className="mt-12 text-center">
                <p className="text-gray-500 text-sm mb-2">You found the hidden route.</p>
                <p className="text-red-400 font-bold">Welcome to the core layer.</p>
                <p className="text-gray-600 text-xs mt-2">Share this URL only in dev circles.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
