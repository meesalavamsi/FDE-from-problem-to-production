import React, { useState } from 'react';
import { HeroArchitectureCanvas } from './HeroArchitectureCanvas';
import { ArrowRight, Sparkles, Terminal, ShieldAlert, Cpu, Play, CheckCircle2, Command } from 'lucide-react';
import { useFde } from '../../context/FdeContext';

export const Hero: React.FC = () => {
  const { setActiveTab } = useFde();
  const [terminalCmd, setTerminalCmd] = useState<string>('/discover-root-cause');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[8:42:00 AM] INIT: Connected to Nexora Enterprise OpenShift cluster...",
    "[8:42:01 AM] WARN: High hallucination rate (18.4%) detected in HR search portal.",
    "[8:42:02 AM] FDE_CLI: Type or click a quick command below to run simulation."
  ]);

  const runQuickCommand = (cmd: string, logMessage: string, targetTab: string) => {
    setTerminalCmd(cmd);
    setTerminalLogs((prev) => [...prev.slice(-2), `> ${cmd}`, logMessage]);
    setTimeout(() => {
      setActiveTab(targetTab);
      const elem = document.getElementById(targetTab);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }, 400);
  };

  const scrollTo = (id: string) => {
    setActiveTab(id);
    const elem = document.getElementById(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative pt-10 pb-20 overflow-hidden cyber-grid border-b border-cyan-500/20">
      
      {/* Background Neon Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-cyan-500/15 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[350px] bg-indigo-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[250px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-slate-950/90 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-8 shadow-xl shadow-cyan-500/10 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
          <span>ENTERPRISE FORWARD DEPLOYED ENGINEERING SIMULATOR</span>
        </div>

        {/* Shimmering Metallic Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.1] mb-6 drop-shadow-2xl">
          FROM AI ENGINEER <br className="hidden sm:inline" />
          TO <span className="gradient-text">FORWARD DEPLOYED ENGINEER</span>
        </h1>

        {/* Subheading */}
        <p className="max-w-3xl mx-auto text-base sm:text-xl text-slate-300 font-normal leading-relaxed mb-10">
          Learn how to take AI from an idea in a notebook to a production system inside a real enterprise environment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={() => scrollTo('story')}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-black text-sm tracking-wider shadow-2xl shadow-cyan-500/30 flex items-center justify-center space-x-3 transition-all hover:scale-105"
          >
            <Terminal className="w-5 h-5" />
            <span>START THE FDE JOURNEY</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollTo('roadmap')}
            className="w-full sm:w-auto px-9 py-4 rounded-xl glass-panel hover:bg-slate-900/90 text-slate-200 font-bold text-sm tracking-wider border border-slate-700/80 flex items-center justify-center space-x-2.5 transition-all"
          >
            <Cpu className="w-5 h-5 text-cyan-400" />
            <span>EXPLORE THE 24-WEEK ROADMAP</span>
          </button>
        </div>

        {/* Interactive Cyber Terminal Command Simulator */}
        <div className="max-w-3xl mx-auto mb-12 p-4 rounded-2xl bg-slate-950/90 border border-cyan-500/40 shadow-2xl font-mono text-left text-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
            <div className="flex items-center space-x-2">
              <span className="w-3 h-3 rounded-full bg-rose-500" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-slate-400 font-bold ml-2">FDE INTERACTIVE TERMINAL</span>
            </div>
            <span className="text-cyan-400 text-[10px]">EXECUTE QUICK COMMANDS</span>
          </div>

          {/* Terminal Output Log Stream */}
          <div className="space-y-1 text-slate-300 text-[11px] font-mono min-h-[60px]">
            {terminalLogs.map((log, idx) => (
              <div key={idx} className={log.startsWith('>') ? 'text-cyan-400 font-bold' : log.includes('WARN') ? 'text-amber-400' : 'text-slate-300'}>
                {log}
              </div>
            ))}
          </div>

          {/* Quick Command Buttons */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-2">
            <button
              onClick={() => runQuickCommand('/discover', '[EXEC] Launching Nexora Root Cause Discovery...', 'story')}
              className="px-3 py-1.5 rounded-lg bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-950 font-bold text-[11px] flex items-center space-x-1.5"
            >
              <Command className="w-3 h-3 text-cyan-400" />
              <span>/discover</span>
            </button>

            <button
              onClick={() => runQuickCommand('/rag-tune', '[EXEC] Opening Interactive RAG Tuning Workbench...', 'labs')}
              className="px-3 py-1.5 rounded-lg bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-950 font-bold text-[11px] flex items-center space-x-1.5"
            >
              <Command className="w-3 h-3 text-indigo-400" />
              <span>/rag-tune</span>
            </button>

            <button
              onClick={() => runQuickCommand('/simulate-incident', '[EXEC] Triggering Enterprise Incident Simulator...', 'scenarios')}
              className="px-3 py-1.5 rounded-lg bg-rose-950/80 border border-rose-500/40 text-rose-300 hover:bg-rose-950 font-bold text-[11px] flex items-center space-x-1.5"
            >
              <Command className="w-3 h-3 text-rose-400" />
              <span>/simulate-incident</span>
            </button>

            <button
              onClick={() => runQuickCommand('/war-room', '[EXEC] Launching Telemetry War Room Dashboard...', 'command-center')}
              className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-950 font-bold text-[11px] flex items-center space-x-1.5"
            >
              <Command className="w-3 h-3 text-emerald-400" />
              <span>/war-room</span>
            </button>
          </div>
        </div>

        {/* Live Architecture Dataflow Canvas Container */}
        <div className="mt-6 p-4 sm:p-6 rounded-2xl glass-panel-glow border border-cyan-500/40 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4 text-xs font-mono text-slate-400">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <span className="text-white font-bold">LIVE ENTERPRISE ARCHITECTURE DATAFLOW</span>
            </div>
            <div className="hidden sm:flex items-center space-x-4">
              <span>LATENCY: 1.8s</span>
              <span>GROUNDEDNESS: 94%</span>
              <span className="text-emerald-400 font-bold">STATUS: HEALTHY</span>
            </div>
          </div>

          <HeroArchitectureCanvas />
        </div>

      </div>
    </section>
  );
};
