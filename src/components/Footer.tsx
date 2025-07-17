"use client";

import { Button } from "@/components/ui/Button";
import { Mail } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Roadmap", href: "#roadmap" },
        { name: "Docs", href: "#docs" },
        { name: "API Reference", href: "#api" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#about" },
        { name: "Blog", href: "#blog" },
        { name: "Contact", href: "#contact" },
        { name: "Join Team", href: "#careers" },
        { name: "Become a Partner", href: "#partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", href: "#help" },
        { name: "Community", href: "#community" },
        { name: "Changelog", href: "#changelog" },
        { name: "System Status", href: "#status" },
        { name: "Founders Circle", href: "#founders" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms", href: "#terms" },
        { name: "Compliance", href: "#compliance" },
        { name: "Apply for Institutional", href: "#institutional" }
      ]
    }
  ];

  return (
    <footer className="bg-black text-white border-t border-cyan-500/20">
      {/* Newsletter Section */}
      <div className="border-b border-dark-700 dark:border-gray-800">
        <div className="container-max section-padding py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">💌 Stay Updated</h3>
            <p className="text-dark-300 dark:text-gray-400 mb-8">
              Get product releases, TLD drops, and roadmap insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-dark-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 bg-dark-800 dark:bg-gray-800 border border-dark-600 dark:border-gray-700 rounded-xl text-white placeholder-dark-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent-purple focus:border-transparent"
                />
              </div>
              <Button variant="gradient" size="md">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-max section-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="text-3xl">
                🌐
              </div>
              <span className="text-xl font-bold">Unified AI Registry</span>
            </div>
            <p className="text-dark-300 mb-6">
              The agentic web starts here. Register your domain in the AI-native internet.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-dark-400">Built on the</p>
              <p className="text-gradient font-semibold">Unified AI Framework</p>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-dark-300 hover:text-white transition-colors duration-200"
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
      <div className="border-t border-dark-700">
        <div className="container-max section-padding py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-dark-400 text-sm">
              © 2025 Unified AI Registry. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-dark-400">
              <span>The AI-native internet layer</span>
              <span>•</span>
              <span>Powered by Unified AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
