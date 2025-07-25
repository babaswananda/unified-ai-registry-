import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import NewsTicker from "@/components/ui/NewsTicker";
import { Button } from "@/components/ui/Button";
import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function Home() {
  const tickerItems = [
    "detroit.aiagents - $0",
    "assistant.aiagents - $200",
    "guardian.aiagents - $200",
    "operator.aiagents - $150",
    "educator.aiagents - $200",
    "stream.aiagents - $200",
    "retail.aiagents - $200",
    "finance.aiagents - $200",
    "manufacturing.aifactory - $100",
    "blockchain.devcommunity - $75",
    "protocol.agenticweb - $299",
    "infrastructure.newinternet - $399"
  ];

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>

      {/* Animated Background */}
      <ConditionalBackground
        intensity={0.8}
        particleCount={150}
        floatingCount={15}
        gridSize={80}
        className="absolute inset-0"
      />

      <Navigation />

      {/* News Ticker - positioned below nav */}
      <div className="pt-20">
        <NewsTicker items={tickerItems} />
      </div>

      {/* Hero Section */}
      <section className="relative z-20 py-24 text-center">
        <div className="container-max section-padding">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="text-red-400">🚨</span> ANNOUNCEMENT: The Infrastructure Era Has Begun — AI Agents IRL Are Live
          </h1>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            This is not a product launch. This is the operational rollout of a new societal infrastructure layer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 text-lg font-bold">
              Contact: infrastructure@unifiedai
            </Button>
            <Button variant="ghost" className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 text-lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </section>

      {/* Master Theme Section */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <h3 className="text-4xl font-bold text-center text-orange-400 mb-8">
            🔥 MASTER THEME: AI Agents IRL
          </h3>
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              AI agents are no longer theoretical or confined to code—they are operational in real life.
            </p>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Education, manufacturing, healthcare, government, commerce, and media are being transformed by intelligent, voice-driven, identity-bound AI agents physically integrated with real-world operations.
            </p>
            <p className="text-2xl font-bold text-cyan-400">
              This marks the start of the AI Industrial Infrastructure Revolution.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Company Introduction */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <h3 className="text-4xl font-bold text-center text-blue-400 mb-12">
            🧠 INFRASTRUCTURE COMPANY: UnifiedAI
          </h3>
          <div className="max-w-5xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              UnifiedAI is the root protocol and infrastructure layer powering this transformation:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            <div className="text-center p-6 bg-black/50 rounded-lg border border-blue-500/20">
              <div className="text-4xl mb-4">🎤</div>
              <h4 className="text-lg font-bold text-white mb-2">Real Voice Agents</h4>
              <p className="text-gray-300 text-sm">Voice-driven AI with real-world interfaces</p>
            </div>
            <div className="text-center p-6 bg-black/50 rounded-lg border border-blue-500/20">
              <div className="text-4xl mb-4">🪪</div>
              <h4 className="text-lg font-bold text-white mb-2">Sovereign AI Handles</h4>
              <p className="text-gray-300 text-sm">Infrastructure-grade handles bound to devices and operations</p>
            </div>
            <div className="text-center p-6 bg-black/50 rounded-lg border border-blue-500/20">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Real-Time IRL Integration</h4>
              <p className="text-gray-300 text-sm">Operational AI integration with physical systems</p>
            </div>
            <div className="text-center p-6 bg-black/50 rounded-lg border border-blue-500/20">
              <div className="text-4xl mb-4">👥</div>
              <h4 className="text-lg font-bold text-white mb-2">Human In The Loop</h4>
              <p className="text-gray-300 text-sm">Human oversight for accountability and ethical compliance</p>
            </div>
            <div className="text-center p-6 bg-black/50 rounded-lg border border-blue-500/20">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="text-lg font-bold text-white mb-2">Ecosystem Governance</h4>
              <p className="text-gray-300 text-sm">Governance and scaling of agent-native ecosystem</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <h4 className="text-xl font-bold text-white mb-4">Domains and contact:</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="text-blue-400 font-mono">infrastructure@infrastructure.unifiedai</span>
              <span className="text-blue-400 font-mono">portal.unifiedai</span>
              <span className="text-blue-400 font-mono">support.unifiedai</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mandate Alignment Section */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <h3 className="text-4xl font-bold text-center text-red-400 mb-8">
            📢 Mandate Alignment
          </h3>
          <h4 className="text-2xl font-bold text-center text-white mb-12">
            Detroit AI Summit & Trump Administration Directives
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              "Agent-based government services (311, permits, portals)",
              "Sovereign AI identity tied to physical devices",
              "AI-powered industrial manufacturing integration",
              "Education and workforce AI agent deployment",
              "Local and state government infrastructure mandates",
              "AI in American media and NIL licensing",
              "AI commerce & finance agent-driven compliance",
              "Domestic manufacturing & export focus"
            ].map((mandate, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-black/30 rounded-lg border border-red-500/20">
                <span className="text-red-400 font-bold text-lg">✅</span>
                <p className="text-gray-300">{mandate}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-xl font-bold text-red-400">
              UnifiedAI is executing now — no waiting for approval.
            </p>
          </div>
        </div>
      </section>

      {/* Rollout Overview */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <h3 className="text-4xl font-bold text-center text-green-400 mb-8">
            🚀 ROLLOUT UNDER THE UNIFYING BANNER: AI AGENTS IRL
          </h3>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-4">
              All verticals and deployments roll under the campaign:
            </p>
            <p className="text-2xl font-bold text-green-400 mb-4">
              "AI Agents IRL" — real agents, real devices, real-world impact.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Experimental AI is over. The infrastructure era is live.
            </p>
          </div>

          {/* Horizontal scrolling marquee */}
          <div className="relative overflow-hidden bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-y border-green-500/20 py-4">
            <div className="flex whitespace-nowrap animate-scroll">
              {[
                "StreamNow", "KidsChat", "Manufacturing & Industrial", "SmartCity",
                "Education", "Healthcare", "Finance", "Government",
                "Creator Economy", "VibeCoders", "Business Infrastructure"
              ].map((category, index) => (
                <span key={index} className="inline-flex items-center mx-8 text-green-400 font-semibold text-lg">
                  {category}
                  <span className="text-green-300 ml-4">|</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vertical Ecosystem Details */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <h3 className="text-4xl font-bold text-center text-purple-400 mb-8">
            📂 ECOSYSTEM ROLLOUT CATEGORIES
          </h3>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-xl text-gray-300 leading-relaxed">
              Each vertical has an institutional-grade press release aligned to its use case:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "📺",
                title: "StreamNow",
                desc: "AI-powered content platform • UGC, licensed, original content with embedded creator agents • NIL licensing, payment rails, and studio portals"
              },
              {
                icon: "👶",
                title: "KidsChat",
                desc: "Safe, education-grade agents for children • Museum, school, and parent controls • Multi-language free AI handles for K-12 education"
              },
              {
                icon: "🏭",
                title: "Manufacturing & Industrial AI",
                desc: "Factory floor integration • Operator-assist agents, predictive maintenance • Aligned with reshoring mandates"
              },
              {
                icon: "🏙️",
                title: "SmartCity & Local Government",
                desc: "City dashboards and voice terminals • Citizen service agents (311, permits, FAQs)"
              },
              {
                icon: "🎓",
                title: "Education Infrastructure",
                desc: "District-wide AI rollouts • Intelligent tutoring and curriculum agents • Charter and public school onboarding"
              },
              {
                icon: "🏥",
                title: "Healthcare Portals",
                desc: "Patient-agent portals and wellness dashboards • Mental health companions • HIPAA-compliant infrastructure"
              },
              {
                icon: "🏦",
                title: "Financial Systems & Banking",
                desc: "Compliance and identity onboarding agents • Support for underbanked populations"
              },
              {
                icon: "🏛️",
                title: "Government Workflows",
                desc: "Workforce, logistics, records, and scheduling agents • Department-specific assistants (DMV, state offices)"
              },
              {
                icon: "🎨",
                title: "Creator Economy & NIL",
                desc: "Agents for athletes, artists, and influencers • Content monetization and rights management • Compliance with NIL and attribution mandates"
              },
              {
                icon: "💼",
                title: "Business Infrastructure Protocol",
                desc: "AI-powered SMB portals, handles, and payment systems • Real storefront AI integration"
              }
            ].map((vertical, index) => (
              <div key={index} className="relative group">
                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105">
                  <div className="text-5xl mb-4 text-center">{vertical.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3 text-center">{vertical.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{vertical.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Handles */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <h3 className="text-4xl font-bold text-center text-yellow-400 mb-8">
            🌐 AI AGENT HANDLES — DIMENSION & MULTI-LANGUAGE
          </h3>
          <div className="max-w-5xl mx-auto text-center mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              UnifiedAI's sovereign AI handles are foundational for identity and trust.
            </p>
            <h4 className="text-2xl font-bold text-white mb-6">Secure agent handle TLDs include:</h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { handle: "ki-agenten", lang: "German" },
              { handle: "agentesdeia", lang: "Spanish" },
              { handle: "agentsia", lang: "Russian" },
              { handle: "xn–ai-xy7jg8cuug21c", lang: "ai에이전트 (Korean)" },
              { handle: "xn–ai-xg4ad4fre1nlc", lang: "aiエージェント (Japanese)" },
              { handle: "xn–ai-yo3c219fum3a", lang: "ai智能体 (Chinese)" }
            ].map((item, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/20">
                <div className="font-mono text-yellow-400 font-bold text-lg mb-2">{item.handle}</div>
                <div className="text-gray-300 text-sm">{item.lang}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-lg p-6 max-w-4xl mx-auto">
              <h4 className="text-2xl font-bold text-yellow-400 mb-4">K-12 Free AI Handles Program</h4>
              <p className="text-xl text-gray-300">
                Free, multi-language AI handles to enable equitable access for educational deployments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Execution Strategy */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <h3 className="text-4xl font-bold text-center text-cyan-400 mb-12">
            🧱 Execution Strategy: Institutional, Real-World, Vertical-Focused
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Each rollout is:</h4>
              <div className="space-y-4">
                {[
                  "Aligned to a single vertical",
                  "Tied to real-world functions",
                  "Targeted at institutional partners"
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-cyan-400 font-bold text-lg">•</span>
                    <p className="text-gray-300 text-lg">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Target Partners:</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Government", "Education", "Healthcare", "Manufacturing",
                  "Finance", "Licensing", "Creators", "Export Agencies"
                ].map((partner, index) => (
                  <div key={index} className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3 text-center">
                    <span className="text-white font-semibold">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaway & CTA */}
      <section className="relative z-20 py-24 bg-gradient-to-r from-orange-500/10 to-red-500/10 border-y border-orange-500/20">
        <div className="container-max section-padding text-center">
          <h2 className="text-5xl font-bold mb-8">
            <span className="text-orange-400">🧨 KEY TAKEAWAY: THIS IS INFRASTRUCTURE — NOT APPS</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            This is the operational rollout of a new societal layer — AI agents embedded throughout commerce, governance, education, and daily life.
          </p>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            UnifiedAI is not a product. It is the backbone infrastructure powering AI agents IRL.
          </p>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">📍 ONBOARDING</h3>
            <p className="text-xl text-gray-300 mb-8">
              Now onboarding strategic partners, institutional buyers, and U.S.-based manufacturers.
            </p>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 text-xl font-bold rounded-full animate-pulse">
              Contact: infrastructure@unifiedai
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
