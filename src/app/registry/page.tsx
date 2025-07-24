"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Search, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface DomainHandle {
  name: string;
  category: 'aiagents' | 'madeindetroit' | 'vibecoder' | 'k12' | 'aifactory' | 'devcommunity' | 'humanintheloop' | 'iaas' | 'gmt' | 'gmt7' | 'agenticweb' | 'newinternet';
  price: number;
  description: string;
  features: string[];
  available: boolean;
  premium: boolean;
}

export default function RegistryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");

  // Unified AI Registry Handles - Real TLD Structure
  const unifiedHandles: DomainHandle[] = [
    // .aiagents - Root AI Agent Protocol (Premium & Municipal)
    { name: "detroit.aiagents", category: "aiagents", price: 0, description: "Official Detroit AI infrastructure", features: ["Municipal Priority", "Government Access", "Free Forever"], available: true, premium: false },
    { name: "schoolname.aiagents", category: "aiagents", price: 0, description: "Educational institution AI agent", features: ["K-12 Access", "Educational Tools", "Free Forever"], available: true, premium: false },
    { name: "assistant.aiagents", category: "aiagents", price: 200, description: "Premium AI assistant agent", features: ["Advanced NLP", "Task Automation", "Learning"], available: true, premium: true },
    { name: "guardian.aiagents", category: "aiagents", price: 200, description: "Security monitoring agent", features: ["Threat Detection", "Auto Response", "24/7 Monitoring"], available: true, premium: true },
    { name: "analyst.aiagents", category: "aiagents", price: 200, description: "Business intelligence agent", features: ["Data Analysis", "Report Generation", "KPI Tracking"], available: true, premium: true },
    { name: "coach.aiagents", category: "aiagents", price: 200, description: "Performance coaching agent", features: ["Goal Setting", "Progress Tracking", "Motivation"], available: true, premium: true },
    { name: "tutor.aiagents", category: "aiagents", price: 200, description: "Personalized learning agent", features: ["Adaptive Learning", "Progress Tracking", "Skill Assessment"], available: true, premium: true },
    { name: "researcher.aiagents", category: "aiagents", price: 200, description: "Research automation agent", features: ["Data Mining", "Literature Review", "Synthesis"], available: true, premium: true },
    { name: "translator.aiagents", category: "aiagents", price: 200, description: "Real-time translation agent", features: ["Multi-language", "Context Aware", "Cultural Adaptation"], available: true, premium: true },
    { name: "moderator.aiagents", category: "aiagents", price: 200, description: "Content moderation agent", features: ["Toxicity Detection", "Spam Filter", "Community Rules"], available: true, premium: true },

    // .madeindetroit - Detroit Origin Verification ($50)
    { name: "automotive.madeindetroit", category: "madeindetroit", price: 50, description: "Detroit automotive innovation", features: ["Auto Industry", "Detroit Verified", "Manufacturing"], available: true, premium: false },
    { name: "techno.madeindetroit", category: "madeindetroit", price: 50, description: "Detroit techno music heritage", features: ["Music Industry", "Cultural Heritage", "Detroit Born"], available: true, premium: false },
    { name: "motors.madeindetroit", category: "madeindetroit", price: 50, description: "Motor City manufacturing", features: ["Manufacturing", "Industrial Heritage", "Detroit Pride"], available: true, premium: false },
    { name: "innovation.madeindetroit", category: "madeindetroit", price: 50, description: "Detroit innovation hub", features: ["Innovation Center", "Startup Ecosystem", "Tech Hub"], available: true, premium: false },
    { name: "renaissance.madeindetroit", category: "madeindetroit", price: 50, description: "Detroit renaissance movement", features: ["Urban Renewal", "Cultural Revival", "Community"], available: true, premium: false },
    { name: "riverfront.madeindetroit", category: "madeindetroit", price: 50, description: "Detroit riverfront development", features: ["Waterfront", "Development", "Tourism"], available: true, premium: false },
    { name: "downtown.madeindetroit", category: "madeindetroit", price: 50, description: "Downtown Detroit business", features: ["Business District", "Commercial", "Urban Core"], available: true, premium: false },
    { name: "corktown.madeindetroit", category: "madeindetroit", price: 50, description: "Historic Corktown district", features: ["Historic District", "Neighborhood", "Heritage"], available: true, premium: false },
    { name: "midtown.madeindetroit", category: "madeindetroit", price: 50, description: "Midtown Detroit culture", features: ["Cultural District", "Arts", "Entertainment"], available: true, premium: false },
    { name: "eastside.madeindetroit", category: "madeindetroit", price: 50, description: "East Detroit community", features: ["Community", "Residential", "Local Business"], available: true, premium: false },

    // .vibecoder - Developer Community ($75)
    { name: "frontend.vibecoder", category: "vibecoder", price: 75, description: "Frontend development community", features: ["React/Vue/Angular", "UI/UX Design", "Component Library"], available: true, premium: false },
    { name: "backend.vibecoder", category: "vibecoder", price: 75, description: "Backend development hub", features: ["API Development", "Database Design", "Server Architecture"], available: true, premium: false },
    { name: "fullstack.vibecoder", category: "vibecoder", price: 75, description: "Full-stack development", features: ["End-to-end Development", "DevOps", "Cloud Deployment"], available: true, premium: false },
    { name: "mobile.vibecoder", category: "vibecoder", price: 75, description: "Mobile app development", features: ["iOS/Android", "React Native", "Flutter"], available: true, premium: false },
    { name: "ai.vibecoder", category: "vibecoder", price: 75, description: "AI/ML development community", features: ["Machine Learning", "Deep Learning", "AI Models"], available: true, premium: false },
    { name: "blockchain.vibecoder", category: "vibecoder", price: 75, description: "Blockchain development", features: ["Smart Contracts", "DeFi", "Web3"], available: true, premium: false },
    { name: "gamedev.vibecoder", category: "vibecoder", price: 75, description: "Game development community", features: ["Unity", "Unreal Engine", "Indie Games"], available: true, premium: false },
    { name: "devops.vibecoder", category: "vibecoder", price: 75, description: "DevOps and infrastructure", features: ["CI/CD", "Docker", "Kubernetes"], available: true, premium: false },
    { name: "security.vibecoder", category: "vibecoder", price: 75, description: "Cybersecurity development", features: ["Penetration Testing", "Security Audits", "Encryption"], available: true, premium: false },
    { name: "opensource.vibecoder", category: "vibecoder", price: 75, description: "Open source projects", features: ["Community Projects", "Collaboration", "Code Sharing"], available: true, premium: false },

    // .k-12 - Educational Institutions (FREE)
    { name: "detroitpublic.k-12", category: "k12", price: 0, description: "Detroit Public Schools Community District", features: ["K-12 Education", "Public Schools", "Free Access"], available: true, premium: false },
    { name: "birmingham.k-12", category: "k12", price: 0, description: "Birmingham Public Schools", features: ["K-12 Education", "Suburban District", "Free Access"], available: true, premium: false },
    { name: "bloomfield.k-12", category: "k12", price: 0, description: "Bloomfield Hills Schools", features: ["K-12 Education", "High Performance", "Free Access"], available: true, premium: false },
    { name: "rochester.k-12", category: "k12", price: 0, description: "Rochester Community Schools", features: ["K-12 Education", "Community Focus", "Free Access"], available: true, premium: false },
    { name: "troy.k-12", category: "k12", price: 0, description: "Troy School District", features: ["K-12 Education", "Academic Excellence", "Free Access"], available: true, premium: false },
    { name: "westbloomfield.k-12", category: "k12", price: 0, description: "West Bloomfield Schools", features: ["K-12 Education", "Innovation Focus", "Free Access"], available: true, premium: false },
    { name: "novi.k-12", category: "k12", price: 0, description: "Novi Community Schools", features: ["K-12 Education", "Technology Integration", "Free Access"], available: true, premium: false },
    { name: "plymouth.k-12", category: "k12", price: 0, description: "Plymouth-Canton Schools", features: ["K-12 Education", "Large District", "Free Access"], available: true, premium: false },
    { name: "livonia.k-12", category: "k12", price: 0, description: "Livonia Public Schools", features: ["K-12 Education", "Established District", "Free Access"], available: true, premium: false },
    { name: "farmington.k-12", category: "k12", price: 0, description: "Farmington Public Schools", features: ["K-12 Education", "Community Schools", "Free Access"], available: true, premium: false },

    // .aifactory - Manufacturing & Production ($100)
    { name: "automotive.aifactory", category: "aifactory", price: 100, description: "Automotive manufacturing AI", features: ["Assembly Line AI", "Quality Control", "Predictive Maintenance"], available: true, premium: false },
    { name: "aerospace.aifactory", category: "aifactory", price: 100, description: "Aerospace manufacturing", features: ["Precision Manufacturing", "Safety Systems", "Compliance"], available: true, premium: false },
    { name: "electronics.aifactory", category: "aifactory", price: 100, description: "Electronics production", features: ["Circuit Manufacturing", "Component Testing", "Quality Assurance"], available: true, premium: false },
    { name: "pharmaceutical.aifactory", category: "aifactory", price: 100, description: "Pharmaceutical manufacturing", features: ["Drug Production", "FDA Compliance", "Batch Tracking"], available: true, premium: false },
    { name: "textiles.aifactory", category: "aifactory", price: 100, description: "Textile manufacturing", features: ["Fabric Production", "Pattern Recognition", "Quality Control"], available: true, premium: false },

    // .devcommunity - Developer Community ($75)
    { name: "frontend.devcommunity", category: "devcommunity", price: 75, description: "Frontend development community", features: ["React/Vue/Angular", "UI/UX Design", "Component Library"], available: true, premium: false },
    { name: "backend.devcommunity", category: "devcommunity", price: 75, description: "Backend development hub", features: ["API Development", "Database Design", "Server Architecture"], available: true, premium: false },
    { name: "fullstack.devcommunity", category: "devcommunity", price: 75, description: "Full-stack development", features: ["End-to-end Development", "DevOps", "Cloud Deployment"], available: true, premium: false },
    { name: "ai.devcommunity", category: "devcommunity", price: 75, description: "AI/ML development community", features: ["Machine Learning", "Deep Learning", "AI Models"], available: true, premium: false },
    { name: "blockchain.devcommunity", category: "devcommunity", price: 75, description: "Blockchain development", features: ["Smart Contracts", "DeFi", "Web3"], available: true, premium: false },

    // .humanintheloop - HITL Protocol ($150)
    { name: "operators.humanintheloop", category: "humanintheloop", price: 150, description: "Human operators in AI workflows", features: ["AI Training", "Quality Assurance", "Workflow Management"], available: true, premium: false },
    { name: "reviewers.humanintheloop", category: "humanintheloop", price: 150, description: "AI review and alignment", features: ["Content Review", "Model Alignment", "Bias Detection"], available: true, premium: false },
    { name: "trainers.humanintheloop", category: "humanintheloop", price: 150, description: "AI model training specialists", features: ["Data Labeling", "Model Fine-tuning", "Performance Optimization"], available: true, premium: false },

    // .iaas - Infrastructure as a Service ($200)
    { name: "compute.iaas", category: "iaas", price: 200, description: "Compute infrastructure service", features: ["GPU Clusters", "Auto-scaling", "Load Balancing"], available: true, premium: true },
    { name: "storage.iaas", category: "iaas", price: 200, description: "Distributed storage service", features: ["Object Storage", "Data Replication", "Backup Systems"], available: true, premium: true },
    { name: "network.iaas", category: "iaas", price: 200, description: "Network infrastructure", features: ["CDN", "Load Balancers", "VPN"], available: true, premium: true },

    // .gmt - GMT Protocol ($300)
    { name: "multimodal.gmt", category: "gmt", price: 300, description: "Generative Multimodal Transformer", features: ["Text Generation", "Image Processing", "Audio Synthesis"], available: true, premium: true },
    { name: "vision.gmt", category: "gmt", price: 300, description: "Computer vision GMT", features: ["Image Recognition", "Object Detection", "Scene Understanding"], available: true, premium: true },

    // .gmt-7 - GMT-7 Early Access ($500)
    { name: "earlyaccess.gmt-7", category: "gmt7", price: 500, description: "GMT-7 early access program", features: ["Beta Testing", "Priority Support", "Advanced Features"], available: true, premium: true },
    { name: "research.gmt-7", category: "gmt7", price: 500, description: "GMT-7 research access", features: ["Research License", "Academic Use", "Publication Rights"], available: true, premium: true },

    // .agenticweb - Agentic Web Protocol ($299)
    { name: "protocol.agenticweb", category: "agenticweb", price: 299, description: "Core agentic web protocol", features: ["Agent Deployment", "Web Integration", "Protocol Access"], available: true, premium: true },
    { name: "agents.agenticweb", category: "agenticweb", price: 299, description: "AI agent marketplace", features: ["Agent Registry", "Deployment Tools", "Monetization"], available: true, premium: true },
    { name: "deploy.agenticweb", category: "agenticweb", price: 299, description: "Agent deployment platform", features: ["One-Click Deploy", "Auto-scaling", "Monitoring"], available: true, premium: true },

    // .newinternet - New Internet Infrastructure ($399)
    { name: "infrastructure.newinternet", category: "newinternet", price: 399, description: "Next-gen internet infrastructure", features: ["Decentralized", "Agent-Native", "Sovereign"], available: true, premium: true },
    { name: "protocol.newinternet", category: "newinternet", price: 399, description: "New internet protocol layer", features: ["Protocol Stack", "Interoperability", "Standards"], available: true, premium: true },
    { name: "governance.newinternet", category: "newinternet", price: 399, description: "Internet governance framework", features: ["Decentralized Gov", "Voting Systems", "Policy Tools"], available: true, premium: true },
  ];

  const categories = [
    { id: "all", name: "All Handles", emoji: "🌐", count: 95 },
    { id: "aiagents", name: ".aiagents", emoji: "🤖", count: 10 },
    { id: "madeindetroit", name: ".madeindetroit", emoji: "🏭", count: 10 },
    { id: "vibecoder", name: ".vibecoder", emoji: "💻", count: 10 },
    { id: "k12", name: ".k-12", emoji: "🏫", count: 10 },
    { id: "aifactory", name: ".aifactory", emoji: "🏭", count: 5 },
    { id: "devcommunity", name: ".devcommunity", emoji: "👾", count: 5 },
    { id: "humanintheloop", name: ".humanintheloop", emoji: "🔄", count: 3 },
    { id: "iaas", name: ".iaas", emoji: "⚡", count: 3 },
    { id: "gmt", name: ".gmt", emoji: "🧠", count: 2 },
    { id: "gmt7", name: ".gmt-7", emoji: "🚀", count: 2 },
    { id: "agenticweb", name: ".agenticweb", emoji: "🌐", count: 3 },
    { id: "newinternet", name: ".newinternet", emoji: "🌍", count: 3 },
  ];

  const filteredHandles = unifiedHandles
    .filter(handle => {
      const matchesSearch = handle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           handle.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || handle.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low": return a.price - b.price;
        case "price-high": return b.price - a.price;
        case "premium": return (b.premium ? 1 : 0) - (a.premium ? 1 : 0);
        default: return a.name.localeCompare(b.name);
      }
    });

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navigation />
      
      <ConditionalBackground 
        intensity={0.6}
        particleCount={60}
        floatingCount={0}
        gridSize={150}
      />

      <div className="relative z-10 pt-24">
        {/* Header */}
        <section className="py-16">
          <div className="container-max section-padding">
            <ScrollReveal direction="up" delay={200}>
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
                  <span className="text-xl">🌐</span>
                  <span className="text-cyan-400 font-semibold">Domain Registry</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Unified AI Registry
                  </span>
                  <br />
                  <span className="text-white">Claim Your Handle</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                  Register AI agents, Detroit-verified domains, developer tools, educational handles, and manufacturing endpoints.
                  Own your piece of the AI-native infrastructure.
                </p>
              </div>
            </ScrollReveal>

            {/* Search and Filters */}
            <ScrollReveal direction="up" delay={400}>
              <div className="max-w-4xl mx-auto mb-12">
                <div className="bg-black/50 backdrop-blur-xl rounded-2xl p-6 border border-cyan-500/20">
                  {/* Search Bar */}
                  <div className="relative mb-6">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search handles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-12 pr-4 py-4 bg-black/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>

                  {/* Category Filters */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {categories.map((category) => {
                      return (
                        <button
                          key={category.id}
                          onClick={() => setSelectedCategory(category.id)}
                          className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-200 ${
                            selectedCategory === category.id
                              ? "bg-cyan-500/20 border-cyan-500/40 text-cyan-400"
                              : "bg-black/30 border-gray-600 text-gray-300 hover:border-cyan-500/30"
                          }`}
                        >
                          <span className="text-lg">{category.emoji}</span>
                          <span className="text-sm font-medium">{category.name}</span>
                          <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">{category.count}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Sort Options */}
                  <div className="flex items-center space-x-4">
                    <Filter className="w-4 h-4 text-gray-400" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-black/50 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="name">Sort by Name</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="premium">Premium First</option>
                    </select>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Results */}
        <section className="pb-24">
          <div className="container-max section-padding">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredHandles.map((handle, index) => (
                <ScrollReveal key={handle.name} direction="up" delay={200 + index * 50}>
                  <div className={`bg-black/50 backdrop-blur-sm rounded-2xl p-6 border transition-all duration-300 hover:scale-105 ${
                    handle.premium 
                      ? "border-yellow-500/40 bg-gradient-to-br from-yellow-500/5 to-orange-500/5" 
                      : "border-cyan-500/20 hover:border-cyan-500/40"
                  }`}>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{handle.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          handle.category === 'aiagents' ? 'bg-purple-500/20 text-purple-400' :
                          handle.category === 'madeindetroit' ? 'bg-yellow-500/20 text-yellow-400' :
                          handle.category === 'vibecoder' ? 'bg-green-500/20 text-green-400' :
                          handle.category === 'k12' ? 'bg-blue-500/20 text-blue-400' :
                          handle.category === 'aifactory' ? 'bg-orange-500/20 text-orange-400' :
                          handle.category === 'devcommunity' ? 'bg-cyan-500/20 text-cyan-400' :
                          handle.category === 'humanintheloop' ? 'bg-red-500/20 text-red-400' :
                          handle.category === 'iaas' ? 'bg-indigo-500/20 text-indigo-400' :
                          handle.category === 'gmt' ? 'bg-pink-500/20 text-pink-400' :
                          handle.category === 'gmt7' ? 'bg-rose-500/20 text-rose-400' :
                          handle.category === 'agenticweb' ? 'bg-teal-500/20 text-teal-400' :
                          handle.category === 'newinternet' ? 'bg-emerald-500/20 text-emerald-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {handle.category.replace('-', ' ')}
                        </span>
                      </div>
                      {handle.premium && (
                        <span className="text-yellow-400 text-lg">⭐</span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4">{handle.description}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {handle.features.map((feature) => (
                        <span key={feature} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-cyan-400">${handle.price}</span>
                        <span className="text-gray-400 text-sm ml-1">one-time</span>
                      </div>
                      <Button
                        variant={handle.available ? "gradient" : "ghost"}
                        size="sm"
                        disabled={!handle.available}
                        className={handle.available 
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400" 
                          : "opacity-50 cursor-not-allowed"
                        }
                      >
                        {handle.available ? "Register" : "Taken"}
                      </Button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {filteredHandles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No handles found matching your criteria.</p>
                <p className="text-gray-500 text-sm mt-2">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
