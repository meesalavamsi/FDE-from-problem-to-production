import React from 'react';
import { FdeLoop } from './FdeLoop';
import { CheckCircle2, XCircle, Sparkles, Code, Cpu, Compass } from 'lucide-react';

export const FdeDefinition: React.FC = () => {
  const comparisons = [
    {
      dimension: "Requirement Source",
      traditional: "Receives static predefined requirements from PMs",
      fde: "Discovers ambiguous requirements directly from customer workflows"
    },
    {
      dimension: "Working Environment",
      traditional: "Works mainly inside known internal codebase & infrastructure",
      fde: "Operates inside unfamiliar, legacy enterprise customer environments"
    },
    {
      dimension: "Problem Scope",
      traditional: "Builds defined feature tickets in sprint backlogs",
      fde: "Turns messy, ambiguous customer problems into production solutions"
    },
    {
      dimension: "Prototyping Speed",
      traditional: "Follows standard 3-week planning and sprint cycles",
      fde: "Prototypes solutions rapidly (hours/days) to validate feasibility"
    },
    {
      dimension: "System Integration",
      traditional: "Focuses on internal application APIs and services",
      fde: "Integrates legacy ERP, CRM, ITSM, databases, and OAuth SSO"
    },
    {
      dimension: "AI System Quality",
      traditional: "Treats AI as a simple API wrapper or prompt call",
      fde: "Evaluates AI behavior with Ragas, groundedness, and LLMOps telemetry"
    },
    {
      dimension: "Production Rollout",
      traditional: "Handsoff code to DevOps for deployment",
      fde: "Deploys, monitors, and operates system inside customer cloud/K8s"
    },
    {
      dimension: "Human Adoption",
      traditional: "Assumes users will adopt features because they were built",
      fde: "Drives ADKAR change management, training, and 85%+ active adoption"
    },
    {
      dimension: "Business Impact",
      traditional: "Measures story points completed and code velocity",
      fde: "Proves concrete financial ROI ($ saved, hours reduced) to the board"
    },
    {
      dimension: "Feedback Loop",
      traditional: "Works on isolated feature branches",
      fde: "Codifies reusable enterprise AI patterns back into core platform libraries"
    },
  ];

  return (
    <section id="fde-loop" className="py-20 border-b border-slate-800/80 grid-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>ROLE DEFINITION & CONTRAST</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            WHAT DOES AN FDE ACTUALLY DO?
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A hybrid role combining Software Engineering, AI Engineering, Enterprise System Design, Customer Discovery, and Business ROI Thinking.
          </p>
        </div>

        {/* Traditional SWE vs FDE Comparison Table Cards */}
        <div className="mb-20">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white font-mono">TRADITIONAL ENGINEERING vs FORWARD DEPLOYED ENGINEERING</h3>
          </div>

          <div className="space-y-3">
            {comparisons.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl glass-panel border border-slate-800 hover:border-slate-700 transition-all grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                {/* Dimension Title */}
                <div className="md:col-span-3">
                  <span className="text-xs font-mono font-bold text-cyan-400 block">{item.dimension}</span>
                </div>

                {/* Traditional SWE */}
                <div className="md:col-span-4 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400 flex items-center space-x-2.5">
                  <XCircle className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>{item.traditional}</span>
                </div>

                {/* FDE Difference */}
                <div className="md:col-span-5 p-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-xs text-cyan-200 font-medium flex items-center space-x-2.5 shadow-sm shadow-cyan-500/10">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item.fde}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 11-Stage FDE Circular Lifecycle Loop */}
        <FdeLoop />

      </div>
    </section>
  );
};

