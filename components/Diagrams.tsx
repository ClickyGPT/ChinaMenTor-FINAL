
import React from 'react';

export const AdvantageEngine: React.FC = () => (
  <div className="w-full py-12 px-4 overflow-x-auto">
    <div className="min-w-[800px] flex items-center justify-between relative group">
      {['Identity', 'Structure', 'Position', 'Leverage', 'Compounding Advantage'].map((step, i, arr) => (
        <React.Fragment key={step}>
          <div className="relative z-10 flex flex-col items-center">
            <div className="h-24 w-48 border border-white/10 glass rounded-xl flex items-center justify-center p-4 text-center group-hover:border-red-500/30 transition-all duration-500 hover:scale-105 hover:bg-red-950/10">
              <span className={`text-xs font-mono uppercase tracking-widest ${i === arr.length - 1 ? 'text-red-500 font-bold' : 'text-gray-400'}`}>
                {step}
              </span>
            </div>
            {i === 0 && <span className="absolute -top-8 text-[8px] font-mono text-gray-600 uppercase tracking-widest">Raw Material</span>}
            {i === arr.length - 1 && <span className="absolute -top-8 text-[8px] font-mono text-red-500 uppercase tracking-widest">Durable Edge</span>}
          </div>
          {i < arr.length - 1 && (
            <div className="flex-grow h-px bg-gradient-to-r from-white/10 via-red-500/40 to-white/10 mx-4 relative">
              <div className="absolute right-0 -top-1 border-y-4 border-y-transparent border-l-4 border-l-red-500"></div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export const LeverageStack: React.FC = () => {
  const levels = [
    { name: 'Structural Leverage', level: 5, color: 'bg-red-600 text-white' },
    { name: 'Position', level: 4, color: 'bg-red-900/40 text-red-100 border border-red-500/20' },
    { name: 'System', level: 3, color: 'bg-white/10 text-gray-300' },
    { name: 'Skill', level: 2, color: 'bg-white/5 text-gray-500' },
    { name: 'Effort', level: 1, color: 'bg-white/[0.02] text-gray-700' },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto space-y-2">
      <div className="w-full text-center mb-6">
        <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">The Value Hierarchy</span>
      </div>
      {levels.map((l) => (
        <div 
          key={l.level} 
          className={`w-full py-4 px-6 rounded-lg flex justify-between items-center transition-all duration-500 hover:translate-x-2 ${l.color}`}
          style={{ width: `${100 - (5 - l.level) * 10}%` }}
        >
          <span className="text-xs font-mono opacity-50">Lvl {l.level}</span>
          <span className="text-sm font-bold uppercase tracking-tighter">{l.name}</span>
        </div>
      ))}
      <div className="pt-6 text-center">
        <p className="text-[10px] font-mono text-red-500 uppercase italic">ChinaMenTor builds at Levels 4 & 5</p>
      </div>
    </div>
  );
};

export const IdentityGrid: React.FC = () => (
  <div className="relative aspect-square w-full max-w-md mx-auto border border-white/10 p-8 group">
    {/* Grid Lines */}
    <div className="absolute top-1/2 left-0 w-full h-px bg-white/10"></div>
    <div className="absolute left-1/2 top-0 w-px h-full bg-white/10"></div>
    
    {/* Labels */}
    <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase text-gray-600 tracking-widest">Invisible</div>
    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono uppercase text-gray-600 tracking-widest">Visible</div>
    <div className="absolute top-1/2 -left-12 -translate-y-1/2 -rotate-90 text-[10px] font-mono uppercase text-gray-600 tracking-widest">Common</div>
    <div className="absolute top-1/2 -right-12 -translate-y-1/2 rotate-90 text-[10px] font-mono uppercase text-gray-600 tracking-widest">Rare</div>

    {/* Quadrants */}
    <div className="grid grid-cols-2 grid-rows-2 h-full w-full">
      <div className="flex items-center justify-center p-4 text-center opacity-30 group-hover:opacity-50 transition-opacity">
        <span className="text-[10px] font-mono uppercase text-gray-400">Hidden Strength</span>
      </div>
      <div className="flex items-center justify-center p-4 text-center bg-red-600/10 border border-red-500/20 group-hover:bg-red-600/20 transition-all">
        <span className="text-[10px] font-mono uppercase text-red-500 font-bold">Unfair Advantage</span>
      </div>
      <div className="flex items-center justify-center p-4 text-center opacity-30 group-hover:opacity-50 transition-opacity">
        <span className="text-[10px] font-mono uppercase text-gray-400">Commodity</span>
      </div>
      <div className="flex items-center justify-center p-4 text-center opacity-30 group-hover:opacity-50 transition-opacity">
        <span className="text-[10px] font-mono uppercase text-gray-400">Differentiation</span>
      </div>
    </div>
  </div>
);
