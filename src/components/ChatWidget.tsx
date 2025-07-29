"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "👋 Hi! I'm your Handle Registry assistant. I can help you claim AI agent handles, check domain availability, and access ForkD compute layers. What would you like to explore?",
      sender: 'agent',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Simulate API call to chat agent
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: inputText,
          userEmail: 'user@example.com' // In real app, get from auth
        }),
      });

      const data = await response.json();

      const agentMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || "I'm having trouble processing that request. Please try again.",
        sender: 'agent',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, agentMessage]);
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Sorry, I'm experiencing technical difficulties. Please try again later.",
        sender: 'agent',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 h-96 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl flex flex-col">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={1}
            variant="cyan"
          />
          {/* Header */}
          <div className="relative z-10 p-4 border-b border-cyan-500/20">
            <h3 className="text-white font-bold">🤖 Handle Registry Assistant</h3>
            <p className="text-gray-400 text-sm">AI agents, domains & compute access</p>
          </div>

          {/* Messages */}
          <div className="relative z-10 flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg border ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-r from-[#40ffaa] to-[#4079ff] text-white border-cyan-500/20'
                      : 'bg-gray-800/80 text-gray-100 border-gray-600/20 backdrop-blur-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800/80 text-gray-100 p-3 rounded-lg border border-gray-600/20 backdrop-blur-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="relative z-10 p-4 border-t border-cyan-500/20">
            <div className="flex space-x-2">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about AI agent handles, domains, ForkD access, or pricing..."
                className="flex-1 bg-gray-800/80 text-white border border-cyan-500/20 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:border-cyan-400 backdrop-blur-sm"
                rows={2}
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading}
                className="bg-gradient-to-r from-[#40ffaa] to-[#4079ff] hover:from-[#40ffaa]/80 hover:to-[#4079ff]/80 disabled:bg-gray-600 disabled:cursor-not-allowed text-white p-2 rounded-lg transition-all duration-300 border border-cyan-500/20"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-gradient-to-r from-[#40ffaa] to-[#4079ff] hover:from-[#40ffaa]/80 hover:to-[#4079ff]/80 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-cyan-500/20"
      >
        <GlowingEffect
          spread={30}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={1}
          variant="cyan"
        />
        <div className="relative z-10">
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </div>
      </button>
    </div>
  );
}
