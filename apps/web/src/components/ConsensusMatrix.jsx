import React from 'react';
import { Cpu, Activity, Database, CheckCircle2, AlertTriangle } from 'lucide-react';

export default function ConsensusMatrix({ nodes, consensusScore }) {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Cpu className="w-5 h-5 text-cyan-400" />
          <h3 className="font-mono text-sm font-bold text-slate-200 uppercase tracking-wider">
            3D Swarm Agentic Consensus Matrix
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-slate-400">GROQ BACKEND:</span>
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/50">
            llama3-70b-8192
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Node Alpha */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" /> Node Alpha
            </span>
            <span className="text-xs font-mono text-cyan-400 font-bold">{nodes?.alpha || 92.1}%</span>
          </div>
          <div className="text-[11px] text-slate-400 font-mono">IoT Telemetry Solver</div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${nodes?.alpha || 92.1}%` }} />
          </div>
        </div>

        {/* Node Beta */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-purple-400" /> Node Beta
            </span>
            <span className="text-xs font-mono text-purple-400 font-bold">{nodes?.beta || 87.5}%</span>
          </div>
          <div className="text-[11px] text-slate-400 font-mono">Topographic Risk Downscaling</div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-purple-400 h-full rounded-full" style={{ width: `${nodes?.beta || 87.5}%` }} />
          </div>
        </div>

        {/* Node Gamma */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-lg p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-emerald-400" /> Node Gamma
            </span>
            <span className="text-xs font-mono text-emerald-400 font-bold">{nodes?.gamma || 88.0}%</span>
          </div>
          <div className="text-[11px] text-slate-400 font-mono">Historical Precedent Model</div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div className="bg-emerald-400 h-full rounded-full" style={{ width: `${nodes?.gamma || 88.0}%` }} />
          </div>
        </div>
      </div>

      <div className="pt-2 flex items-center justify-between border-t border-slate-800/80">
        <span className="text-xs font-mono text-slate-400">Aggregated Consensus Confidence Score</span>
        <div className="flex items-center gap-2">
          {consensusScore >= 85 ? (
            <AlertTriangle className="w-4 h-4 text-red-500 animate-pulse" />
          ) : (
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          )}
          <span className={`text-sm font-mono font-bold ${consensusScore >= 85 ? 'text-red-400' : 'text-emerald-400'}`}>
            {consensusScore}%
          </span>
        </div>
      </div>
    </div>
  );
}
