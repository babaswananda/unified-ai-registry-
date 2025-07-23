import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing - Unified AI",
  description: "Transparent pricing for Unified AI's sovereign hosting infrastructure. Choose from Starter, Professional, or Enterprise plans.",
  keywords: "AI pricing, hosting plans, enterprise pricing, sovereign infrastructure, agentic web pricing",
  viewport: "width=device-width, initial-scale=1",
};

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-white dark:bg-black" />
      
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="container-max section-padding relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 bg-cyan-500/10 border border-cyan-500/20 px-6 py-3 rounded-full mb-8">
                <span className="text-cyan-400 font-semibold">Transparent Pricing</span>
              </div>
              <h1 className="text-6xl lg:text-7xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Simple, Scalable
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">Pricing Plans</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
                Choose the perfect plan for your sovereign infrastructure needs. 
                All plans include crypto-native billing, AI agent support, and 
                enterprise-grade security.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />
        
        {/* FAQ Section */}
        <section className="py-24 bg-gray-50 dark:bg-black/30">
          <div className="container-max section-padding">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Everything you need to know about our pricing and plans
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  question: "Can I upgrade or downgrade my plan anytime?",
                  answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle."
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major cryptocurrencies (Bitcoin, Ethereum, USDC) as well as traditional payment methods like credit cards and bank transfers."
                },
                {
                  question: "Is there a free trial available?",
                  answer: "Yes, all new users get a 14-day free trial with full access to Professional plan features. No credit card required."
                },
                {
                  question: "What's included in the Enterprise plan?",
                  answer: "Enterprise plans include dedicated infrastructure, custom integrations, priority support, SLA guarantees, and white-label options."
                },
                {
                  question: "How does crypto-native billing work?",
                  answer: "You can pay directly with cryptocurrency, earn tokens for usage, and access tokenized infrastructure resources through our blockchain integration."
                },
                {
                  question: "Do you offer volume discounts?",
                  answer: "Yes, we offer significant discounts for high-volume usage and annual commitments. Contact our sales team for custom pricing."
                }
              ].map((faq) => (
                <div
                  key={`faq-${faq.question}`}
                  className="bg-white dark:bg-black/50 rounded-2xl p-8 border border-gray-200 dark:border-cyan-500/20"
                >
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </main>
  );
}
