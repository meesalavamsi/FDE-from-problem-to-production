import React from 'react';
import { Award, CheckCircle2, ShieldCheck, Terminal } from 'lucide-react';
import { useFde } from '../../context/FdeContext';

export const SkillMatrix: React.FC = () => {
  const { completedMissions, passedScenarios } = useFde();

  const skillDomains = [
    { name: "Python for Enterprise AI", evidence: "Completed Mission 1 (FastAPI & Pydantic)" },
    { name: "Backend Architecture", evidence: "Built async API microservices" },
    { name: "AI Engineering", evidence: "Configured prompt schemas & temperature control" },
    { name: "RAG & Hybrid Search", evidence: "Completed Mission 3 (Vector DB & Grounding)" },
    { name: "Agentic AI Systems", evidence: "Passed Agent Failure Challenge & LangGraph state" },
    { name: "Model Context Protocol (MCP)", evidence: "Built custom MCP server for ServiceNow" },
    { name: "Enterprise Integration", evidence: "Integrated OAuth2 SAML SSO & SAP endpoints" },
    { name: "Cloud Infrastructure", evidence: "Deployed to AWS / Azure Private Link" },
    { name: "DevOps for AI", evidence: "Wrote Helm production manifests & readiness probes" },
    { name: "LLMOps & Tracing", evidence: "Configured OpenTelemetry & Ragas eval suites" },
    { name: "Security & Guardrails", evidence: "Scrubbed PII logs & passed CISO audit" },
    { name: "Enterprise System Design", evidence: "Designed HLD / LLD multi-tenant architecture" },
    { name: "Problem Discovery", evidence: "Executed 5-Whys root cause discovery interviews" },
    { name: "User Research", evidence: "Quantified operational pain points" },
    { name: "BRD Mastery", evidence: "Authored formal 12-page enterprise BRD" },
    { name: "TDD Architecture", evidence: "Produced OpenAPI contracts and schemas" },
    { name: "Executive Communication", evidence: "Pitched financial ROI to CFO persona" },
    { name: "Stakeholder Management", evidence: "Resolved CTO / CISO scope deadlock" },
    { name: "UAT Execution", evidence: "Ran 100-user UAT pilot testing program" },
    { name: "Production Deployment", evidence: "Executed zero-downtime Canary rollout" },
    { name: "Change Management", evidence: "Achieved 85%+ active adoption rate" },
    { name: "Financial ROI Verification", evidence: "Proven $1.4M net annual cost savings" },
  ];

  return (
    <section id="matrix" className="py-20 border-b border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>EVIDENCE-BASED COMPETENCY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            FDE SKILL MATRIX
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            No meaningless percentages. Skill progress is tracked strictly by verifiable engineering artifacts, passed failure scenarios, and completed enterprise missions.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillDomains.map((skill, idx) => {
            const isUnlocked = idx < completedMissions.length + 3;
            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border transition-all flex items-start space-x-3 ${
                  isUnlocked
                    ? 'bg-cyan-950/40 border-cyan-500/30 text-white shadow-sm shadow-cyan-500/10'
                    : 'bg-slate-900/40 border-slate-800 text-slate-500'
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-mono text-xs font-bold ${
                  isUnlocked ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-slate-600'
                }`}>
                  {idx + 1}
                </div>

                <div>
                  <h4 className="font-bold text-xs font-mono text-slate-200">{skill.name}</h4>
                  <div className="flex items-center space-x-1.5 text-[11px] font-mono text-cyan-400 mt-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{skill.evidence}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

