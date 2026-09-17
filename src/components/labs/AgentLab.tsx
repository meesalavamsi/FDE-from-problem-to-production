import React, { useState } from 'react';
import { Cpu, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, UserCheck, Play } from 'lucide-react';

export const AgentLab: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    { title: 'User Request', desc: 'Customer submits IT support ticket via Slack', type: 'input' },
    { title: 'Router Agent', desc: 'Classifies intent: ServiceNow ticket resolution', type: 'agent' },
    { title: 'Tool Selection', desc: 'Selects `reset_active_directory_user` MCP tool', type: 'tool' },
    { title: 'Data Retrieval', desc: 'Fetches user identity and LDAP permissions', type: 'data' },
    { title: 'State Validation', desc: 'Verifies user permission levels and parameters', type: 'validate' },
    { title: 'Human Approval', desc: 'Requires IT Lead approval in Slack for write action', type: 'hitl' },
    { title: 'Execution', desc: 'Executes parameterized API call via MCP Server', type: 'execute' },
    { title: 'Observation', desc: 'Observes HTTP 200 OK success response', type: 'observe' },
    { title: 'Response', desc: 'Notifies user: "Password reset link sent to registered email"', type: 'respond' },
  ];

  return (
    <div className="p-6 rounded-2xl glass-panel border border-slate-800 font-sans">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
            <Cpu className="w-4 h-4" />
            <span>AGENT WORKFLOW NODE EDITOR LAB</span>
          </div>
          <h3 className="text-xl font-bold text-white">AGENT WORKFLOW & FAILURE STATE CANVAS</h3>
        </div>

        <button
          onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
          className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold font-mono text-xs flex items-center space-x-2 shadow-md"
        >
          <Play className="w-3.5 h-3.5" />
          <span>STEP SIMULATION ({activeStep + 1}/{steps.length})</span>
        </button>
      </div>

      {/* Nodes Canvas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          const isPassed = idx < activeStep;
          return (
            <div
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isActive
                  ? 'bg-cyan-950/80 border-cyan-400 shadow-lg shadow-cyan-500/10'
                  : isPassed
                  ? 'bg-slate-900/80 border-emerald-500/30 text-slate-300'
                  : 'bg-slate-900/40 border-slate-800 text-slate-500'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                <span className="text-cyan-400 font-bold">NODE 0{idx + 1}</span>
                {step.type === 'hitl' && (
                  <span className="px-1.5 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800/50">
                    HITL GATE
                  </span>
                )}
              </div>
              <h4 className="font-bold text-sm text-white mb-1">{step.title}</h4>
              <p className="text-xs text-slate-300">{step.desc}</p>
            </div>
          );
        })}
      </div>

      {/* State Inspector */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
        <span className="text-cyan-400 font-bold">ACTIVE STEP INSPECTION: </span>
        <span>{steps[activeStep].title} — {steps[activeStep].desc}</span>
      </div>
    </div>
  );
};

