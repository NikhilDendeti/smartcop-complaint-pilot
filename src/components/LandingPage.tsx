
import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

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
          <div className="flex items-center justify-center mb-8">
            <div className="group relative p-8 bg-gradient-to-br from-white/25 to-white/10 rounded-3xl backdrop-blur-lg border border-white/30 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:scale-105">
              {/* Logo container with enhanced styling */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/553fed2d-f771-41ed-8cab-4ab832cc304c.png" 
                  alt="SmartCopAI Logo - AI-Powered Police Complaint Assistant"
                  className="h-20 w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 object-contain filter drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
                />
                {/* Subtle glow effect behind logo */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight drop-shadow-2xl animate-fade-in">
            SmartCop
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">AI</span>
          </h1>
          
          <div className="flex items-center justify-center mb-6 animate-fade-in delay-300">
            <Sparkles className="h-5 w-5 text-cyan-400 mr-3 animate-bounce" />
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              AI-Powered Police Complaint Assistant
            </p>
            <Sparkles className="h-5 w-5 text-cyan-400 ml-3 animate-bounce delay-1000" />
          </div>
          
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-500">
            स्वागत है • Welcome • స్వాగతం
          </p>
        </div>

        {/* Get Started Button */}
        <div className="text-center animate-fade-in delay-700">
          <Button
            onClick={onGetStarted}
            className="group relative px-12 py-6 text-xl font-semibold bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 text-white border-0 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/30"
          >
            <span className="flex items-center relative z-10">
              Get Started
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            
            {/* Enhanced animated border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"></div>
            
            {/* Subtle inner glow */}
            <div className="absolute inset-1 rounded-xl bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          
          <p className="text-white/60 mt-6 text-sm animate-fade-in delay-1000">
            File complaints • Track status • Get AI assistance
          </p>
        </div>

        {/* Enhanced floating elements for visual appeal */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-br from-cyan-400/60 to-blue-500/60 rounded-full animate-bounce delay-300 shadow-lg"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-gradient-to-br from-purple-400/60 to-pink-500/60 rounded-full animate-bounce delay-700 shadow-lg"></div>
        <div className="absolute bottom-32 left-32 w-5 h-5 bg-gradient-to-br from-blue-400/60 to-cyan-500/60 rounded-full animate-bounce delay-1000 shadow-lg"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-gradient-to-br from-pink-400/60 to-purple-500/60 rounded-full animate-bounce delay-1500 shadow-lg"></div>
        
        {/* Additional decorative elements */}
        <div className="absolute top-1/3 left-10 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/3 right-10 w-2 h-2 bg-white/40 rounded-full animate-pulse delay-2500"></div>
      </div>

      {/* Enhanced bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
    </div>
  );
};

export default LandingPage;
