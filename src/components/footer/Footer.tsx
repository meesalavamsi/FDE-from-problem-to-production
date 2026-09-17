import React from 'react';
import { Terminal, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { useFde } from '../../context/FdeContext';

export const Footer: React.FC = () => {
  const { setActiveTab } = useFde();

  const handleStartEngagement = () => {
    setActiveTab('capstone');
    const elem = document.getElementById('capstone');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070a] border-t border-slate-800 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        
        {/* Final CTA Banner */}
        <div className="max-w-4xl mx-auto p-8 rounded-2xl glass-panel-glow border border-cyan-500/40 space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <Terminal className="w-3.5 h-3.5" />
            <span>READY FOR YOUR FIRST MISSION?</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            BECOME A FORWARD DEPLOYED ENGINEER
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Take AI from an idea in a notebook to a production system inside a real enterprise environment.
          </p>

          <button
            onClick={handleStartEngagement}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm tracking-wider inline-flex items-center space-x-3 shadow-xl shadow-cyan-500/25 transition-all hover:scale-105"
          >
            <Terminal className="w-5 h-5" />
            <span>ENTER YOUR FIRST FDE ENGAGEMENT</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Footer Links & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs font-mono gap-4">
          <div className="flex items-center space-x-3">
            <span className="font-extrabold text-white gradient-text">FDE — FROM PROBLEM TO PRODUCTION</span>
            <span>•</span>
            <span className="text-slate-500">THE FORWARD DEPLOYED ENGINEER JOURNEY</span>
          </div>

          <div className="text-slate-500">
            Engineered for Enterprise AI Deployment & FDE Simulation
          </div>
        </div>

      </div>
    </footer>
  );
};

