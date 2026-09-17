import React from 'react';
import { ArrowRight, TrendingUp, Compass, Award, Users, Code, Terminal } from 'lucide-react';

export const CareerMap: React.FC = () => {
  const mainPath = [
    { title: "Software Engineer", desc: "Foundational backend, APIs, databases, and testing." },
    { title: "AI Engineer", desc: "LLMs, embeddings, RAG pipelines, and prompt engineering." },
    { title: "Forward Deployed Engineer", desc: "Customer discovery, enterprise integrations, LLMOps, and business ROI." },
    { title: "Senior FDE", desc: "Complex multi-system architectures, high-stakes customer deployments." },
    { title: "Technical Lead / FDE Lead", desc: "Leading FDE engagement teams, mentoring junior engineers." },
    { title: "FDE Manager / Technical Deployment Lead", desc: "Managing enterprise portfolio deployments and partner relationships." },
    { title: "AI Solutions Architect / Applied AI Leadership", desc: "Defining global enterprise AI technology strategy and platform vision." },
  ];

  const adjacentPaths = [
    { name: "FDE → Product Management", desc: "Leveraging deep customer problem discovery & user research experience." },
    { name: "FDE → Solutions Architecture", desc: "Designing high-level enterprise cloud & security frameworks." },
    { name: "FDE → Core AI Engineering", desc: "Bringing real-world production feedback back into foundation model labs." },
    { name: "FDE → Technical Consulting", desc: "Advising executives on strategic AI transformation." },
    { name: "FDE → Startup Founder / CTO", desc: "Building new products from zero to one with end-to-end execution." },
  ];

  return (
    <section className="py-20 border-b border-slate-800/80 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>CAREER PATHWAYS & TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            THE FDE CAREER MAP
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Forward Deployed Engineering opens high-leverage career trajectories across technical leadership, product strategy, enterprise architecture, and executive management.
          </p>
        </div>

        {/* Main Linear Trajectory */}
        <div className="mb-16">
          <h3 className="text-sm font-mono font-bold text-cyan-400 text-center mb-8">PRIMARY TECHNICAL & LEADERSHIP PROGRESSION</h3>
          
          <div className="space-y-3 max-w-4xl mx-auto">
            {mainPath.map((step, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-xl glass-panel border border-slate-800 flex items-center justify-between hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center space-x-3">
                  <span className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-800/50 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-bold text-sm text-white font-mono">{step.title}</h4>
                    <p className="text-xs text-slate-400">{step.desc}</p>
                  </div>
                </div>

                {idx < mainPath.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-slate-600 hidden sm:block shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Adjacent Career Transitions */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-sm font-mono font-bold text-indigo-400 text-center mb-6">ADJACENT CAREER TRANSITION PATHWAYS</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {adjacentPaths.map((path, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                <h4 className="font-bold text-xs font-mono text-indigo-300 mb-1">{path.name}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{path.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

