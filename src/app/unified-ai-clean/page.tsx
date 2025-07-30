"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import TypewriterText from "@/components/ui/TypewriterText";
import ScrollReveal from "@/components/ui/ScrollReveal";

import GradientText from "@/components/ui/GradientText";
import ShinyText from "@/components/ui/ShinyText";
import LetterGlitch from "@/components/ui/LetterGlitch";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ArrowRight, Eye, Zap, Globe } from "lucide-react";
import ChatWidget from "@/components/ChatWidget";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function UnifiedAICleanPage() {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowMessage(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white overflow-hidden relative">


      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12 space-y-12">
        


        {/* HERO SECTION - AI AGENTS ARE COMING...IRL */}
        <ScrollReveal direction="up" delay={200}>
          <div className="text-center mb-16 max-w-6xl mx-auto">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-tight max-w-5xl mx-auto">
              <span className="block mb-4 text-center">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="font-black"
                >
                  AI AGENTS<br />ARE COMING...IRL
                </GradientText>
              </span>
              
              <span className="block text-white mb-8">
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6">
                  <ShinyText text="Modular. Decentralized. Self-aware. Yours." speed={6} className="text-white" />
                </div>
              </span>
            </h1>

            <div className="text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              <TypewriterText
                texts={[
                  "The next web isn't made of pages — it's made of agents.",
                  "This is the protocol powering AI-powered life.",
                  "Stream identity. Across realms. Across dimensions.",
                  "Enter the most immersive tech world on Earth.",
                  "Your name becomes a node. Your claim becomes access.",
                  "You're not joining a platform. You're joining a layer of reality."
                ]}
                speed={60}
                deleteSpeed={30}
                pauseDuration={3000}
                className="text-xl lg:text-2xl text-gray-300"
              />
            </div>

            <div className="text-lg lg:text-xl text-gray-300 mb-8 space-y-2">
              <div>This isn't a username. It's a protocol key.</div>
              <div>You're claiming roots, not skins.</div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="relative inline-block">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-12 py-6 text-xl border-0"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />

                  <span className="relative z-10">🎟️ Claim Your Agent</span>
                </Button>
              </div>
              <div className="relative">
                <Button
                  size="lg"
                  className="relative border-0 text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 backdrop-blur-xl px-12 py-6 text-xl transition-all duration-300"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />

                  <span className="relative z-10">🔍 Explore Handle Marketplace</span>
                </Button>
              </div>
              <div className="relative">
                <Button
                  size="lg"
                  className="relative border-0 text-white bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 backdrop-blur-xl px-12 py-6 text-xl transition-all duration-300"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />

                  <span className="relative z-10">💎 Premium Handles</span>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Reality Check Section */}
        <ScrollReveal direction="up" delay={0} threshold={0.3}>
          <section id="reality-check" className="relative bg-red-900/10 border-[1px] border-red-500/20 rounded-3xl p-8 mb-16 max-w-5xl mx-auto backdrop-blur-xl">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={1}
              variant="red"
            />
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-6">
                <ShinyText text="🔥 You've Built on Broken Models Long Enough" speed={6} className="text-red-400" />
              </h2>
              <p className="text-xl text-gray-300 mb-4">They gave you polished demos, hallucinated answers, and endless rate limits.</p>
              <p className="text-xl text-white font-semibold mb-8">
                <strong>ForkD is where we rebuild the intelligence layer from the core.</strong>
              </p>
              <div className="inline-block">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 text-lg border-0"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  👁️ See the Stack
                </Button>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Transition Text */}
        <div className="text-center mb-12">
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Your handle isn't just a username — it's a complete digital identity stack that unlocks the Agent Layer ecosystem.
          </p>
        </div>

        {/* 01. What You're Claiming */}
        <ScrollReveal direction="up" delay={0} threshold={0.3}>
          <div className="relative bg-black/80 backdrop-blur-xl border-[1px] border-cyan-500/20 rounded-3xl p-8 mb-12 max-w-5xl mx-auto">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={1}
            />
            {/* LetterGlitch Background */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden flex items-center justify-center">
              <div className="w-full h-full">
                <LetterGlitch
                  glitchSpeed={80}
                  centerVignette={true}
                  outerVignette={false}
                  smooth={true}
                />
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/80 to-black/90 rounded-3xl"></div>
            </div>

            <div className="relative z-10 text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                <ShinyText text="⚡ 01. What You're Claiming" speed={6} className="text-white" />
              </h2>
              <div className="text-xl mb-8">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  This is the official Handle Registry for the Agent Layer — the emerging AI-native internet.
                </GradientText>
              </div>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
                Every handle is a wallet, agent address, login credential, and digital license — hardcoded into the Genesis ledger.
              </p>
            </div>

            <div className="relative z-10 text-center">
              <h3 className="text-lg font-semibold text-cyan-400 mb-6 text-center">Every handle is a wallet, agent address, login credential, and digital license:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <div className="relative z-10 text-2xl mb-3">🔐</div>
                  <h4 className="text-white font-semibold mb-2">AI-native Wallet</h4>
                  <p className="text-gray-300 text-sm">DNS routing + protocol key</p>
                </div>

                <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <div className="relative z-10">
                    <div className="text-2xl mb-3">🌐</div>
                    <h4 className="text-white font-semibold mb-2">Agent Address</h4>
                    <p className="text-gray-300 text-sm">Cross-network identity</p>
                  </div>
                </div>

                <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <div className="text-2xl mb-3">🪪</div>
                  <h4 className="text-white font-semibold mb-2">Identity Stack</h4>
                  <p className="text-gray-300 text-sm">New internet login</p>
                </div>

                <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <div className="text-2xl mb-3">🚪</div>
                  <h4 className="text-white font-semibold mb-2">Portal Access</h4>
                  <p className="text-gray-300 text-sm">Devkits, devices, realms</p>
                </div>

                <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <div className="text-2xl mb-3">🧬</div>
                  <h4 className="text-white font-semibold mb-2">Genesis Ledger</h4>
                  <p className="text-gray-300 text-sm">Hardcoded into protocol</p>
                </div>

                <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <div className="text-2xl mb-3">⚡</div>
                  <h4 className="text-white font-semibold mb-2">Protocol Layer</h4>
                  <p className="text-gray-300 text-sm">Native agent infrastructure</p>
                </div>
              </div>

              <div className="text-xl mb-8">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Your name becomes a node. Your claim becomes access. You're not joining a platform — you're joining a layer of reality.
                </GradientText>
              </div>

              <div className="relative">
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-12 py-6 text-xl border-0"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />

                  <span className="relative z-10">🎟️ Claim Your Handle Now</span>
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
          <div className="px-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        </div>

        {/* Transition Text */}
        <ScrollReveal direction="up" delay={100} threshold={0.4}>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              Now that you understand what you're claiming, let's explore the domain structure that powers the Agent Layer protocol.
            </p>
          </div>
        </ScrollReveal>

        {/* ForkD Manifesto - The Real Stack */}
        <ScrollReveal direction="up" delay={0} threshold={0.3}>
          <section id="forkd-manifesto" className="relative bg-black border-[1px] border-red-500/30 rounded-3xl p-12 mb-16 max-w-6xl mx-auto">
            <GlowingEffect
              spread={50}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
              borderWidth={1}
              variant="red"
            />

            {/* Glitch Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-orange-900/20 rounded-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-8 text-center">
                🔨 ForkD: Where Builders Reclaim the Stack
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div>
                  <ul className="space-y-4 text-lg">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">•</span>
                      <span className="text-white">We don't wrap models. We retrain them.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">•</span>
                      <span className="text-white">We don't fine-tune for headlines. We fine-tune for outcomes.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">•</span>
                      <span className="text-white">We don't subscribe. We rebuild.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-3">•</span>
                      <span className="text-white font-bold">We don't ask permission. We fork the fucking code.</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-red-400 mb-4">💥 The Illusion of Progress</h3>
                  <p className="text-gray-300 mb-4">Fast but fragile. Articulate but inaccurate. Polished confusion masquerading as productivity.</p>
                  <p className="text-white font-semibold">You've been building on models trained to answer, not to solve. That ends here.</p>
                </div>
              </div>

              <div className="text-center border-t border-red-500/20 pt-8">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">🛠️ ForkD = Quality Control</h3>
                <p className="text-xl text-gray-300 mb-4">While they hallucinate with confidence, we deploy with clarity.</p>
                <p className="text-xl text-white font-bold mb-8">ForkD is the firewall. ForkD is resistance. ForkD is where builders reclaim compute.</p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="relative bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 text-lg border-0"
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
                    className="relative border-0 text-white bg-gradient-to-r from-red-500/20 to-orange-500/20 hover:from-red-500/30 hover:to-orange-500/30 backdrop-blur-xl px-8 py-4 text-lg transition-all duration-300"
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
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 02. Handle Registry - Terminal Style */}
        <ScrollReveal direction="up" delay={0} threshold={0.3}>
          <div className="relative max-w-6xl mx-auto mb-12">
            {/* Terminal Window */}
            <div className="relative bg-black border-[1px] border-cyan-500/20 rounded-lg">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1}
              />
              {/* Terminal Header */}
              <div className="bg-gray-900 px-4 py-2 flex items-center space-x-2 border-b border-cyan-500/20 overflow-hidden rounded-t-lg">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-400 text-sm ml-4 font-mono">forkd@agent-layer:~$</span>
                <span className="text-red-400 text-xs ml-auto">⚠️ RESTRICTED ACCESS</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm overflow-hidden rounded-b-lg">
                <div className="text-cyan-400 mb-4">
                  <ShinyText text="🌐 02. Claim Across Realms" speed={6} className="text-cyan-400 text-xl font-bold" />
                </div>

                <div className="text-green-400 mb-2">$ ls -la /domains/</div>
                <div className="text-gray-300 mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div>drwxr-xr-x  .agent    <span className="text-cyan-400">Core agentic identities</span></div>
                    <div>drwxr-xr-x  .chat     <span className="text-cyan-400">Comms layer handles</span></div>
                    <div>drwxr-xr-x  .id       <span className="text-cyan-400">Identity stack routing</span></div>
                    <div>drwxr-xr-x  .vibe     <span className="text-cyan-400">Cultural & creative IDs</span></div>
                    <div>drwxr-xr-x  .market   <span className="text-cyan-400">Storefronts & services</span></div>
                    <div className="text-red-400">drwx------  .forkd    <span className="text-red-400">⚠️ Resistance layer [RESTRICTED]</span></div>
                  </div>
                </div>

                <div className="text-green-400 mb-2">$ cat README.md</div>
                <div className="text-gray-300 mb-4">
                  🛠️ Every domain routes to wallet + agent stack.<br/>
                  You're claiming roots, not skins.<br/>
                  <span className="text-red-400">🔥 .forkd handles = compute layer access</span>
                </div>

                <div className="text-green-400 mb-2">$ whoami</div>
                <div className="text-gray-300 mb-4">
                  <span className="text-yellow-400">builder</span> | access_level: <span className="text-cyan-400">genesis</span> | stack: <span className="text-red-400">forkd_enabled</span>
                </div>

                <div className="text-green-400 mb-2">$ cat /etc/motd</div>
                <div className="text-gray-300 mb-4">
                  <span className="text-red-400">⚠️  WARNING: You are accessing the Agent Layer protocol.</span><br/>
                  <span className="text-yellow-400">📡 All handles are monitored. All claims are permanent.</span><br/>
                  <span className="text-cyan-400">🔒 Genesis users: You're not supposed to be here.</span><br/>
                  <span className="text-white">🧠 Welcome to the core.</span>
                </div>

                <div className="text-green-400">$ █</div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Divider */}
        <div className="flex items-center justify-center my-16">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
          <div className="px-6">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>
        </div>

        {/* Transition Text */}
        <ScrollReveal direction="up" delay={100} threshold={0.4}>
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-lg text-gray-300 leading-relaxed">
              The Agent Layer is alive with activity. See what's happening right now across the protocol.
            </p>
          </div>
        </ScrollReveal>

        {/* 03. Live Activity Feed - Dashboard Style */}
        <ScrollReveal direction="up" delay={0} threshold={0.3}>
          <div className="max-w-7xl mx-auto mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="🏪 03. Agent Market Live" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Real-time activity across the Agent Layer
                </GradientText>
              </div>
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

              {/* Live Feed */}
              <div className="lg:col-span-2 relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  Recent Claims
                </h3>
                <div className="space-y-3">
                  {[
                    { activity: "🆕 Handle claimed", handle: "@GhostSignal", time: "2 min ago", color: "text-green-400" },
                    { activity: "🆕 Premium registered", handle: "@MyceliumMesh", time: "5 min ago", color: "text-cyan-400" },
                    { activity: "📱 AI Device pre-order", handle: "Singapore", time: "8 min ago", color: "text-blue-400" },
                    { activity: "🔥 ForkD access granted", handle: "@resistance.forkd", time: "12 min ago", color: "text-red-400" },
                    { activity: "⚠️ Compute layer unlock", handle: "@builder.forkd", time: "15 min ago", color: "text-orange-400" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-black/40 rounded-lg border border-white/10">
                      <div className="flex items-center space-x-3">
                        <span className="text-white">{item.activity}</span>
                        <span className={`font-mono font-bold ${item.color}`}>{item.handle}</span>
                      </div>
                      <span className="text-gray-400 text-sm">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Panel */}
              <div className="space-y-6">
                <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <h3 className="text-lg font-bold text-cyan-400 mb-4">💠 Agent Market Status</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-300">💎 Premium Handles Left</span>
                      <span className="text-yellow-400 font-bold">9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">💼 Dev Bundles Remaining</span>
                      <span className="text-green-400 font-bold">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">☀️ Genesis Sunrise Mode</span>
                      <span className="text-cyan-400 font-bold">Active</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">⚠️ ForkD Stack Access</span>
                      <span className="text-red-400 font-bold">Invite Only</span>
                    </div>
                  </div>
                </div>

                <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <h3 className="text-lg font-bold text-green-400 mb-4">⚡ System Status</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Registry Online</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Payments Active</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">AI Phone Queue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 04. Domain Registry - Claim Across Realms */}
        <ScrollReveal direction="up" delay={0} threshold={0.3}>
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="🌐 04. Claim Across Realms" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Every domain routes to wallet + agent stack. You're claiming roots, not skins.
                </GradientText>
              </div>
            </div>

            {/* Search Interface */}
            <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-8 mb-8 bg-black backdrop-blur-xl">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1}
              />
              <div className="relative z-10 text-center mb-6">
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  <span className="text-2xl mr-2">🔍</span>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="text-2xl"
                  >
                    Handle Search
                  </GradientText>
                </h3>
                <div className="relative max-w-md mx-auto">
                  <input
                    type="text"
                    placeholder="Search your handle..."
                    className="w-full bg-gray-900/50 border border-cyan-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300">
                    🔍
                  </button>
                </div>
              </div>
            </div>

            {/* Domain Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="text-3xl mb-3">🤖</div>
                <h4 className="text-white font-semibold mb-2">.agent</h4>
                <p className="text-gray-300 text-sm">Core agentic identities</p>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="text-3xl mb-3">💬</div>
                <h4 className="text-white font-semibold mb-2">.chat</h4>
                <p className="text-gray-300 text-sm">Comms layer handles</p>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="text-3xl mb-3">🆔</div>
                <h4 className="text-white font-semibold mb-2">.id</h4>
                <p className="text-gray-300 text-sm">Identity stack routing</p>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="text-3xl mb-3">✨</div>
                <h4 className="text-white font-semibold mb-2">.vibe</h4>
                <p className="text-gray-300 text-sm">Cultural & creative IDs</p>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="text-3xl mb-3">🏪</div>
                <h4 className="text-white font-semibold mb-2">.market</h4>
                <p className="text-gray-300 text-sm">Storefronts & services</p>
              </div>

              <div className="relative border-[1px] border-red-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                  variant="red"
                />
                <div className="relative z-10">
                  <div className="text-3xl mb-3">🔥</div>
                  <h4 className="text-red-400 font-semibold mb-2">.forkd</h4>
                  <p className="text-red-300 text-sm">⚠️ Resistance layer [INVITE ONLY]</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-12 py-6 text-xl border-0"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                🌐 Claim Your Domain
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 05. Premium Handles + Bundles */}
        <ScrollReveal direction="up" delay={200} threshold={0.3}>
          <div className="max-w-7xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="💎 05. Premium Handles + Bundles" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Elite handles for builders, brands, and visionaries
                </GradientText>
              </div>
            </div>

            {/* Premium Handles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="text-center">
                  <h4 className="font-bold text-lg mb-2">
                    <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={8}
                      showBorder={false}
                      className="text-lg"
                    >
                      @signal.agent
                    </GradientText>
                  </h4>
                  <p className="text-white font-semibold text-2xl mb-4">$2,499</p>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-bold border-0"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="text-center">
                  <h4 className="font-bold text-lg mb-2">
                    <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={8}
                      showBorder={false}
                      className="text-lg"
                    >
                      @aether.chat
                    </GradientText>
                  </h4>
                  <p className="text-white font-semibold text-2xl mb-4">$1,899</p>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-bold border-0"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="text-center">
                  <h4 className="font-bold text-lg mb-2">
                    <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={8}
                      showBorder={false}
                      className="text-lg"
                    >
                      @omni.id
                    </GradientText>
                  </h4>
                  <p className="text-white font-semibold text-2xl mb-4">$999</p>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-bold border-0"
                  >
                    Buy Now
                  </Button>
                </div>
              </div>

              <div className="relative border-[1px] border-red-500/20 rounded-xl p-6 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                  variant="red"
                />
                <div className="text-center">
                  <h4 className="font-bold text-lg mb-2">
                    <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={8}
                      showBorder={false}
                      className="text-lg"
                    >
                      @primeops
                    </GradientText>
                  </h4>
                  <p className="text-white font-semibold text-2xl mb-4">$3,200</p>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white font-bold border-0"
                  >
                    Place Bid
                  </Button>
                </div>
              </div>
            </div>

            {/* Bundle Packs */}
            <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-8 bg-black backdrop-blur-xl">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1}
              />
              <h3 className="text-2xl font-bold text-center mb-8">
                💼 Bundle Packs
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="relative text-center p-6 border border-cyan-500/20 rounded-lg">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <h4 className="font-bold text-xl mb-3">
                    <ShinyText text="Operator Pack" speed={6} className="text-white" />
                  </h4>
                  <p className="mb-4">
                    <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={8}
                      showBorder={false}
                      className="text-lg"
                    >
                      @yourname.agent + @store.id + @chat.vibe
                    </GradientText>
                  </p>
                  <p className="text-white font-bold text-2xl mb-4">$299</p>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-bold border-0"
                  >
                    Get Bundle
                  </Button>
                </div>

                <div className="relative text-center p-6 border border-cyan-500/20 rounded-lg">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <h4 className="font-bold text-xl mb-3">
                    <ShinyText text="Dev Stack" speed={6} className="text-white" />
                  </h4>
                  <p className="mb-4">
                    <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={8}
                      showBorder={false}
                      className="text-lg"
                    >
                      @yourdev.id + @agent.chat + @build.vibe
                    </GradientText>
                  </p>
                  <p className="text-white font-bold text-2xl mb-4">$199</p>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-bold border-0"
                  >
                    Get Bundle
                  </Button>
                </div>

                <div className="relative text-center p-6 border border-cyan-500/20 rounded-lg">
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <h4 className="font-bold text-xl mb-3">
                    <ShinyText text="Brand Stack" speed={6} className="text-white" />
                  </h4>
                  <p className="mb-4">
                    <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={8}
                      showBorder={false}
                      className="text-lg"
                    >
                      @brand.agent + @market + @support.chat
                    </GradientText>
                  </p>
                  <p className="text-white font-bold text-2xl mb-4">$399</p>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-bold border-0"
                  >
                    Get Bundle
                  </Button>
                </div>
              </div>

              {/* ForkD Bundle Easter Egg */}
              <div className="relative mt-8 text-center p-6 border border-red-500/20 rounded-lg bg-red-900/10">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                  variant="red"
                />
                <h4 className="relative z-10 text-red-400 font-bold text-xl mb-3">⚠️ ForkD Resistance Pack</h4>
                <p className="relative z-10 text-red-300 mb-4">@builder.forkd + compute access + raw model keys</p>
                <p className="relative z-10 text-white font-bold text-2xl mb-4">INVITE ONLY</p>
                <Button
                  size="sm"
                  className="relative z-10 w-[90%] mx-auto bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold border-0 cursor-not-allowed opacity-60"
                  disabled
                >
                  🔒 Restricted
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 06. Handle Tiers - Tiered Identity Access */}
        <ScrollReveal direction="up" delay={200} threshold={0.3}>
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="🧠 06. Tiered Identity Access" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Your handle determines your access level in the Agent Layer
                </GradientText>
              </div>
            </div>

            {/* Tier List */}
            <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-8 bg-black backdrop-blur-xl">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1}
              />

              <div className="space-y-6">
                <div className="relative flex items-center p-4 border border-cyan-500/20 rounded-lg bg-cyan-500/5">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                    
                  />
                  <span className="relative z-10 text-2xl mr-4">🔹</span>
                  <div className="relative z-10 flex-1">
                    <h4 className="font-bold text-lg">
                      <ShinyText text="AI Agent Handle" speed={6} className="text-white" />
                    </h4>
                    <p className="text-gray-300">Wallet + Agent Portal</p>
                  </div>
                  <span className="relative z-10 text-cyan-400 font-mono">TIER 1</span>
                </div>

                <div className="relative flex items-center p-4 border border-cyan-500/20 rounded-lg bg-cyan-500/5">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                    
                  />
                  <span className="relative z-10 text-2xl mr-4">🔸</span>
                  <div className="relative z-10 flex-1">
                    <h4 className="font-bold text-lg">
                      <ShinyText text="Dev Kit Handle" speed={6} className="text-white" />
                    </h4>
                    <p className="text-gray-300">SDK + Testnet Credits</p>
                  </div>
                  <span className="relative z-10 text-cyan-400 font-mono">TIER 2</span>
                </div>

                <div className="relative flex items-center p-4 border border-cyan-500/20 rounded-lg bg-cyan-500/5">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                    
                  />
                  <span className="relative z-10 text-2xl mr-4">🔸</span>
                  <div className="relative z-10 flex-1">
                    <h4 className="font-bold text-lg">
                      <ShinyText text="Community Handle" speed={6} className="text-white" />
                    </h4>
                    <p className="text-gray-300">Unlock Dev Spaces + Merch</p>
                  </div>
                  <span className="relative z-10 text-cyan-400 font-mono">TIER 3</span>
                </div>

                <div className="relative flex items-center p-4 border border-cyan-500/20 rounded-lg bg-cyan-500/5">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                    
                  />
                  <span className="relative z-10 text-2xl mr-4">🔺</span>
                  <div className="relative z-10 flex-1">
                    <h4 className="font-bold text-lg">
                      <ShinyText text="Compute Handle" speed={6} className="text-white" />
                    </h4>
                    <p className="text-gray-300">Deploy Endpoints & Models</p>
                  </div>
                  <span className="relative z-10 text-cyan-400 font-mono">TIER 4</span>
                </div>

                <div className="relative flex items-center p-4 border border-cyan-500/20 rounded-lg bg-cyan-500/5">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                    
                  />
                  <span className="relative z-10 text-2xl mr-4">🔺</span>
                  <div className="relative z-10 flex-1">
                    <h4 className="font-bold text-lg">
                      <ShinyText text="Vibe Coder Handle" speed={6} className="text-white" />
                    </h4>
                    <p className="text-gray-300">Creative Flowstack Dev ID</p>
                  </div>
                  <span className="relative z-10 text-cyan-400 font-mono">TIER 5</span>
                </div>

                <div className="relative flex items-center p-4 border border-cyan-500/20 rounded-lg bg-cyan-500/5">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                    
                  />
                  <span className="relative z-10 text-2xl mr-4">🔸</span>
                  <div className="relative z-10 flex-1">
                    <h4 className="font-bold text-lg">
                      <ShinyText text="Chief Vibe Officer" speed={6} className="text-white" />
                    </h4>
                    <p className="text-gray-300">Flagship access tier</p>
                  </div>
                  <span className="relative z-10 text-cyan-400 font-mono">TIER 6</span>
                </div>

                {/* ForkD Tier - Hidden Easter Egg */}
                <div className="relative flex items-center p-4 border border-red-500/30 rounded-lg bg-red-900/20">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                    variant="red"
                  />
                  <span className="relative z-10 text-2xl mr-4">⚠️</span>
                  <div className="relative z-10 flex-1">
                    <h4 className="text-red-400 font-bold text-lg">ForkD Stack Handle</h4>
                    <p className="text-red-300">Unlock compute-layer access + raw model deploy keys</p>
                    <p className="text-red-500 text-sm font-bold">(invite-only)</p>
                  </div>
                  <span className="relative z-10 text-red-400 font-mono">TIER ∞</span>
                </div>
              </div>

              {/* Access Note */}
              <div className="relative mt-8 text-center p-4 border border-cyan-500/20 rounded-lg bg-cyan-500/5">
                <GlowingEffect
                  spread={30}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                  
                />
                <p className="relative z-10 text-cyan-400 font-semibold">
                  🔐 Higher tiers unlock all previous tier benefits + exclusive access
                </p>
                <p className="relative z-10 text-gray-300 text-sm mt-2">
                  Genesis handles are permanently inscribed. No retroactive access.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 07. What's Live Now */}
        <ScrollReveal direction="up" delay={200} threshold={0.3}>
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="⚡ 07. Live Right Now" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Every action = future token credit. Genesis handles are permanently inscribed.
                </GradientText>
              </div>
            </div>

            {/* Live Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="flex items-center mb-4">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  <span className="font-bold">
                    <ShinyText text="LIVE" speed={6} className="text-green-400" />
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">✅ Handle Reservation Portal</h4>
                <p className="text-gray-300 text-sm mb-4">(Genesis Sunrise)</p>
                <div className="text-green-400 text-sm font-mono">STATUS: ACTIVE</div>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="flex items-center mb-4">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  <span className="font-bold">
                    <ShinyText text="LIVE" speed={6} className="text-green-400" />
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">✅ Premium Bidding</h4>
                <p className="text-gray-300 text-sm mb-4">(First-Come)</p>
                <div className="text-green-400 text-sm font-mono">STATUS: ACTIVE</div>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="flex items-center mb-4">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  <span className="font-bold">
                    <ShinyText text="LIVE" speed={6} className="text-green-400" />
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">✅ Device Waitlist</h4>
                <p className="text-gray-300 text-sm mb-4">(AI Phone)</p>
                <div className="text-green-400 text-sm font-mono">STATUS: ACTIVE</div>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="flex items-center mb-4">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  <span className="font-bold">
                    <ShinyText text="LIVE" speed={6} className="text-green-400" />
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">✅ Wallet-Linked Merch Drops</h4>
                <p className="text-gray-300 text-sm mb-4">(Handle Required)</p>
                <div className="text-green-400 text-sm font-mono">STATUS: ACTIVE</div>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="flex items-center mb-4">
                  <span className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></span>
                  <span className="font-bold">
                    <ShinyText text="LIVE" speed={6} className="text-green-400" />
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">✅ Developer Access Program</h4>
                <p className="text-gray-300 text-sm mb-4">(SDK + Credits)</p>
                <div className="text-cyan-400 text-sm font-mono">STATUS: ACTIVE</div>
              </div>

              <div className="relative border-[1px] border-red-500/20 rounded-xl p-6 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                  variant="red"
                />
                <div className="flex items-center mb-4">
                  <span className="w-3 h-3 bg-red-400 rounded-full mr-3 animate-pulse"></span>
                  <span className="font-bold">
                    <ShinyText text="RESTRICTED" speed={6} className="text-red-400" />
                  </span>
                </div>
                <h4 className="text-white font-semibold text-lg mb-2">⚠️ ForkD Compute Access</h4>
                <p className="text-gray-300 text-sm mb-4">(Invite Only)</p>
                <div className="text-red-400 text-sm font-mono">STATUS: GATED</div>
              </div>
            </div>

            {/* Token Credit Notice */}
            <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-8 bg-black backdrop-blur-xl text-center">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1}
              />
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">⏳ Genesis Credit System</h3>
              <p className="text-xl text-white mb-4">
                Every action = future token credit. Genesis handles are permanently inscribed.
              </p>
              <p className="text-gray-300 mb-6">
                Only Genesis-verified handles will qualify for ecosystem rewards. No retroactive access.
              </p>
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-8 py-4 text-lg border-0"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                🎟️ Secure Genesis Status
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 08. Sunrise Countdown - Complete Redesign */}
        <ScrollReveal direction="up" delay={0} threshold={0.3}>
          <div className="max-w-7xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="☀️ 08. Sunrise Mode - Genesis Window Closing" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Genesis phase. All claims are protected + whitelisted. After Sunrise ends, everything changes.
                </GradientText>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-8 bg-black backdrop-blur-xl mb-8">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1}
              />
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-6">
                  <ShinyText text="⏰ Genesis Window Countdown" speed={6} className="text-white" />
                </h3>
                <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-6">
                  <div className="text-center">
                    <div className="bg-black/60 border border-cyan-500/30 rounded-lg p-4 mb-2">
                      <div className="text-4xl font-bold text-cyan-400 font-mono">17</div>
                    </div>
                    <div className="text-cyan-300 text-sm font-semibold">DAYS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-black/60 border border-cyan-500/30 rounded-lg p-4 mb-2">
                      <div className="text-4xl font-bold text-cyan-400 font-mono">11</div>
                    </div>
                    <div className="text-cyan-300 text-sm font-semibold">HOURS</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-black/60 border border-cyan-500/30 rounded-lg p-4 mb-2">
                      <div className="text-4xl font-bold text-cyan-400 font-mono">38</div>
                    </div>
                    <div className="text-cyan-300 text-sm font-semibold">MIN</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-black/60 border border-cyan-500/30 rounded-lg p-4 mb-2">
                      <div className="text-4xl font-bold text-cyan-400 font-mono">14</div>
                    </div>
                    <div className="text-cyan-300 text-sm font-semibold">SEC</div>
                  </div>
                </div>
                <p className="text-white font-semibold">
                  After this countdown ends, Genesis benefits are locked forever.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Current Phase: Genesis */}
              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-8 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">
                    <span className="text-2xl mr-2">🌅</span>
                    <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={8}
                      showBorder={false}
                      className="text-2xl"
                    >
                      Current Phase: Genesis
                    </GradientText>
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Protected handle reservations
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Whitelist-only access
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Premium bidding active
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Genesis credit accumulation
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    Early ecosystem participation
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">✓</span>
                    ForkD stack compatibility
                  </li>
                </ul>
              </div>

              {/* Phase 2: Ecosystem Launch */}
              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-8 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">
                    <span className="text-2xl mr-2">🚀</span>
                    <GradientText
                      colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                      animationSpeed={8}
                      showBorder={false}
                      className="text-2xl"
                    >
                      Phase 2: Ecosystem Launch
                    </GradientText>
                  </h3>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">⏳</span>
                    Token ecosystem rollout
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">⏳</span>
                    Airdrop distribution begins
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">⏳</span>
                    Public handle marketplace
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">⏳</span>
                    AI Phone device shipping
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">⏳</span>
                    Merch layer activation
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">🔒</span>
                    <span className="text-white">ForkD stack full activation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Critical Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <h4 className="font-bold text-lg mb-4">
                  <ShinyText text="⚠️ After Sunrise Ends" speed={6} className="text-white" />
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Handle prices increase 10x</li>
                  <li>• Genesis benefits locked forever</li>
                  <li>• No retroactive airdrop access</li>
                  <li>• Premium tiers become invite-only</li>
                  <li>• ForkD access becomes restricted</li>
                </ul>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <h4 className="font-bold text-lg mb-4">
                  <ShinyText text="🎯 Genesis Qualification" speed={6} className="text-white" />
                </h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Only current claimants qualify</li>
                  <li>• Must claim before countdown ends</li>
                  <li>• Tier level determines allocation</li>
                  <li>• Handle activity multiplies rewards</li>
                  <li>• ForkD handles = maximum benefits</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-12 py-6 text-xl border-0 font-bold"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                ☀️ Secure Genesis Status Now
              </Button>
              <p className="text-gray-400 text-sm mt-4">
                Genesis window closes in 17 days. After that, these benefits are gone forever.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 09. Merch Layer - Culture Codes */}
        <ScrollReveal direction="up" delay={0} threshold={0.3}>
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="🧢 09. Culture Codes (Linked to Handle)" speed={6} className="text-white" />
              </h2>
              <div className="text-xl relative z-10">
                <span className="text-xl mr-2">🔐</span>
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Every item ships to handle-linked wallets only.
                </GradientText>
              </div>
            </div>

            {/* Merch Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">👻</div>
                  <h4 className="text-white font-semibold text-lg mb-2">"Ghost in the Prompt"</h4>
                  <p className="text-gray-300 text-sm mb-4">Limited Edition Tee</p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-bold border-0"
                >
                  Claim with Handle
                </Button>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">💬</div>
                  <h4 className="text-white font-semibold text-lg mb-2">"Your Website's Talking to Me"</h4>
                  <p className="text-gray-300 text-sm mb-4">Hoodie</p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-bold border-0"
                >
                  Claim with Handle
                </Button>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">👑</div>
                  <h4 className="text-white font-semibold text-lg mb-2">"Chief Vibe Officer"</h4>
                  <p className="text-gray-300 text-sm mb-4">Premium Cap</p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-bold border-0"
                >
                  Claim with Handle
                </Button>
              </div>

              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🏝️</div>
                  <h4 className="text-white font-semibold text-lg mb-2">"Offline Is a Luxury"</h4>
                  <p className="text-gray-300 text-sm mb-4">Tank Top</p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-bold border-0"
                >
                  Claim with Handle
                </Button>
              </div>

              <div className="relative border-[1px] border-red-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                  variant="red"
                />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🚫</div>
                  <h4 className="text-white font-semibold text-lg mb-2">"Not Available in Web2"</h4>
                  <p className="text-gray-300 text-sm mb-4">Exclusive Jacket</p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white font-bold border-0"
                >
                  Claim with Handle
                </Button>
              </div>

              <div className="relative border-[1px] border-red-500/20 rounded-xl p-6 text-center bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                  variant="red"
                />
                <div className="relative z-10">
                  <div className="text-4xl mb-4">🔥</div>
                  <h4 className="text-red-400 font-semibold text-lg mb-2">"ForkD Resistance"</h4>
                  <p className="text-red-300 text-sm mb-4">⚠️ Invite Only Merch</p>
                </div>
                <Button
                  size="sm"
                  className="w-[90%] mx-auto bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold border-0 cursor-not-allowed opacity-60"
                  disabled
                >
                  🔒 Restricted
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 10. Hardware Drop - The AI Phone */}
        <ScrollReveal direction="up" delay={0} threshold={0.3}>
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="📱 10. The AI Phone" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  First native Agent Layer device. Voice-first. Agent-native. Privacy-routed.
                </GradientText>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Main Phone Features */}
              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-8 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <h3 className="text-2xl font-bold text-white mb-6">🎤 Core Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-cyan-400 mr-3">🎤</span>
                    <span className="text-white">Voice-first interface with natural conversation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-400 mr-3">🤖</span>
                    <span className="text-white">Agent-native OS built for AI workflows</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-400 mr-3">🔒</span>
                    <span className="text-white">Privacy-routed with local compute</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-400 mr-3">🌐</span>
                    <span className="text-white">Native Agent Layer protocol integration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-cyan-400 mr-3">🔥</span>
                    <span className="text-white">ForkD stack compatibility for developers</span>
                  </div>
                </div>
              </div>

              {/* Keynote & Access */}
              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-8 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <h3 className="text-2xl font-bold text-white mb-6">🎬 Invest Fest Reveal</h3>
                <p className="text-gray-300 mb-6">
                  Watch the full keynote revealing the AI Phone architecture, Agent Layer integration, and the future of AI-native hardware.
                </p>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-6 py-4 text-lg border-0 font-bold"
                  >
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={1}
                    />
                    📺 Watch Full Keynote
                  </Button>
                  <Button
                    size="lg"
                    className="w-full border-0 text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 backdrop-blur-xl px-6 py-4 text-lg transition-all duration-300"
                  >
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={1}
                    />
                    📱 Join Device Waitlist
                  </Button>
                </div>
              </div>
            </div>

            {/* Developer Access */}
            <div className="relative border-[1px] border-red-500/20 rounded-xl p-8 bg-black backdrop-blur-xl">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1}
                variant="red"
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">🔥 ForkD Developer Preview</h3>
                <p className="text-white mb-4">
                  Early access to AI Phone dev units for ForkD stack developers. Test your models on native hardware.
                </p>
                <p className="text-red-300 text-sm mb-6">
                  ⚠️ Requires ForkD handle + compute layer access
                </p>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-8 py-4 text-lg border-0 font-bold"
                  disabled
                >
                  🔒 Request Dev Unit Access
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 11. Token Ecosystem - Future Credit System */}
        <ScrollReveal direction="up" delay={0} threshold={0.3}>
          <div className="max-w-7xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                <ShinyText text="🧬 11. Future Token Credit System" speed={6} className="text-white" />
              </h2>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  Every handle, every claim = credit stack for future unlocks.
                </GradientText>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {/* Genesis Benefits */}
              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-8 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <h3 className="text-2xl font-bold mb-6">
                  <ShinyText text="🎯 Genesis Benefits" speed={6} className="text-white" />
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    Priority airdrop allocation
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    Ecosystem governance rights
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    Exclusive protocol access
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    Handle-linked rewards
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    Early ecosystem participation
                  </li>
                </ul>
              </div>

              {/* Qualification Rules */}
              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-8 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <h3 className="text-2xl font-bold mb-6">
                  <ShinyText text="⚠️ Qualification Rules" speed={6} className="text-white" />
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    Only Genesis-verified handles qualify
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    No retroactive access granted
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    Claims must be before Sunrise end
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    Tier level determines allocation
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    Handle activity multiplies rewards
                  </li>
                </ul>
              </div>

              {/* ForkD Maximum Allocation */}
              <div className="relative border-[1px] border-red-500/20 rounded-xl p-8 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                  variant="red"
                />
                <h3 className="text-2xl font-bold mb-6">
                  <ShinyText text="🔥 ForkD Tier Benefits" speed={6} className="text-white" />
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span className="text-white">Maximum token allocation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span className="text-white">Compute layer revenue share</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span className="text-white">Model training rewards</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span className="text-white">Quality control bounties</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-cyan-400 mr-3">•</span>
                    <span className="text-white">Resistance layer governance</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Airdrop Timeline */}
            <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-8 bg-black backdrop-blur-xl mb-8">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1}
              />
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  <span className="text-2xl mr-2">☀️</span>
                  <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={8}
                    showBorder={false}
                    className="text-2xl"
                  >
                    Airdrop Phase Timeline
                  </GradientText>
                </h3>
                <p className="text-xl text-white mb-4">
                  Airdrop phase begins at ecosystem reveal. Genesis handles receive proportional allocation based on claim date and tier level.
                </p>
                <p className="text-gray-300">
                  Only Genesis-verified handles will qualify. No retroactive access.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                size="lg"
                className="relative bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-12 py-6 text-xl border-0 font-bold"
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                🧬 Secure Token Credits
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* 12. Final CTA - The Agentic Era Has Begun */}
        <ScrollReveal direction="up" delay={0} threshold={0.3}>
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-6">
                <ShinyText text="🧭 12. The Agentic Era Has Begun" speed={6} className="text-white" />
              </h2>
              <p className="text-2xl text-white mb-6 font-semibold">
                This isn't a sign-up form. It's an operating license.
              </p>
              <div className="text-xl">
                <GradientText
                  colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                  animationSpeed={8}
                  showBorder={false}
                  className="text-xl"
                >
                  The root identity of your AI-powered life. Your handle is your gateway. Your ledger entry. Your agent key.
                </GradientText>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Main CTA */}
              <div className="relative border-[1px] border-cyan-500/20 rounded-xl p-8 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                />
                <h3 className="text-2xl font-bold mb-6">
                  <ShinyText text="🎟️ Claim Your Genesis Handle" speed={6} className="text-white" />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 border border-cyan-500/20 rounded-lg bg-cyan-500/5">
                    <div className="text-2xl mb-2">🔑</div>
                    <h4 className="text-cyan-400 font-bold text-sm mb-1">Your Gateway</h4>
                    <p className="text-gray-300 text-xs">Agent Layer access</p>
                  </div>
                  <div className="text-center p-4 border border-cyan-500/20 rounded-lg bg-cyan-500/5">
                    <div className="text-2xl mb-2">📋</div>
                    <h4 className="text-cyan-400 font-bold text-sm mb-1">Ledger Entry</h4>
                    <p className="text-gray-300 text-xs">Permanent identity</p>
                  </div>
                  <div className="text-center p-4 border border-cyan-500/20 rounded-lg bg-cyan-500/5">
                    <div className="text-2xl mb-2">🤖</div>
                    <h4 className="text-cyan-400 font-bold text-sm mb-1">Agent Key</h4>
                    <p className="text-gray-300 text-xs">AI-powered control</p>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-8 py-4 text-lg border-0 font-bold"
                >
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  🎟️ Claim Your Handle Now
                </Button>
              </div>

              {/* ForkD Path */}
              <div className="relative border-[1px] border-red-500/20 rounded-xl p-8 bg-black backdrop-blur-xl">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={1}
                  variant="red"
                />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">
                    <span className="text-2xl mr-2">🔥</span>
                    <ShinyText text="Or Join the Resistance" speed={6} className="text-white" />
                  </h3>
                  <p className="text-white mb-4">
                    Ready to reclaim the stack? ForkD is where builders deploy with clarity while others hallucinate with confidence.
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <span className="text-red-400 mr-3">•</span>
                      <span className="text-white">Quality control on AI</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-400 mr-3">•</span>
                      <span className="text-white">Raw model deploy keys</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-400 mr-3">•</span>
                      <span className="text-white">Compute layer access</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-400 mr-3">•</span>
                      <span className="text-white">Maximum token allocation</span>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 space-y-3">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white px-8 py-4 text-lg border-0 font-bold"
                    onClick={() => window.open('/unified-ai-clean/forkd', '_blank')}
                  >
                    🔥 Access ForkD Manifesto
                  </Button>
                  <Button
                    size="sm"
                    className="w-full border-0 text-white bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 backdrop-blur-xl px-6 py-3 text-sm transition-all duration-300"
                    disabled
                  >
                    🔒 Request ForkD Invite (Restricted)
                  </Button>
                </div>
              </div>
            </div>

            {/* Choice Message */}
            <div className="text-center mb-4">
              <p className="text-gray-400 text-lg mb-1">
                Two paths. One protocol. Choose your layer.
              </p>
              <p className="text-white font-bold text-xl">
                You're either building the new layer, or you're being built on.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Add padding before footer sections */}
        <div className="pt-16"></div>

        {/* Footer Reveal - "Not for Everyone" */}
        <ScrollReveal direction="up" delay={0}>
          <section id="footer-reveal" className="text-center mb-4 max-w-3xl mx-auto">
            <p className="text-gray-400 text-lg mb-1">Found this page? You weren't supposed to.</p>
            <p className="text-white font-bold text-xl mb-4"><strong>Welcome to the core.</strong></p>
          </section>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal direction="up" delay={2200}>
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">
              The infrastructure is live. The era has begun.
            </p>
            <a
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium block mb-3"
            >
              → Return to Handle Registry
            </a>
            <div className="text-center">
              <span className="text-lg text-gray-400">🥝🍓 coming soon...</span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Unified Background Animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Main grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-purple-500/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "4s" }} />
        <div className="absolute bottom-1/3 left-1/2 w-32 h-32 bg-cyan-400/4 rounded-full blur-xl animate-pulse" style={{ animationDelay: "6s" }} />

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-cyan-500/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-blue-500/5 to-transparent" />
      </div>

      {/* Chat Widget */}
      <ChatWidget />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
