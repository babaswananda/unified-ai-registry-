"use client";

import { School, Building2, MapPin, Factory, Star } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function HyperlocalHandlesSection() {
  const handleCategories = [
    {
      emoji: "🏫",
      title: "All U.S. Public Schools (K–12)",
      description: "Free AI handles for every classroom",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20"
    },
    {
      emoji: "🏢",
      title: "Community & University Campuses",
      description: "Higher education AI infrastructure",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20"
    },
    {
      emoji: "📍",
      title: "City & State Governments",
      description: "Municipal AI deployment",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20"
    },
    {
      emoji: "🏭",
      title: "U.S. Manufacturers via .MadeInUSA",
      description: "American manufacturing intelligence",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/20"
    },
    {
      emoji: "⭐",
      title: "Detroit-Origin via .MadeInDetroit",
      description: "Motor City innovation hub",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/20"
    }
  ];

  const exampleHandles = [
    { handle: "detroit.aiagents", category: "Municipal", price: "Priority" },
    { handle: "schoolname.aiagents", category: "Education", price: "Free" },
    { handle: "companyname.aiagents", category: "Manufacturing", price: "Premium" },
    { handle: "productname.madeindetroit", category: "Detroit", price: "Exclusive" },
    { handle: "districtname.k-12", category: "District", price: "Institutional" }
  ];

  return (
    <section className="py-24 text-white relative overflow-hidden">
      <ConditionalBackground 
        intensity={0.6}
        particleCount={80}
        floatingCount={0}
        gridSize={120}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-green-500/10 border border-green-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">📍</span>
            <span className="text-green-400 font-semibold">Hyperlocal Handle Infrastructure</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">"Every city. Every campus.</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Every cause. Every child.
            </span>
            <br />
            <span className="text-white">Their own agent, their own intelligence."</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            We're issuing first-party AI handles to institutions across America, 
            built on sovereign, decentralized naming systems — all tied into the .aiagents root protocol.
          </p>
        </div>

        {/* Handle Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 animate-slide-up" style={{ animationDelay: "200ms" }}>
          {handleCategories.map((category, index) => {
            return (
              <div
                key={category.title}
                className={`${category.bgColor} ${category.borderColor} border backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-4">{category.emoji}</div>
                <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </div>
            );
          })}
        </div>

        {/* Example Handles */}
        <div className="bg-black/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 mb-16 animate-slide-up" style={{ animationDelay: "400ms" }}>
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">Example Handle Structure</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {exampleHandles.map((item, index) => (
              <div
                key={item.handle}
                className="bg-black/30 border border-gray-600 rounded-lg p-4 text-center hover:border-cyan-500/30 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-cyan-400 font-semibold mb-2">{item.handle}</h4>
                <div className="space-y-1">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.category === 'Municipal' ? 'bg-green-500/20 text-green-400' :
                    item.category === 'Education' ? 'bg-blue-500/20 text-blue-400' :
                    item.category === 'Manufacturing' ? 'bg-red-500/20 text-red-400' :
                    item.category === 'Detroit' ? 'bg-cyan-500/20 text-cyan-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {item.category}
                  </span>
                  <p className="text-gray-300 text-sm font-medium">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sovereignty Message */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-purple-400 mb-4">Permanent AI-Native Identities</h3>
            <p className="text-lg text-gray-300">
              Built on sovereign, decentralized naming systems — all tied into the .aiagents root protocol — 
              permanent AI-native identities that power every layer of Unified AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
