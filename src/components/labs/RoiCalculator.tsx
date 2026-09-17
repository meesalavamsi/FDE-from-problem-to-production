import React, { useState } from 'react';
import { Calculator, DollarSign, TrendingUp, Clock, CheckCircle2 } from 'lucide-react';

export const RoiCalculator: React.FC = () => {
  const [employees, setEmployees] = useState<number>(500);
  const [tasksPerDay, setTasksPerDay] = useState<number>(8);
  const [currentTimeMin, setCurrentTimeMin] = useState<number>(18);
  const [newTimeMin, setNewTimeMin] = useState<number>(3);
  const [hourlyRate, setHourlyRate] = useState<number>(60);
  const [infraCostMonthly, setInfraCostMonthly] = useState<number>(3500);
  const [implCostOneTime, setImplCostOneTime] = useState<number>(95000);
  const [adoptionRate, setAdoptionRate] = useState<number>(75);

  // ROI Math
  const activeUsers = Math.round(employees * (adoptionRate / 100));
  const timeSavedPerTaskMin = Math.max(0, currentTimeMin - newTimeMin);
  const totalTasksPerYear = activeUsers * tasksPerDay * 250; // 250 working days
  const annualHoursSaved = Math.round((totalTasksPerYear * timeSavedPerTaskMin) / 60);
  const grossAnnualSavings = annualHoursSaved * hourlyRate;
  const annualInfraCost = infraCostMonthly * 12;
  const totalFirstYearCost = implCostOneTime + annualInfraCost;
  const netFirstYearBenefit = grossAnnualSavings - totalFirstYearCost;
  const roiPercentage = Math.round((netFirstYearBenefit / totalFirstYearCost) * 100);
  const paybackMonths = Math.max(0.5, Number(((implCostOneTime / (grossAnnualSavings / 12)).toFixed(1))));

  return (
    <section id="roi" className="py-20 border-b border-slate-800/80 bg-[#07090e] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>FINANCIAL ROI IMPACT CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            PROVE THE BUSINESS VALUE
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            An FDE does not just build AI. An FDE proves concrete, audit-ready financial return on investment ($) to executive stakeholders and the board.
          </p>
        </div>

        {/* Calculator Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Panel */}
          <div className="lg:col-span-6 p-6 rounded-2xl glass-panel border border-slate-800 space-y-4 font-sans text-xs">
            <h3 className="text-sm font-mono font-bold text-cyan-400 border-b border-slate-800 pb-3">
              DEPLOYMENT OPERATIONAL INPUTS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-slate-300 font-mono block mb-1">Target Workforce (Employees)</label>
                <input
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-300 font-mono block mb-1">Tasks Per Day Per User</label>
                <input
                  type="number"
                  value={tasksPerDay}
                  onChange={(e) => setTasksPerDay(Number(e.target.value))}
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-300 font-mono block mb-1">Current Manual Time (Minutes)</label>
                <input
                  type="number"
                  value={currentTimeMin}
                  onChange={(e) => setCurrentTimeMin(Number(e.target.value))}
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-300 font-mono block mb-1">New AI-Assisted Time (Minutes)</label>
                <input
                  type="number"
                  value={newTimeMin}
                  onChange={(e) => setNewTimeMin(Number(e.target.value))}
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-300 font-mono block mb-1">Hourly Labor Rate ($/hr)</label>
                <input
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-300 font-mono block mb-1">Target Active Adoption (%)</label>
                <input
                  type="number"
                  value={adoptionRate}
                  onChange={(e) => setAdoptionRate(Number(e.target.value))}
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-300 font-mono block mb-1">Implementation Cost ($)</label>
                <input
                  type="number"
                  value={implCostOneTime}
                  onChange={(e) => setImplCostOneTime(Number(e.target.value))}
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-slate-300 font-mono block mb-1">Monthly AI Infra Spend ($/mo)</label>
                <input
                  type="number"
                  value={infraCostMonthly}
                  onChange={(e) => setInfraCostMonthly(Number(e.target.value))}
                  className="w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white font-mono focus:border-cyan-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* ROI Dashboard Results */}
          <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl glass-panel-glow border border-emerald-500/40 space-y-6 font-mono">
            <h3 className="text-sm font-bold text-emerald-400 border-b border-slate-800 pb-3">
              AUDIT-READY FINANCIAL RESULTS
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400">ANNUAL HOURS SAVED</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">{annualHoursSaved.toLocaleString()} hrs</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400">GROSS SAVINGS</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">${grossAnnualSavings.toLocaleString()}</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400">1ST YEAR NET BENEFIT</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">${netFirstYearBenefit.toLocaleString()}</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-[10px] text-slate-400">PAYBACK PERIOD</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">{paybackMonths} months</div>
              </div>
            </div>

            {/* Total ROI Badge */}
            <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-center space-y-1">
              <span className="text-xs text-emerald-300">ESTIMATED FIRST-YEAR NET ROI</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400">
                +{roiPercentage}%
              </div>
              <p className="text-[11px] text-emerald-300/80 font-sans pt-1">
                Based on {activeUsers} active users ({adoptionRate}% adoption) saving {timeSavedPerTaskMin} minutes per task.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

