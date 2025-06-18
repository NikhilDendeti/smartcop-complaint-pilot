
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Mic, Plus, Eye, FileText, Download, Sparkles, TrendingUp } from "lucide-react";
import VoiceComplaintForm from "./VoiceComplaintForm";

interface CitizenInterfaceProps {
  onBack: () => void;
}

const CitizenInterface = ({ onBack }: CitizenInterfaceProps) => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'new-complaint' | 'view-complaint'>('dashboard');

  // Mock complaint data
  const complaints = [
    {
      id: 'FIR001',
      title: 'Mobile Phone Theft',
      date: '2024-01-15',
      status: 'Under Investigation',
      officer: 'Inspector Rajesh Kumar',
      progress: 65
    },
    {
      id: 'FIR002', 
      title: 'Noise Pollution Complaint',
      date: '2024-01-10',
      status: 'Resolved',
      officer: 'Sub-Inspector Priya Sharma',
      progress: 100
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0';
      case 'Under Investigation': return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0';
      case 'Pending': return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-0';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white border-0';
    }
  };

  if (currentView === 'new-complaint') {
    return <VoiceComplaintForm onBack={() => setCurrentView('dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/10 to-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 backdrop-blur-sm bg-white/80 border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={onBack} size="sm" className="hover:bg-white/60">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Citizen Dashboard</h1>
                <p className="text-gray-600 font-medium">Manage your complaints and track progress</p>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 px-4 py-2 shadow-lg">
              <Sparkles className="h-4 w-4 mr-2" />
              Citizen Portal
            </Badge>
          </div>
        </div>
      </header>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mb-4">
            <TrendingUp className="h-4 w-4 text-blue-600 mr-2" />
            <span className="text-blue-700 font-medium text-sm">Your Complaint Dashboard</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back!</h2>
          <p className="text-gray-600">Manage your complaints and stay updated on their progress</p>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-xl" 
                  onClick={() => setCurrentView('new-complaint')}>
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Plus className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">File New Complaint</h3>
                <p className="text-gray-600 leading-relaxed">Start voice-guided complaint filing</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Mic className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Voice Assistance</h3>
                <p className="text-gray-600 leading-relaxed">Get help in Telugu, Hindi, or English</p>
              </CardContent>
            </Card>

            <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mx-auto mb-4 p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-gray-900 mb-2">Legal Resources</h3>
                <p className="text-gray-600 leading-relaxed">Know your rights and legal procedures</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* My Complaints */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">My Complaints</h2>
          <div className="space-y-6">
            {complaints.map((complaint) => (
              <Card key={complaint.id} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-900">{complaint.title}</CardTitle>
                      <p className="text-gray-600 font-medium">FIR No: {complaint.id}</p>
                    </div>
                    <Badge className={getStatusColor(complaint.status) + " px-3 py-1 shadow-lg"}>
                      {complaint.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600 font-medium">Filed on: {complaint.date}</span>
                      <span className="text-gray-600 font-medium">Officer: {complaint.officer}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold text-gray-900">Investigation Progress</span>
                        <span className="font-bold text-blue-600">{complaint.progress}%</span>
                      </div>
                      <Progress value={complaint.progress} className="h-3 bg-gray-200" />
                    </div>

                    <div className="flex space-x-3 pt-4">
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg border-0">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 border-gray-300 hover:bg-gray-50">
                        <Download className="h-4 w-4 mr-2" />
                        Download FIR
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {complaints.length === 0 && (
            <Card className="text-center py-16 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
              <CardContent>
                <div className="mx-auto mb-6 p-6 bg-gradient-to-br from-gray-400 to-gray-500 rounded-3xl shadow-lg w-fit">
                  <FileText className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Complaints Filed</h3>
                <p className="text-gray-600 mb-8 text-lg">You haven't filed any complaints yet.</p>
                <Button onClick={() => setCurrentView('new-complaint')} className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg px-8 py-3 text-lg">
                  <Plus className="h-5 w-5 mr-2" />
                  File Your First Complaint
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-16 bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border-0">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Help?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Emergency Numbers</h4>
              <p className="text-gray-600 text-lg">Police: <span className="font-bold text-red-600">100</span> | Women Helpline: <span className="font-bold text-red-600">1091</span></p>
            </div>
            <div className="text-center md:text-left">
              <h4 className="font-bold text-lg text-gray-900 mb-3">Support</h4>
              <p className="text-gray-600 text-lg">24/7 AI assistance available in your language</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenInterface;
