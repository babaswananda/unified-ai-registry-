"use client";

import { useState } from "react";
import { Metadata } from "next";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/Button";
import { Mail, Lock, Github, Chrome } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      {/* Background */}
      <div className="fixed inset-0 bg-white dark:bg-black" />
      
      <div className="relative z-10">
        <Navigation />
        
        <section className="py-24 relative overflow-hidden">
          <div className="container-max section-padding relative z-10">
            <div className="max-w-md mx-auto">
              {/* Header */}
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">AI</span>
                </div>
                <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                  Welcome back
                </h1>
                <p className="text-gray-600 dark:text-gray-300">
                  Sign in to your Unified AI account
                </p>
              </div>

              {/* Sign In Form */}
              <div className="bg-white dark:bg-black/50 rounded-2xl p-8 border border-gray-200 dark:border-cyan-500/20">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                      Email address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-cyan-500/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Field */}
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium mb-2 text-gray-900 dark:text-white">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-black/30 border border-gray-200 dark:border-cyan-500/30 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-cyan-500 bg-gray-50 dark:bg-black/30 border-gray-200 dark:border-cyan-500/30 rounded focus:ring-cyan-500"
                      />
                      <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-cyan-500 hover:text-cyan-400">
                      Forgot password?
                    </a>
                  </div>

                  {/* Sign In Button */}
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"
                    disabled={isLoading}
                  >
                    {isLoading ? "Signing in..." : "Sign in"}
                  </Button>
                </form>

                {/* Divider */}
                <div className="my-6">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200 dark:border-gray-600" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white dark:bg-black text-gray-500">Or continue with</span>
                    </div>
                  </div>
                </div>

                {/* Social Sign In */}
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-200 dark:border-cyan-500/30 rounded-xl hover:bg-gray-50 dark:hover:bg-black/30 transition-colors">
                    <Github className="w-5 h-5 text-gray-900 dark:text-white" />
                    <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">GitHub</span>
                  </button>
                  <button className="flex items-center justify-center px-4 py-3 border border-gray-200 dark:border-cyan-500/30 rounded-xl hover:bg-gray-50 dark:hover:bg-black/30 transition-colors">
                    <Chrome className="w-5 h-5 text-gray-900 dark:text-white" />
                    <span className="ml-2 text-sm font-medium text-gray-900 dark:text-white">Google</span>
                  </button>
                </div>

                {/* Sign Up Link */}
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Don't have an account?{" "}
                    <a href="#" className="text-cyan-500 hover:text-cyan-400 font-medium">
                      Sign up for free
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
