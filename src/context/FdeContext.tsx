import React, { createContext, useContext, useState, useEffect } from 'react';

interface FdeContextType {
  completedMissions: number[];
  toggleMissionComplete: (id: number) => void;
  passedScenarios: number[];
  markScenarioPassed: (id: number) => void;
  userScore: number;
  addScore: (points: number) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  currentScenarioId: number | null;
  setCurrentScenarioId: (id: number | null) => void;
}

const FdeContext = createContext<FdeContextType | undefined>(undefined);

export const FdeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [completedMissions, setCompletedMissions] = useState<number[]>(() => {
    const saved = localStorage.getItem('fde_completed_missions');
    return saved ? JSON.parse(saved) : [1, 2, 3];
  });

  const [passedScenarios, setPassedScenarios] = useState<number[]>(() => {
    const saved = localStorage.getItem('fde_passed_scenarios');
    return saved ? JSON.parse(saved) : [1, 3];
  });

  const [userScore, setUserScore] = useState<number>(() => {
    const saved = localStorage.getItem('fde_user_score');
    return saved ? JSON.parse(saved) : 450;
  });

  const [activeTab, setActiveTab] = useState<string>('hero');
  const [currentScenarioId, setCurrentScenarioId] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem('fde_completed_missions', JSON.stringify(completedMissions));
  }, [completedMissions]);

  useEffect(() => {
    localStorage.setItem('fde_passed_scenarios', JSON.stringify(passedScenarios));
  }, [passedScenarios]);

  useEffect(() => {
    localStorage.setItem('fde_user_score', JSON.stringify(userScore));
  }, [userScore]);

  const toggleMissionComplete = (id: number) => {
    setCompletedMissions(prev => 
      prev.includes(id) ? prev.filter(mId => mId !== id) : [...prev, id]
    );
  };

  const markScenarioPassed = (id: number) => {
    if (!passedScenarios.includes(id)) {
      setPassedScenarios(prev => [...prev, id]);
      addScore(50);
    }
  };

  const addScore = (points: number) => {
    setUserScore(prev => Math.max(0, prev + points));
  };

  return (
    <FdeContext.Provider value={{
      completedMissions,
      toggleMissionComplete,
      passedScenarios,
      markScenarioPassed,
      userScore,
      addScore,
      activeTab,
      setActiveTab,
      currentScenarioId,
      setCurrentScenarioId
    }}>
      {children}
    </FdeContext.Provider>
  );
};

export const useFde = () => {
  const context = useContext(FdeContext);
  if (!context) throw new Error('useFde must be used within an FdeProvider');
  return context;
};

