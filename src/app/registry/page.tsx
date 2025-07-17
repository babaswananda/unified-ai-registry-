"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Search, Filter, Star, Zap, Code, Brain, Globe } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface DomainHandle {
  name: string;
  category: 'compute' | 'aiagent' | 'developer' | 'vibe-coder';
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

  // Dummy handles data - you'll replace this with your actual list
  const dummyHandles: DomainHandle[] = [
    // Structured Compute Endpoints (25 examples)
    { name: "compute.ai", category: "compute", price: 299, description: "High-performance AI compute endpoint", features: ["GPU Access", "Auto-scaling", "24/7 Uptime"], available: true, premium: true },
    { name: "neural.compute", category: "compute", price: 199, description: "Neural network processing hub", features: ["ML Pipeline", "Data Processing", "API Gateway"], available: true, premium: false },
    { name: "quantum.edge", category: "compute", price: 499, description: "Quantum-ready edge computing", features: ["Quantum Sim", "Edge Deploy", "Low Latency"], available: true, premium: true },
    { name: "tensor.flow", category: "compute", price: 149, description: "TensorFlow optimized endpoint", features: ["TF Runtime", "Model Serving", "Batch Processing"], available: true, premium: false },
    { name: "gpu.cluster", category: "compute", price: 399, description: "Distributed GPU cluster access", features: ["Multi-GPU", "Cluster Mgmt", "Load Balancing"], available: false, premium: true },
    { name: "edge.compute", category: "compute", price: 179, description: "Edge computing infrastructure", features: ["Edge Nodes", "CDN", "Real-time"], available: true, premium: false },
    { name: "ml.pipeline", category: "compute", price: 229, description: "Machine learning pipeline", features: ["Data Flow", "Model Training", "Deployment"], available: true, premium: false },
    { name: "cloud.native", category: "compute", price: 189, description: "Cloud-native compute platform", features: ["Kubernetes", "Microservices", "Serverless"], available: true, premium: false },
    { name: "hpc.grid", category: "compute", price: 449, description: "High-performance computing grid", features: ["Parallel Processing", "Scientific Computing", "Simulation"], available: true, premium: true },
    { name: "ai.accelerator", category: "compute", price: 349, description: "AI acceleration platform", features: ["TPU Access", "Model Optimization", "Inference"], available: true, premium: true },
    { name: "data.mesh", category: "compute", price: 199, description: "Distributed data processing", features: ["Data Lake", "Stream Processing", "Analytics"], available: true, premium: false },
    { name: "vector.db", category: "compute", price: 159, description: "Vector database endpoint", features: ["Embeddings", "Similarity Search", "Vector Ops"], available: true, premium: false },
    { name: "inference.engine", category: "compute", price: 249, description: "AI inference optimization", features: ["Model Serving", "Batch Inference", "Real-time"], available: true, premium: false },
    { name: "distributed.ai", category: "compute", price: 329, description: "Distributed AI computing", features: ["Federated Learning", "Multi-node", "Consensus"], available: true, premium: true },
    { name: "serverless.ml", category: "compute", price: 139, description: "Serverless ML platform", features: ["Auto-scale", "Pay-per-use", "Event-driven"], available: true, premium: false },
    { name: "blockchain.compute", category: "compute", price: 279, description: "Blockchain compute network", features: ["Decentralized", "Smart Contracts", "Consensus"], available: true, premium: false },
    { name: "fog.computing", category: "compute", price: 169, description: "Fog computing infrastructure", features: ["IoT Integration", "Local Processing", "Low Latency"], available: true, premium: false },
    { name: "hybrid.cloud", category: "compute", price: 219, description: "Hybrid cloud platform", features: ["Multi-cloud", "On-premise", "Seamless"], available: true, premium: false },
    { name: "auto.scale", category: "compute", price: 189, description: "Auto-scaling compute service", features: ["Dynamic Scaling", "Cost Optimization", "Performance"], available: true, premium: false },
    { name: "batch.processor", category: "compute", price: 129, description: "Batch processing engine", features: ["Job Scheduling", "Resource Mgmt", "Monitoring"], available: true, premium: false },
    { name: "stream.compute", category: "compute", price: 199, description: "Stream computing platform", features: ["Real-time", "Event Processing", "Low Latency"], available: true, premium: false },
    { name: "gpu.farm", category: "compute", price: 399, description: "GPU computing farm", features: ["CUDA Support", "Parallel Computing", "High Memory"], available: false, premium: true },
    { name: "quantum.compute", category: "compute", price: 599, description: "Quantum computing access", features: ["Quantum Gates", "Superposition", "Entanglement"], available: false, premium: true },
    { name: "neuromorphic.chip", category: "compute", price: 449, description: "Neuromorphic computing", features: ["Brain-inspired", "Low Power", "Adaptive"], available: true, premium: true },
    { name: "photonic.compute", category: "compute", price: 379, description: "Photonic computing platform", features: ["Light-based", "Ultra-fast", "Parallel"], available: true, premium: true },

    // AI Agent Handles (25 examples)
    { name: "assistant.ai", category: "aiagent", price: 99, description: "Personal AI assistant agent", features: ["NLP", "Task Automation", "Learning"], available: true, premium: false },
    { name: "oracle.agent", category: "aiagent", price: 299, description: "Predictive analytics agent", features: ["Forecasting", "Data Analysis", "Insights"], available: true, premium: true },
    { name: "guardian.ai", category: "aiagent", price: 199, description: "Security monitoring agent", features: ["Threat Detection", "Auto Response", "Monitoring"], available: true, premium: false },
    { name: "curator.bot", category: "aiagent", price: 149, description: "Content curation agent", features: ["Content Filter", "Recommendation", "Personalization"], available: true, premium: false },
    { name: "trader.ai", category: "aiagent", price: 599, description: "Autonomous trading agent", features: ["Market Analysis", "Auto Trading", "Risk Mgmt"], available: false, premium: true },
    { name: "researcher.ai", category: "aiagent", price: 179, description: "Research automation agent", features: ["Data Mining", "Literature Review", "Synthesis"], available: true, premium: false },
    { name: "scheduler.bot", category: "aiagent", price: 89, description: "Intelligent scheduling agent", features: ["Calendar Mgmt", "Meeting Optimization", "Reminders"], available: true, premium: false },
    { name: "translator.ai", category: "aiagent", price: 129, description: "Real-time translation agent", features: ["Multi-language", "Context Aware", "Cultural Adaptation"], available: true, premium: false },
    { name: "moderator.ai", category: "aiagent", price: 159, description: "Content moderation agent", features: ["Toxicity Detection", "Spam Filter", "Community Rules"], available: true, premium: false },
    { name: "optimizer.bot", category: "aiagent", price: 219, description: "Performance optimization agent", features: ["Resource Optimization", "Cost Reduction", "Efficiency"], available: true, premium: false },
    { name: "analyst.ai", category: "aiagent", price: 249, description: "Business intelligence agent", features: ["Data Analysis", "Report Generation", "KPI Tracking"], available: true, premium: false },
    { name: "recruiter.bot", category: "aiagent", price: 199, description: "AI recruitment agent", features: ["Resume Screening", "Candidate Matching", "Interview Scheduling"], available: true, premium: false },
    { name: "tutor.ai", category: "aiagent", price: 139, description: "Personalized learning agent", features: ["Adaptive Learning", "Progress Tracking", "Skill Assessment"], available: true, premium: false },
    { name: "therapist.bot", category: "aiagent", price: 179, description: "Mental health support agent", features: ["Emotional Support", "Coping Strategies", "Crisis Detection"], available: true, premium: false },
    { name: "coach.ai", category: "aiagent", price: 169, description: "Performance coaching agent", features: ["Goal Setting", "Progress Tracking", "Motivation"], available: true, premium: false },
    { name: "negotiator.ai", category: "aiagent", price: 299, description: "Automated negotiation agent", features: ["Deal Optimization", "Strategy Planning", "Win-Win Solutions"], available: true, premium: true },
    { name: "detective.bot", category: "aiagent", price: 249, description: "Investigation and analysis agent", features: ["Pattern Recognition", "Evidence Analysis", "Case Building"], available: true, premium: false },
    { name: "creative.ai", category: "aiagent", price: 189, description: "Creative content generation agent", features: ["Content Creation", "Idea Generation", "Style Adaptation"], available: true, premium: false },
    { name: "validator.bot", category: "aiagent", price: 119, description: "Data validation agent", features: ["Quality Assurance", "Error Detection", "Compliance Check"], available: true, premium: false },
    { name: "synthesizer.ai", category: "aiagent", price: 209, description: "Information synthesis agent", features: ["Data Fusion", "Summary Generation", "Insight Extraction"], available: true, premium: false },
    { name: "predictor.bot", category: "aiagent", price: 279, description: "Predictive modeling agent", features: ["Trend Analysis", "Risk Assessment", "Scenario Planning"], available: true, premium: true },
    { name: "companion.ai", category: "aiagent", price: 149, description: "AI companion agent", features: ["Emotional Intelligence", "Conversation", "Companionship"], available: true, premium: false },
    { name: "strategist.bot", category: "aiagent", price: 329, description: "Strategic planning agent", features: ["Strategic Analysis", "Planning", "Decision Support"], available: false, premium: true },
    { name: "innovator.ai", category: "aiagent", price: 259, description: "Innovation catalyst agent", features: ["Idea Generation", "Innovation Process", "Creativity Boost"], available: true, premium: false },
    { name: "philosopher.bot", category: "aiagent", price: 199, description: "Philosophical reasoning agent", features: ["Ethical Analysis", "Logical Reasoning", "Wisdom"], available: true, premium: false },

    // Developer Handles (25 examples)
    { name: "dev.stack", category: "developer", price: 79, description: "Full-stack development environment", features: ["IDE Access", "Version Control", "CI/CD"], available: true, premium: false },
    { name: "code.forge", category: "developer", price: 129, description: "Advanced code generation tools", features: ["AI Coding", "Code Review", "Optimization"], available: true, premium: false },
    { name: "api.builder", category: "developer", price: 99, description: "API development and testing", features: ["API Design", "Testing Suite", "Documentation"], available: true, premium: false },
    { name: "deploy.fast", category: "developer", price: 159, description: "Rapid deployment platform", features: ["One-Click Deploy", "Auto Scaling", "Monitoring"], available: true, premium: false },
    { name: "debug.pro", category: "developer", price: 199, description: "Advanced debugging tools", features: ["Real-time Debug", "Performance Analysis", "Error Tracking"], available: true, premium: true },
    { name: "test.suite", category: "developer", price: 89, description: "Comprehensive testing framework", features: ["Unit Tests", "Integration Tests", "Coverage"], available: true, premium: false },
    { name: "git.flow", category: "developer", price: 69, description: "Git workflow optimization", features: ["Branch Management", "Merge Strategies", "Collaboration"], available: true, premium: false },
    { name: "docker.hub", category: "developer", price: 109, description: "Container development platform", features: ["Docker Images", "Orchestration", "Registry"], available: true, premium: false },
    { name: "micro.services", category: "developer", price: 149, description: "Microservices architecture tools", features: ["Service Mesh", "API Gateway", "Discovery"], available: true, premium: false },
    { name: "cloud.dev", category: "developer", price: 119, description: "Cloud development environment", features: ["Remote IDE", "Cloud Resources", "Collaboration"], available: true, premium: false },
    { name: "mobile.dev", category: "developer", price: 139, description: "Mobile development platform", features: ["Cross-platform", "Native Tools", "App Store"], available: true, premium: false },
    { name: "web.dev", category: "developer", price: 99, description: "Web development toolkit", features: ["Frontend Tools", "Backend APIs", "Hosting"], available: true, premium: false },
    { name: "ai.dev", category: "developer", price: 179, description: "AI development platform", features: ["ML Models", "Training Data", "Deployment"], available: true, premium: false },
    { name: "blockchain.dev", category: "developer", price: 199, description: "Blockchain development tools", features: ["Smart Contracts", "DApp Tools", "Testing"], available: true, premium: false },
    { name: "game.dev", category: "developer", price: 159, description: "Game development environment", features: ["Game Engine", "Asset Store", "Publishing"], available: true, premium: false },
    { name: "data.dev", category: "developer", price: 129, description: "Data engineering platform", features: ["ETL Tools", "Data Pipeline", "Analytics"], available: true, premium: false },
    { name: "security.dev", category: "developer", price: 189, description: "Security development tools", features: ["Vulnerability Scan", "Penetration Testing", "Compliance"], available: true, premium: false },
    { name: "devops.pro", category: "developer", price: 169, description: "DevOps automation platform", features: ["Infrastructure as Code", "Monitoring", "Automation"], available: true, premium: false },
    { name: "low.code", category: "developer", price: 89, description: "Low-code development platform", features: ["Visual Builder", "Drag & Drop", "Templates"], available: true, premium: false },
    { name: "no.code", category: "developer", price: 79, description: "No-code development tools", features: ["Visual Interface", "Workflow Builder", "Integrations"], available: true, premium: false },
    { name: "rapid.proto", category: "developer", price: 109, description: "Rapid prototyping tools", features: ["Quick Mockups", "Interactive Prototypes", "User Testing"], available: true, premium: false },
    { name: "code.review", category: "developer", price: 119, description: "Code review automation", features: ["Static Analysis", "Peer Review", "Quality Gates"], available: true, premium: false },
    { name: "performance.monitor", category: "developer", price: 139, description: "Application performance monitoring", features: ["Real-time Metrics", "Alerting", "Optimization"], available: true, premium: false },
    { name: "error.tracker", category: "developer", price: 99, description: "Error tracking and logging", features: ["Error Monitoring", "Log Analysis", "Debugging"], available: true, premium: false },
    { name: "code.quality", category: "developer", price: 129, description: "Code quality assurance", features: ["Quality Metrics", "Best Practices", "Refactoring"], available: true, premium: false },

    // Vibe Coder Handles (25 examples)
    { name: "vibe.code", category: "vibe-coder", price: 249, description: "AI-powered creative coding", features: ["Creative AI", "Style Transfer", "Generative Code"], available: true, premium: true },
    { name: "flow.state", category: "vibe-coder", price: 179, description: "Optimal coding flow environment", features: ["Focus Mode", "Distraction Block", "Flow Metrics"], available: true, premium: false },
    { name: "zen.dev", category: "vibe-coder", price: 129, description: "Mindful development experience", features: ["Meditation Timer", "Stress Monitor", "Wellness Tips"], available: true, premium: false },
    { name: "creative.ai", category: "vibe-coder", price: 299, description: "Creative AI collaboration", features: ["AI Brainstorm", "Idea Generation", "Creative Prompts"], available: true, premium: true },
    { name: "harmony.code", category: "vibe-coder", price: 199, description: "Harmonious coding environment", features: ["Music Integration", "Ambient Sounds", "Rhythm Coding"], available: false, premium: false },
    { name: "aesthetic.dev", category: "vibe-coder", price: 159, description: "Beautiful code aesthetics", features: ["Code Beautification", "Theme Customization", "Visual Appeal"], available: true, premium: false },
    { name: "mindful.code", category: "vibe-coder", price: 139, description: "Mindful coding practices", features: ["Breathing Reminders", "Posture Alerts", "Mental Health"], available: true, premium: false },
    { name: "artistic.dev", category: "vibe-coder", price: 189, description: "Artistic development tools", features: ["Visual Coding", "Creative Patterns", "Art Generation"], available: true, premium: false },
    { name: "mood.dev", category: "vibe-coder", price: 149, description: "Mood-based development", features: ["Mood Tracking", "Environment Adaptation", "Emotional Coding"], available: true, premium: false },
    { name: "inspiration.code", category: "vibe-coder", price: 169, description: "Inspiration-driven coding", features: ["Daily Inspiration", "Creative Challenges", "Motivation"], available: true, premium: false },
    { name: "wellness.dev", category: "vibe-coder", price: 119, description: "Developer wellness platform", features: ["Health Tracking", "Break Reminders", "Ergonomics"], available: true, premium: false },
    { name: "nature.code", category: "vibe-coder", price: 139, description: "Nature-inspired coding", features: ["Natural Themes", "Outdoor Sounds", "Biophilic Design"], available: true, premium: false },
    { name: "cosmic.dev", category: "vibe-coder", price: 199, description: "Cosmic coding experience", features: ["Space Themes", "Stellar Sounds", "Universe Inspiration"], available: true, premium: false },
    { name: "retro.code", category: "vibe-coder", price: 129, description: "Retro coding aesthetics", features: ["Vintage Themes", "Retro Sounds", "Nostalgic UI"], available: true, premium: false },
    { name: "neon.dev", category: "vibe-coder", price: 159, description: "Neon cyberpunk coding", features: ["Neon Themes", "Synthwave Music", "Cyberpunk Aesthetics"], available: true, premium: false },
    { name: "minimal.code", category: "vibe-coder", price: 109, description: "Minimalist coding environment", features: ["Clean Interface", "Distraction-free", "Focus Enhancement"], available: true, premium: false },
    { name: "cozy.dev", category: "vibe-coder", price: 119, description: "Cozy coding atmosphere", features: ["Warm Themes", "Comfort Sounds", "Hygge Vibes"], available: true, premium: false },
    { name: "energetic.code", category: "vibe-coder", price: 149, description: "High-energy coding", features: ["Upbeat Music", "Vibrant Colors", "Energy Boost"], available: true, premium: false },
    { name: "calm.dev", category: "vibe-coder", price: 129, description: "Calming development space", features: ["Peaceful Sounds", "Soft Colors", "Relaxation"], available: true, premium: false },
    { name: "focus.zone", category: "vibe-coder", price: 139, description: "Deep focus coding zone", features: ["Concentration Tools", "Noise Cancellation", "Deep Work"], available: true, premium: false },
    { name: "creative.flow", category: "vibe-coder", price: 179, description: "Creative flow enhancement", features: ["Creativity Boost", "Flow Triggers", "Inspiration"], available: true, premium: false },
    { name: "ambient.code", category: "vibe-coder", price: 119, description: "Ambient coding environment", features: ["Ambient Sounds", "Atmospheric Lighting", "Immersion"], available: true, premium: false },
    { name: "dreamy.dev", category: "vibe-coder", price: 159, description: "Dreamy development experience", features: ["Ethereal Themes", "Dream Sounds", "Imagination"], available: true, premium: false },
    { name: "electric.code", category: "vibe-coder", price: 169, description: "Electric coding energy", features: ["Electric Themes", "High Energy", "Dynamic Interface"], available: true, premium: false },
    { name: "serene.dev", category: "vibe-coder", price: 139, description: "Serene coding sanctuary", features: ["Peaceful Environment", "Tranquil Sounds", "Serenity"], available: true, premium: false },
  ];

  const categories = [
    { id: "all", name: "All Handles", icon: Globe, count: 130 },
    { id: "compute", name: "Compute Endpoints", icon: Zap, count: 100 },
    { id: "aiagent", name: "AI Agents", icon: Brain, count: 12 },
    { id: "developer", name: "Developer Tools", icon: Code, count: 10 },
    { id: "vibe-coder", name: "Vibe Coders", icon: Star, count: 8 },
  ];

  const filteredHandles = dummyHandles
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
    <main className="min-h-screen bg-black text-white">
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
                  <Globe className="w-5 h-5 text-cyan-400" />
                  <span className="text-cyan-400 font-semibold">Domain Registry</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Claim Your Handle
                  </span>
                  <br />
                  <span className="text-white">In the Agentic Web</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
                  Register structured compute endpoints, AI agent handles, and developer tools. 
                  Own your piece of the autonomous internet infrastructure.
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
                      const Icon = category.icon;
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
                          <Icon className="w-4 h-4" />
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
                          handle.category === 'compute' ? 'bg-blue-500/20 text-blue-400' :
                          handle.category === 'aiagent' ? 'bg-purple-500/20 text-purple-400' :
                          handle.category === 'developer' ? 'bg-green-500/20 text-green-400' :
                          'bg-pink-500/20 text-pink-400'
                        }`}>
                          {handle.category.replace('-', ' ')}
                        </span>
                      </div>
                      {handle.premium && (
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
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
