
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Shield, Star, ArrowLeft } from "lucide-react";

interface RoleSelectionProps {
  onRoleSelect: (role: 'citizen' | 'officer') => void;
  onBack: () => void;
}

const RoleSelection = ({ onRoleSelect, onBack }: RoleSelectionProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 md:w-80 md:h-80 bg-gradient-to-br from-orange-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 backdrop-blur-sm bg-white/80 border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-3 md:space-x-4">
              <Button
                variant="ghost"
                onClick={onBack}
                className="p-2 hover:bg-white/50 rounded-xl"
              >
                <ArrowLeft className="h-6 w-6 text-gray-700" />
              </Button>
              <div className="p-2 md:p-3 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg">
                <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>
              <div>
                <h1 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  SmartCopAI
                </h1>
                <p className="text-sm md:text-base text-gray-600 font-medium">AI-Powered Police Complaint Assistant</p>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 px-3 py-1 md:px-4 md:py-2 shadow-lg text-xs md:text-sm">
              <Star className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
              Government of India Initiative
            </Badge>
          </div>
        </div>
      </header>

      {/* Role Selection */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Choose Your Role</h3>
            <p className="text-gray-600 text-base md:text-lg">Select your portal to get started with SmartCopAI</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm border-0 shadow-xl overflow-hidden relative" 
                  onClick={() => onRoleSelect('citizen')}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="text-center relative z-10 pb-4 md:pb-6">
                <div className="mx-auto mb-4 md:mb-6 p-4 md:p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 md:h-12 md:w-12 text-white" />
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900">Citizen Portal</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2 md:space-y-3 text-gray-600 mb-4 md:mb-6">
                  <li className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    File new complaints
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Voice input support
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Track complaint status
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    Access complaint history
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg py-4 md:py-6 text-base md:text-lg font-semibold rounded-xl">
                  Enter as Citizen
                </Button>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-orange-50/50 backdrop-blur-sm border-0 shadow-xl overflow-hidden relative"
                  onClick={() => onRoleSelect('officer')}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="text-center relative z-10 pb-4 md:pb-6">
                <div className="mx-auto mb-4 md:mb-6 p-4 md:p-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 md:h-12 md:w-12 text-white" />
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold text-gray-900">Police Officer Portal</CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-2 md:space-y-3 text-gray-600 mb-4 md:mb-6">
                  <li className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Review complaints
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Access voice transcripts
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Update investigation status
                  </li>
                  <li className="flex items-center text-sm md:text-base">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    Assign case officers
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg py-4 md:py-6 text-base md:text-lg font-semibold rounded-xl">
                  Enter as Officer
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
