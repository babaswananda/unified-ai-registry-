import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unified AI Registry - The Agentic Web Starts Here",
  description: "Register your domain in the AI-native internet. Deploy agents, control compute, and show up in the new search layer where AI discovers and coordinates with your services.",
  keywords: "AI, agents, agentic web, domain registry, artificial intelligence, compute, deployment",
  authors: [{ name: "Unified AI" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "Unified AI Registry - The Agentic Web Starts Here",
    description: "Register your domain in the AI-native internet. Deploy agents, control compute, and show up in the new search layer.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unified AI Registry - The Agentic Web Starts Here",
    description: "Register your domain in the AI-native internet. Deploy agents, control compute, and show up in the new search layer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}
