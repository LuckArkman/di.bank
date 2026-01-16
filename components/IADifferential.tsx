
import React from 'react';

const differentials = [
  {
    title: "Segurança Neural 24/7",
    description: "Nossa IA monitora padrões biométricos e comportamentais em tempo real, bloqueando acessos não autorizados antes mesmo de acontecerem.",
    metric: "99.9% Precisão"
  },
  {
    title: "Detecção Anti-Fraude",
    description: "Utilizamos processamento distribuído para analisar bilhões de transações globais, identificando anomalias indetectáveis por sistemas centrais.",
    metric: "< 10ms Latência"
  },
  {
    title: "Processamento Distribuído",
    description: "Seu capital é protegido por uma rede global de nós, eliminando pontos únicos de falha e garantindo disponibilidade absoluta.",
    metric: "Zero Downtime"
  }
];

const IADifferential: React.FC = () => {
  return (
    <section id="security" className="py-32 px-6 bg-slate-900/20 relative">
      <div className="absolute top-0 right-0 w-1/2 h-px bg-gradient-to-l from-cyan-500/50 to-transparent"></div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full glass border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-widest mb-8">
              Decentralized Core
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              A Fortaleza da <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">IA Distribuída.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              No D-AI Bank, a segurança não é um firewall estático. É um protocolo dinâmico que evolui a cada transação, distribuído por milhares de nós que garantem que sua identidade seja sempre sua.
            </p>
            
            <div className="space-y-6">
              {differentials.map((diff, idx) => (
                <div key={idx} className="flex items-start space-x-6 group">
                  <div className="w-px h-20 bg-gradient-to-b from-cyan-500 to-transparent opacity-30 group-hover:opacity-100 transition-opacity"></div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white uppercase tracking-tight">{diff.title}</h4>
                      <span className="text-[10px] font-black text-cyan-500 uppercase font-mono">{diff.metric}</span>
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed">{diff.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full"></div>
            <div className="relative glass rounded-[3rem] p-12 overflow-hidden group">
              <div className="absolute inset-0 opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="40" stroke="cyan" strokeWidth="0.5" fill="none" className="animate-pulse" />
                  <path d="M10 50 Q 50 10 90 50 Q 50 90 10 50" stroke="blue" strokeWidth="0.5" fill="none" />
                </svg>
              </div>
              
              <div className="relative z-10 text-center py-20">
                <div className="w-24 h-24 bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-cyan-500/20">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" strokeWidth={2}/></svg>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Identity Protocol 7.0</h3>
                <p className="text-slate-500 text-sm max-w-xs mx-auto mb-8 font-mono">ENCRYPTED_AUTH_ACTIVE: [TRUE]</p>
                <div className="flex justify-center space-x-1">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className={`h-1 w-1 rounded-full ${i < 15 ? 'bg-cyan-500' : 'bg-slate-800'}`}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IADifferential;
