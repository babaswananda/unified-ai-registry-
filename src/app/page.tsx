import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import NewsTicker from "@/components/ui/NewsTicker";
import { Button } from "@/components/ui/Button";

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

      <Navigation />

      {/* News Ticker - positioned below nav */}
      <div className="pt-20">
        <NewsTicker items={tickerItems} />
      </div>

      {/* Hero Section */}
      <section className="relative z-20 py-24 text-center">
        <div className="container-max section-padding">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8">
            <span className="text-red-400">🚨</span> The Infrastructure Era Has Officially Begun
          </h1>
          <h2 className="text-3xl lg:text-4xl font-bold text-orange-400 mb-6">
            Unified AI Declares the Arrival of "AI Agents IRL"
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
            This isn't a product launch. It's the rollout of a new operational layer for society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 text-lg font-bold">
              Contact: infrastructure@unified.ai
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
              The era of embedded intelligence is here. AI agents are live, operational, and embedded in real-world systems — reshaping education, manufacturing, healthcare, content creation, and more.
            </p>
            <p className="text-2xl font-bold text-cyan-400">
              The AI Industrial Infrastructure Revolution is underway.
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Company Introduction */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <h3 className="text-4xl font-bold text-center text-blue-400 mb-12">
            🧠 Unified AI — The Root Infrastructure Layer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-black/50 rounded-lg border border-blue-500/20">
              <div className="text-4xl mb-4">🎤</div>
              <h4 className="text-lg font-bold text-white mb-2">Real Voice Agents</h4>
              <p className="text-gray-300 text-sm">Voice-driven AI with real-world interfaces</p>
            </div>
            <div className="text-center p-6 bg-black/50 rounded-lg border border-blue-500/20">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">Real-Time Operations</h4>
              <p className="text-gray-300 text-sm">Infrastructure-grade rollouts powering live systems</p>
            </div>
            <div className="text-center p-6 bg-black/50 rounded-lg border border-blue-500/20">
              <div className="text-4xl mb-4">🪪</div>
              <h4 className="text-lg font-bold text-white mb-2">AI Identity</h4>
              <p className="text-gray-300 text-sm">End-to-end identity and compliance protocols</p>
            </div>
            <div className="text-center p-6 bg-black/50 rounded-lg border border-blue-500/20">
              <div className="text-4xl mb-4">🌐</div>
              <h4 className="text-lg font-bold text-white mb-2">IRL Integration</h4>
              <p className="text-gray-300 text-sm">Physical device integration and deployment</p>
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
              Unified AI answers these mandates — executing now.
            </p>
          </div>
        </div>
      </section>

      {/* Rollout Overview */}
      <section className="relative z-20 py-16">
        <div className="container-max section-padding">
          <h3 className="text-4xl font-bold text-center text-green-400 mb-8">
            🚀 Rolling Out Under One Banner: AI Agents IRL
          </h3>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="text-xl text-gray-300 leading-relaxed">
              Every deployment is connected to a real device and a real use case. The experimental phase is over — this is infrastructure rollout.
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
          <h3 className="text-4xl font-bold text-center text-purple-400 mb-12">
            📂 Ecosystem Rollout Categories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "📺",
                title: "StreamNow",
                desc: "AI-powered content platform: UGC, licensed, original content with creator agents, NIL infrastructure."
              },
              {
                icon: "👶",
                title: "KidsChat",
                desc: "Safe, education-grade agents for children, museums, schools, and parent controls."
              },
              {
                icon: "🏭",
                title: "Manufacturing & Industrial",
                desc: "Factory floor AI integration: operator assist, predictive maintenance, reshoring alignment."
              },
              {
                icon: "🏙️",
                title: "SmartCity & Local Government",
                desc: "AI city dashboards, voice terminals, citizen service agents."
              },
              {
                icon: "🎓",
                title: "Education Infrastructure",
                desc: "District-wide AI rollouts, tutoring agents, curriculum design."
              },
              {
                icon: "🏥",
                title: "Healthcare Portals",
                desc: "Patient agents, wellness dashboards, HIPAA-compliant."
              },
              {
                icon: "🏦",
                title: "Financial Systems & Banking",
                desc: "Compliance agents, AI onboarding, underbanked support."
              },
              {
                icon: "🏛️",
                title: "Government Workflows",
                desc: "Workforce agents, logistics, records, scheduling."
              },
              {
                icon: "🎨",
                title: "Creator Economy & NIL",
                desc: "Athlete, artist agents, content monetization, rights protection."
              },
              {
                icon: "🎮",
                title: "VibeCoders & ThemeLab",
                desc: "Creator portal for agent aesthetics, tone, personality design."
              },
              {
                icon: "💼",
                title: "Business Infrastructure Protocol",
                desc: "SMB portals, payment systems, digital business cards."
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
                    <span className="text-cyan-400 font-semibold">{partner}</span>
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
            <span className="text-orange-400">🧨 This Is Infrastructure — Not Just Apps.</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Unified AI is the backbone layer for real-world AI agents. The rollout is live.
          </p>
          <div className="space-y-6">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-12 py-6 text-xl font-bold rounded-full animate-pulse">
              Contact Institutional Partners: infrastructure@unified.ai
            </Button>
            <p className="text-lg text-gray-400">
              Now onboarding strategic partners, institutional buyers, and U.S.-based manufacturers.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
