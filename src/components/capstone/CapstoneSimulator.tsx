import React, { useState } from 'react';
import { Rocket, CheckCircle2, ArrowRight, ShieldAlert, Terminal, Award, Sparkles } from 'lucide-react';
import { useFde } from '../../context/FdeContext';

export const CapstoneSimulator: React.FC = () => {
  const { addScore } = useFde();
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const steps = [
    { title: '1. Stakeholder Interviews', action: 'Interview CTO, CISO, and Ops Manager to discover pain points.' },
    { title: '2. Problem Discovery', action: 'Perform 5-Whys analysis: isolate manual PDF document bottlenecks.' },
    { title: '3. AS-IS Process Mapping', action: 'Construct cross-functional Swim-lane diagram of 18-day review process.' },
    { title: '4. Use Case Definition', action: 'Define target use case: Automated Invoice & Contract Processing Platform.' },
    { title: '5. BRD Authoring', action: 'Write formal Business Requirement Document with >98% accuracy NFR.' },
    { title: '6. System Design (TDD)', action: 'Design multi-tenant HLD/LLD with semantic Redis caching.' },
    { title: '7. Build AI Workflow', action: 'Build async FastAPI ingestion endpoint with Pydantic validation.' },
    { title: '8. Implement RAG', action: 'Deploy hybrid vector search (Qdrant) with Cohere reranking.' },
    { title: '9. Add Autonomous Agents', action: 'Build LangGraph multi-agent loop with human approval gates.' },
    { title: '10. Integrate Enterprise APIs', action: 'Connect SAP ERP and Salesforce via OAuth2 webhooks.' },
    { title: '11. Add MCP Servers', action: 'Deploy ServiceNow and GitHub MCP servers with scoped permissions.' },
    { title: '12. Add Authentication & RBAC', action: 'Enforce JWT bearer token scoping across all API tools.' },
    { title: '13. Add Evaluation Harness', action: 'Implement Ragas benchmark evaluation suite in CI/CD pipeline.' },
    { title: '14. Add Observability', action: 'Deploy OpenTelemetry tracing and Grafana token cost dashboards.' },
    { title: '15. Conduct UAT Program', action: 'Run 100-user UAT pilot testing program across 3 departments.' },
    { title: '16. Production Go-Live', action: 'Execute zero-downtime Canary rollout on Kubernetes cluster.' },
    { title: '17. Monitor Telemetry', action: 'Track TTFT, latency, error rates, and groundedness in War Room.' },
    { title: '18. Train Employees', action: 'Lead internal champion workshops and embed Slack UI widget.' },
    { title: '19. Operational Handover', action: 'Hand over operational runbooks and on-call playbooks to IT.' },
    { title: '20. Prove Business ROI', action: 'Present verified $1.4M net annual cost savings to executive board.' },
  ];

  const handleNextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      addScore(25);
    } else {
      setIsCompleted(true);
      addScore(250);
    }
  };

  return (
    <section id="capstone" className="py-20 border-b border-slate-800/80 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>FINAL CAPSTONE ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            NEXORA AI OPERATIONS PLATFORM
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Execute the complete 20-step Forward Deployed Engineer engagement from initial stakeholder discovery to proving financial ROI.
          </p>
        </div>

        {/* Capstone Console Layout */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl glass-panel-glow border border-cyan-500/40 font-sans space-y-8">
          
          {/* Progress Header */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 font-mono text-xs">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-white font-bold">CAPSTONE ENGAGEMENT EXECUTION</span>
            </div>
            <span className="text-cyan-400 font-bold">STEP {currentStep + 1} OF 20</span>
          </div>

          {/* Active Step Card */}
          <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
            <div className="text-xs font-mono text-cyan-400 font-bold">ACTIVE CAPSTONE PHASE</div>
            <h3 className="text-xl font-extrabold text-white">{steps[currentStep].title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed font-mono">{steps[currentStep].action}</p>
          </div>

          {/* Step Progress Bar */}
          <div>
            <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800 overflow-hidden mb-2">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 transition-all duration-300"
                style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>01. DISCOVER</span>
              <span>10. INTEGRATE</span>
              <span>20. PROVE ROI</span>
            </div>
          </div>

          {/* Action Button */}
          <div>
            {!isCompleted ? (
              <button
                onClick={handleNextStep}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold text-sm tracking-wider flex items-center justify-center space-x-3 shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02]"
              >
                <Terminal className="w-5 h-5" />
                <span>{currentStep === steps.length - 1 ? 'COMPLETE CAPSTONE ENGAGEMENT' : 'EXECUTE STEP & ADVANCE'}</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <div className="p-6 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-3">
                <div className="inline-flex p-3 rounded-full bg-emerald-500/20 text-emerald-400 mb-1">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-white font-mono">CAPSTONE ENGAGEMENT PASSED!</h3>
                <p className="text-xs text-emerald-200">
                  You have successfully completed the 20-step Nexora Enterprise AI Operations Platform deployment. You are now certified as a Forward Deployed Engineer.
                </p>
                <button
                  onClick={() => {
                    setCurrentStep(0);
                    setIsCompleted(false);
                  }}
                  className="px-6 py-2.5 rounded-xl bg-emerald-400 text-slate-950 font-mono font-bold text-xs"
                >
                  RE-RUN CAPSTONE ENGAGEMENT
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

