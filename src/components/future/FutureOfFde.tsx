import React from 'react';
import { Compass, Cpu, ShieldCheck, CheckCircle2, TrendingUp } from 'lucide-react';

export const FutureOfFde: React.FC = () => {
  const pillars = [
    { title: "AI Core", desc: "LLMs, Embeddings, RAG, Multi-Agent Orchestration, MCP" },
    { title: "Software Engineering", desc: "FastAPI, Pydantic, Async I/O, Type Safety, Testing" },
    { title: "Enterprise Integration", desc: "SAP ERP, Salesforce CRM, ServiceNow, OAuth2, Webhooks" },
    { title: "Zero-Trust Security", desc: "RBAC Token Injection, PII Redaction, KMS Encryption, Audit" },
    { title: "LLMOps Telemetry", desc: "OpenTelemetry, Ragas Eval, TTFT Tracing, Grafana Cost" },
    { title: "DevOps & Cloud", desc: "Docker, Kubernetes, Helm, CI/CD, Canary Rollouts" },
    { title: "Human Adoption", desc: "ADKAR Model, Slack/Teams UI, Workflow Friction Removal" },
    { title: "Business ROI", desc: "Quantified Time Saved, Annual Cost Reduction, Payback Period" },
  ];

  return (
    <section className="py-20 border-b border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>INDUSTRY PERSPECTIVE & REALITY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            WHY THIS ROLE EXISTS
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Enterprise AI deployment requires vastly more than model access. It demands bridging raw AI models with complex real-world enterprise infrastructure.
          </p>
        </div>

        {/* 8-Pillar Equation Box */}
        <div className="p-8 rounded-2xl glass-panel-glow border border-cyan-500/30 mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-mono text-cyan-400 font-bold">THE FORWARD DEPLOYED ENGINEERING FORMULA</span>
            <h3 className="text-2xl font-extrabold text-white mt-1">THE 8 ESSENTIAL PILLARS</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((p, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-[10px] font-mono text-cyan-400 font-bold block mb-1">PILLAR 0{idx + 1}</span>
                <h4 className="font-bold text-sm text-white mb-1">{p.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Expansion Realities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
          <div className="p-6 rounded-2xl glass-panel border border-slate-800">
            <h4 className="text-sm font-mono text-cyan-400 font-bold mb-2">FRONTIER AI LABS</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Frontier AI companies deploy FDEs to help major enterprise clients integrate foundation models directly into core operational workflows.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-slate-800">
            <h4 className="text-sm font-mono text-indigo-400 font-bold mb-2">ENTERPRISE SAAS FIRMS</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Enterprise technology platforms deploy FDEs to architect custom MCP integrations and ensure zero-trust security compliance.
            </p>
          </div>

          <div className="p-6 rounded-2xl glass-panel border border-slate-800">
            <h4 className="text-sm font-mono text-purple-400 font-bold mb-2">GLOBAL CONGLOMERATES</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Fortune 500 enterprises hire internal FDE leads to bridge corporate IT infrastructure with data science and business units.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

