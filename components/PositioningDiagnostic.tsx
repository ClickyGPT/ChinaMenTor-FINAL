
import React, { useState } from 'react';
import Button from './Button';
import { generateDiagnosticAudit } from '../services/geminiService';
import { AuditResult, DiagnosticQuestion } from '../types';

const QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 'identity',
    field: 'identity',
    question: "What is your unique 'un-copyable' background? (History, specific knowledge, or obsession)",
    placeholder: "e.g., Spent 10 years in logistics before starting a DTC coffee brand..."
  },
  {
    id: 'marketing',
    field: 'marketing',
    question: "How do you currently find your customers? Are you chasing or attracting?",
    placeholder: "e.g., Cold email and LinkedIn posting, mostly manual outreach..."
  },
  {
    id: 'sales',
    field: 'sales',
    question: "What is the biggest objection you hear in sales calls? Why is your offer 'negotiable'?",
    placeholder: "e.g., They say it's too expensive or they can find it cheaper elsewhere..."
  },
  {
    id: 'growth',
    field: 'growth',
    question: "If you stopped working for 3 months, what happens to your revenue?",
    placeholder: "e.g., It stops immediately. I am the bottleneck for every delivery..."
  }
];

const PositioningDiagnostic: React.FC = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleNext = () => {
    if (step < QUESTIONS.length - 1) {
      setStep(step + 1);
    } else {
      runAudit();
    }
  };

  const runAudit = async () => {
    setLoading(true);
    try {
      const audit = await generateDiagnosticAudit(answers);
      setResult(audit);
    } catch (err) {
      alert("Diagnostic failed. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const progress = ((step + 1) / QUESTIONS.length) * 100;

  if (result) {
    return (
      <section id="auditor" className="py-24 bg-neutral-900 overflow-hidden">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="glass rounded-[40px] p-8 md:p-16 border-red-500/20 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/3">
                <h3 className="text-3xl font-black mb-8 italic font-display">Leverage <br/><span className="text-red-500">Scorecard</span></h3>
                <div className="space-y-6">
                  {Object.entries(result.scoreCard).map(([key, val]) => (
                    <div key={key}>
                      <div className="flex justify-between text-xs font-mono uppercase tracking-widest text-gray-500 mb-2">
                        <span>{key}</span>
                        <span>{val}%</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-red-600 transition-all duration-1000 ease-out" 
                          style={{ width: `${val}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-2/3 space-y-8">
                <div>
                  <h4 className="text-sm font-mono text-gray-500 uppercase tracking-widest mb-2">The Positioning Trap</h4>
                  <p className="text-xl text-gray-200 leading-relaxed font-light">{result.currentPosition}</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.leveragePoints.map((p, i) => (
                    <div key={i} className="bg-black/40 border border-white/5 p-5 rounded-2xl flex gap-3">
                      <span className="text-red-500 font-bold">#</span>
                      <span className="text-sm text-gray-300">{p}</span>
                    </div>
                  ))}
                </div>
                <div className="p-8 bg-red-950/30 border border-red-500/20 rounded-[32px]">
                  <h4 className="text-xs font-mono text-red-400 uppercase tracking-widest mb-3">Core Strategic Shift</h4>
                  <p className="text-2xl font-bold italic font-display leading-tight">{result.strategicShift}</p>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-12 border-t border-white/10 text-center">
              <Button variant="outline" onClick={() => { setStep(0); setResult(null); setAnswers({}); }}>
                Run Diagnostic Again
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="auditor" className="py-24 bg-neutral-900 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-red-500/30 text-red-500 font-mono text-xs mb-6 uppercase tracking-widest">
            Diagnostic Tool v2.0
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display italic">Audit Your Position.</h2>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12 border-white/10">
          <div className="mb-8">
            <div className="flex justify-between text-xs font-mono text-gray-500 mb-2 uppercase tracking-tighter">
              <span>Step {step + 1} of {QUESTIONS.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-red-600 transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-white leading-snug">
              {QUESTIONS[step].question}
            </h3>
            <textarea
              className="w-full h-40 bg-black/50 border border-white/10 rounded-2xl p-6 text-white focus:outline-none focus:border-red-600 transition-all resize-none placeholder:text-gray-700"
              placeholder={QUESTIONS[step].placeholder}
              value={answers[QUESTIONS[step].field] || ''}
              onChange={(e) => setAnswers(prev => ({ ...prev, [QUESTIONS[step].field]: e.target.value }))}
            />
            <div className="flex justify-between gap-4">
              <button 
                disabled={step === 0}
                onClick={() => setStep(step - 1)}
                className="text-gray-500 hover:text-white disabled:opacity-0 transition-all uppercase font-mono text-xs"
              >
                &larr; Previous
              </button>
              <Button 
                onClick={handleNext} 
                disabled={loading || !answers[QUESTIONS[step].field]}
                className="px-12"
              >
                {loading ? 'Processing...' : step === QUESTIONS.length - 1 ? 'Generate Blueprint' : 'Next Step'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PositioningDiagnostic;
