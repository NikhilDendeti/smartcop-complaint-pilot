
import React, { useState } from 'react';
import LandingPage from "@/components/LandingPage";
import RoleSelection from "@/components/RoleSelection";
import CitizenInterface from "@/components/CitizenInterface";
import OfficerInterface from "@/components/OfficerInterface";

const Index = () => {
  const [currentView, setCurrentView] = useState<'landing' | 'roleSelection' | 'citizen' | 'officer'>('landing');

  const handleGetStarted = () => {
    setCurrentView('roleSelection');
  };

  const handleRoleSelect = (role: 'citizen' | 'officer') => {
    setCurrentView(role);
  };

  const handleBackToLanding = () => {
    setCurrentView('landing');
  };

  const handleBackToRoleSelection = () => {
    setCurrentView('roleSelection');
  };

  if (currentView === 'landing') {
    return <LandingPage onGetStarted={handleGetStarted} />;
  }

  if (currentView === 'roleSelection') {
    return <RoleSelection onRoleSelect={handleRoleSelect} onBack={handleBackToLanding} />;
  }

  if (currentView === 'citizen') {
    return <CitizenInterface onBack={handleBackToRoleSelection} />;
  }

  if (currentView === 'officer') {
    return <OfficerInterface onBack={handleBackToRoleSelection} />;
  }

  return null;
};

export default Index;
