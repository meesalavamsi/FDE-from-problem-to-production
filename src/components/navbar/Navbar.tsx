import React, { useState } from 'react';
import { useFde } from '../../context/FdeContext';
import { ShieldCheck, Cpu, Terminal, Compass, Award, Activity, Calculator, Volume2, VolumeX, Sparkles, Layers } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { userScore, completedMissions, passedScenarios, setActiveTab, activeTab } = useFde();
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const navItems = [
    { id: 'hero', label: 'Overview', icon: Compass },
    { id: 'story', label: 'Nexora Crisis', icon: Terminal },
    { id: 'fde-loop', label: 'FDE Lifecycle', icon: Cpu },
    { id: 'roadmap', label: '12-Week Missions', icon: ShieldCheck },
    { id: 'scenarios', label: 'Scenario Engine', icon: Activity },
    { id: 'command-center', label: 'War Room', icon: Layers },
    { id: 'labs', label: 'Interactive Labs', icon: Cpu },
    { id: 'roi', label: 'ROI Calculator', icon: Calculator },
    { id: 'matrix', label: 'Skill Matrix', icon: Award },
    { id: 'capstone', label: 'Capstone', icon: Terminal },
  ];

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-cyan-500/20 px-4 lg:px-8 py-3.5 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Header */}
        <div 
          onClick={() => scrollToSection('hero')} 
          className="flex items-center space-x-3.5 cursor-pointer group"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-all">
              <Terminal className="w-5 h-5 text-black font-bold" />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#030712] animate-ping" />
          </div>

          <div>
            <div className="flex items-center space-x-2">
              <span className="font-black text-xl tracking-tight gradient-text">FDE</span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/50 shadow-sm shadow-cyan-500/20">
                PROD-SIM v2.4
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-mono hidden sm:block tracking-wide">
              FORWARD DEPLOYED ENGINEER SIMULATOR
            </p>
          </div>
        </div>

        {/* Navigation Links (Desktop Nav) */}
        <nav className="hidden xl:flex items-center space-x-1 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800/80">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                  isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/20 font-bold'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* User Badges & Action */}
        <div className="flex items-center space-x-3">
          
          {/* Audio Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? "Mute Simulation Audio" : "Enable Simulation Audio"}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-cyan-400 transition-colors hidden sm:flex items-center"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
          </button>

          {/* User Score Badge */}
          <div className="hidden sm:flex items-center space-x-2 bg-slate-950 border border-cyan-500/30 rounded-xl px-3.5 py-1.5 font-mono text-xs shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-400">Score:</span>
            <span className="text-cyan-400 font-extrabold">{userScore} PTS</span>
          </div>

          {/* Mission Count Badge */}
          <div className="flex items-center space-x-2 bg-slate-950 border border-emerald-500/30 rounded-xl px-3.5 py-1.5 font-mono text-xs">
            <span className="text-emerald-400 font-extrabold">{completedMissions.filter(id => id <= 12).length}/12</span>
            <span className="text-slate-400 hidden md:inline">Missions</span>
          </div>

          {/* War Room CTA */}
          <button
            onClick={() => scrollToSection('command-center')}
            className="flex items-center space-x-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-black text-xs px-4 py-2.5 rounded-xl shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 tracking-wider"
          >
            <Activity className="w-4 h-4 animate-pulse" />
            <span className="hidden sm:inline">ENTER WAR ROOM</span>
          </button>

        </div>
      </div>
    </header>
  );
};
