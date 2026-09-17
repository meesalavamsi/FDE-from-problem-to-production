import React, { useState } from 'react';
import { Layers, Cpu, Database, Server, Lock, Activity, ArrowRight, ShieldCheck } from 'lucide-react';

export const ArchitectureLab: React.FC = () => {
  const [viewMode, setViewMode] = useState<'hld' | 'lld'>('hld');
  const [selectedNode, setSelectedNode] = useState<string | null>('gateway');

  const hldNodes = [
    { id: 'client', name: 'User Client (Web/Slack)', layer: 'Frontend Layer', details: 'Authenticated sessions via SSO JWT tokens' },
    { id: 'gateway', name: 'API Gateway (Kong/Nginx)', layer: 'Edge & Ingress', details: 'Rate limiting, SSL termination, and OAuth token validation' },
    { id: 'orchestrator', name: 'AI Orchestration Engine', layer: 'Application Core', details: 'FastAPI async routing & state machine execution' },
    { id: 'rag', name: 'Grounded RAG Pipeline', layer: 'Knowledge Retrieval', details: 'Hybrid Qdrant vector search + Cohere rerank' },
    { id: 'mcp', name: 'MCP Integration Layer', layer: 'Enterprise Connectivity', details: 'MCP servers connecting ServiceNow, SAP, and Salesforce' },
    { id: 'llm', name: 'LLM Multi-Cloud Endpoints', layer: 'Inference Layer', details: 'Azure OpenAI GPT-4o with failover fallback to local SLM' },
  ];

  const lldNodes = [
    { id: 'auth_mw', name: 'FastAPI OAuth2 Middleware', layer: 'Security', details: 'Decodes JWT, validates scopes, sets Request state' },
    { id: 'redis_cache', name: 'Redis Vector Semantic Cache', layer: 'Caching', details: 'Cosine similarity cache on prompt embeddings (0.95 threshold)' },
    { id: 'qdrant_hnsw', name: 'Qdrant HNSW Vector Cluster', layer: 'Storage', details: '1536-dim embeddings with metadata temporal filtering' },
    { id: 'langgraph_state', name: 'LangGraph State Manager', layer: 'Agent Logic', details: 'Redis-backed persistent state loops with recursion caps' },
    { id: 'mcp_client', name: 'MCP Stdio/SSE Client', layer: 'MCP Protocol', details: 'JSON-RPC 2.0 transport client managing tool permissions' },
    { id: 'otel_tracer', name: 'OpenTelemetry Span Exporter', layer: 'Observability', details: 'Exports traces and TTFT metrics to Prometheus/Grafana' },
  ];

  const activeNodes = viewMode === 'hld' ? hldNodes : lldNodes;

  return (
    <div className="p-6 rounded-2xl glass-panel border border-slate-800">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
            <Layers className="w-4 h-4" />
            <span>INTERACTIVE ARCHITECTURE BUILDER</span>
          </div>
          <h3 className="text-xl font-bold text-white">ENTERPRISE SYSTEM ARCHITECTURE LAB</h3>
        </div>

        {/* View Switcher */}
        <div className="flex items-center space-x-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setViewMode('hld')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
              viewMode === 'hld' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            HIGH-LEVEL DESIGN (HLD)
          </button>
          <button
            onClick={() => setViewMode('lld')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-bold transition-all ${
              viewMode === 'lld' ? 'bg-cyan-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            LOW-LEVEL DESIGN (LLD)
          </button>
        </div>
      </div>

      {/* Interactive Diagram Flow */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {activeNodes.map((node) => {
          const isSelected = selectedNode === node.id;
          return (
            <div
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-cyan-950/80 border-cyan-400 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className="text-[10px] font-mono text-cyan-400 block mb-1">{node.layer}</span>
              <h4 className="font-bold text-sm text-white mb-2">{node.name}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">{node.details}</p>
            </div>
          );
        })}
      </div>

      {/* Detail Inspector Drawer */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs">
        <span className="text-slate-400">ARCHITECTURAL SPECIFICATION: </span>
        <span className="text-cyan-400 font-bold">
          {viewMode === 'hld' ? 'SYSTEM BOUNDARY & RESILIENCE SPEC' : 'MICROSERVICE CLASS & DATA SCHEMA CONTRACT'}
        </span>
      </div>
    </div>
  );
};

