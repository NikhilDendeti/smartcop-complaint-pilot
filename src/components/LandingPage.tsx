
import React from 'react';
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Shield, Users, Clock } from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation Header */}
      <nav className="relative z-20 flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/553fed2d-f771-41ed-8cab-4ab832cc304c.png" 
            alt="SmartCopAI"
            className="h-10 w-10 object-contain"
          />
          <span className="text-xl font-bold text-slate-800">SmartCopAI</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-slate-600">
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Features</span>
          <span className="hover:text-blue-600 cursor-pointer transition-colors">About</span>
          <span className="hover:text-blue-600 cursor-pointer transition-colors">Contact</span>
        </div>
      </nav>

      {/* Main Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        {/* Logo and Brand Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="group relative">
              {/* Logo container with enhanced design */}
              <div className="relative p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/50 hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105">
                <img 
                  src="/lovable-uploads/553fed2d-f771-41ed-8cab-4ab832cc304c.png" 
                  alt="SmartCopAI - AI-Powered Police Complaint Assistant"
                  className="h-24 w-24 md:h-32 md:w-32 lg:h-36 lg:w-36 object-contain filter drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
                />
                {/* Subtle accent ring */}
                <div className="absolute inset-0 rounded-3xl ring-2 ring-blue-500/20 ring-offset-4 ring-offset-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-6 tracking-tight">
            Smart<span className="text-blue-600">Cop</span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">AI</span>
          </h1>
          
          {/* Subtitle with icons */}
          <div className="flex items-center justify-center mb-8">
            <Shield className="h-5 w-5 text-blue-600 mr-3" />
            <p className="text-xl md:text-2xl text-slate-600 font-medium">
              AI-Powered Police Complaint Assistant
            </p>
            <Shield className="h-5 w-5 text-blue-600 ml-3" />
          </div>
          
          {/* Multi-language welcome */}
          <p className="text-lg text-slate-500 mb-4 font-medium">
            स्वागत है • Welcome • స్వాగతం
          </p>
          
          {/* Description */}
          <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
            Streamline your complaint filing process with AI assistance. File complaints, track status, 
            and get instant support in multiple languages.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Easy Filing</h3>
            <p className="text-slate-600 text-sm">Simple and intuitive complaint filing process with AI guidance</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-indigo-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Clock className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Real-time Tracking</h3>
            <p className="text-slate-600 text-sm">Track your complaint status and get instant updates</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
              <Sparkles className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">AI Assistant</h3>
            <p className="text-slate-600 text-sm">Get intelligent assistance and support throughout the process</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            onClick={onGetStarted}
            size="lg"
            className="group relative px-12 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:via-blue-800 hover:to-indigo-800 text-white border-0 rounded-2xl shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            <span className="flex items-center relative z-10">
              Get Started
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl"></div>
          </Button>
          
          <p className="text-slate-500 mt-6 text-sm">
            File complaints • Track status • Get AI assistance
          </p>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-32 left-16 w-4 h-4 bg-blue-400/40 rounded-full animate-bounce delay-300"></div>
        <div className="absolute top-48 right-24 w-3 h-3 bg-indigo-400/40 rounded-full animate-bounce delay-700"></div>
        <div className="absolute bottom-48 left-24 w-5 h-5 bg-blue-500/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-indigo-500/40 rounded-full animate-bounce delay-1500"></div>
      </div>

      {/* Bottom decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-blue-50/50 to-transparent"></div>
    </div>
  );
};

export default LandingPage;
