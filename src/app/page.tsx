import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import NewsTicker from "@/components/ui/NewsTicker";

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

      {/* News Ticker */}
      <NewsTicker items={tickerItems} />

      <Footer />
      <ScrollToTop />
    </main>
  );
}
