"use client";

import { ArrowRight, Users, Building, Palette, Cog, MapPin } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";
import { Button } from "@/components/ui/Button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export default function WhoThisIsForSection() {
  const audiences = [
    {
      emoji: "🏗️",
      title: "Builders",
      description: "Launching agent-native apps",
      details: "Fork flows, deploy agents, monetize AI workflows",
      color: "from-cyan-400 to-blue-400"
    },
    {
      emoji: "🏛️", 
      title: "Institutions",
      description: "Deploying local AI systems",
      details: "Sovereign infrastructure, municipal priority access",
      color: "from-blue-400 to-purple-400"
    },
    {
      emoji: "🎨",
      title: "Creators",
      description: "Monetizing AI flows and experiences", 
      details: "VibeCoder tools, creative AI collaboration",
      color: "from-purple-400 to-pink-400"
    },
    {
      emoji: "🔄",
      title: "Operators",
      description: "Joining the human-in-the-loop economy",
      details: "AI training, review, workflow management",
      color: "from-pink-400 to-red-400"
    },
    {
      emoji: "🌆",
      title: "City Leaders",
      description: "Shaping sovereign infrastructure",
      details: "Policy frameworks, local governance, economic rails",
      color: "from-red-400 to-orange-400"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
      <ConditionalBackground 
        intensity={0.4}
        particleCount={40}
        floatingCount={0}
        gridSize={150}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
            <span className="text-2xl">🎯</span>
            <span className="text-cyan-400 font-semibold">Who This Is For</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              THE NEW ECONOMY
            </span>
            <br />
            <span className="text-white">Needs New Players</span>
          </h2>
          
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto">
            Whether you're building, governing, creating, or operating — there's a role for you in the Agent Internet.
          </p>
        </div>

        {/* Audiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {audiences.map((audience, index) => (
            <div
              key={audience.title}
              className="relative rounded-xl border border-gray-600 p-1 transition-all duration-300 hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GlowingEffect
                variant="cyan"
                spread={30}
                glow={true}
                disabled={false}
                proximity={48}
                inactiveZone={0.01}
                borderWidth={1}
              />
              <div className="relative bg-black/50 backdrop-blur-sm rounded-lg p-6 h-full">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4">{audience.emoji}</div>
                  <h3 className={`text-lg font-bold bg-gradient-to-r ${audience.color} bg-clip-text text-transparent`}>
                    {audience.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-medium">
                    {audience.description}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {audience.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <p className="text-lg text-gray-300 mb-6">
            Don't just use AI. <span className="text-cyan-400 font-semibold">Own your role in it.</span>
          </p>
          <Button
            variant="gradient"
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 text-lg font-semibold"
          >
            Join the Operator Class
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
