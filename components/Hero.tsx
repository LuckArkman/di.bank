
import React from 'react';

interface HeroProps {
  onStartClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  return (
    <section className="pt-40 pb-32 px-6 relative overflow-hidden">
      {/* Neural grid background effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.1"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full glass border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8 animate-pulse shadow-lg shadow-cyan-500/10">
          <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 shadow-[0_0_8px_cyan]"></span>
          Intelligence-First Banking Protocol
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-extrabold leading-[0.9] mb-8 tracking-tighter">
          IA + <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600">
            BANKING
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          A inteligência artificial descentralizada encontra as finanças globais. <br className="hidden md:block" />
          Operações bancárias tradicionais potencializadas por um ecossistema distribuído de autoria e segurança neural.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onStartClick}
            className="w-full sm:w-auto px-10 py-5 bg-white text-slate-950 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl shadow-white/5 hover:bg-cyan-400 transition-all transform hover:-translate-y-1"
          >
            Abrir Conta Gratuita
          </button>
          <button className="w-full sm:w-auto px-10 py-5 glass text-white rounded-2xl font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-all border border-white/10 flex items-center justify-center">
            Explorar Protocolo
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <div className="mt-28 relative max-w-5xl mx-auto animate-float">
          <div className="absolute -inset-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full blur-[120px] opacity-50"></div>
          <div className="relative glass rounded-[3rem] p-6 border-white/10 shadow-[0_0_80px_rgba(34,211,238,0.15)] overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
            <img 
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2000" 
              alt="Neural Interface Illustration" 
              className="rounded-[2rem] w-full object-cover aspect-[21/9] grayscale hover:grayscale-0 transition-all duration-1000 opacity-80 hover:opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
