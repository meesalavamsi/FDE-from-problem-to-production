import React, { useState } from 'react';
import { FdeProvider } from './context/FdeContext';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero/Hero';
import { NexoraStory } from './components/story/NexoraStory';
import { FdeDefinition } from './components/definition/FdeDefinition';
import { RoadmapSection } from './components/roadmap/RoadmapSection';
import { ScenarioEngine } from './components/scenarioEngine/ScenarioEngine';
import { FdeCommandCenter } from './components/commandCenter/FdeCommandCenter';
import { ArchitectureLab } from './components/labs/ArchitectureLab';
import { McpLab } from './components/labs/McpLab';
import { RagLab } from './components/labs/RagLab';
import { AgentLab } from './components/labs/AgentLab';
import { LlmoPsControlRoom } from './components/labs/LlmoPsControlRoom';
import { BrdTddLab } from './components/labs/BrdTddLab';
import { UatSimulator } from './components/labs/UatSimulator';
import { CustomerSimulator } from './components/simulator/CustomerSimulator';
import { RoiCalculator } from './components/labs/RoiCalculator';
import { SkillMatrix } from './components/matrix/SkillMatrix';
import { CapstoneSimulator } from './components/capstone/CapstoneSimulator';
import { FutureOfFde } from './components/future/FutureOfFde';
import { CareerMap } from './components/future/CareerMap';
import { Footer } from './components/footer/Footer';
import { Cpu, Layers, Database, Activity, FileText, Rocket, Users, Sliders } from 'lucide-react';

const LabsContainer: React.FC = () => {
  const [activeLab, setActiveLab] = useState<string>('rag');

  const labs = [
    { id: 'rag', name: 'RAG Lab', icon: Database, component: RagLab },
    { id: 'architecture', name: 'Architecture Lab (HLD/LLD)', icon: Layers, component: ArchitectureLab },
    { id: 'mcp', name: 'MCP Lab', icon: Cpu, component: McpLab },
    { id: 'agent', name: 'Agent Lab', icon: Activity, component: AgentLab },
    { id: 'llmops', name: 'LLMOps Control Room', icon: Activity, component: LlmoPsControlRoom },
    { id: 'simulator', name: 'Customer Persona Simulator', icon: Users, component: CustomerSimulator },
    { id: 'brdtdd', name: 'BRD + TDD Lab', icon: FileText, component: BrdTddLab },
    { id: 'uat', name: 'UAT & Go-Live Simulator', icon: Rocket, component: UatSimulator },
  ];

  const ActiveComponent = labs.find(l => l.id === activeLab)?.component || RagLab;

  return (
    <section id="labs" className="py-20 border-b border-slate-800/80 bg-[#0a0d14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>SPECIALIZED HANDS-ON ENGINEERING LABS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            INTERACTIVE FDE LABS
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Test and tune RAG parameters, design system architectures, visualize Model Context Protocol (MCP) tool flows, and manage LLMOps metrics.
          </p>
        </div>

        {/* Lab Navigation Switcher */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {labs.map((lab) => {
            const Icon = lab.icon;
            const isActive = activeLab === lab.id;
            return (
              <button
                key={lab.id}
                onClick={() => setActiveLab(lab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold flex items-center space-x-2 whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{lab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Render Active Lab */}
        <ActiveComponent />

      </div>
    </section>
  );
};

export const App: React.FC = () => {
  return (
    <FdeProvider>
      <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <NexoraStory />
          <FdeDefinition />
          <RoadmapSection />
          <ScenarioEngine />
          <FdeCommandCenter />
          <LabsContainer />
          <RoiCalculator />
          <SkillMatrix />
          <CapstoneSimulator />
          <FutureOfFde />
          <CareerMap />
        </main>
        <Footer />
      </div>
    </FdeProvider>
  );
};

export default App;

