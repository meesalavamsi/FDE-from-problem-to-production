import React, { useState } from 'react';
import { SCENARIO_DATA } from '../../data/scenarioData';
import { Scenario } from '../../types/fde';
import { ShieldAlert, CheckCircle2, XCircle, ArrowRight, Activity, Terminal, Sparkles, BookOpen, AlertTriangle } from 'lucide-react';
import { useFde } from '../../context/FdeContext';

export const ScenarioEngine: React.FC = () => {
  const { passedScenarios, markScenarioPassed } = useFde();
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number>(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  const currentScenario: Scenario = SCENARIO_DATA[selectedScenarioIndex];
  const isPassed = passedScenarios.includes(currentScenario.id);

  const handleSelectOption = (optionId: string) => {
    if (hasSubmitted) return;
    setSelectedOptionId(optionId);
  };

  const handleSubmitDecision = () => {
    if (!selectedOptionId) return;
    setHasSubmitted(true);
    const chosen = currentScenario.options.find(o => o.id === selectedOptionId);
    if (chosen && chosen.isCorrect) {
      markScenarioPassed(currentScenario.id);
    }
  };

  const handleNextScenario = () => {
    setHasSubmitted(false);
    setSelectedOptionId(null);
    setSelectedScenarioIndex((prev) => (prev + 1) % SCENARIO_DATA.length);
  };

  return (
    <section id="scenarios" className="py-20 border-b border-cyan-500/20 bg-[#050814] relative scanline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/40 text-rose-400 text-xs font-mono mb-4 shadow-lg shadow-rose-500/10">
            <Activity className="w-4 h-4 animate-pulse" />
            <span>20 ENTERPRISE FAILURE SCENARIOS SIMULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            THE FDE SCENARIO ENGINE
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Enterprise AI deployments fail in unpredictable ways. Make high-stakes architectural decisions and learn post-mortem lessons.
          </p>
        </div>

        {/* Main Simulator Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Scenario Selector Sidebar */}
          <div className="lg:col-span-4 p-4 rounded-2xl glass-panel border border-slate-800 max-h-[620px] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3 font-mono text-xs text-slate-400">
              <span className="font-bold">ACTIVE INCIDENTS ({SCENARIO_DATA.length})</span>
              <span className="text-emerald-400 font-bold">{passedScenarios.length} PASSED</span>
            </div>

            <div className="space-y-2 font-mono">
              {SCENARIO_DATA.map((sc, idx) => {
                const isActive = idx === selectedScenarioIndex;
                const passed = passedScenarios.includes(sc.id);
                return (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setSelectedScenarioIndex(idx);
                      setHasSubmitted(false);
                      setSelectedOptionId(null);
                    }}
                    className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-center justify-between text-xs ${
                      isActive
                        ? 'bg-cyan-950/90 border-cyan-400 text-white shadow-lg shadow-cyan-500/20 font-bold'
                        : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-center space-x-2.5 truncate pr-2">
                      <span className="text-cyan-400 font-bold shrink-0">#{sc.id}</span>
                      <span className="truncate font-sans font-medium">{sc.title}</span>
                    </div>

                    {passed && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Scenario Execution Console */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl glass-panel-glow border border-cyan-500/40 shadow-2xl">
            
            {/* Scenario Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold">SCENARIO #{currentScenario.id} • {currentScenario.category}</span>
                <h3 className="text-2xl font-black text-white mt-1">{currentScenario.title}</h3>
              </div>
              {isPassed && (
                <span className="px-3 py-1 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-500/50 text-xs font-mono font-bold shadow-sm">
                  ✓ RESOLVED
                </span>
              )}
            </div>

            {/* Customer Urgent Dispatch Card */}
            <div className="p-5 rounded-2xl bg-rose-950/30 border border-rose-500/40 mb-6 shadow-inner">
              <div className="flex items-center space-x-2 text-xs font-mono text-rose-400 font-bold mb-2">
                <AlertTriangle className="w-4 h-4 animate-pulse" />
                <span>INCOMING CUSTOMER URGENT DISPATCH</span>
              </div>
              <blockquote className="text-sm font-semibold text-slate-100 italic leading-relaxed font-sans">
                "{currentScenario.customerMessage}"
              </blockquote>
            </div>

            {/* Current System & Constraints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 font-sans">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono font-bold text-slate-400">CURRENT ARCHITECTURE</span>
                <p className="text-xs text-slate-200 font-medium mt-1">{currentScenario.currentSystem}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] font-mono font-bold text-cyan-400">HARD CONSTRAINTS</span>
                <ul className="text-xs text-slate-300 mt-1 space-y-1">
                  {currentScenario.constraints.map((c, idx) => (
                    <li key={idx} className="flex items-center space-x-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Options Selection */}
            <div className="space-y-4 mb-6">
              <h4 className="text-xs font-mono font-bold text-slate-300">AVAILABLE ENGINEERING DECISIONS</h4>

              {currentScenario.options.map((option) => {
                const isSelected = selectedOptionId === option.id;
                return (
                  <button
                    key={option.id}
                    disabled={hasSubmitted}
                    onClick={() => handleSelectOption(option.id)}
                    className={`w-full p-5 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'bg-cyan-950/90 border-cyan-400 shadow-xl shadow-cyan-500/20'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="font-bold text-sm text-white mb-1.5">{option.label}</div>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">{option.description}</p>

                    {/* Post-Mortem Feedback (After Submit) */}
                    {hasSubmitted && isSelected && (
                      <div className={`mt-4 p-4 rounded-xl border text-xs font-sans ${
                        option.isCorrect 
                          ? 'bg-emerald-950/90 border-emerald-500/50 text-emerald-100 shadow-lg' 
                          : 'bg-rose-950/90 border-rose-500/50 text-rose-100 shadow-lg'
                      }`}>
                        <div className="flex items-center space-x-2 font-bold font-mono mb-2">
                          {option.isCorrect ? (
                            <>
                              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                              <span>✓ CORRECT DECISION — INCIDENT RESOLVED</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-5 h-5 text-rose-400" />
                              <span>✗ INCIDENT ESCALATED — SUB-OPTIMAL CHOICE</span>
                            </>
                          )}
                        </div>

                        <p className="mb-2"><strong>CONSEQUENCE:</strong> {option.consequence}</p>
                        <p className="mb-2"><strong>EXPLANATION:</strong> {option.explanation}</p>
                        <div className="pt-2 border-t border-slate-700/60 font-mono text-[11px]">
                          <strong>ENGINEERING LESSON:</strong> {option.engineeringLesson}
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              {!hasSubmitted ? (
                <button
                  disabled={!selectedOptionId}
                  onClick={handleSubmitDecision}
                  className="px-8 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 disabled:opacity-50 text-slate-950 font-black text-xs tracking-wider shadow-lg shadow-cyan-500/25 transition-all"
                >
                  EXECUTE DECISION
                </button>
              ) : (
                <button
                  onClick={handleNextScenario}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-black text-xs tracking-wider flex items-center space-x-2 shadow-lg transition-all"
                >
                  <span>NEXT SCENARIO</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
