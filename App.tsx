
import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import PositioningDiagnostic from './components/PositioningDiagnostic';
import FrameworksLibrary from './components/FrameworksLibrary';
import { AdvantageEngine, LeverageStack, IdentityGrid } from './components/Diagrams';

const LOGO_URL = 'https://cdn.imgchest.com/files/335b848a092d.png';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-red-500 selection:text-white bg-black">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl py-4 border-b border-white/10' : 'bg-transparent py-10'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center gap-4 cursor-pointer group" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="relative h-12 w-12 overflow-hidden rounded-xl border border-red-500/30 group-hover:border-red-500 transition-all bg-white/5 p-1.5 shadow-2xl">
              <img src={LOGO_URL} alt="Actionably x ChinaMenTor" className="h-full w-full object-contain" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="text-2xl font-black tracking-tighter text-white group-hover:text-red-500 transition-colors uppercase leading-none">CHINAMENTOR</span>
              <span className="text-[8px] font-mono text-gray-500 tracking-[0.4em] uppercase">Powered by Actionably</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-10 text-[10px] font-mono uppercase tracking-[0.2em] text-gray-400">
            <button onClick={() => scrollToSection('problem')} className="hover:text-white transition-colors relative group">
              Philosophy
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('method')} className="hover:text-white transition-colors relative group">
              Method
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('auditor')} className="hover:text-white transition-colors relative group">
              Diagnostic
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection('frameworks')} className="hover:text-white transition-colors relative group">
              Library
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <Button variant="outline" className="py-2.5 px-8 text-[10px]" onClick={() => scrollToSection('auditor')}>Get Actionable Advice</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-black to-black"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full glass border border-white/10 text-white/90 text-[10px] font-mono uppercase tracking-[0.3em] mb-12 animate-float bg-white/5">
            <img src={LOGO_URL} className="h-6 w-6 object-contain bg-white/10 p-0.5 rounded-md" alt="" />
            <span>Turn Your Identity Into an Unfair Advantage</span>
          </div>
          <h1 className="text-7xl md:text-[130px] font-black mb-10 tracking-tighter leading-[0.8] text-white">
            WIN BY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 italic font-display">
              POSITION.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light">
            ChinaMenTor teaches entrepreneurial thinkers how to design leverage using structured frameworks — so they win by position, not effort.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <Button variant="primary" onClick={() => scrollToSection('auditor')} className="text-lg px-12 py-5">Design Your Edge</Button>
            <Button variant="secondary" onClick={() => scrollToSection('problem')} className="text-lg px-12 py-5">See How It Works</Button>
          </div>
          <div className="mt-16 pt-8 border-t border-white/5 max-w-xl mx-auto">
            <p className="text-xs font-mono text-gray-600 uppercase tracking-[0.4em]">You don’t need more tactics. You need a stronger position.</p>
          </div>
        </div>
      </header>

      {/* Section 1 — The Problem */}
      <section id="problem" className="py-40 bg-black relative border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="space-y-12">
              <div className="inline-block px-3 py-1 rounded-md bg-red-600/10 border border-red-500/20 text-red-500 text-[10px] font-mono uppercase tracking-widest">The Effort Loop</div>
              <h2 className="text-5xl md:text-7xl font-bold font-display italic tracking-tight leading-tight">
                Most founders are <br /><span className="text-red-600">trapped.</span>
              </h2>
              <div className="space-y-8 text-xl text-gray-400 leading-relaxed font-light">
                <p>They work harder. They consume more content. They copy better operators. But effort without structure doesn’t compound. It exhausts.</p>
                <p>The real problem isn’t execution. It’s positioning. If your position is weak, marketing feels heavy, sales feels forced, and growth feels inconsistent.</p>
                <p className="text-white font-medium italic border-l-4 border-red-600 pl-8 py-2">You don’t need more hustle. You need leverage built into the structure.</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <LeverageStack />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — The Shift */}
      <section className="py-40 bg-neutral-950 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter">THE <span className="italic font-display text-red-600">SHIFT.</span></h2>
          <p className="text-2xl text-gray-400 mb-20 font-light leading-relaxed">
            ChinaMenTor changes the level you think on. Instead of asking: "How do I grow faster?", you start asking: "What structural advantage can I design?"
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { from: 'Operator', to: 'Architect' },
              { from: 'Effort', to: 'Leverage' },
              { from: 'Tactics', to: 'Structure' }
            ].map((shift, i) => (
              <div key={i} className="glass p-8 rounded-3xl border-white/5 group hover:border-red-500/30 transition-all">
                <div className="text-[10px] font-mono text-gray-600 uppercase mb-4 tracking-widest">Shift {i+1}</div>
                <div className="flex flex-col gap-2">
                  <span className="text-gray-500 line-through text-lg">{shift.from}</span>
                  <div className="text-red-500 text-3xl font-black italic font-display">→ {shift.to}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 — Identity Section */}
      <section className="py-40 bg-black relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-32 items-center">
            <div className="order-2 lg:order-1">
              <IdentityGrid />
            </div>
            <div className="space-y-12 order-1 lg:order-2">
              <h2 className="text-5xl md:text-7xl font-bold font-display italic tracking-tight leading-tight">
                Your Identity is <br /><span className="text-red-600">Strategic Data.</span>
              </h2>
              <div className="space-y-6 text-xl text-gray-400 font-light leading-relaxed">
                <p>Your background is not random. Your constraints are not weaknesses. Your obsessions are not distractions.</p>
                <p>They are raw strategic material. ChinaMenTor helps you extract: Pattern advantages, Perspective advantages, Narrative advantages, and System advantages.</p>
                <p className="text-white font-medium italic">When structured correctly, identity becomes an unfair advantage. Not branding. Not aesthetics. <span className="text-red-500">Position.</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 — The Method */}
      <section id="method" className="py-40 bg-neutral-950 border-y border-white/5">
        <div className="container mx-auto px-6 text-center mb-24">
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase">The Method.</h2>
          <p className="text-gray-500 max-w-2xl mx-auto font-light text-xl">
            Practical architecture for entrepreneurs building real assets.
          </p>
        </div>
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: '1. Framework Thinking', desc: 'Clear mental models that expose leverage and eliminate noise.' },
              { title: '2. Leverage Mapping', desc: 'Identify where effort multiplies instead of drains.' },
              { title: '3. Advantage Design', desc: 'Engineer positioning others can’t easily replicate.' }
            ].map((m, i) => (
              <div key={i} className="glass p-10 rounded-[3rem] border-white/5 hover:border-red-500/20 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-white tracking-tight italic font-display">{m.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed font-light">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-24 pt-12 border-t border-white/5">
            <AdvantageEngine />
          </div>
        </div>
      </section>

      {/* Section 5 — Outcomes */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl md:text-6xl font-black mb-16 tracking-tighter text-center">WHAT HAPPENS <span className="text-red-600 italic font-display">AFTER.</span></h2>
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-12">
            {[
              'Decisions become faster',
              'Messaging becomes sharper',
              'Offers become clearer',
              'Distribution becomes strategic',
              'Competition becomes irrelevant'
            ].map((outcome, i) => (
              <div key={i} className="flex items-start gap-4 group">
                <div className="h-6 w-6 rounded-full bg-red-600 flex items-center justify-center text-[10px] text-white font-bold group-hover:scale-125 transition-transform">✓</div>
                <span className="text-xl text-gray-300 font-light group-hover:text-white transition-colors">{outcome}</span>
              </div>
            ))}
          </div>
          <p className="mt-20 text-center text-gray-500 italic text-xl">You stop asking, “How do I keep up?” You start asking, “How do I shape the board?” <br /><span className="text-white font-bold not-italic uppercase tracking-widest text-xs mt-4 block">That is strategic adulthood.</span></p>
        </div>
      </section>

      {/* Interactive Tool Section */}
      <PositioningDiagnostic />

      {/* Section 6 — Audience */}
      <section className="py-40 bg-neutral-950 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-20">
            <div className="p-12 glass rounded-[3rem] border-white/10">
              <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-widest italic font-display">Who this is for:</h3>
              <ul className="space-y-4 text-gray-400 font-light">
                <li>• Independent builders</li>
                <li>• Strategic creators</li>
                <li>• Founders tired of noise</li>
                <li>• Operators ready to think deeper</li>
              </ul>
            </div>
            <div className="p-12 border border-white/5 rounded-[3rem] opacity-40">
              <h3 className="text-2xl font-bold mb-8 text-gray-500 uppercase tracking-widest italic font-display">Not for:</h3>
              <ul className="space-y-4 text-gray-700 font-light">
                <li>• Shortcut seekers</li>
                <li>• Trend chasers</li>
                <li>• People addicted to tactics</li>
              </ul>
            </div>
          </div>
          <div className="mt-16 text-center">
            <p className="text-red-500 font-mono text-xs uppercase tracking-[0.5em]">This is thinking work.</p>
          </div>
        </div>
      </section>

      {/* Section 7 — Principles */}
      <section className="py-40 bg-black">
        <div className="container mx-auto px-6 text-center max-w-5xl">
          <h2 className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.6em] mb-12">The Principles</h2>
          <div className="grid md:grid-cols-2 gap-12 text-3xl md:text-5xl font-black tracking-tighter text-white italic font-display">
            <div>Clarity <span className="text-red-600">beats</span> Intensity.</div>
            <div>Structure <span className="text-red-600">beats</span> Hustle.</div>
            <div>Position <span className="text-red-600">beats</span> Noise.</div>
            <div>Leverage <span className="text-red-600">beats</span> Effort.</div>
          </div>
          <div className="mt-24 max-w-2xl mx-auto space-y-4">
             <p className="text-gray-500 text-lg font-light leading-relaxed">If it doesn’t compound, it’s fragile.</p>
             <p className="text-gray-500 text-lg font-light leading-relaxed">If anyone can copy it, it’s not advantage.</p>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <FrameworksLibrary />

      {/* Final CTA */}
      <section className="py-60 bg-gradient-to-b from-neutral-950 to-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-16 inline-block">
            <div className="p-8 rounded-[2.5rem] bg-white/5 border border-red-500/20 shadow-2xl shadow-red-500/10 transform hover:scale-110 transition-transform duration-700">
              <img src={LOGO_URL} alt="" className="h-32 w-32 object-contain" />
            </div>
          </div>
          <h2 className="text-6xl md:text-[120px] font-black mb-12 tracking-tighter leading-none text-white">
            DESIGN <br />
            <span className="italic font-display text-red-500">YOUR EDGE.</span>
          </h2>
          <p className="text-2xl text-gray-400 mb-16 max-w-2xl mx-auto font-light">
            Build structural leverage. Compete on advantage. Win by position.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button variant="primary" className="text-2xl px-20 py-8" onClick={() => scrollToSection('auditor')}>
              Start Designing
            </Button>
            <Button variant="secondary" className="text-2xl px-20 py-8" onClick={() => scrollToSection('frameworks')}>
              Explore Framework
            </Button>
          </div>
          <div className="mt-16 text-[11px] font-mono text-gray-600 uppercase tracking-[0.5em]">
            Limited to 12 Architects per Cohort • Q3 Enrollment Open
          </div>
        </div>
      </section>

      <footer className="py-24 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-20">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-5">
                <div className="h-14 w-14 overflow-hidden rounded-2xl border border-red-500/20 bg-white/5 p-2">
                  <img src={LOGO_URL} alt="ChinaMenTor" className="h-full w-full object-contain" />
                </div>
                <div className="flex flex-col -space-y-1">
                  <span className="text-3xl font-black text-white tracking-tighter uppercase">CHINAMENTOR</span>
                  <span className="text-[10px] font-mono text-red-500/60 tracking-[0.4em] uppercase">Powered by Actionably</span>
                </div>
              </div>
              <p className="text-gray-500 text-lg max-w-sm font-light leading-relaxed">
                We design architectures for identity. Turning who you are into what you earn, through Actionably leverage.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-16 lg:gap-32 text-[10px] font-mono uppercase tracking-[0.3em]">
              <div className="flex flex-col gap-6">
                <span className="text-white font-bold mb-4 opacity-40">The Platform</span>
                <button onClick={() => scrollToSection('frameworks')} className="text-gray-500 hover:text-red-500 text-left transition-colors">Library</button>
                <button onClick={() => scrollToSection('auditor')} className="text-gray-500 hover:text-red-500 text-left transition-colors">Diagnostic</button>
                <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">The Masterclass</a>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-white font-bold mb-4 opacity-40">Resources</span>
                <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">Manifesto</a>
                <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">Case Studies</a>
                <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">Newsletter</a>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-white font-bold mb-4 opacity-40">Connect</span>
                <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">X / Twitter</a>
                <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">LinkedIn</a>
                <a href="#" className="text-gray-500 hover:text-red-500 transition-colors">Contact</a>
              </div>
            </div>
          </div>
          <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-700 text-[10px] font-mono uppercase tracking-[0.3em]">
            <span>© 2024 ChinaMenTor x Actionably. All Rights Reserved.</span>
            <div className="flex gap-10">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Leverage</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
