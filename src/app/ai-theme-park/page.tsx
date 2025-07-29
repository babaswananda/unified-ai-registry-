"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import TypewriterText from "@/components/ui/TypewriterText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ArrowRight, Zap, Crown, Code, Cpu, Palette, Rocket, Play, Calendar, Search, Mail, Phone, ShoppingBag } from "lucide-react";
import "./styles.css";

export default function AIThemeParkPage() {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showSundial, setShowSundial] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSundial(true), 1000);
    
    // Countdown to Invest Fest (example date)
    const targetDate = new Date("2025-08-15T10:00:00Z");
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      
      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const handlePackages = [
    {
      title: "🎭 Agent Handle",
      description: "Your AI agent identity (name.ai🌀)",
      price: "$40",
      features: ["Unique AI namespace", "Agent identity", "Basic compute access"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "🛠️ Dev Kit",
      description: "Dev handle + community access",
      price: "$75",
      features: ["Developer namespace", "Community access", "API endpoints", "Documentation"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "🧠 Compute Endpoint",
      description: "Matching compute namespace",
      price: "$30",
      features: ["Dedicated compute", "Custom endpoints", "Performance analytics"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "🎨 Vibe Coder Handle",
      description: "Custom design engine access",
      price: "$50",
      features: ["Design tools", "Custom themes", "Creative AI access"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "👑 Chief Vibe Officer",
      description: "Premium creator pass",
      price: "$100",
      features: ["All previous features", "Premium support", "Early access", "Creator tools"],
      gradient: "from-yellow-500 to-orange-500",
      popular: true
    },
    {
      title: "🚀 Vibathon Entry",
      description: "Entry to build-a-thon (includes Vibe+CVO)",
      price: "$120",
      features: ["Competition entry", "All CVO features", "Mentorship", "Prize eligibility"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Ambient Background */}
      <ConditionalBackground
        intensity={0.6}
        particleCount={80}
        floatingCount={6}
        gridSize={120}
      />

      {/* 1. Hero Section - The Gate */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6">
        {/* 3D Sundial Effect with ComfyUI Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* AI-Generated Background from ComfyUI */}
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-br from-purple-900/30 via-cyan-900/20 to-pink-900/30" />
            <div className="absolute inset-0 cyber-grid opacity-30" />
          </div>

          {showSundial && (
            <div className="relative portal-entrance">
              <div className="w-96 h-96 rounded-full border border-cyan-500/20 animate-spin-slow energy-field">
                <div className="absolute top-1/2 left-1/2 w-2 h-48 bg-gradient-to-t from-cyan-500 to-transparent transform -translate-x-1/2 -translate-y-1/2 origin-bottom rotate-45 animate-glow-pulse" />

                {/* Quantum particles around sundial */}
                <div className="quantum-particle" style={{ top: '20%', left: '30%' }} />
                <div className="quantum-particle" style={{ top: '60%', right: '25%' }} />
                <div className="quantum-particle" style={{ bottom: '30%', left: '40%' }} />
              </div>
              <GlowingEffect className="absolute inset-0 rounded-full" />

              {/* Sacred geometry overlay */}
              <div className="absolute inset-0 sacred-pattern rounded-full" />
            </div>
          )}
        </div>

        <ScrollReveal direction="scale" delay={500}>
          <div className="text-center mb-8 relative z-20">
            <h1 className="text-7xl lg:text-9xl font-bold mb-6 leading-tight">
              <span className="holographic-text animate-gradient-shift">
                THE AGENTS ARE COMING
              </span>
              <br />
              <span className="text-4xl lg:text-6xl text-white/90 font-light">
                Reserve your identity.
              </span>
              <br />
              <span className="text-4xl lg:text-6xl holographic-text animate-gradient-shift" style={{ animationDelay: '1s' }}>
                Enter the Agentic Web.
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              You don't scroll through this. You enter it.
            </p>

            {/* Countdown Bar */}
            <div className="mb-12">
              <div className="bg-black/70 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-6 max-w-md mx-auto">
                <p className="text-cyan-400 text-sm mb-2 text-center">Sunrise Phase ends in:</p>
                <div className="grid grid-cols-4 gap-4 text-center">
                  {Object.entries(countdown).map(([unit, value]) => (
                    <div key={unit}>
                      <div className="text-2xl font-bold text-white">{value}</div>
                      <div className="text-gray-400 text-xs uppercase">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <Button
                variant="gradient"
                size="lg"
                className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-8 py-4 text-lg shadow-2xl shadow-purple-500/25"
              >
                🔐 Reserve Your Handle
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="bg-black/50 border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/5 px-8 py-4 text-lg backdrop-blur-sm"
              >
                📨 Preorder AI Email
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="bg-black/50 border-2 border-pink-500/30 text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/5 px-8 py-4 text-lg backdrop-blur-sm"
              >
                📱 Join AI Phone Waitlist
              </Button>

              <Button
                disabled
                size="lg"
                className="bg-gray-600/50 border-2 border-gray-500/30 text-gray-400 cursor-not-allowed px-8 py-4 text-lg backdrop-blur-sm"
              >
                📺 Watch Keynote
              </Button>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              Beta access begins at Invest Fest. Keynote will stream live.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 2. Handle Registration / Premium Drop */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  🧾 Claim Your Agent Identity
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Premium handles for the agentic web. Limited availability.
              </p>
            </div>
          </ScrollReveal>

          {/* Handle Search and Registry */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Panel - Search */}
            <ScrollReveal direction="left" delay={400}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white mb-4">Search Handle Availability</h3>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="e.g. boss.agent, talktome, you"
                    className="w-full bg-black/50 border border-cyan-500/30 rounded-2xl pl-14 pr-6 py-4 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none backdrop-blur-sm text-lg"
                  />
                </div>
                <p className="text-gray-400 text-sm">
                  Handle includes AI inbox, Agent profile, and early access
                </p>
              </div>
            </ScrollReveal>

            {/* Right Panel - Premium Handles */}
            <ScrollReveal direction="right" delay={600}>
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">Premium Handles</h3>
                  <Button size="sm" variant="secondary" className="text-xs">
                    💡 Show Only Available
                  </Button>
                </div>

                {[
                  { handle: "@alpha.agent", status: "Available", price: "$249", color: "green" },
                  { handle: "@myagent", status: "Low stock", price: "$199", color: "yellow" },
                  { handle: "@you", status: "🔒 Reserved", price: "—", color: "gray" },
                  { handle: "@streamnow", status: "Taken", price: "—", color: "red" },
                  { handle: "@humaninterface", status: "Available", price: "$149", color: "green" },
                  { handle: "@getshitdone", status: "Available", price: "$99", color: "green" }
                ].map((item, index) => (
                  <div key={item.handle} className="flex items-center justify-between p-4 bg-black/30 rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center space-x-4">
                      <span className="font-mono text-white">{item.handle}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.color === 'green' ? 'bg-green-500/20 text-green-400' :
                        item.color === 'yellow' ? 'bg-yellow-500/20 text-yellow-400' :
                        item.color === 'red' ? 'bg-red-500/20 text-red-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-cyan-400 font-bold">{item.price}</span>
                      {item.status === "Available" && (
                        <Button size="sm" className="bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">
                          Claim
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Pass Bundle Selector */}
          <ScrollReveal direction="up" delay={800}>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  📦 Choose Your Identity Stack
                </span>
              </h3>
              <p className="text-gray-300">Mac-style configuration. Each pass unlocks different capabilities.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {handlePackages.map((pkg, index) => (
              <ScrollReveal key={pkg.title} direction="up" delay={300 + index * 100}>
                <SpotlightCard className="relative h-full glass-card neural-connection">
                  <div className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-10 rounded-2xl`} />

                  {/* AI-Generated Package Visualization */}
                  <div className="absolute top-4 right-4 w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-2xl animate-float">
                      {pkg.title.split(' ')[0]}
                    </div>
                  </div>

                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold animate-glow-pulse">
                        MOST POPULAR
                      </div>
                    </div>
                  )}
                  <div className="relative p-8 h-full flex flex-col ambient-glow">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                      <p className="text-gray-400 mb-4">{pkg.description}</p>
                      <div className="text-4xl font-bold text-white">{pkg.price}</div>
                    </div>
                    
                    <div className="flex-1">
                      <ul className="space-y-3">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                            <Zap className="w-4 h-4 mr-3 text-cyan-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      className={`mt-6 w-full bg-gradient-to-r ${pkg.gradient} hover:opacity-90 text-white`}
                    >
                      Select Package
                    </Button>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={800}>
            <div className="text-center mt-12">
              <Button 
                variant="secondary"
                className="bg-black/50 border border-white/20 text-white hover:bg-white/5"
              >
                <Search className="w-5 h-5 mr-2" />
                Browse Handle Marketplace
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. StreamNow Launch + Keynote Countdown */}
      <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent to-black/50 overflow-hidden">
        {/* Background Video Loop Effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-96 h-96 rounded-full bg-gradient-to-br from-purple-500/30 to-cyan-500/30 animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl font-bold text-white/10 animate-float">📺</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ScrollReveal direction="up" delay={200}>
            <div className="mb-12">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  📺 Watch the Future Take the Stage
                </span>
              </h2>
              <p className="text-2xl text-white/90 mb-4 font-light">
                This is where it all unfolds:
              </p>
              <p className="text-3xl font-bold holographic-text animate-gradient-shift">
                The Phone. The OS. The Agent.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="scale" delay={400}>
            <div className="bg-black/70 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-8 mb-8 glass-card">
              <div className="mb-6">
                <div className="text-cyan-400 text-lg mb-2">Keynote Countdown</div>
                <div className="grid grid-cols-4 gap-6 mb-6">
                  {Object.entries(countdown).map(([unit, value]) => (
                    <div key={unit} className="text-center">
                      <div className="text-4xl font-bold text-white mb-2 animate-glow-pulse">{value}</div>
                      <div className="text-gray-400 text-sm uppercase">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  disabled
                  className="bg-gray-600/50 text-gray-400 cursor-not-allowed px-8 py-4"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Now on StreamNow (Soon)
                </Button>
                <Button
                  variant="secondary"
                  className="border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/5 px-8 py-4"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  📡 Set Reminder
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 4. The AI Phone - Teaser Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
                  📱 The Future in Your Pocket
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phone Silhouette */}
            <ScrollReveal direction="left" delay={400}>
              <div className="relative">
                <div className="w-80 h-96 mx-auto bg-gradient-to-b from-gray-900 to-black rounded-[3rem] border border-gray-700 shadow-2xl relative overflow-hidden">
                  {/* Glowing AI Interface Hints */}
                  <div className="absolute inset-4 bg-black rounded-[2.5rem] flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full flex items-center justify-center animate-pulse">
                        <div className="text-2xl">🤖</div>
                      </div>
                      <div className="text-white/60 text-lg font-bold">A.I.</div>
                      <div className="space-y-2">
                        <div className="w-32 h-1 bg-cyan-500/30 rounded mx-auto animate-pulse" />
                        <div className="w-24 h-1 bg-purple-500/30 rounded mx-auto animate-pulse" style={{ animationDelay: '0.5s' }} />
                        <div className="w-28 h-1 bg-pink-500/30 rounded mx-auto animate-pulse" style={{ animationDelay: '1s' }} />
                      </div>
                    </div>
                  </div>

                  {/* Ambient glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/10 via-transparent to-purple-500/10 rounded-[3rem]" />
                </div>

                {/* Floating particles around phone */}
                <div className="quantum-particle" style={{ top: '20%', left: '10%' }} />
                <div className="quantum-particle" style={{ top: '60%', right: '15%' }} />
                <div className="quantum-particle" style={{ bottom: '30%', left: '20%' }} />
              </div>
            </ScrollReveal>

            {/* Phone Details */}
            <ScrollReveal direction="right" delay={600}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-bold text-white mb-6">
                    The first AI-native phone.
                  </h3>
                  <div className="space-y-4 text-xl text-gray-300">
                    <p>No App Store. No middlemen.</p>
                    <p>Built for your handle. Controlled by your agent.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-600 hover:to-gray-800 px-8 py-4 text-lg"
                  >
                    🛒 Join the Pre-Order Waitlist
                  </Button>

                  <div className="text-center">
                    <p className="text-cyan-400 font-semibold">🗓 Drops at Invest Fest Keynote</p>
                  </div>
                </div>

                <div className="bg-black/30 rounded-xl p-6 border border-white/10">
                  <h4 className="text-white font-bold mb-3">What makes it different:</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center"><Zap className="w-4 h-4 mr-3 text-cyan-400" />Agent-first interface</li>
                    <li className="flex items-center"><Zap className="w-4 h-4 mr-3 text-cyan-400" />Direct handle integration</li>
                    <li className="flex items-center"><Zap className="w-4 h-4 mr-3 text-cyan-400" />No traditional apps</li>
                    <li className="flex items-center"><Zap className="w-4 h-4 mr-3 text-cyan-400" />AI-native OS</li>
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Directory & Marketplace Preview */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  🌍 Directory & Marketplace Preview
                </span>
              </h2>

              {/* Smart Search Bar */}
              <div className="max-w-2xl mx-auto mb-12">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
                  <input
                    type="text"
                    placeholder="Search available handles, agencies, agents, compute, and dev profiles"
                    className="w-full bg-black/50 border border-cyan-500/30 rounded-2xl pl-14 pr-6 py-4 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none backdrop-blur-sm"
                  />
                </div>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {["Top Agents", "Top Agencies", "Dev Communities", "Upcoming Launches"].map((tab) => (
                  <Button
                    key={tab}
                    variant="secondary"
                    className="bg-black/30 border border-white/20 text-gray-300 hover:border-cyan-500/30 hover:text-cyan-400"
                  >
                    {tab}
                  </Button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Preview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "neural.ai", type: "Agent", status: "Active", blur: false },
              { title: "quantum.dev", type: "Developer", status: "Building", blur: false },
              { title: "cosmos.agency", type: "Agency", status: "Coming Soon", blur: true },
              { title: "nexus.compute", type: "Compute", status: "Coming Soon", blur: true }
            ].map((item, index) => (
              <ScrollReveal key={item.title} direction="up" delay={300 + index * 100}>
                <div className={`bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-all duration-300 ${item.blur ? 'blur-sm' : ''}`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-semibold">{item.title}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      item.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                      item.status === 'Building' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{item.type}</p>
                  {!item.blur && (
                    <Button size="sm" className="w-full bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30">
                      View Profile
                    </Button>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AI Email Pre-Order + Phone Waitlist */}
      <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  📬 Reserve Your Future
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal direction="left" delay={400}>
              <SpotlightCard>
                <div className="p-8 text-center">
                  <Mail className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
                  <h3 className="text-2xl font-bold mb-4">AI Email Reservation</h3>
                  <p className="text-gray-400 mb-6">you@agentverse.ai</p>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Enter your preferred handle"
                      className="w-full bg-black/50 border border-cyan-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-500/50 focus:outline-none mb-4"
                    />
                    <div className="text-2xl font-bold text-cyan-400">$5 reservation</div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                    Reserve Email
                  </Button>
                </div>
              </SpotlightCard>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={600}>
              <SpotlightCard>
                <div className="p-8 text-center">
                  <Phone className="w-16 h-16 mx-auto mb-6 text-purple-400" />
                  <h3 className="text-2xl font-bold mb-4">AI Phone Waitlist</h3>
                  <p className="text-gray-400 mb-6">Limited Founders Edition</p>
                  <div className="mb-6">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full bg-black/50 border border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none mb-4"
                    />
                    <div className="text-lg text-purple-400">Notify Me</div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    Join Waitlist
                  </Button>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 7. Merch Drop / Culture Infusion */}
      <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent to-black/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  🎽 Gear Up. Show Out.
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                This is a culture drop, not merch.
              </p>
            </div>
          </ScrollReveal>

          {/* Product Tile Preview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { item: "Command Tee", description: "Register Your Future", price: "$42", emoji: "👕" },
              { item: "Agent Snapback", description: "Black-on-black badge hat", price: "$38", emoji: "🧢" },
              { item: "Ops Jacket", description: "Tactical jacket w/ handle tag", price: "$119", emoji: "🧥" },
              { item: "Agent File Pack", description: "Embossed handle folio", price: "$59", emoji: "📁" },
              { item: "Patch Set", description: "Iron-on handle badge set", price: "$25", emoji: "🏷️" },
              { item: "Neural Hoodie", description: "I'm Not Chatting. I'm Computing.", price: "$89", emoji: "👘" }
            ].map((product, index) => (
              <ScrollReveal key={product.item} direction="up" delay={300 + index * 100}>
                <SpotlightCard className="glass-card">
                  <div className="p-6 text-center">
                    <div className="text-6xl mb-4 animate-float">{product.emoji}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{product.item}</h3>
                    <p className="text-gray-400 mb-4 text-sm">{product.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-4">{product.price}</div>
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border border-orange-500/30 hover:bg-orange-500/30"
                    >
                      Preorder
                    </Button>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={800}>
            <div className="text-center space-y-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 text-xl mr-4"
              >
                🧢 Preorder Uniform
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="border-orange-500/30 text-orange-400 hover:bg-orange-500/5 px-12 py-6 text-xl"
              >
                🛍 Visit the Agent Store
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. For Builders Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" delay={200}>
            <div className="mb-12">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                  🔧 Build the Intelligence Layer
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className="bg-black/50 backdrop-blur-xl border border-green-500/20 rounded-3xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-6">Developer Perks</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  "✅ Early dev handle",
                  "✅ Access to Agent-to-Agent protocol (V0)",
                  "✅ VibeCoder UI Kit",
                  "✅ Vibathon entry"
                ].map((perk, index) => (
                  <div key={index} className="flex items-center text-gray-300 text-lg">
                    <Code className="w-5 h-5 mr-3 text-green-400" />
                    {perk}
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-12 py-4 text-xl"
              >
                Sign Up for Dev Access
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Roadmap as Park Expansion */}
      <section className="relative z-10 py-24 px-6 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up" delay={200}>
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  🧭 You're Still at the Gate
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Here's What's Coming.
              </p>
            </div>
          </ScrollReveal>

          <div className="relative">
            {/* Roadmap Path */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500 opacity-30" />

            <div className="space-y-16">
              {[
                { title: "Agentverse OS", description: "The operating system for AI agents", icon: "🤖", status: "Q3 2025" },
                { title: "StreamNow Platform", description: "Full streaming and content platform", icon: "📺", status: "Q4 2025" },
                { title: "Hardware Reveals", description: "AI-native devices and interfaces", icon: "📱", status: "Q1 2026" },
                { title: "Compute Protocol", description: "Decentralized AI compute network", icon: "⚡", status: "Q2 2026" },
                { title: "AI Markets", description: "Marketplace for AI services and agents", icon: "🏪", status: "Q3 2026" },
                { title: "Dev Grants & Vibathons", description: "Developer ecosystem and competitions", icon: "🏆", status: "Ongoing" }
              ].map((item, index) => (
                <ScrollReveal key={item.title} direction={index % 2 === 0 ? "left" : "right"} delay={300 + index * 100}>
                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <SpotlightCard>
                        <div className="p-6">
                          <div className="flex items-center mb-4">
                            <span className="text-3xl mr-4">{item.icon}</span>
                            <div>
                              <h3 className="text-xl font-bold text-white">{item.title}</h3>
                              <p className="text-cyan-400 text-sm">{item.status}</p>
                            </div>
                          </div>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </SpotlightCard>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Live Agent Chat + Footer */}
      <footer className="relative z-10 py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" delay={200}>
            {/* Sticky Chat Button */}
            <div className="mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-12 py-6 text-xl shadow-2xl shadow-purple-500/25 animate-glow-pulse"
              >
                💬 Ask Your Agent
              </Button>
              <p className="text-gray-400 text-sm mt-3">Onboarding AI chat available 24/7</p>
            </div>

            {/* Confirmation Message */}
            <div className="bg-black/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 mb-8">
              <p className="text-xl text-white font-semibold mb-2">
                "Your handle is locked. The future is now watching."
              </p>
              <p className="text-gray-400 text-sm">
                Welcome to the Agentic Web Protocol
              </p>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Powered by @agenticeeb
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Built on .structuredcompute
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                Agentic Protocol v0.1
              </a>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Contact</a>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-gray-500 text-sm">
                You're not launching a product. You're opening a new layer of the internet.
              </p>
              <p className="text-cyan-400 text-xs font-mono">
                aiagents.link • #AgenticWeb #AIidentity #VibeCoder
              </p>
            </div>
          </ScrollReveal>
        </div>
      </footer>

      {/* Ambient Effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      <div className="absolute top-2/3 left-1/2 w-48 h-48 bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }} />
    </main>
  );
}
