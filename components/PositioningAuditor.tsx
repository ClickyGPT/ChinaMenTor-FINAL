
import React, { useState } from 'react';
import Button from './Button';
import { generateAudit } from '../services/geminiService';
import { AuditResult } from '../types';

const PositioningAuditor: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    setLoading(true);
    try {
      const audit = await generateAudit(input);
      setResult(audit);
    } catch (err) {
      alert("Something went wrong with the AI audit.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="auditor" className="py-24 bg-neutral-900 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <div className="inline-block px-4 py-1 rounded-full border border-red-500/30 text-red-500 font-mono text-sm mb-6">
          AI-POWERED AUDITOR
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display italic">
          What Is Your Current Edge?
        </h2>
        <p className="text-gray-400 mb-12 text-lg">
          Describe what you do and who you are. Our framework will identify where you're trapped in effort and where your leverage is hiding.
        </p>

        <form onSubmit={handleSubmit} className="mb-12">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., I'm a software engineer building a side hustle for e-commerce brands, but I feel like I'm just copying other people's marketing..."
            className="w-full h-40 bg-black/50 border border-white/10 rounded-2xl p-6 text-white focus:outline-none focus:border-red-500 transition-colors mb-6 resize-none"
          />
          <Button type="submit" variant="primary" disabled={loading} className="w-full md:w-auto">
            {loading ? 'Analyzing Your Position...' : 'Design My Edge'}
          </Button>
        </form>

        {result && (
          <div className="text-left glass rounded-3xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h3 className="text-2xl font-bold mb-6 text-red-500">The ChinaMenTor Audit</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Current Position Trap</h4>
                <p className="text-xl text-gray-200 leading-relaxed">{result.currentPosition}</p>
              </div>

              <div>
                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-4">Leverage Points</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.leveragePoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/5">
                      <span className="text-red-500">🌶️</span>
                      <span className="text-gray-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-red-950/20 border border-red-500/20 rounded-2xl">
                <h4 className="text-sm font-mono text-red-400 uppercase tracking-widest mb-2">The Strategic Shift</h4>
                <p className="text-xl font-bold italic font-display">{result.strategicShift}</p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">Your Unfair Advantage</h4>
                <p className="text-gray-300 italic">{result.unfairAdvantage}</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button variant="outline" onClick={() => { setInput(''); setResult(null); }}>
                Try Another Persona
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PositioningAuditor;
