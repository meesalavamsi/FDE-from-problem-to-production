import React, { useState } from 'react';
import { User, Cpu, Database, Server, CheckCircle2, TrendingUp, Zap, Radio } from 'lucide-react';

export const HeroArchitectureCanvas: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('agents');

  const nodes = [
    { 
      id: 'user', 
      label: 'Enterprise User', 
      icon: User, 
      color: 'border-cyan-500/60 text-cyan-300 bg-cyan-950/60 shadow-cyan-500/20',
      telemetry: 'OAuth2 JWT Session Active • 500 Req/s',
      description: 'Authenticated employee clients initiating structured tasks and natural language prompts.'
    },
    { 
      id: 'app', 
      label: 'FastAPI Gateway', 
      icon: Cpu, 
      color: 'border-blue-500/60 text-blue-300 bg-blue-950/60 shadow-blue-500/20',
      telemetry: 'Latency: 18ms • Concurrency Limit: 1,000',
      description: 'Async rate limiting, Pydantic type validation, and RFC-7807 error handling edge gateway.'
    },
    { 
      id: 'agents', 
      label: 'Agents / RAG / MCP', 
      icon: Database, 
      color: 'border-indigo-500/60 text-indigo-300 bg-indigo-950/60 shadow-indigo-500/20',
      telemetry: 'Qdrant HNSW • Hybrid Search + Reranker',
      description: 'LangGraph multi-agent orchestration connected to ServiceNow & GitHub MCP servers.'
    },
    { 
      id: 'enterprise', 
      label: 'Enterprise Systems', 
      icon: Server, 
      color: 'border-purple-500/60 text-purple-300 bg-purple-950/60 shadow-purple-500/20',
      telemetry: 'SAP ERP • Salesforce CRM • ServiceNow API',
      description: 'Idempotent integration webhooks and SOAP/REST enterprise adapters.'
    },
    { 
      id: 'prod', 
      label: 'K8s Cluster Production', 
      icon: CheckCircle2, 
      color: 'border-emerald-500/60 text-emerald-300 bg-emerald-950/60 shadow-emerald-500/20',
      telemetry: 'GPU Node Pool • Helm Zero-Downtime Rollout',
      description: 'Multi-region Kubernetes deployment with automated Vault secret injection and probes.'
    },
    { 
      id: 'impact', 
      label: 'Verified ROI ($ Savings)', 
      icon: TrendingUp, 
      color: 'border-amber-500/60 text-amber-300 bg-amber-950/60 shadow-amber-500/20',
      telemetry: '$1.4M Annual Benefit • 14,000 hrs Saved',
      description: 'Telemetry dashboard proving time saved and operational cost reduction to executive leadership.'
    },
  ];

  const currentNode = nodes.find(n => n.id === activeNodeId) || nodes[2];

  return (
    <div className="w-full py-6 overflow-hidden font-sans">
      <div className="relative max-w-6xl mx-auto px-4">
        
        {/* Node Flow Matrix */}
        <div className="hidden md:flex items-center justify-between relative z-10 gap-2">
          {nodes.map((node, index) => {
            const Icon = node.icon;
            const isLast = index === nodes.length - 1;
            const isSelected = activeNodeId === node.id;
            return (
              <React.Fragment key={node.id}>
                {/* Node Item */}
                <div 
                  onClick={() => setActiveNodeId(node.id)}
                  className="flex flex-col items-center group relative cursor-pointer"
                >
                  <div className={`w-16 h-16 rounded-2xl border ${node.color} flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 backdrop-blur-xl ${
                    isSelected ? 'ring-2 ring-cyan-400 scale-105 shadow-cyan-500/40' : ''
                  }`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className={`mt-2.5 text-[11px] font-mono font-bold text-center max-w-[110px] leading-tight transition-colors ${
                    isSelected ? 'text-cyan-300' : 'text-slate-400 group-hover:text-slate-200'
                  }`}>
                    {node.label}
                  </span>
                </div>

                {/* Animated Transmission Connector */}
                {!isLast && (
                  <div className="flex-1 px-1 flex items-center justify-center relative">
                    <div className="w-full h-[2px] bg-gradient-to-r from-slate-800 via-cyan-500/60 to-slate-800 relative overflow-hidden">
                      <div className="absolute inset-0 w-16 h-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent blur-[1px] animate-[flowRight_1.5s_linear_infinite]" />
                    </div>
                    <Zap className="w-3.5 h-3.5 text-cyan-400 absolute right-0 animate-pulse" />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile Grid Layout */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {nodes.map((node) => {
            const Icon = node.icon;
            const isSelected = activeNodeId === node.id;
            return (
              <div 
                key={node.id} 
                onClick={() => setActiveNodeId(node.id)}
                className={`p-3.5 rounded-xl border ${node.color} flex items-center space-x-3 glass-panel cursor-pointer ${
                  isSelected ? 'ring-2 ring-cyan-400' : ''
                }`}
              >
                <Icon className="w-5 h-5 shrink-0" />
                <span className="text-xs font-mono font-bold text-slate-200">{node.label}</span>
              </div>
            );
          })}
        </div>

        {/* Selected Node Inspector Footer Banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-950/90 border border-cyan-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs shadow-lg">
          <div className="flex items-center space-x-3">
            <Radio className="w-4 h-4 text-cyan-400 animate-pulse shrink-0" />
            <div>
              <span className="text-slate-400">INSPECTING NODE: </span>
              <span className="text-white font-bold">{currentNode.label.toUpperCase()}</span>
              <p className="text-[11px] text-slate-300 font-sans mt-0.5">{currentNode.description}</p>
            </div>
          </div>

          <div className="px-3 py-1.5 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 font-bold shrink-0 text-[11px]">
            {currentNode.telemetry}
          </div>
        </div>

      </div>
    </div>
  );
};
