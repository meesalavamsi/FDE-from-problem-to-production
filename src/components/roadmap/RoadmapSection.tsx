import React, { useState } from 'react';
import { CURRICULUM_DATA } from '../../data/curriculumData';
import { Mission } from '../../types/fde';
import { MissionDetailModal } from './MissionDetailModal';
import { CheckCircle2, ChevronRight, ShieldCheck, Filter } from 'lucide-react';
import { useFde } from '../../context/FdeContext';

export const RoadmapSection: React.FC = () => {
  const { completedMissions } = useFde();
  const [selectedMonth, setSelectedMonth] = useState<string>('All');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeMission, setActiveMission] = useState<Mission | null>(null);

  const categories = ['All', ...Array.from(new Set(CURRICULUM_DATA.map(m => m.category)))];

  const filteredMissions = CURRICULUM_DATA.filter((m) => {
    const matchesMonth = selectedMonth === 'All' || m.month.startsWith(selectedMonth);
    const matchesCategory = activeCategory === 'All' || m.category === activeCategory;
    return matchesMonth && matchesCategory;
  });

  return (
    <section id="roadmap" className="py-20 border-b border-cyan-500/20 bg-[#030712] relative cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 text-xs font-mono mb-4 shadow-lg shadow-cyan-500/10">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>3-MONTH INTENSIVE ENGINEERING PROGRAM (12 WEEKS)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            THE 3-MONTH FDE ROADMAP
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Every week is an active enterprise mission with customer stories, architecture design, failure scenarios, decision points, and unlocked skills.
          </p>
        </div>

        {/* Filters Panel */}
        <div className="p-4 rounded-2xl glass-panel border border-slate-800 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Month Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {['All', 'Month 1', 'Month 2', 'Month 3'].map((month) => (
              <button
                key={month}
                onClick={() => setSelectedMonth(month)}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-black transition-all border ${
                  selectedMonth === month
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/30'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                {month === 'All' ? 'ALL 12 WEEKS' : month === 'Month 1' ? 'MONTH 1: CORE SYSTEMS' : month === 'Month 2' ? 'MONTH 2: AGENTS & INFRA' : 'MONTH 3: PRODUCT & ROI'}
              </button>
            ))}
          </div>

          {/* Category Dropdown */}
          <div className="flex items-center space-x-2 w-full md:w-auto font-mono text-xs">
            <Filter className="w-4 h-4 text-cyan-400 shrink-0" />
            <select
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
              className="w-full md:w-auto px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-200 font-bold focus:border-cyan-500 focus:outline-none"
            >
              {categories.map((cat, idx) => (
                <option key={idx} value={cat}>{cat === 'All' ? 'Filter by Category: All' : cat}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMissions.map((mission) => {
            const isCompleted = completedMissions.includes(mission.id);

            return (
              <div
                key={mission.id}
                onClick={() => setActiveMission(mission)}
                className={`p-6 rounded-2xl glass-panel border transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:scale-[1.03] ${
                  isCompleted
                    ? 'border-emerald-500/50 bg-emerald-950/20 shadow-xl shadow-emerald-500/10'
                    : 'border-slate-800/80 hover:border-cyan-400 shadow-xl hover:shadow-cyan-500/20'
                }`}
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-black text-cyan-300 px-3 py-1 rounded-lg bg-cyan-950 border border-cyan-500/40">
                      {mission.week}
                    </span>

                    {isCompleted ? (
                      <span className="flex items-center space-x-1.5 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-950/90 px-2.5 py-1 rounded-lg border border-emerald-500/50 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        <span>PASSED</span>
                      </span>
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500">MISSION ACTIVE</span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-white group-hover:text-cyan-300 transition-colors mb-2 leading-snug">
                    {mission.title}
                  </h3>

                  {/* Category */}
                  <div className="text-[11px] font-mono text-indigo-400 font-bold mb-3">
                    {mission.category}
                  </div>

                  {/* Mission Summary */}
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-6 font-sans">
                    {mission.mission}
                  </p>
                </div>

                {/* Card Footer */}
                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {mission.skillsUnlocked.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-800">
                        +{skill}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono font-bold text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span>LAUNCH MISSION BRIEFING</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mission Detail Modal */}
        <MissionDetailModal
          mission={activeMission}
          onClose={() => setActiveMission(null)}
        />

      </div>
    </section>
  );
};
