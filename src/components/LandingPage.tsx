
import React from 'react';
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, ArrowRight } from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-600/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* App Logo and Name */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="p-6 bg-gradient-to-br from-white/20 to-white/10 rounded-3xl backdrop-blur-lg border border-white/20 shadow-2xl">
              <Shield className="h-16 w-16 text-white drop-shadow-lg" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl">
            SmartCop
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">AI</span>
          </h1>
          
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="h-5 w-5 text-cyan-400 mr-3" />
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              AI-Powered Police Complaint Assistant
            </p>
            <Sparkles className="h-5 w-5 text-cyan-400 ml-3" />
          </div>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            स्वागत है • Welcome • స్వాగతం
          </p>
        </div>

        {/* Get Started Button */}
        <div className="text-center">
          <Button
            onClick={onGetStarted}
            className="group relative px-12 py-6 text-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white border-0 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/25"
          >
            <span className="flex items-center">
              Get Started
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            
            {/* Animated border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
          </Button>
          
          <p className="text-white/60 mt-6 text-sm">
            File complaints • Track status • Get AI assistance
          </p>
        </div>

        {/* Floating elements for visual appeal */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-cyan-400/50 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-400/50 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-blue-400/50 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-pink-400/50 rounded-full animate-bounce delay-1500"></div>
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
};

export default LandingPage;
