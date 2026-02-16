
import React, { useState } from 'react';
import { Framework } from '../types';

const LOGO_URL = 'https://cdn.imgchest.com/files/335b848a092d.png';

const frameworks: Framework[] = [
  {
    id: 'f1',
    category: 'marketing',
    title: 'The Actionable Archetype',
    description: 'Transform your identity into a beacon of authority using Actionably structures. Stop shouting, start being sought.',
    benefit: 'Automated inbound leverage.',
    icon: '🏛️'
  },
  {
    id: 'f2',
    category: 'marketing',
    title: 'Zero-Marginal Assets',
    description: 'Actionably designed content loops that scale trust. High-fidelity signals sent once, received infinitely.',
    benefit: 'Scalable implementation of trust.',
    icon: '📡'
  },
  {
    id: 'f3',
    category: 'sales',
    title: 'Actionable Pricing Systems',
    description: 'Shift from hour-based labor to value-based outcomes. Use Actionably frameworks to justify premium status.',
    benefit: 'Maximized margin per client.',
    icon: '💎'
  },
  {
    id: 'f4',
    category: 'sales',
    title: 'The High-Status Inversion',
    description: 'A tactical approach to sales where the prospect qualifies for your leverage. Reverses the power dynamic.',
    benefit: 'Immediate status elevation.',
    icon: '🔄'
  },
  {
    id: 'f5',
    category: 'growth',
    title: 'Actionable Growth Nodes',
    description: 'Identify the highest-leverage node in your network. Use Actionably loops to trigger exponential word-of-mouth.',
    benefit: 'Compressed growth cycles.',
    icon: '🕸️'
  },
  {
    id: 'f6',
    category: 'growth',
    title: 'Recursive Systems',
    description: 'Build your product to sell itself. Every action the user takes creates an actionable invitation for the next.',
    benefit: 'Non-linear user acquisition.',
    icon: '⚙️'
  }
];

const VisualComponent: React.FC<{ framework: Framework }> = ({ framework }) => {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-[2rem] mb-8 bg-neutral-950 border border-white/5 group-hover:border-red-500/30 transition-all duration-700 flex items-center justify-center">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      {/* Brand Logo Thumbnail */}
      <div className="relative z-10 p-16 w-full h-full">
        <img 
          src={LOGO_URL} 
          alt="Actionably" 
          className="h-full w-full object-contain filter brightness-125 drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_30px_rgba(220,38,38,0.3)] group-hover:scale-110 transition-all duration-700"
        />
      </div>

      {/* Glossy Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
      
      {/* Category Indicator Icon */}
      <div className="absolute top-6 right-6 h-10 w-10 glass rounded-full flex items-center justify-center text-xl shadow-inner border border-white/10 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
        {framework.icon}
      </div>

      {/* Branded Corner Accent */}
      <div className="absolute bottom-0 left-0 w-16 h-16 pointer-events-none">
        <div className="absolute bottom-6 left-6 w-8 h-0.5 bg-red-600/50 rounded-full group-hover:bg-red-500 group-hover:w-12 transition-all duration-700"></div>
      </div>
    </div>
  );
};

const FrameworksLibrary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'marketing' | 'sales' | 'growth' | 'all'>('all');

  const filtered = activeCategory === 'all' 
    ? frameworks 
    : frameworks.filter(f => f.category === activeCategory);

  return (
    <section id="frameworks" className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
      {/* Subtle Environmental Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 blur-[150px] -z-10 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-900/5 blur-[150px] -z-10 rounded-full"></div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-24 relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-red-500/20 text-red-500 text-[10px] font-mono uppercase tracking-[0.4em] mb-6 bg-red-500/5">
            <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></span>
            Actionably Intellectual Assets
          </div>
          <h2 className="text-6xl md:text-8xl font-black mb-8 font-display italic tracking-tighter leading-none">
            The <span className="text-red-600">Actionable</span> <br className="hidden md:block"/> Library.
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light text-xl leading-relaxed">
            Stop theorizing and start designing. Every asset in this library is a pre-built leverage blueprint designed for immediate execution.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-20 relative z-10">
          {['all', 'marketing', 'sales', 'growth'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as any)}
              className={`px-10 py-3 rounded-full text-[11px] font-mono tracking-[0.2em] transition-all duration-500 border ${
                activeCategory === cat 
                  ? 'bg-red-600 border-red-600 text-white shadow-[0_0_30px_rgba(220,38,38,0.5)] scale-105' 
                  : 'bg-transparent border-white/5 text-gray-500 hover:border-white/20 hover:text-white'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {filtered.map((f) => (
            <div 
              key={f.id} 
              className="group glass p-8 rounded-[3rem] border-white/5 transition-all duration-500 hover:bg-white/[0.04] hover:border-red-500/40 flex flex-col h-full shadow-2xl hover:shadow-red-900/10"
            >
              <VisualComponent framework={f} />
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono text-red-500 px-3 py-1 rounded-lg border border-red-500/20 bg-red-500/5 uppercase tracking-[0.15em] font-bold">
                  {f.category}
                </span>
              </div>
              
              <h3 className="text-3xl font-bold mb-4 text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">
                {f.title}
              </h3>
              
              <p className="text-gray-400 text-base leading-relaxed mb-10 flex-grow font-light">
                {f.description}
              </p>
              
              <div className="mt-auto pt-8 border-t border-white/5">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-gray-600 uppercase tracking-widest mb-1.5">Actionable Result</span>
                    <span className="text-white font-semibold text-sm italic group-hover:text-red-400 transition-colors">{f.benefit}</span>
                  </div>
                  <div className="h-14 w-14 rounded-2xl border border-white/5 bg-white/5 flex items-center justify-center text-gray-500 group-hover:text-white group-hover:border-red-500 group-hover:bg-red-500/20 transition-all duration-500 transform group-hover:rotate-12">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Aesthetic Branding Sign-off */}
        <div className="mt-40 text-center relative">
           <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>
           <div className="bg-black px-12 inline-block">
             <img src={LOGO_URL} alt="Actionably" className="h-12 mx-auto object-contain grayscale hover:grayscale-0 transition-all duration-1000 cursor-pointer p-1 rounded-xl bg-white/5 border border-white/5" />
             <p className="text-[10px] font-mono uppercase tracking-[0.5em] mt-6 text-gray-500">Architected by Actionably</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default FrameworksLibrary;
