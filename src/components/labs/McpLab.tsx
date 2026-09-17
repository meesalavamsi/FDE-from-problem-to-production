import React, { useState } from 'react';
import { Cpu, Server, Database, ShieldCheck, Lock, CheckCircle2, ArrowRight } from 'lucide-react';

export const McpLab: React.FC = () => {
  const [selectedMcp, setSelectedMcp] = useState<string>('github');

  const mcpExamples = [
    {
      id: 'github',
      name: 'GitHub MCP Server',
      tools: ['create_pull_request', 'read_repository_file', 'search_code_ast'],
      resources: ['repo://org/repo/commits', 'issue://#1042'],
      security: 'Scoped OAuth App token with read-only repo scope by default',
      enterpriseSystem: 'GitHub Enterprise Cloud / On-Prem GitHub Server'
    },
    {
      id: 'database',
      name: 'Database MCP Server',
      tools: ['execute_param_query', 'fetch_table_schema'],
      resources: ['db://production/analytics_view'],
      security: 'Read-only DB service account; parameterized query execution only',
      enterpriseSystem: 'PostgreSQL / Snowflake Data Warehouse'
    },
    {
      id: 'crm',
      name: 'Salesforce CRM MCP Server',
      tools: ['get_customer_lead', 'update_opportunity_stage'],
      resources: ['crm://account/id_99214'],
      security: 'User JWT bearer token injection; Human approval gate for updates',
      enterpriseSystem: 'Salesforce Sales Cloud API'
    },
    {
      id: 'itsm',
      name: 'ServiceNow ITSM MCP Server',
      tools: ['create_incident_ticket', 'check_approval_status'],
      resources: ['itsm://ticket/INC-8812'],
      security: 'SAML SSO Session scope with automatic audit logging',
      enterpriseSystem: 'ServiceNow REST API Gateway'
    }
  ];

  const activeMcp = mcpExamples.find(m => m.id === selectedMcp)!;

  return (
    <div className="p-6 rounded-2xl glass-panel border border-slate-800">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
            <Cpu className="w-4 h-4" />
            <span>MODEL CONTEXT PROTOCOL (MCP) INTERACTIVE LAB</span>
          </div>
          <h3 className="text-xl font-bold text-white">MCP PROTOCOL & ENTERPRISE INTEGRATION VISUALIZER</h3>
        </div>
      </div>

      {/* Protocol Architecture Flow */}
      <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 mb-6 font-mono text-xs overflow-x-auto">
        <div className="flex items-center justify-between min-w-[600px] text-center">
          <div className="p-3 rounded-lg bg-cyan-950/80 border border-cyan-500/50 text-cyan-300">
            AI HOST (Claude/GPT)
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500" />
          <div className="p-3 rounded-lg bg-indigo-950/80 border border-indigo-500/50 text-indigo-300">
            MCP CLIENT
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500" />
          <div className="p-3 rounded-lg bg-purple-950/80 border border-purple-500/50 text-purple-300">
            MCP SERVER
          </div>
          <ArrowRight className="w-4 h-4 text-slate-500" />
          <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300">
            ENTERPRISE SYSTEM
          </div>
        </div>
      </div>

      {/* MCP Server Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {mcpExamples.map((mcp) => (
          <button
            key={mcp.id}
            onClick={() => setSelectedMcp(mcp.id)}
            className={`p-3 rounded-xl border text-xs font-mono font-bold transition-all ${
              selectedMcp === mcp.id
                ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md'
                : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            {mcp.name}
          </button>
        ))}
      </div>

      {/* Selected MCP Specs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
          <h4 className="text-xs font-mono text-cyan-400 font-bold">AVAILABLE TOOLS & RESOURCES</h4>
          <div>
            <span className="text-[11px] font-mono text-slate-400">TOOLS:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {activeMcp.tools.map((tool, idx) => (
                <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-700 text-slate-200">
                  {tool}()
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="text-[11px] font-mono text-slate-400">RESOURCES:</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {activeMcp.resources.map((res, idx) => (
                <span key={idx} className="text-xs font-mono px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800 text-indigo-300">
                  {res}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
          <h4 className="text-xs font-mono text-emerald-400 font-bold">SECURITY BOUNDARY & AUTHORIZATION</h4>
          <p className="text-xs text-slate-300">{activeMcp.security}</p>
          <div className="pt-2 border-t border-slate-800 text-[11px] font-mono text-slate-400">
            TARGET SYSTEM: <span className="text-white font-bold">{activeMcp.enterpriseSystem}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

