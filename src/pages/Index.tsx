
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, FileText, Shield, Users, Calendar, CheckCircle } from "lucide-react";
import CitizenInterface from "@/components/CitizenInterface";
import OfficerInterface from "@/components/OfficerInterface";

const Index = () => {
  const [userRole, setUserRole] = useState<'citizen' | 'officer' | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b-2 border-orange-400">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-blue-600" />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">SmartCopAI</h1>
                  <p className="text-sm text-gray-600">AI-Powered Police Complaint Assistant</p>
                </div>
              </div>
              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                Government of India Initiative
              </Badge>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              स्वागत है • Welcome • స్వాగతం
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              File complaints in your language with AI assistance. Speak in Telugu, Hindi, or English - 
              our AI will help draft your legal complaint and connect you with police officers.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Mic className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Voice Input</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Speak your complaint in Telugu, Hindi, or English. Our AI transcribes and understands your concern.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>AI Legal Drafting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Get professionally drafted complaints with relevant IPC sections suggested automatically.</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Real-time Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Track your complaint status, assigned officers, and get updates throughout the investigation process.</p>
              </CardContent>
            </Card>
          </div>

          {/* Role Selection */}
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Choose Your Role</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:border-blue-400" 
                    onClick={() => { setUserRole('citizen'); setIsAuthenticated(true); }}>
                <CardHeader className="text-center">
                  <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Citizen Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• File new complaints</li>
                    <li>• Voice input support</li>
                    <li>• Track complaint status</li>
                    <li>• Access complaint history</li>
                  </ul>
                  <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                    Enter as Citizen
                  </Button>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:border-orange-400"
                    onClick={() => { setUserRole('officer'); setIsAuthenticated(true); }}>
                <CardHeader className="text-center">
                  <Shield className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-xl">Police Officer Portal</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Review complaints</li>
                    <li>• Access voice transcripts</li>
                    <li>• Update investigation status</li>
                    <li>• Assign case officers</li>
                  </ul>
                  <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                    Enter as Officer
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Platform Statistics</h3>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">1,247</div>
                <div className="text-gray-600">Complaints Filed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">892</div>
                <div className="text-gray-600">Cases Resolved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">3</div>
                <div className="text-gray-600">Languages Supported</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">24/7</div>
                <div className="text-gray-600">AI Assistance</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 SmartCopAI - Government of India. All rights reserved.</p>
            <p className="text-gray-400 mt-2">Powered by AI for transparent and efficient policing</p>
          </div>
        </footer>
      </div>
    );
  }

  if (userRole === 'citizen') {
    return <CitizenInterface onBack={() => setIsAuthenticated(false)} />;
  }

  if (userRole === 'officer') {
    return <OfficerInterface onBack={() => setIsAuthenticated(false)} />;
  }

  return null;
};

export default Index;
