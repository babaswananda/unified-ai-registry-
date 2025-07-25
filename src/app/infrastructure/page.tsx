"use client";

import { ArrowRight, Building, Shield, Zap, Globe, Users, Factory, Heart, DollarSign, ShoppingCart } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { Button } from "@/components/ui/Button";
import SpotlightCard from "@/components/ui/SpotlightCard";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function InfrastructurePage() {
  const infrastructureLayers = [
    {
      id: "CORE",
      title: "UNIFIED AI SYSTEMS LAYER",
      subtitle: "Core Layer",
      description: "Intelligent handle protocol (.aiagents, .signatureai, etc.) • Agent OS, operating identity, cloud execution • Personal, citywide, and institutional deployment • VibeCoder IDE + AI Workflow Engine",
      icon: <Zap className="w-8 h-8" />,
      color: "cyan",
      emoji: "🔷"
    },
    {
      id: "MEDIA",
      title: "STREAMNOW INFRASTRUCTURE",
      subtitle: "Media Layer",
      description: ".MoviesNow, .MusicNow, .GamesNow — fully autonomous UGC + licensed content stacks • Content agents for every record, show, and drop • StreamPlayer for AI-native consumption • IRL monetization via ForkD and Stream AI On-Demand devices",
      icon: <Globe className="w-8 h-8" />,
      color: "purple",
      emoji: "📺"
    },
    {
      id: "CIVIC",
      title: "GOVERNMENT INFRASTRUCTURE",
      subtitle: "Civic Layer",
      description: "AI handles for every public servant • IRL chat agents for every department, district, or city • Smart city integration • Local, state, and federal interlinking (compliance-ready)",
      icon: <Building className="w-8 h-8" />,
      color: "blue",
      emoji: "🏛"
    },
    {
      id: "HEALTH",
      title: "HEALTH INFRASTRUCTURE",
      subtitle: "HealthStack Layer",
      description: ".HealthHandle registry for every patient, provider, and institution • AI-connected treatment agents • HIPAA-modeled permission layers • Compute-based health economy",
      icon: <Heart className="w-8 h-8" />,
      color: "pink",
      emoji: "🧠"
    },
    {
      id: "FINANCE",
      title: "FINANCE INFRASTRUCTURE",
      subtitle: "FinLayer",
      description: "AI-connected wallets, float systems, and bank agents • Structured tokenization of policies, insurance, assets • Decentralized underwriting logic (e.g., .SneakerInsurance, .EquityFirm) • Embedded staking + yield logic for digital contracts",
      icon: <DollarSign className="w-8 h-8" />,
      color: "green",
      emoji: "💰"
    },
    {
      id: "RETAIL",
      title: "RETAIL INFRASTRUCTURE",
      subtitle: "Commerce Layer",
      description: "AI-native shops for every product line • ForkD-powered UGC monetization for affiliate creators • Personal agents for every SKU • Integrated in-store / mobile / streaming checkout systems",
      icon: <ShoppingCart className="w-8 h-8" />,
      color: "orange",
      emoji: "🏪"
    },
    {
      id: "MANUFACTURING",
      title: "MANUFACTURING INFRASTRUCTURE",
      subtitle: "ReshoreOps Layer",
      description: ".MadeinUSA protocol deployment • Verified American manufacturing layers • Operator-class agents for every machine and product • National reshoring tech stack in alignment with 2020–2024 U.S. mandates",
      icon: <Factory className="w-8 h-8" />,
      color: "red",
      emoji: "🏗"
    },
    {
      id: "CREATOR",
      title: "NIL & CREATOR INFRASTRUCTURE",
      subtitle: "Talent Layer",
      description: "AI handles for athletes, creators, influencers • Digital twin agent for every deal, record, endorsement • Full NFT + tokenization + licensing workflow • ForkD-native monetization logic • Platform built for both megastars and microcreators",
      icon: <Users className="w-8 h-8" />,
      color: "pink",
      emoji: "🎥"
    },
    {
      id: "EDUCATION",
      title: "KIDS & SCHOOL SYSTEMS",
      subtitle: "EduLayer",
      description: "Handles for every student (starting in Detroit) • Parental controls, gamified learning, AI tutors • Integration with .KidsChat and school-based learning agents • AI yearbooks, school portals, and IRL classroom dashboards",
      icon: <Users className="w-8 h-8" />,
      color: "blue",
      emoji: "🧒"
    }
  ];

  const strategicBenefits = [
    "Direct alignment with Detroit Summit outcomes and Trump's AI mandates",
    "Federally compliant, sovereign, and scalable infrastructure",
    "White-glove onboarding and vertical-specific toolkits",
    "Proven pilot programs with industry leaders and government agencies"
  ];

  const engagementOpportunities = [
    "Custom onboarding portals per vertical reflecting compliance and federal standards",
    "Rotating sector-specific press releases tied to executive priorities and trade policies", 
    "API and integration frameworks accelerating AI adoption consistent with national security guidelines"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <ConditionalBackground 
        intensity={0.6}
        particleCount={80}
        floatingCount={0}
        gridSize={120}
      />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-24 text-center">
          <div className="container-max section-padding">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 px-6 py-3 rounded-full mb-8">
                <Factory className="w-6 h-6 text-orange-400" />
                <span className="text-orange-400 font-semibold">🏗️ Built in Detroit. Backed by Policy. Powered by Agents.</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-400 via-white to-red-400 bg-clip-text text-transparent">
                Unified AI Infrastructure
              </span>
              <br />
              <span className="text-white">Rollout (IRL)</span>
            </h1>

            <p className="text-2xl sm:text-3xl text-gray-300 max-w-5xl mx-auto mb-8">
              The next era of infrastructure isn't concrete or copper — it's intelligent.
            </p>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-12">
              Unified AI is laying the economic, social, and compute foundation for a national and global AI infrastructure rollout — city by city, lane by lane.
              <br />
              <span className="text-orange-400 font-semibold">The protocol begins in Detroit. It scales worldwide.</span>
            </p>
            
            {/* CTA Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <Button
                variant="gradient"
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white px-8 py-4 text-lg font-semibold"
              >
                ⚡️ Register Your AI Handle
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="gradient"
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 py-4 text-lg font-semibold"
              >
                📥 Download Executive Deck
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="gradient"
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-8 py-4 text-lg font-semibold"
              >
                🏛 Request Institutional Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* Detroit Origin Story */}
        <section className="py-24 bg-gradient-to-b from-orange-500/10 to-red-500/10">
          <div className="container-max section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-orange-400">🔥 ORIGIN STORY:</span>
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  DETROIT IS GROUND ZERO
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                At the Detroit AI & Innovation Summit, city leaders made history:
                <br />
                <span className="text-orange-400 font-semibold">Detroit became the first city in America to commit to a unified AI handle system for all students, local businesses, and public infrastructure.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <SpotlightCard
                variant="orange"
                className="border-orange-500/20"
                glowSpread={35}
                glowProximity={56}
              >
                <div className="p-8">
                  <div className="text-4xl mb-4">🏛️</div>
                  <h3 className="text-xl font-bold text-white mb-4">Mayor Duggan's Initiative</h3>
                  <p className="text-gray-300">Mayor Duggan's Office led the initiative to issue AI handles to every public school student, making Detroit the model city for AI infrastructure.</p>
                </div>
              </SpotlightCard>

              <SpotlightCard
                variant="red"
                className="border-red-500/20"
                glowSpread={35}
                glowProximity={56}
              >
                <div className="p-8">
                  <div className="text-4xl mb-4">🏗️</div>
                  <h3 className="text-xl font-bold text-white mb-4">AI Alley Activation</h3>
                  <p className="text-gray-300">The Unified AI Infrastructure Root Layer (IRL) was activated at Trapper's Alley — now redeveloped as the "AI Alley."</p>
                </div>
              </SpotlightCard>

              <SpotlightCard
                variant="orange"
                className="border-orange-500/20"
                glowSpread={35}
                glowProximity={56}
              >
                <div className="p-8">
                  <div className="text-4xl mb-4">👥</div>
                  <h3 className="text-xl font-bold text-white mb-4">National Convergence</h3>
                  <p className="text-gray-300">Operators, developers, and creators from across the country gathered to deploy the first vertical stacks of the Unified AI economy.</p>
                </div>
              </SpotlightCard>

              <SpotlightCard
                variant="red"
                className="border-red-500/20"
                glowSpread={35}
                glowProximity={56}
              >
                <div className="p-8">
                  <div className="text-4xl mb-4">🇺🇸</div>
                  <h3 className="text-xl font-bold text-white mb-4">Federal Alignment</h3>
                  <p className="text-gray-300">Trump-era mandates on reshoring U.S. infrastructure aligned with this protocol, making it a sovereign, economically strategic rollout.</p>
                </div>
              </SpotlightCard>
            </div>

            <div className="text-center">
              <p className="text-2xl font-bold text-white mb-4">
                Detroit is no longer just Motor City — it's the <span className="text-orange-400">Model City for AI Infrastructure.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Infrastructure Layers */}
        <section className="py-24">
          <div className="container-max section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-white">🧱 THE STRUCTURE OF</span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  INFRASTRUCTURE
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                The Unified AI Infrastructure is segmented by real-world rollout categories.
                <br />
                Each vertical gets a dedicated AI layer, handle system, monetization gateway, and onboarding protocol.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {infrastructureLayers.map((layer, index) => (
                <SpotlightCard
                  key={layer.id}
                  variant={layer.color as any}
                  className="border-gray-600"
                  glowSpread={40}
                  glowProximity={64}
                >
                  <div className="p-8" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="text-4xl">{layer.emoji}</div>
                      <div className="text-white">{layer.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{layer.title}</h3>
                    <p className="text-sm text-gray-400 mb-4">({layer.subtitle})</p>
                    <p className="text-gray-300 leading-relaxed">{layer.description}</p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </section>

        {/* AI Handle Registry */}
        <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
          <div className="container-max section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-cyan-400">🧠 AI AGENT REGISTRY &</span>
                <br />
                <span className="text-white">HANDLE SYSTEM</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Every vertical rollout includes a native AI Handle system.
                <br />
                <span className="text-cyan-400 font-semibold">These are not usernames. These are protocol-anchored digital identities for every person, product, agency, or asset.</span>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                { title: "Detroit Public Schools", status: "Full system rollout initiated", emoji: "✅", color: "green" },
                { title: "City of Detroit", status: "AI agents for each municipal division", emoji: "✅", color: "blue" },
                { title: "Business Handles", status: "Available now (name.handle, product.handle, etc.)", emoji: "✅", color: "cyan" },
                { title: "Talent & NIL", status: "Fully integrated identity-to-contract gateway", emoji: "✅", color: "purple" },
                { title: "Smart Cities", status: "Registry per department, zone, or utility", emoji: "✅", color: "orange" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="relative rounded-xl border border-cyan-500/20 p-1 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <GlowingEffect
                    variant={item.color as any}
                    spread={25}
                    glow={true}
                    disabled={false}
                    proximity={40}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-6 h-full">
                    <div className="text-3xl mb-4">{item.emoji}</div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.status}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                Each handle includes a hosted page, Vibe-coded UI, embedded chat agent, and monetization plug-ins.
              </p>
            </div>
          </div>
        </section>

        {/* ForkD Monetization */}
        <section className="py-24 bg-gradient-to-b from-green-500/10 to-orange-500/10">
          <div className="container-max section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-green-400">💸 STRUCTURED MONETIZATION</span>
                <br />
                <span className="text-white">VIA ForkD</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                At the core of the Unified AI Economy is <span className="text-green-400 font-semibold">ForkD</span>:
                <br />
                A structured compute monetization engine that routes credits to creators, operators, and developers — in real time.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <SpotlightCard
                variant="green"
                className="border-green-500/20"
                glowSpread={30}
                glowProximity={48}
              >
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">⚙️</div>
                  <h3 className="text-xl font-bold text-white mb-4">Operators Install</h3>
                  <p className="text-gray-300">Operators install ForkD on devices, workflows, and content.</p>
                </div>
              </SpotlightCard>

              <SpotlightCard
                variant="orange"
                className="border-orange-500/20"
                glowSpread={30}
                glowProximity={48}
              >
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">🔄</div>
                  <h3 className="text-xl font-bold text-white mb-4">AI Consumes</h3>
                  <p className="text-gray-300">As AI consumes compute, ForkD routes profits to the source.</p>
                </div>
              </SpotlightCard>

              <SpotlightCard
                variant="green"
                className="border-green-500/20"
                glowSpread={30}
                glowProximity={48}
              >
                <div className="p-8 text-center">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="text-xl font-bold text-white mb-4">Everything Monetizable</h3>
                  <p className="text-gray-300">Every IRL deployment — from music drops to health checkups — becomes monetizable.</p>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </section>

        {/* Strategic Engagement Opportunities */}
        <section className="py-24">
          <div className="container-max section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-red-400 bg-clip-text text-transparent">
                  Strategic Engagement Opportunities
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {engagementOpportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="relative rounded-xl border border-blue-500/20 p-1 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <GlowingEffect
                    variant="blue"
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-6 h-full text-center">
                    <p className="text-lg text-gray-300">{opportunity}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="container-max section-padding text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              <span className="text-orange-400">🚀 START BUILDING YOUR</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-white to-red-400 bg-clip-text text-transparent">
                AI INFRASTRUCTURE
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Whether you're a mayor, a musician, or a machine shop — the rollout starts with your handle.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
              <Button
                variant="gradient"
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => window.location.href = '/registry'}
              >
                🔗 Register Your AI Handle
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="gradient"
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 py-4 text-lg font-semibold"
              >
                📥 Download Executive Deck
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <Button
                variant="gradient"
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 text-white px-8 py-4 text-lg font-semibold"
              >
                🧭 Onboard Your City
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                <span className="text-orange-400">🌍 FROM DETROIT TO THE WORLD.</span>
              </h3>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                This is not a startup.
                <br />
                This is the internet's infrastructure reset — monetized, unified, and ready to scale.
              </p>
              <p className="text-2xl font-bold text-white">
                Welcome to <span className="text-orange-400">IRL</span>.
              </p>
            </div>

            <div className="w-32 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto"></div>
          </div>
        </section>
      </div>
    </div>
  );
}
