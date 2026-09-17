import React, { useState } from 'react';
import { STAGES, StageDetail } from '../../data/stagesData';
import { Repeat, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

export const FdeLoop: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<StageDetail>(STAGES[0]);

  return (
    <div className="py-12">
      
      {/* Central Mantra Banner */}
      <div className="p-8 rounded-3xl glass-panel-glow border border-cyan-500/40 text-center max-w-4xl mx-auto mb-16 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
          <Sparkles className="w-32 h-32 text-cyan-400" />
        </div>
        <blockquote className="text-xl sm:text-3xl font-black text-white tracking-tight leading-relaxed">
          "An FDE does not merely build AI. <br className="hidden sm:inline" />
          <span className="gradient-text">An FDE makes AI work inside the customer's real environment.</span>"
        </blockquote>
      </div>

      {/* Interactive Loop Diagram & Inspector Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Stage Selection Cards Grid */}
        <div className="lg:col-span-6 p-6 rounded-2xl glass-panel border border-slate-800 shadow-2xl">
          <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
            <h3 className="text-xs font-mono font-extrabold text-slate-300">THE 11-STAGE FDE LIFECYCLE</h3>
            <span className="text-xs font-mono text-cyan-400 font-bold">SELECT STAGE TO INSPECT</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {STAGES.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = selectedStage.id === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setSelectedStage(stage)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between group ${
                    isSelected
                      ? 'bg-cyan-950/90 border-cyan-400 shadow-xl shadow-cyan-500/30 text-white scale-[1.04]'
                      : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:border-cyan-500/40 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold">0{idx + 1}</span>
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-300 animate-pulse' : 'text-slate-500 group-hover:text-cyan-400'}`} />
                  </div>
                  <div className="text-xs font-mono font-black tracking-wider">{stage.name}</div>
                </button>
              );
            })}
          </div>

          {/* Loop Continuous Indicator */}
          <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
            <span>CONTINUOUS ENTERPRISE FEEDBACK LOOP</span>
            <Repeat className="w-4 h-4 text-cyan-400 animate-spin" />
          </div>
        </div>

        {/* Detailed Stage Inspector Panel */}
        <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl glass-panel-glow border border-cyan-500/40 shadow-2xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
            <div className="flex items-center space-x-3.5">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                {React.createElement(selectedStage.icon, { className: "w-6 h-6 text-cyan-300" })}
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold">STAGE INSPECTOR</span>
                <h3 className="text-2xl font-black text-white">{selectedStage.name}</h3>
              </div>
            </div>
          </div>

          {/* Objective */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-slate-400 mb-1.5 font-bold">PRIMARY OBJECTIVE</h4>
            <p className="text-sm font-semibold text-slate-100 leading-relaxed bg-slate-950 p-4 rounded-xl border border-slate-800">
              {selectedStage.objective}
            </p>
          </div>

          {/* Key Questions */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-cyan-400 mb-2 font-bold">KEY QUESTIONS AN FDE ASKS</h4>
            <ul className="space-y-2 font-sans">
              {selectedStage.keyQuestions.map((q, idx) => (
                <li key={idx} className="flex items-start space-x-2.5 text-xs text-slate-200">
                  <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Artifacts & Tech */}
          <div className="grid grid-cols-2 gap-4 mb-6 font-mono">
            <div>
              <h4 className="text-xs text-indigo-400 mb-2 font-bold">DELIVERABLE ARTIFACTS</h4>
              <div className="space-y-1.5">
                {selectedStage.artifacts.map((art, idx) => (
                  <div key={idx} className="text-[11px] px-2.5 py-1 rounded bg-indigo-950/60 border border-indigo-800/50 text-indigo-200 font-bold">
                    {art}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs text-purple-400 mb-2 font-bold">TECHS & TOOLS</h4>
              <div className="flex flex-wrap gap-1">
                {selectedStage.technologies.map((tech, idx) => (
                  <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-slate-950 border border-slate-700 text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Common Mistakes */}
          <div className="mb-6">
            <h4 className="text-xs font-mono text-rose-400 mb-1.5 font-bold">COMMON MISTAKES</h4>
            <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-900/50 text-xs text-rose-200 font-sans">
              {selectedStage.commonMistakes[0]}
            </div>
          </div>

          {/* FDE Mindset */}
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-xs font-mono text-emerald-300 flex items-center space-x-3 shadow-inner">
            <CheckCircle className="w-5 h-5 shrink-0 text-emerald-400" />
            <span><strong>FDE MINDSET:</strong> {selectedStage.fdeMindset}</span>
          </div>

        </div>

      </div>
    </div>
  );
};
