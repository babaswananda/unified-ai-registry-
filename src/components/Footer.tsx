"use client";

import { Button } from "@/components/ui/Button";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import ShinyText from "@/components/ui/ShinyText";

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Registry", href: "/registry" },
        { name: "Features", href: "/features" },
        { name: "Pricing", href: "/pricing" },
        { name: "Developers", href: "/download-agentic-web" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Partners", href: "/partners" },
        { name: "Investors", href: "/investors" },
        { name: "Agents", href: "/agents-are-coming" },
        { name: "Sign In", href: "/signin" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Download", href: "/download-new-internet" },
        { name: "Community", href: "https://x.com/agenticweb" },
        { name: "Support", href: "mailto:support@unifiedai.com" },
        { name: "Documentation", href: "/download-agentic-web" }
      ]
    }
  ];

  return (
    <footer className="text-white border-t border-cyan-500/20 relative z-10">
      {/* Newsletter Section */}
      <section className="py-24 text-white relative overflow-hidden border-b border-cyan-500/20">
        {/* Background Effects */}
        <ConditionalBackground
          intensity={0.8}
          particleCount={100}
          floatingCount={0}
          gridSize={100}
        />

        <div className="container-max section-padding relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">
              💌 Stay Updated
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get product releases, TLD drops, and roadmap insights delivered to your inbox.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 backdrop-blur-sm"
                />
              </div>
              <Button variant="gradient" size="md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <ShinyText
                text="UNIFIED AI"
                speed={3.3}
                className="text-xl font-bold"
              />
            </div>
            <p className="text-gray-300 mb-6">
              The agentic web starts here. Register your domain in the AI-native internet.
            </p>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-400">Built on the</p>
                <p className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">Unified AI Framework</p>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://x.com/agenticweb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  <span className="text-sm">@agenticweb</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={`footer-section-${section.title}`}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500/20">
        <div className="container-max section-padding py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 UNIFIED AI. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>The AI-native internet layer</span>
              <span>•</span>
              <span>Powered by Unified AI</span>
              <span>•</span>
              <span>Designed in Trappers Valley, Detroit, MI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
