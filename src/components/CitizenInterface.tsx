
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Mic, MicOff, FileText, Plus, Eye, Clock, CheckCircle } from "lucide-react";
import VoiceComplaintForm from "./VoiceComplaintForm";

interface CitizenInterfaceProps {
  onBack: () => void;
}

const CitizenInterface = ({ onBack }: CitizenInterfaceProps) => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'new-complaint' | 'view-complaint'>('dashboard');
  const [selectedComplaint, setSelectedComplaint] = useState(null);

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
      case 'Resolved': return 'bg-green-100 text-green-800 border-green-200';
      case 'Under Investigation': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (currentView === 'new-complaint') {
    return <VoiceComplaintForm onBack={() => setCurrentView('dashboard')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-blue-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" onClick={onBack} size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Citizen Dashboard</h1>
                <p className="text-sm text-gray-600">Manage your complaints and track progress</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
              Citizen Portal
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="cursor-pointer hover:shadow-lg transition-shadow" 
                  onClick={() => setCurrentView('new-complaint')}>
              <CardContent className="p-6 text-center">
                <Plus className="h-12 w-12 text-blue-600 mx-auto mb-3" />
                <h3 className="font-semibold">File New Complaint</h3>
                <p className="text-sm text-gray-600 mt-2">Start voice-guided complaint filing</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Mic className="h-12 w-12 text-green-600 mx-auto mb-3" />
                <h3 className="font-semibold">Voice Assistance</h3>
                <p className="text-sm text-gray-600 mt-2">Get help in Telugu, Hindi, or English</p>
              </CardContent>
            </Card>

            <Card className="cursor-pointer hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-semibold">Legal Resources</h3>
                <p className="text-sm text-gray-600 mt-2">Know your rights and legal procedures</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* My Complaints */}
        <div>
          <h2 className="text-xl font-semibold mb-4">My Complaints</h2>
          <div className="space-y-4">
            {complaints.map((complaint) => (
              <Card key={complaint.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{complaint.title}</CardTitle>
                      <p className="text-sm text-gray-600">FIR No: {complaint.id}</p>
                    </div>
                    <Badge className={getStatusColor(complaint.status)}>
                      {complaint.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Filed on: {complaint.date}</span>
                      <span className="text-gray-600">Officer: {complaint.officer}</span>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Investigation Progress</span>
                        <span>{complaint.progress}%</span>
                      </div>
                      <Progress value={complaint.progress} className="h-2" />
                    </div>

                    <div className="flex space-x-2 pt-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <FileText className="h-4 w-4 mr-2" />
                        Download FIR
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {complaints.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Complaints Filed</h3>
                <p className="text-gray-600 mb-4">You haven't filed any complaints yet.</p>
                <Button onClick={() => setCurrentView('new-complaint')}>
                  <Plus className="h-4 w-4 mr-2" />
                  File Your First Complaint
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Help Section */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Need Help?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-2">Emergency Numbers</h4>
              <p className="text-sm text-gray-600">Police: 100 | Women Helpline: 1091</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Support</h4>
              <p className="text-sm text-gray-600">24/7 AI assistance available in your language</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenInterface;
