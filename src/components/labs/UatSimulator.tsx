import React, { useState } from 'react';
import { Rocket, CheckCircle2, AlertTriangle, Play, ShieldAlert } from 'lucide-react';

export const UatSimulator: React.FC = () => {
  const [stage, setStage] = useState<number>(4); // UAT Stage
  const [incidentActive, setIncidentActive] = useState<boolean>(true);
  const [decisionOutcome, setDecisionOutcome] = useState<string | null>(null);

  const stages = [
    'Development', 'Testing', 'Evaluation', 'Security Audit', 'UAT Pilot', 'Go/No-Go Gate', 'Production Rollout', 'Live Monitoring'
  ];

  const handleDecision = (action: string) => {
    if (action === 'fix') {
      setDecisionOutcome("Hotfix deployed to Staging in 45 mins. UAT re-verification passed 100%. Proceeded to Go/No-Go Gate.");
      setStage(5);
    } else if (action === 'delay') {
      setDecisionOutcome("Go-Live delayed by 7 days. Risk mitigated cleanly without user impact.");
    } else if (action === 'rollback') {
      setDecisionOutcome("Rolled back to previous stable build. Zero data corruption recorded.");
    }
    setIncidentActive(false);
  };

  return (
    <div className="p-6 rounded-2xl glass-panel border border-slate-800 font-sans">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
            <Rocket className="w-4 h-4" />
            <span>PRODUCTION LAUNCH SIMULATOR</span>
          </div>
          <h3 className="text-xl font-bold text-white">UAT & GO-LIVE PIPELINE SIMULATOR</h3>
        </div>
      </div>

      {/* 8-Stage Pipeline Indicator */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8 font-mono text-xs">
        {stages.map((stg, idx) => {
          const isCurrent = idx === stage;
          const isDone = idx < stage;
          return (
            <div
              key={idx}
              className={`p-2.5 rounded-lg border text-center transition-all ${
                isCurrent
                  ? 'bg-cyan-950 border-cyan-400 text-cyan-300 font-bold shadow-md'
                  : isDone
                  ? 'bg-emerald-950/60 border-emerald-500/30 text-emerald-400'
                  : 'bg-slate-900/40 border-slate-800 text-slate-500'
              }`}
            >
              <div className="text-[9px] text-slate-400 mb-0.5">STAGE 0{idx + 1}</div>
              <div className="truncate">{stg}</div>
            </div>
          );
        })}
      </div>

      {/* Incident Event Card */}
      {incidentActive && stage === 4 && (
        <div className="p-5 rounded-xl bg-amber-950/30 border border-amber-500/40 space-y-4 mb-6">
          <div className="flex items-center space-x-2 text-xs font-mono text-amber-400 font-bold">
            <AlertTriangle className="w-4 h-4" />
            <span>RANDOM INCIDENT TRIGGER: UAT WORKFLOW FAILURE</span>
          </div>

          <p className="text-xs text-amber-200 leading-relaxed">
            "During UAT Day 2, a memory leak in the PDF parsing worker caused 12 pilot users to receive an HTTP 504 Gateway Timeout error."
          </p>

          <div className="space-y-2 pt-2">
            <span className="text-xs font-mono text-white font-bold block">FDE INCIDENT RESPONSE CHOICE:</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono">
              <button
                onClick={() => handleDecision('fix')}
                className="p-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold"
              >
                OPTION A: Apply Async Memory Patch & Re-test
              </button>
              <button
                onClick={() => handleDecision('delay')}
                className="p-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold"
              >
                OPTION B: Delay Launch 7 Days for Full Audit
              </button>
              <button
                onClick={() => handleDecision('rollback')}
                className="p-3 rounded-lg bg-rose-500 hover:bg-rose-400 text-slate-950 font-bold"
              >
                OPTION C: Rollback to Legacy Staging Build
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Decision Outcome */}
      {decisionOutcome && (
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 font-mono text-xs text-emerald-300">
          <span className="font-bold">FDE DECISION OUTCOME: </span>
          <span>{decisionOutcome}</span>
        </div>
      )}
    </div>
  );
};

