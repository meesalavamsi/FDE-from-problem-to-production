import React, { useState } from 'react';
import { Mission } from '../../types/fde';
import { X, CheckCircle2, AlertTriangle, Terminal } from 'lucide-react';
import { useFde } from '../../context/FdeContext';

interface MissionDetailModalProps {
  mission: Mission | null;
  onClose: () => void;
}

export const MissionDetailModal: React.FC<MissionDetailModalProps> = ({ mission, onClose }) => {
  if (!mission) return null;

  const { completedMissions, toggleMissionComplete, addScore } = useFde();
  const isCompleted = completedMissions.includes(mission.id);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmittedDecision, setHasSubmittedDecision] = useState(false);

  const handleDecisionSubmit = () => {
    if (selectedOption === null) return;
    setHasSubmittedDecision(true);
    const chosen = mission.decisionPoint.options[selectedOption];
    if (chosen.isCorrect) {
      addScore(50);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#0d111a] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-auto">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800 bg-slate-900/90 flex items-center justify-between sticky top-0 z-10">
          <div>
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
              <span>{mission.week}</span>
              <span>•</span>
              <span className="text-slate-400">{mission.month}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">{mission.title}</h2>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => toggleMissionComplete(mission.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold flex items-center space-x-2 border transition-all ${
                isCompleted
                  ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/50'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'COMPLETED' : 'MARK COMPLETE'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body Scrollable */}
        <div className="p-6 space-y-8 overflow-y-auto font-sans">

          {/* Mission Objective Banner */}
          <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/30">
            <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
              <Terminal className="w-4 h-4" />
              <span>FDE MISSION OBJECTIVE</span>
            </div>
            <p className="text-sm font-semibold text-white leading-relaxed">{mission.mission}</p>
          </div>

          {/* Story & Problem Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-xs font-mono text-amber-400 mb-2 font-bold">CUSTOMER STORY</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{mission.customerStory}</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-xs font-mono text-rose-400 mb-2 font-bold">BUSINESS PROBLEM</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{mission.businessProblem}</p>
            </div>
          </div>

          {/* Current Environment */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
            <h4 className="text-xs font-mono text-slate-400 mb-2">CURRENT ENVIRONMENT CONSTRAINTS</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              {mission.currentEnvironment.map((item, idx) => (
                <div key={idx} className="flex items-center space-x-2 p-2 rounded bg-slate-950 border border-slate-800/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture & Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-7 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-xs font-mono text-indigo-400 mb-2 font-bold">SYSTEM ARCHITECTURE SUMMARY</h4>
              <div className="p-3 rounded-lg bg-slate-950 font-mono text-xs text-indigo-300 border border-indigo-900/30">
                {mission.architectureSummary}
              </div>
            </div>

            <div className="md:col-span-5 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <h4 className="text-xs font-mono text-purple-400 mb-2 font-bold">TECHNOLOGY STACK</h4>
              <div className="flex flex-wrap gap-1.5">
                {mission.technology.map((tech, idx) => (
                  <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded bg-purple-950/40 border border-purple-800/40 text-purple-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Concepts List */}
          <div>
            <h4 className="text-xs font-mono text-cyan-400 mb-2 font-bold">CORE CONCEPTS MASTERED</h4>
            <div className="flex flex-wrap gap-2">
              {mission.concepts.map((concept, idx) => (
                <div key={idx} className="flex items-center space-x-1.5 text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{concept}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Challenge & Decision Point */}
          <div className="p-5 rounded-xl glass-panel-glow border border-cyan-500/40 space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono text-amber-400">
              <AlertTriangle className="w-4 h-4" />
              <span>INTERACTIVE FDE DECISION POINT</span>
            </div>

            <h3 className="text-base font-bold text-white">{mission.decisionPoint.question}</h3>

            <div className="space-y-3">
              {mission.decisionPoint.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                return (
                  <button
                    key={idx}
                    disabled={hasSubmittedDecision}
                    onClick={() => setSelectedOption(idx)}
                    className={`w-full p-4 rounded-xl border text-left text-xs transition-all flex items-start space-x-3 ${
                      isSelected
                        ? 'bg-cyan-950 border-cyan-400 text-white'
                        : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full border border-cyan-500/50 flex items-center justify-center shrink-0 text-[10px] font-mono mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <div className="space-y-1">
                      <p className="font-semibold text-slate-100">{opt.text}</p>
                      {hasSubmittedDecision && (
                        <div className={`mt-2 p-2.5 rounded-lg border text-xs ${opt.isCorrect ? 'bg-emerald-950/60 border-emerald-500/50 text-emerald-300' : 'bg-rose-950/60 border-rose-500/50 text-rose-300'}`}>
                          <p className="font-bold">{opt.isCorrect ? '✓ CORRECT FDE DECISION' : '✗ SUB-OPTIMAL CHOICE'}</p>
                          <p className="mt-1">{opt.consequence}</p>
                          <p className="mt-1 text-[11px] font-mono opacity-90">Reasoning: {opt.reasoning}</p>
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {!hasSubmittedDecision && (
              <button
                disabled={selectedOption === null}
                onClick={handleDecisionSubmit}
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs tracking-wider transition-all"
              >
                SUBMIT DECISION
              </button>
            )}
          </div>

          {/* Solution & Mini Project */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-800/40">
              <h4 className="text-xs font-mono text-emerald-400 mb-1 font-bold">ENGINEERING SOLUTION</h4>
              <p className="text-xs text-emerald-200 leading-relaxed">{mission.solution}</p>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/40">
              <h4 className="text-xs font-mono text-purple-400 mb-1 font-bold">HANDS-ON MINI PROJECT</h4>
              <p className="text-xs text-purple-200 leading-relaxed">{mission.miniProject}</p>
            </div>
          </div>

          {/* Real-World Application & Unlocked Skills */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-slate-400">REAL-WORLD FDE IMPACT</span>
              <p className="text-xs text-slate-200">{mission.realWorldApplication}</p>
            </div>

            <div className="flex flex-wrap gap-1 shrink-0">
              {mission.skillsUnlocked.map((skill, idx) => (
                <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/50">
                  +{skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
