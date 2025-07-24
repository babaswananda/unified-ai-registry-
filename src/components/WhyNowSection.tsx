"use client";

import { TrendingUp, Zap, Globe } from "lucide-react";
import ConditionalBackground from "@/components/ui/ConditionalBackground";

export default function WhyNowSection() {
  const shifts = [
    {
      emoji: "🌍",
      title: "AI is no longer an app",
      subtitle: "it's an infrastructure layer",
      description: "The shift from AI-as-software to AI-as-protocol is happening now"
    },
    {
      emoji: "🔗",
      title: "Every fork is an economy",
      subtitle: "Every handle is a deployment node", 
      description: "Code becomes currency, deployment becomes ownership"
    },
    {
      emoji: "🏭",
      title: "From Detroit to the world",
      subtitle: "the Agent Internet is being built",
      description: "Manufacturing meets AI in the new sovereign infrastructure"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-y border-red-500/20 text-white relative overflow-hidden">
      <ConditionalBackground 
        intensity={0.3}
        particleCount={30}
        floatingCount={0}
        gridSize={200}
      />
      
      <div className="container-max section-padding relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center space-x-3 bg-red-500/10 border border-red-500/20 px-6 py-3 rounded-full mb-6">
            <span className="text-xl">⚡</span>
            <span className="text-red-400 font-semibold">The World Is Shifting</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Why This Matters Now
            </span>
          </h2>
        </div>

        {/* Shifts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {shifts.map((shift, index) => (
            <div
              key={shift.title}
              className="text-center space-y-4 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-5xl mb-4">{shift.emoji}</div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  {shift.title}
                </h3>
                <p className="text-lg text-red-400 font-semibold">
                  {shift.subtitle}
                </p>
                <p className="text-gray-300 text-sm">
                  {shift.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="text-center animate-slide-up" style={{ animationDelay: "600ms" }}>
          <p className="text-2xl font-bold text-white mb-2">
            Don't just use AI.
          </p>
          <p className="text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            Own your role in it.
          </p>
        </div>
      </div>
    </section>
  );
}
