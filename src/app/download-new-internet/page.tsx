"use client";

import { Button } from "@/components/ui/Button";
import ParticleField from "@/components/ui/ParticleField";
import MorphingBackground from "@/components/ui/MorphingBackground";
import AnimatedGrid from "@/components/ui/AnimatedGrid";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, Download, Globe, Shield, Zap, Users } from "lucide-react";

export default function DownloadNewInternetPage() {
  const features = [
    {
      icon: Globe,
      title: "AI-Native Operating System",
      description: "The next internet isn't a browser. It's a brain. Access the unified AI agent operating system."
    },
    {
      icon: Shield,
      title: "Sovereign Identity Handles",
      description: "Your .ai handle becomes your identity, compute endpoint, and commerce gateway in the agentic web."
    },
    {
      icon: Zap,
      title: "Instant Agent Deployment",
      description: "Deploy AI agents for any task - from scheduling to complex business automation - in seconds."
    },
    {
      icon: Users,
      title: "Institutional Ready",
      description: "Built for schools, governments, enterprises, and organizations that need sovereign AI infrastructure."
    }
  ];

  const accessTiers = [
    {
      title: "Individual Access",
      description: "Personal AI handle + agent deployment",
      features: ["Your .ai domain", "Personal AI agents", "Basic compute allocation", "Mobile app access"]
    },
    {
      title: "Institutional Access", 
      description: "Organization-wide AI infrastructure",
      features: ["Bulk handle allocation", "Enterprise agent management", "Custom integrations", "Priority support"]
    },
    {
      title: "Educational Access",
      description: "Special pricing for schools & universities",
      features: ["Student handle packages", "Curriculum integration", "Teacher admin tools", "Research compute credits"]
    }
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navigation />

      {/* Background Effects */}
      <MorphingBackground intensity={0.8} />
      <AnimatedGrid
        gridSize={100}
        lineColor="rgba(0, 255, 255, 0.03)"
        pulseColor="rgba(0, 255, 255, 0.2)"
        intensity={0.8}
      />
      <ParticleField
        particleCount={100}
        color="rgba(0, 255, 255, 0.4)"
        darkColor="rgba(0, 255, 255, 0.6)"
      />

      <div className="relative z-10 pt-24">
        {/* Header */}
        <section className="py-24 text-center">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
                <Download className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-400 font-semibold">Early Access Portal</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <h1 className="text-6xl lg:text-7xl font-bold text-dark-900 dark:text-white mb-8">
                download.newinternet
              </h1>
              <h2 className="text-3xl lg:text-4xl text-dark-700 dark:text-gray-300 mb-8 font-semibold">
                The Next Internet Isn't a Browser. It's a Brain.
              </h2>
              <p className="text-xl text-dark-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Join the waitlist for early access to the Unified AI Agent Operating System. 
                Your gateway to AI handles, modular infrastructure, and the agentic web.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats */}
        <ScrollReveal direction="up" delay={600}>
          <section className="py-16 bg-black/50 backdrop-blur-sm border-y border-cyan-500/20">
            <div className="container-max section-padding">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={3400} suffix="+" />
                  </div>
                  <div className="text-gray-300">AI Domains Reserved</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={847} />
                  </div>
                  <div className="text-gray-300">Early Access Spots Remaining</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white mb-2">
                    <AnimatedCounter end={12} suffix=" Sectors" />
                  </div>
                  <div className="text-gray-300">Industries Ready</div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Features */}
        <section className="py-24">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <h3 className="text-4xl font-bold text-dark-900 dark:text-white text-center mb-16">
                What You're Getting Access To
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {features.map((feature, index) => (
                <ScrollReveal 
                  key={feature.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={400 + index * 200}
                >
                  <div className="bg-black/50 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 group">
                    <feature.icon className="w-12 h-12 text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 mb-4 transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Access Tiers */}
        <section className="py-24 bg-black text-white">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <h3 className="text-4xl font-bold text-center mb-16">
                Choose Your Access Level
              </h3>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {accessTiers.map((tier, index) => (
                <ScrollReveal 
                  key={tier.title}
                  direction="up"
                  delay={400 + index * 200}
                >
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    <h4 className="text-2xl font-bold mb-4">{tier.title}</h4>
                    <p className="text-gray-300 mb-6">{tier.description}</p>
                    <ul className="space-y-3 mb-8">
                      {tier.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <span className="text-green-400">✓</span>
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      variant="secondary" 
                      className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
                    >
                      Request Access
                    </Button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist Form */}
        <section className="py-24">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-4xl font-bold text-dark-900 dark:text-white mb-8">
                  Join the New Internet
                </h3>
                <p className="text-xl text-dark-600 dark:text-gray-400 mb-12">
                  Be among the first to access the agentic web infrastructure. 
                  Early access includes priority handle selection and founding member benefits.
                </p>

                <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 border border-cyan-500/20">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-3 rounded-lg border border-cyan-500/20 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      />
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-4 py-3 rounded-lg border border-cyan-500/20 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      />
                    </div>
                    
                    <select className="w-full px-4 py-3 rounded-lg border border-cyan-500/20 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
                      <option>Individual User</option>
                      <option>Educational Institution</option>
                      <option>Government Agency</option>
                      <option>Enterprise Organization</option>
                      <option>Developer/Builder</option>
                    </select>

                    <textarea
                      placeholder="Tell us about your use case (optional)"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-cyan-500/20 bg-black/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />

                    <Button 
                      variant="gradient" 
                      size="lg" 
                      className="w-full group"
                    >
                      Request Early Access
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer Links */}
        <section className="py-16 border-t border-dark-200 dark:border-dark-700">
          <div className="container-max section-padding text-center">
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="/agents-are-coming"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                ← Back to Agent Message
              </a>
              <a 
                href="/download-agentic-web"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                Developer Portal →
              </a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
