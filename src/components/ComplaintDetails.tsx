
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, FileText, MapPin, Clock, User, CheckCircle, Download, Phone } from "lucide-react";

interface Complaint {
  id: string;
  title: string;
  date: string;
  status: string;
  officer: string;
  progress: number;
  location: string;
  description: string;
  evidence: string[];
  updates: Array<{
    date: string;
    message: string;
    officer: string;
  }>;
}

interface ComplaintDetailsProps {
  complaint: Complaint | undefined;
  onBack: () => void;
}

const ComplaintDetails = ({ complaint, onBack }: ComplaintDetailsProps) => {
  if (!complaint) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Complaint Not Found</h3>
            <Button onClick={onBack}>Return to Dashboard</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0';
      case 'Under Investigation': return 'bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0';
      case 'Pending': return 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-white border-0';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white border-0';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="backdrop-blur-sm bg-white/80 border-b border-white/20 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={onBack} size="sm" className="hover:bg-white/60">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Complaint Details
              </h1>
              <p className="text-gray-600 font-medium">FIR No: {complaint.id}</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Main Complaint Info */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{complaint.title}</CardTitle>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Filed on {complaint.date}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {complaint.location}
                  </div>
                </div>
              </div>
              <Badge className={getStatusColor(complaint.status) + " px-4 py-2 shadow-lg"}>
                {complaint.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Description</h4>
                <p className="text-gray-700 leading-relaxed">{complaint.description}</p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="font-semibold text-gray-900">Investigation Progress</span>
                  <span className="font-bold text-blue-600">{complaint.progress}%</span>
                </div>
                <Progress value={complaint.progress} className="h-3" />
              </div>

              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-gray-600" />
                <span className="text-gray-700">Assigned Officer: <strong>{complaint.officer}</strong></span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Evidence Section */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2 text-blue-600" />
              Evidence & Documents
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              {complaint.evidence.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-700">{item}</span>
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Submitted
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Updates Timeline */}
        <Card className="mb-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="h-5 w-5 mr-2 text-blue-600" />
              Investigation Updates
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complaint.updates.map((update, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                    {index !== complaint.updates.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-300 ml-1 mt-1"></div>
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-gray-900 font-medium">{update.message}</p>
                      <span className="text-sm text-gray-500">{update.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">by {update.officer}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-3 gap-4">
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg">
            <Download className="h-4 w-4 mr-2" />
            Download FIR Copy
          </Button>
          <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
            <Phone className="h-4 w-4 mr-2" />
            Contact Officer
          </Button>
          <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
            <FileText className="h-4 w-4 mr-2" />
            Add Information
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;
