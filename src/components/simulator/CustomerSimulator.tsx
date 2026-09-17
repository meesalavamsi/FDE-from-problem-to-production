import React, { useState } from 'react';
import { PERSONAS_DATA } from '../../data/personasData';
import { Persona } from '../../types/fde';
import { Users, MessageSquare, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { useFde } from '../../context/FdeContext';

export const CustomerSimulator: React.FC = () => {
  const { addScore } = useFde();
  const [selectedPersonaId, setSelectedPersonaId] = useState<string>('cto');
  const [activeDialogueIndex, setActiveDialogueIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);

  const activePersona: Persona = PERSONAS_DATA.find(p => p.id === selectedPersonaId) || PERSONAS_DATA[0];
  const currentDialogue = activePersona.dialogues[activeDialogueIndex];

  const handleOptionSelect = (idx: number) => {
    if (hasAnswered) return;
    setSelectedOptionIndex(idx);
  };

  const handleAnswerSubmit = () => {
    if (selectedOptionIndex === null) return;
    setHasAnswered(true);
    const choice = currentDialogue.options[selectedOptionIndex];
    addScore(choice.scoreDelta);
  };

  return (
    <div className="p-6 rounded-2xl glass-panel border border-slate-800">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
            <Users className="w-4 h-4" />
            <span>EXECUTIVE STAKEHOLDER DIALOGUE SIMULATOR</span>
          </div>
          <h3 className="text-xl font-bold text-white">CUSTOMER PERSONA SIMULATOR</h3>
        </div>
      </div>

      {/* Persona Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {PERSONAS_DATA.map((p) => {
          const isSelected = p.id === activePersona.id;
          return (
            <button
              key={p.id}
              onClick={() => {
                setSelectedPersonaId(p.id);
                setActiveDialogueIndex(0);
                setSelectedOptionIndex(null);
                setHasAnswered(false);
              }}
              className={`p-3 rounded-xl border text-left transition-all flex items-center space-x-3 ${
                isSelected
                  ? 'bg-cyan-950 border-cyan-400 text-white shadow-md'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <img src={p.avatar} alt={p.name} className="w-9 h-9 rounded-full object-cover border border-slate-700" />
              <div>
                <div className="font-bold text-xs font-mono">{p.name}</div>
                <div className="text-[10px] text-slate-400">{p.role}</div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Persona Dialogue Stage */}
      <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-6">
        
        {/* Persona Header Quote */}
        <div className="flex items-center space-x-4 border-b border-slate-800 pb-4">
          <img src={activePersona.avatar} alt={activePersona.name} className="w-14 h-14 rounded-2xl object-cover border border-cyan-500/40" />
          <div>
            <h4 className="text-lg font-extrabold text-white">{activePersona.name}</h4>
            <span className="text-xs font-mono text-cyan-400">{activePersona.role}</span>
            <blockquote className="text-xs text-slate-300 italic mt-1">"{activePersona.quote}"</blockquote>
          </div>
        </div>

        {/* Stakeholder Question */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
          <span className="text-xs font-mono text-amber-400 font-bold block mb-1">STAKEHOLDER CHALLENGE:</span>
          <p className="text-sm font-semibold text-slate-100">{currentDialogue.prompt}</p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {currentDialogue.options.map((opt, idx) => {
            const isSelected = selectedOptionIndex === idx;
            return (
              <button
                key={idx}
                disabled={hasAnswered}
                onClick={() => handleOptionSelect(idx)}
                className={`w-full p-4 rounded-xl border text-left text-xs transition-all ${
                  isSelected
                    ? 'bg-cyan-950 border-cyan-400 text-white'
                    : 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <p className="font-semibold">{opt.response}</p>

                {hasAnswered && isSelected && (
                  <div className={`mt-3 p-3 rounded-lg border font-mono ${opt.scoreDelta > 0 ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300' : 'bg-rose-950/80 border-rose-500/50 text-rose-300'}`}>
                    <p className="font-bold">{activePersona.name}: "{opt.personaReaction}"</p>
                    <p className="mt-1 text-[11px] opacity-90">{opt.feedback}</p>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {!hasAnswered && (
          <button
            disabled={selectedOptionIndex === null}
            onClick={handleAnswerSubmit}
            className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs tracking-wider"
          >
            RESPOND TO {activePersona.name.toUpperCase()}
          </button>
        )}

      </div>
    </div>
  );
};

