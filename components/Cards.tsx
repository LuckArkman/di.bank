
import React, { useState } from 'react';
import { User } from '../types';

interface CardsProps {
  user: User;
}

const Cards: React.FC<CardsProps> = ({ user }) => {
  const [isBlocked, setIsBlocked] = useState(false);
  const [showNumbers, setShowNumbers] = useState(false);

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Cards & Acesso</h1>
          <p className="text-slate-500 font-mono text-xs tracking-[0.3em] uppercase">Identity Assets Layer</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Card Section */}
          <div className="flex flex-col items-center space-y-12">
            <div className={`relative aspect-[1.58/1] w-full max-w-sm rounded-[2rem] p-8 overflow-hidden transition-all duration-700 transform ${isBlocked ? 'grayscale blur-sm' : 'hover:scale-105'} cursor-pointer group`}>
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black z-0"></div>
              {/* Animated Glow */}
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-cyan-500/10 blur-[100px] rounded-full group-hover:bg-cyan-500/20 transition-all duration-1000"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-black text-sm italic">D</span>
                    </div>
                    <span className="text-white font-display font-bold text-sm">D-AI Card</span>
                  </div>
                  <div className="w-10 h-8 bg-gradient-to-tr from-yellow-600/50 to-yellow-200/50 rounded flex items-center justify-center">
                    <div className="w-6 h-4 border border-black/20"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <p className="text-white font-mono text-xl tracking-[0.25em]">
                      {showNumbers ? '4492 8821 0039 9928' : '•••• •••• •••• 9928'}
                    </p>
                    <button onClick={() => setShowNumbers(!showNumbers)} className="p-2 hover:bg-white/10 rounded-full transition-all">
                      {showNumbers ? (
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" strokeWidth={2}/></svg>
                      ) : (
                        <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2}/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeWidth={2}/></svg>
                      )}
                    </button>
                  </div>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-slate-500 text-[8px] uppercase font-black tracking-widest mb-1">Membro Fundador</p>
                      <p className="text-slate-300 text-sm uppercase font-bold">{user.name}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-500 text-[8px] uppercase font-black tracking-widest mb-1">Validade</p>
                      <p className="text-slate-300 text-xs font-bold font-mono">12 / 29</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0 30 L100 30 M0 70 L100 70 M30 0 L30 100 M70 0 L70 100" stroke="white" strokeWidth="0.2"/>
                </svg>
              </div>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={() => setIsBlocked(!isBlocked)}
                className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${isBlocked ? 'bg-cyan-500 text-slate-950' : 'glass text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                {isBlocked ? 'Desbloquear Card' : 'Bloqueio Temporário'}
              </button>
              <button className="px-8 py-3 glass text-slate-400 rounded-2xl text-xs font-black uppercase tracking-widest hover:text-white hover:bg-white/5 transition-all">
                Configurar Limites
              </button>
            </div>
          </div>

          {/* Controls / Benefits Section */}
          <div className="space-y-8">
            <div className="glass rounded-[2.5rem] p-8 border-white/10 space-y-6">
              <h3 className="text-xl font-display font-bold">Privilégios D-AI Card</h3>
              
              <div className="space-y-4">
                {[
                  { label: 'Cashback em Ativos Web3', value: '2.5%', icon: '💎' },
                  { label: 'Seguro de Custódia Neural', value: 'Ativo', icon: '🛡️' },
                  { label: 'Lounge Global Airport', value: 'Ilimitado', icon: '✈️' },
                  { label: 'Conversão Zero-Fee FX', value: 'Ilimitado', icon: '🌍' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                    <div className="flex items-center space-x-4">
                      <span className="text-xl">{item.icon}</span>
                      <span className="text-sm font-medium text-slate-400">{item.label}</span>
                    </div>
                    <span className="text-sm font-black text-cyan-400 uppercase font-mono">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-[2.5rem] border border-cyan-500/20">
               <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center text-slate-950 flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth={2}/></svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">Apple Pay & Google Wallet</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">Seu D-AI Card já está pronto para o mundo sem contato. Sincronize agora com sua carteira digital.</p>
                    <button className="px-6 py-2 bg-slate-950 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all">Sincronizar Agora</button>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;