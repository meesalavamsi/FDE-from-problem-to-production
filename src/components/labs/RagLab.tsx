import React, { useState } from 'react';
import { Database, Sliders, CheckCircle2, AlertTriangle, ArrowRight, Layers, Sparkles } from 'lucide-react';

export const RagLab: React.FC = () => {
  const [chunkSize, setChunkSize] = useState<number>(512);
  const [topK, setTopK] = useState<number>(5);
  const [strategy, setStrategy] = useState<'vector' | 'bm25' | 'hybrid'>('hybrid');
  const [rerank, setRerank] = useState<boolean>(true);
  const [metadataFilter, setMetadataFilter] = useState<boolean>(true);

  // Dynamic simulation math based on parameters
  const precision = Math.min(99, Math.max(50, (strategy === 'hybrid' ? 85 : 65) + (rerank ? 12 : 0) + (metadataFilter ? 5 : -15) - (chunkSize > 1500 ? 15 : 0)));
  const recall = Math.min(98, Math.max(40, (topK * 4) + (strategy === 'hybrid' ? 20 : 0) - (topK < 3 ? 20 : 0)));
  const groundedness = Math.min(99, Math.max(55, precision + (rerank ? 5 : -10)));
  const latencyMs = Math.round(150 + (topK * 45) + (rerank ? 180 : 0) + (strategy === 'hybrid' ? 90 : 0) + (chunkSize / 10));

  const totalChunksGenerated = Math.ceil(20480 / chunkSize);

  return (
    <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 font-sans shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
        <div>
          <div className="flex items-center space-x-2 text-xs font-mono text-cyan-400 mb-1">
            <Database className="w-4 h-4" />
            <span>INTERACTIVE RAG PLAYGROUND & VECTOR CHUNKING LAB</span>
          </div>
          <h3 className="text-xl font-bold text-white">RAG TUNING & CHUNK VISUALIZER</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Tuning Controls Panel */}
        <div className="lg:col-span-6 space-y-6 p-5 rounded-2xl bg-slate-950 border border-slate-800 font-sans text-xs">
          
          {/* Chunk Size Slider */}
          <div>
            <div className="flex items-center justify-between font-mono mb-1.5">
              <span className="text-slate-300 font-bold">CHUNK SIZE (TOKENS):</span>
              <span className="text-cyan-400 font-extrabold text-sm">{chunkSize} TOKENS</span>
            </div>
            <input
              type="range"
              min="128"
              max="2048"
              step="128"
              value={chunkSize}
              onChange={(e) => setChunkSize(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer h-2 rounded-lg bg-slate-900"
            />
          </div>

          {/* Top-K Slider */}
          <div>
            <div className="flex items-center justify-between font-mono mb-1.5">
              <span className="text-slate-300 font-bold">TOP-K RETRIEVAL COUNT:</span>
              <span className="text-cyan-400 font-extrabold text-sm">{topK} CHUNKS</span>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={topK}
              onChange={(e) => setTopK(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer h-2 rounded-lg bg-slate-900"
            />
          </div>

          {/* Strategy Selector */}
          <div>
            <span className="text-slate-300 font-mono font-bold block mb-2">RETRIEVAL ALGORITHM:</span>
            <div className="grid grid-cols-3 gap-2 font-mono">
              {(['vector', 'bm25', 'hybrid'] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setStrategy(mode)}
                  className={`py-2.5 rounded-xl border text-xs font-black uppercase transition-all ${
                    strategy === mode ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md' : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          {/* Rerank & Metadata Toggles */}
          <div className="grid grid-cols-2 gap-3 font-mono">
            <button
              onClick={() => setRerank(!rerank)}
              className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                rerank ? 'bg-indigo-950/90 border-indigo-500/60 text-indigo-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}
            >
              <span>COHERE RERANK:</span>
              <span className="font-black">{rerank ? 'ON' : 'OFF'}</span>
            </button>

            <button
              onClick={() => setMetadataFilter(!metadataFilter)}
              className={`p-3.5 rounded-xl border text-left flex items-center justify-between transition-all ${
                metadataFilter ? 'bg-indigo-950/90 border-indigo-500/60 text-indigo-300 font-bold' : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}
            >
              <span>METADATA FILTER:</span>
              <span className="font-black">{metadataFilter ? 'ON' : 'OFF'}</span>
            </button>
          </div>

          {/* Visual Chunk Partition Map */}
          <div className="pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
              <span>SIMULATED DOCUMENT PARTITION MAP ({totalChunksGenerated} CHUNKS)</span>
            </div>
            <div className="flex flex-wrap gap-1 max-h-20 overflow-hidden">
              {Array.from({ length: Math.min(40, totalChunksGenerated) }).map((_, idx) => (
                <div
                  key={idx}
                  className={`h-4 rounded-sm transition-all ${
                    idx < topK 
                      ? 'w-6 bg-cyan-400 border border-cyan-300 shadow-sm animate-pulse' 
                      : 'w-4 bg-slate-800 border border-slate-700'
                  }`}
                  title={`Chunk #${idx + 1} (${chunkSize} tokens)`}
                />
              ))}
            </div>
          </div>

        </div>

        {/* Live Telemetry Output Results */}
        <div className="lg:col-span-6 p-6 rounded-2xl glass-panel-glow border border-cyan-500/40 font-mono shadow-2xl">
          <h4 className="text-xs font-mono text-cyan-400 font-bold mb-6">LIVE RETRIEVAL TELEMETRY & ACCURACY</h4>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400">RETRIEVAL PRECISION</span>
              <div className="text-3xl font-black text-cyan-400">{precision}%</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400">CONTEXT RECALL</span>
              <div className="text-3xl font-black text-indigo-400">{recall}%</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400">RAG GROUNDEDNESS</span>
              <div className="text-3xl font-black text-emerald-400">{groundedness}%</div>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-[10px] text-slate-400">RETRIEVAL LATENCY</span>
              <div className="text-3xl font-black text-amber-400">{latencyMs}ms</div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-sans leading-relaxed">
            {precision > 85 ? (
              <span className="text-emerald-300 font-bold">✓ Optimal RAG configuration! High groundedness, fast retrieval, low hallucination risk.</span>
            ) : (
              <span className="text-amber-300 font-bold">⚠️ Sub-optimal RAG config! High risk of semantic noise or temporal document version mismatch. Enable Cohere Rerank or Metadata Filters.</span>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
