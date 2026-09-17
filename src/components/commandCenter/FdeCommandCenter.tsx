import React, { useState } from 'react';
import { Activity, ShieldCheck, DollarSign, Clock, AlertTriangle, TrendingUp, Cpu, Server, CheckCircle2, X } from 'lucide-react';

interface MetricDetail {
  id: string;
  name: string;
  value: string;
  status: 'optimal' | 'warning' | 'critical';
  trend: string;
  description: string;
  investigation: string;
  recommendation: string;
}

export const FdeCommandCenter: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState<MetricDetail | null>(null);

  const metrics: MetricDetail[] = [
    {
      id: 'requests',
      name: 'Total Requests',
      value: '1,240,000',
      status: 'optimal',
      trend: '+14% this week',
      description: 'Total incoming API transactions across HR, IT, and Customer Operations.',
      investigation: 'Traffic peak occurs between 9:00 AM - 11:30 AM EST. Rate limit buffers remain at 68% capacity.',
      recommendation: 'Maintain current auto-scaling pod configuration on Kubernetes.'
    },
    {
      id: 'latency',
      name: 'Average Latency',
      value: '2.4s',
      status: 'warning',
      trend: '+0.4s vs baseline',
      description: 'End-to-end response generation time at 95th percentile.',
      investigation: 'Unoptimized vector retrieval top-k=15 search in the legal corpus is adding 600ms latency to query pipelines.',
      recommendation: 'Enable Cohere reranking with top-k=5 initial vector fetch and Redis semantic caching.'
    },
    {
      id: 'error_rate',
      name: 'Error Rate',
      value: '0.8%',
      status: 'optimal',
      trend: '-0.2% vs last release',
      description: 'Percentage of requests returning 5xx or unhandled application errors.',
      investigation: 'Error spikes are limited to transient network timeouts when querying legacy SAP endpoints.',
      recommendation: 'Implement exponential backoff retries with jitter on the SAP integration gateway.'
    },
    {
      id: 'groundedness',
      name: 'RAG Groundedness',
      value: '94%',
      status: 'optimal',
      trend: '+2% post-rerank',
      description: 'Percentage of LLM answers strictly supported by retrieved reference document citations.',
      investigation: '6% ungrounded responses occur on queries involving recently updated internal policy PDFs.',
      recommendation: 'Increase chunk overlap window and re-index SharePoint documents hourly.'
    },
    {
      id: 'tool_success',
      name: 'Tool Success Rate',
      value: '97%',
      status: 'optimal',
      trend: 'Deterministic',
      description: 'Percentage of MCP and Agent tool function calls that complete successfully without retries.',
      investigation: '3% failure rate stems from expired OAuth token refreshes in ServiceNow API adapter.',
      recommendation: 'Implement proactive background token refresh cron workers.'
    },
    {
      id: 'cost',
      name: 'Monthly AI Spend',
      value: '$18,420',
      status: 'optimal',
      trend: 'Under $20k budget cap',
      description: 'Total monthly API and vector infrastructure expenditure.',
      investigation: 'GPT-4o represents 72% of cost; GPT-4o-mini handles simple classification for 28% of queries.',
      recommendation: 'Expand LLM routing classifier to route 45% of standard requests to SLM endpoints.'
    },
    {
      id: 'uat',
      name: 'UAT Progress',
      value: '74%',
      status: 'warning',
      trend: 'Phase 3 active',
      description: 'User Acceptance Testing completion percentage across 100 pilot employees.',
      investigation: 'Finance department testers reported 2 edge-case formatting bugs in multi-currency tables.',
      recommendation: 'Deploy Pydantic structured table parser patch before global Go-Live.'
    },
    {
      id: 'adoption',
      name: 'Active Adoption',
      value: '61%',
      status: 'warning',
      trend: 'Targeting 85%',
      description: 'Percentage of targeted employees actively using the platform weekly.',
      investigation: 'HR team adoption is 88%, but Procurement team adoption is lagging at 34%.',
      recommendation: 'Host dedicated Procurement Champion training and integrate Slack SSO widget.'
    }
  ];

  return (
    <section id="command-center" className="py-20 border-b border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>REAL-TIME OPERATIONAL TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            FDE COMMAND CENTER (WAR ROOM)
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Live operational dashboard for Nexora AI Platform. Click any telemetry metric to investigate root-cause diagnostics and engineering recommendations.
          </p>
        </div>

        {/* Dashboard Status Bar */}
        <div className="p-4 rounded-xl glass-panel border border-slate-800 mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center space-x-3">
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
            <div>
              <span className="text-slate-400">ACTIVE ENGAGEMENT: </span>
              <span className="text-white font-bold">NEXORA ENTERPRISE PLATFORM</span>
            </div>
          </div>

          <div className="flex items-center space-x-6 text-slate-300">
            <div>SECURITY: <span className="text-emerald-400 font-bold">COMPLIANT (SOC2)</span></div>
            <div>HEALTH: <span className="text-cyan-400 font-bold">99.94% UPTIME</span></div>
          </div>
        </div>

        {/* Telemetry Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((metric) => {
            const isWarning = metric.status === 'warning';
            return (
              <div
                key={metric.id}
                onClick={() => setSelectedMetric(metric)}
                className={`p-6 rounded-2xl glass-panel border transition-all duration-300 cursor-pointer group hover:scale-[1.02] ${
                  isWarning
                    ? 'border-amber-500/40 bg-amber-950/10 shadow-lg shadow-amber-500/5'
                    : 'border-slate-800 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-slate-400">{metric.name}</span>
                  <span className={`w-2 h-2 rounded-full ${isWarning ? 'bg-amber-400 animate-pulse' : 'bg-emerald-400'}`} />
                </div>

                <div className="text-3xl font-extrabold text-white font-mono mb-2 group-hover:text-cyan-400 transition-colors">
                  {metric.value}
                </div>

                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className={isWarning ? 'text-amber-400' : 'text-emerald-400'}>
                    {metric.trend}
                  </span>
                  <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                    INVESTIGATE →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Investigation Modal */}
        {selectedMetric && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="relative w-full max-w-2xl bg-[#0d111a] border border-cyan-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <span className="text-xs font-mono text-cyan-400">TELEMETRY DIAGNOSTIC DRAWER</span>
                  <h3 className="text-2xl font-extrabold text-white mt-0.5">{selectedMetric.name}</h3>
                </div>
                <button
                  onClick={() => setSelectedMetric(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex items-center space-x-4 bg-slate-900/80 p-4 rounded-xl border border-slate-800">
                <div>
                  <span className="text-xs font-mono text-slate-400">CURRENT VALUE</span>
                  <div className="text-3xl font-extrabold font-mono text-cyan-400">{selectedMetric.value}</div>
                </div>
                <div className="border-l border-slate-800 pl-4">
                  <span className="text-xs font-mono text-slate-400">STATUS TREND</span>
                  <div className="text-sm font-mono font-bold text-emerald-400">{selectedMetric.trend}</div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono text-slate-400 mb-1">METRIC DESCRIPTION</h4>
                <p className="text-xs text-slate-200">{selectedMetric.description}</p>
              </div>

              <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-800/40 space-y-1">
                <h4 className="text-xs font-mono text-amber-400 font-bold">ROOT CAUSE INVESTIGATION FINDINGS</h4>
                <p className="text-xs text-amber-200">{selectedMetric.investigation}</p>
              </div>

              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-1">
                <h4 className="text-xs font-mono text-cyan-400 font-bold">FDE ENGINEERING RECOMMENDATION</h4>
                <p className="text-xs text-cyan-200">{selectedMetric.recommendation}</p>
              </div>

              <button
                onClick={() => setSelectedMetric(null)}
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs tracking-wider"
              >
                CLOSE INVESTIGATION
              </button>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};

