import React, { useState } from 'react';
import { Activity, TrendingUp, DollarSign, ShieldAlert, Cpu } from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, BarChart, Bar, CartesianGrid } from 'recharts';

export const LlmoPsControlRoom: React.FC = () => {
  const [modelCompare, setModelCompare] = useState<'gpt4o' | 'claude35' | 'llama3'>('gpt4o');

  const chartData = [
    { time: '08:00', latency: 1.8, tokens: 420, cost: 12.4, groundedness: 95 },
    { time: '09:00', latency: 2.9, tokens: 1850, cost: 48.2, groundedness: 92 },
    { time: '10:00', latency: 2.4, tokens: 1420, cost: 36.8, groundedness: 94 },
    { time: '11:00', latency: 2.1, tokens: 1100, cost: 28.5, groundedness: 96 },
    { time: '12:00', latency: 1.9, tokens: 890, cost: 22.1, groundedness: 95 },
    { time: '13:00', latency: 2.3, tokens: 1250, cost: 31.4, groundedness: 93 },
    { time: '14:00', latency: 2.6, tokens: 1600, cost: 41.2, groundedness: 94 },
  ];

  return (
    <div className="p-6 rounded-2xl glass-panel border border-slate-800">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-800 pb-4 mb-6 gap-4">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
            <Activity className="w-4 h-4" />
            <span>LLMOPS & OBSERVABILITY DASHBOARD</span>
          </div>
          <h3 className="text-xl font-bold text-white">LLMOPS CONTROL ROOM</h3>
        </div>

        {/* Model Selector */}
        <div className="flex items-center space-x-2 bg-slate-900 p-1 rounded-xl border border-slate-800 font-mono text-xs">
          <button
            onClick={() => setModelCompare('gpt4o')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${modelCompare === 'gpt4o' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'}`}
          >
            GPT-4o (Azure)
          </button>
          <button
            onClick={() => setModelCompare('claude35')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${modelCompare === 'claude35' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'}`}
          >
            Claude 3.5 Sonnet
          </button>
          <button
            onClick={() => setModelCompare('llama3')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${modelCompare === 'llama3' ? 'bg-cyan-500 text-slate-950' : 'text-slate-400'}`}
          >
            Llama 3 70B (On-Prem)
          </button>
        </div>
      </div>

      {/* Recharts Data Visualization */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Latency & Token Usage Chart */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <h4 className="text-xs font-mono text-cyan-400 font-bold mb-4">LATENCY (s) vs TOKEN VOLUME (k)</h4>
          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={10} />
                <YAxis stroke="#64748b" fontSize={10} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }} />
                <Area type="monotone" dataKey="latency" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.2} name="Latency (s)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Cost & Groundedness Chart */}
        <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
          <h4 className="text-xs font-mono text-emerald-400 font-bold mb-4">HOURLY API COST ($) vs GROUNDEDNESS (%)</h4>
          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={10} />
                <YAxis stroke="#64748b" fontSize={10} />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', borderRadius: '8px', fontSize: '12px' }} />
                <Bar dataKey="cost" fill="#10b981" radius={[4, 4, 0, 0]} name="Cost ($)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
};

