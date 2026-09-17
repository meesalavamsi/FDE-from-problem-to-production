import React, { useState } from 'react';
import { PhoneCall, Building2, Globe, Database, ShieldAlert, ArrowRight, Terminal, Volume2, Mic, AlertTriangle } from 'lucide-react';
import { useFde } from '../../context/FdeContext';

export const NexoraStory: React.FC = () => {
  const { setActiveTab } = useFde();
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(true);

  const handleEnterEnvironment = () => {
    setActiveTab('fde-loop');
    const elem = document.getElementById('fde-loop');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="story" className="py-20 border-b border-cyan-500/20 relative overflow-hidden bg-[#050914] scanline">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-rose-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/40 text-rose-400 text-xs font-mono mb-4 shadow-lg shadow-rose-500/10">
            <ShieldAlert className="w-4 h-4 animate-pulse" />
            <span>INCIDENT DISPATCH LOG #0842 • NEXORA HQ</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            THE NEXORA CRISIS
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Before jumping into roadmaps, step directly into your first enterprise customer environment.
          </p>
        </div>

        {/* Story Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Enterprise Profile Card */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center space-x-4 mb-6 border-b border-slate-800 pb-5">
                <div className="w-14 h-14 rounded-2xl bg-cyan-950 border border-cyan-500/40 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                  <Building2 className="w-7 h-7 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-wide">NEXORA INDUSTRIES</h3>
                  <span className="text-xs font-mono text-cyan-400 font-bold">Global Enterprise Client</span>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-sans">
                Nexora is a Fortune 500 industrial conglomerate operating across complex multi-cloud and legacy system environments with strict security parameters.
              </p>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 font-mono text-xs mb-6">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px]">WORKFORCE</div>
                    <div className="font-extrabold text-white text-sm">80,000 Staff</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center space-x-3">
                  <Globe className="w-4 h-4 text-indigo-400 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px]">FOOTPRINT</div>
                    <div className="font-extrabold text-white text-sm">12 Countries</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center space-x-3">
                  <Database className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px]">KNOWLEDGE</div>
                    <div className="font-extrabold text-white text-sm">Millions of Docs</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 flex items-center space-x-3">
                  <Building2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-slate-400 text-[10px]">SYSTEMS</div>
                    <div className="font-extrabold text-white text-sm">CRM / ERP / ITSM</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-800/50 text-[11px] font-mono text-rose-300 flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping" />
              <span>SECURITY MANDATE: SOC2 & ISO 27001 ENFORCED</span>
            </div>
          </div>

          {/* Incoming Call Dialogue & Sound Visualizer Card */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl glass-panel-rose border border-rose-500/40 flex flex-col justify-between relative overflow-hidden shadow-2xl">
            
            <div>
              {/* Call Header */}
              <div className="flex items-center justify-between border-b border-rose-900/40 pb-5 mb-6">
                <div className="flex items-center space-x-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-400/50 flex items-center justify-center animate-bounce">
                    <PhoneCall className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-rose-400 font-bold">INCOMING DISPATCH CALL</div>
                    <div className="text-base font-black text-white font-mono">MONDAY, 8:42 AM</div>
                  </div>
                </div>

                {/* Animated Audio Waveform */}
                <div className="flex items-center space-x-1 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-rose-800/50">
                  <Volume2 className="w-3.5 h-3.5 text-rose-400 animate-pulse mr-1" />
                  {[40, 80, 50, 90, 60, 100, 70, 40].map((h, idx) => (
                    <span 
                      key={idx} 
                      className="w-1 bg-rose-400 rounded-full animate-pulse" 
                      style={{ height: `${h}%`, animationDelay: `${idx * 100}ms` }} 
                    />
                  ))}
                </div>
              </div>

              {/* Call Transcript Dialogue */}
              <div className="space-y-4 font-sans mb-8">
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/90 border border-slate-800 text-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-rose-400 font-bold">NEXORA VP OF OPERATIONS:</span>
                    <span className="text-[10px] font-mono text-slate-500">LINE ACTIVE • ENCRYPTED</span>
                  </div>
                  <blockquote className="italic font-medium text-sm sm:text-base leading-relaxed text-slate-100">
                    "We have an AI problem. Our employees spend hours searching internal information. We tried an AI chatbot. The demo looked impressive. But in production it sometimes gives incorrect answers and hallucinates outdated policies. We need you to fix it."
                  </blockquote>
                </div>

                <div className="p-4 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-slate-200">
                  <span className="text-xs font-mono text-cyan-300 font-bold block mb-1">YOUR FDE MANAGER LOOKS AT YOU:</span>
                  <p className="font-bold text-white text-sm sm:text-base">
                    "You're the Forward Deployed Engineer. Find out what is actually happening inside their environment."
                  </p>
                </div>
              </div>
            </div>

            {/* Action Trigger Button */}
            <div>
              <button
                onClick={handleEnterEnvironment}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-indigo-500 text-slate-950 font-black text-sm tracking-widest flex items-center justify-center space-x-3 shadow-2xl shadow-cyan-500/30 transition-all hover:scale-[1.02]"
              >
                <Terminal className="w-5 h-5" />
                <span>ENTER CUSTOMER ENVIRONMENT</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
