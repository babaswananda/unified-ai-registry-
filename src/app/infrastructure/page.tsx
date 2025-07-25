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
                  DETROIT — THE INFLECTION POINT
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-5xl mx-auto mb-12">
                At the recent <span className="text-orange-400 font-semibold">Detroit AI & Innovation Summit</span>, Mayor Mike Duggan and city leaders outlined a robust vision to propel Detroit—and by extension, America—into an AI-powered economic future. The summit highlighted critical mandates and priorities:
              </p>
            </div>

            {/* Summit Mandates */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                { title: "Smart Infrastructure", desc: "Modernizing municipal utilities, transport, and public services with AI integration", emoji: "🏗️", color: "blue" },
                { title: "Automated Manufacturing", desc: "AI-driven automation to restore Detroit's industrial edge and support U.S. reshoring efforts", emoji: "🏭", color: "orange" },
                { title: "Workforce Retraining", desc: "Equipping workers with AI and tech skills to meet evolving labor demands", emoji: "👥", color: "green" },
                { title: "Localized AI Solutions", desc: "Deploying AI that directly addresses community-specific challenges", emoji: "🎯", color: "purple" },
                { title: "Public-Private Partnerships", desc: "Accelerating innovation through collaborative ecosystems", emoji: "🤝", color: "cyan" },
                { title: "AI Ethics and Governance", desc: "Ensuring transparent, ethical AI use with strong data privacy safeguards", emoji: "⚖️", color: "silver" },
                { title: "Economic Resilience", desc: "Reinforcing supply chains, production, and technological independence through AI", emoji: "💪", color: "red" },
                { title: "Digital Equity", desc: "Closing technology access gaps and expanding AI benefits across all communities", emoji: "🌐", color: "pink" }
              ].map((mandate, index) => (
                <div
                  key={index}
                  className="relative rounded-xl border border-orange-500/20 p-1 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <GlowingEffect
                    variant={mandate.color as any}
                    spread={20}
                    glow={true}
                    disabled={false}
                    proximity={35}
                    inactiveZone={0.01}
                    borderWidth={1}
                  />
                  <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-4 h-full">
                    <div className="text-2xl mb-3">{mandate.emoji}</div>
                    <h3 className="text-sm font-bold text-white mb-2">{mandate.title}</h3>
                    <p className="text-gray-300 text-xs">{mandate.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trump-era Federal Mandates */}
            <div className="bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-red-500/20 rounded-2xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                <span className="text-red-400">🇺🇸 TRUMP-ERA FEDERAL MANDATES</span>
              </h3>
              <p className="text-lg text-gray-300 mb-6 text-center">
                These initiatives align directly with Trump-era federal mandates on infrastructure reshoring and economic sovereignty:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Incentivizing the return of manufacturing and technology production to American soil",
                  "Securing critical infrastructure through domestic AI and advanced tech deployment",
                  "Accelerating industrial modernization with AI-powered factories and supply chains",
                  "Empowering workforce retraining to ensure American labor leads the digital economy",
                  "Establishing U.S. leadership in AI research, deployment, and global standard-setting",
                  "Building sovereign, decentralized infrastructure to safeguard national interests"
                ].map((mandate, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="text-red-400 font-bold">•</div>
                    <p className="text-gray-300">{mandate}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* IRL Response */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-2xl p-8 mb-16">
              <h3 className="text-3xl font-bold text-center mb-6">
                <span className="text-orange-400">🚀 OUR RESPONSE:</span>
                <br />
                <span className="text-white">THE UNIFIED AI INFRASTRUCTURE ROOT LAYER (IRL)</span>
              </h3>
              <p className="text-lg text-gray-300 mb-8 text-center max-w-4xl mx-auto">
                Unified AI's Infrastructure Root Layer (IRL) is the real-world operational backbone that activates and embodies these mandates in Detroit and beyond.
                <span className="text-orange-400 font-semibold"> This is not theory—it is IRL deployment driving the new American AI economy:</span>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Municipal Integration", desc: "Delivering smart, AI-native infrastructure across city systems—utilities, transportation, public safety—anchored first in Detroit's AI Alley at Trapper's Alley", emoji: "🏛️", color: "blue" },
                  { title: "Industrial Deployment", desc: "Powering automated manufacturing with AI-optimized workflows, supporting reshoring and supply chain sovereignty", emoji: "🏭", color: "orange" },
                  { title: "Education & Workforce", desc: "Rolling out AI infrastructure and operator economy roles across Detroit's public schools, retraining workers as integral participants in the new AI-powered gig economy", emoji: "🎓", color: "green" },
                  { title: "Localized Sovereignty", desc: "Deploying decentralized, crypto-native infrastructure tailored to Detroit's unique economic and social fabric—building a replicable Model City for AI infrastructure nationwide", emoji: "🏙️", color: "purple" },
                  { title: "Economic & Data Sovereignty", desc: "Embedding secure, cryptographically controlled AI protocols that ensure data privacy, compliance, and local governance control", emoji: "🔒", color: "cyan" },
                  { title: "Operator Economy", desc: "Creating real income streams for human operators in the loop—trainers, curators, strategists—integral to AI workflows powering Detroit's next-gen economy", emoji: "💼", color: "pink" }
                ].map((response, index) => (
                  <SpotlightCard
                    key={index}
                    variant={response.color as any}
                    className="border-orange-500/20"
                    glowSpread={30}
                    glowProximity={48}
                  >
                    <div className="p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="text-3xl mb-4">{response.emoji}</div>
                      <h4 className="text-lg font-bold text-white mb-3">{response.title}</h4>
                      <p className="text-gray-300 text-sm">{response.desc}</p>
                    </div>
                  </SpotlightCard>
                ))}
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                <span className="text-orange-400">🎯 WHY DETROIT?</span>
              </h3>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Detroit is no longer simply the Motor City. It is the <span className="text-orange-400 font-semibold">Model City for AI infrastructure sovereignty and American technological renewal.</span> The city's leadership at the AI & Innovation Summit set the vision—and Unified AI IRL is the infrastructure execution making that vision a living reality.
              </p>

              <div className="bg-gradient-to-r from-red-500/10 to-blue-500/10 border border-red-500/20 rounded-xl p-6 max-w-3xl mx-auto">
                <h4 className="text-xl font-bold text-white mb-4">
                  <span className="text-red-400">🔗 ALIGNING WITH NATIONAL PRIORITIES</span>
                </h4>
                <p className="text-gray-300 mb-4">
                  Unified AI IRL's deployment is fully aligned with the Trump-era mandates reshaping America's industrial and technological landscape:
                </p>
                <div className="text-left space-y-2">
                  <div className="flex items-start space-x-3">
                    <span className="text-red-400">•</span>
                    <span className="text-gray-300"><span className="text-white font-semibold">Reshoring with Sovereignty:</span> Our infrastructure powers the physical return and modernization of U.S.-based manufacturing</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-blue-400">•</span>
                    <span className="text-gray-300"><span className="text-white font-semibold">Economic Security:</span> Cryptographically secure, sovereign protocols protect critical systems from foreign dependency</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-green-400">•</span>
                    <span className="text-gray-300"><span className="text-white font-semibold">Workforce Empowerment:</span> Operator Economy roles train and hire workers for AI-centric jobs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-orange-400">•</span>
                    <span className="text-gray-300"><span className="text-white font-semibold">Technological Leadership:</span> Unified AI's open, tokenized infrastructure ecosystem accelerates U.S. dominance in AI innovation</span>
                  </div>
                </div>
              </div>

              <p className="text-2xl font-bold text-white mt-8">
                Detroit's summit was the spark. <span className="text-orange-400">Unified AI IRL is the engine driving America's sovereign AI infrastructure future</span>—built IRL, built for IRL impact, built for America.
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
