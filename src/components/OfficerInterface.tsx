
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, FileText, Mic, Clock, User, AlertCircle, CheckCircle, Volume2 } from "lucide-react";

interface OfficerInterfaceProps {
  onBack: () => void;
}

const OfficerInterface = ({ onBack }: OfficerInterfaceProps) => {
  const [selectedComplaint, setSelectedComplaint] = useState<string | null>(null);

  // Mock complaint data
  const complaints = [
    {
      id: 'FIR001',
      title: 'Mobile Phone Theft',
      citizen: 'Rajesh Kumar',
      date: '2024-01-15',
      status: 'Pending Review',
      priority: 'Medium',
      location: 'Bus Stand, Hyderabad',
      hasAudio: true,
      transcript: 'My mobile phone was stolen from my bag while I was traveling on the bus from Secunderabad to Kukatpally. It happened around 3 PM yesterday. The phone is a Samsung Galaxy S23, black color.',
      suggestedIPC: ['Section 378 - Theft', 'Section 379 - Punishment for theft'],
      audioUrl: '#'
    },
    {
      id: 'FIR002',
      title: 'Domestic Violence',
      citizen: 'Priya Sharma',
      date: '2024-01-14',
      status: 'Under Investigation',
      priority: 'High',
      location: 'Banjara Hills, Hyderabad',
      hasAudio: true,
      transcript: 'मेरे पति ने मुझे मारा और धमकी दी। यह कल रात 10 बजे हुआ। मेरे पास चोट के निशान हैं।',
      suggestedIPC: ['Section 498A - Domestic Violence', 'Section 323 - Voluntarily causing hurt'],
      audioUrl: '#'
    },
    {
      id: 'FIR003',
      title: 'Property Dispute',
      citizen: 'Venkat Reddy',
      date: '2024-01-13',
      status: 'Resolved',
      priority: 'Low',
      location: 'Jubilee Hills, Hyderabad',
      hasAudio: false,
      transcript: 'మా పొరుగువాడు మా భూమిలో అతిక్రమణ చేస్తున్నాడు. అతను గేటు వేసి మా దారిని మూసేశాడు.',
      suggestedIPC: ['Section 441 - Criminal trespass', 'Section 447 - Criminal trespass'],
      audioUrl: '#'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'bg-green-100 text-green-800 border-green-200';
      case 'Under Investigation': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Pending Review': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Low': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-2 border-orange-400">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" onClick={onBack} size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Officer Dashboard</h1>
                <p className="text-sm text-gray-600">Manage complaints and investigations</p>
              </div>
            </div>
            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
              Police Officer Portal
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">5</div>
              <div className="text-sm text-gray-600">Pending Review</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-gray-600">Under Investigation</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">28</div>
              <div className="text-sm text-gray-600">Resolved</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 text-center">
              <Mic className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold">15</div>
              <div className="text-sm text-gray-600">Voice Complaints</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="complaints" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="complaints">All Complaints</TabsTrigger>
            <TabsTrigger value="pending">Pending Review</TabsTrigger>
            <TabsTrigger value="voice">Voice Complaints</TabsTrigger>
          </TabsList>

          <TabsContent value="complaints" className="space-y-4">
            {complaints.map((complaint) => (
              <Card key={complaint.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{complaint.title}</CardTitle>
                      <p className="text-sm text-gray-600">
                        FIR: {complaint.id} • Citizen: {complaint.citizen}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Badge className={getPriorityColor(complaint.priority)}>
                        {complaint.priority}
                      </Badge>
                      <Badge className={getStatusColor(complaint.status)}>
                        {complaint.status}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium">Date Filed:</span> {complaint.date}
                      </div>
                      <div>
                        <span className="font-medium">Location:</span> {complaint.location}
                      </div>
                    </div>

                    {/* Audio Transcript */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">Voice Transcript</h4>
                        {complaint.hasAudio && (
                          <Button size="sm" variant="outline">
                            <Volume2 className="h-4 w-4 mr-2" />
                            Play Audio
                          </Button>
                        )}
                      </div>
                      <p className="text-sm text-gray-700">{complaint.transcript}</p>
                    </div>

                    {/* Suggested IPC Sections */}
                    <div>
                      <h4 className="font-medium mb-2">AI Suggested IPC Sections</h4>
                      <div className="flex flex-wrap gap-2">
                        {complaint.suggestedIPC.map((section, index) => (
                          <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700">
                            {section}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2 pt-4 border-t">
                      <Button size="sm" variant="outline" className="flex-1">
                        <FileText className="h-4 w-4 mr-2" />
                        Review Complaint
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <User className="h-4 w-4 mr-2" />
                        Assign Officer
                      </Button>
                      <Select>
                        <SelectTrigger className="w-32">
                          <SelectValue placeholder="Update Status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="investigating">Investigating</SelectItem>
                          <SelectItem value="resolved">Resolved</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="pending">
            <Card>
              <CardContent className="p-8 text-center">
                <AlertCircle className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Pending Review Complaints</h3>
                <p className="text-gray-600">5 complaints are waiting for your review and action.</p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="voice">
            <Card>
              <CardContent className="p-8 text-center">
                <Mic className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Voice Complaints</h3>
                <p className="text-gray-600">15 complaints have been filed using voice input in multiple languages.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default OfficerInterface;
