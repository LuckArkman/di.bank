
import React from 'react';
import { User, Transaction } from '../types';

interface DashboardProps {
  user: User;
}

const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', date: 'Hoje, 14:20', description: 'Swap ETH/USDC', amount: 1250.00, type: 'credit', aiVerified: true },
  { id: '2', date: 'Hoje, 09:15', description: 'Assinatura Neural Cloud', amount: 49.90, type: 'debit', aiVerified: true },
  { id: '3', date: 'Ontem, 18:45', description: 'Nexus Staking Reward', amount: 12.45, type: 'credit', aiVerified: true },
  { id: '4', date: '21 Mar, 10:00', description: 'Transferência Externa', amount: 500.00, type: 'debit', aiVerified: true },
];

const Dashboard: React.FC<DashboardProps> = ({ user }) => {
  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div className="relative">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
              Terminal de {user.name.split(' ')[0]}
            </h1>
            <div className="flex items-center space-x-3">
               <p className="text-slate-500 font-mono text-xs tracking-widest uppercase">Node: {user.accountNumber}</p>
               <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
               <p className="text-cyan-500/70 font-mono text-xs font-bold uppercase tracking-widest">Protocolo: V4-DECENTRAL</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="glass px-6 py-3 rounded-2xl border-glow-cyan flex items-center bg-cyan-500/5">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-3 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">AI Sentinel Live</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Main Balance Card */}
            <div className="relative overflow-hidden glass rounded-[2.5rem] p-8 md:p-12 border-white/10 group bg-gradient-to-br from-slate-900/40 to-black/20">
              <div className="absolute top-0 right-0 p-8">
                <svg className="w-12 h-12 text-white/5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-5.19 4.59-9.362 9.753-10.166" />
                </svg>
              </div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-600/20 transition-colors duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Asset Liquidity</p>
                  <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-500 font-mono">HASH: 77a1...f02b</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-10 flex items-baseline">
                  <span className="text-2xl text-slate-500 mr-2 font-medium">R$</span>
                  {user.balance.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </h2>
                
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <button className="px-4 py-4 bg-white text-slate-950 rounded-2xl font-bold hover:bg-cyan-400 transition-all flex flex-col items-center justify-center space-y-2 group/btn">
                    <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M8 7l4-4m0 0l4 4m-4-4v18" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-[10px] uppercase">Enviar</span>
                  </button>
                  <button className="px-4 py-4 glass text-white rounded-2xl font-bold hover:bg-white/10 transition-all flex flex-col items-center justify-center space-y-2 group/btn">
                    <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 17l-4 4m0 0l-4-4m4 4V3" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-[10px] uppercase">Receber</span>
                  </button>
                  <button className="px-4 py-4 glass text-white rounded-2xl font-bold hover:bg-white/10 transition-all flex flex-col items-center justify-center space-y-2 group/btn">
                    <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-[10px] uppercase">Investir</span>
                  </button>
                  <button className="px-4 py-4 glass text-white rounded-2xl font-bold hover:bg-white/10 transition-all flex flex-col items-center justify-center space-y-2 group/btn">
                    <svg className="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-[10px] uppercase">Cards</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Transactions Section */}
            <div className="glass rounded-[2.5rem] p-8 border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-[60px]"></div>
              <div className="flex items-center justify-between mb-8 relative z-10">
                <h3 className="text-xl font-display font-bold">Ledger de Transações</h3>
                <div className="flex space-x-2">
                  <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-slate-500 uppercase">Mês Atual</span>
                </div>
              </div>
              
              <div className="space-y-6 relative z-10">
                {MOCK_TRANSACTIONS.map(tx => (
                  <div key={tx.id} className="flex items-center justify-between group p-3 hover:bg-white/5 rounded-2xl transition-all">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${tx.type === 'credit' ? 'bg-cyan-500/10 text-cyan-400' : 'bg-slate-800 text-slate-400'}`}>
                        {tx.type === 'credit' ? (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M7 11l5-5m0 0l5 5m-5-5v12" strokeWidth={2}/></svg>
                        ) : (
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 13l-5 5m0 0l-5-5m5 5V6" strokeWidth={2}/></svg>
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-slate-100 group-hover:text-white transition-colors">{tx.description}</p>
                        <p className="text-[10px] text-slate-500 uppercase tracking-widest">{tx.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold font-display ${tx.type === 'credit' ? 'text-cyan-400' : 'text-white'}`}>
                        {tx.type === 'credit' ? '+' : '-'} R$ {tx.amount.toFixed(2)}
                      </p>
                      {tx.aiVerified && (
                        <div className="flex items-center justify-end space-x-1 mt-1">
                          <svg className="w-3 h-3 text-cyan-500" fill="currentColor" viewBox="0 0 20 20"><path d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                          <span className="text-[9px] text-cyan-500 uppercase font-black tracking-tighter">Verified</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar / AI Audit Card */}
          <div className="space-y-8">
            <div className="glass rounded-[2.5rem] p-8 border-white/5 bg-gradient-to-br from-slate-900/50 to-slate-950/50 relative overflow-hidden group">
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 transition-colors duration-500"></div>
              <h3 className="text-xl font-display font-bold mb-8 flex items-center relative z-10">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-5.19 4.59-9.362 9.753-10.166" strokeWidth={2}/></svg>
                </div>
                Digital Authorship
              </h3>
              
              <div className="space-y-8 relative z-10">
                <div className="text-center">
                   <div className="inline-flex items-center justify-center p-1 rounded-full border border-cyan-500/30 mb-4 bg-cyan-500/5">
                      <div className="px-4 py-2 rounded-full bg-cyan-500 text-slate-950 text-xs font-black uppercase">Identity Score</div>
                   </div>
                   <div className="text-4xl font-display font-bold text-white mb-1">
                      {user.authorshipScore}%
                   </div>
                   <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden mb-2">
                      <div className="bg-cyan-500 h-full shadow-[0_0_10px_rgba(34,211,238,0.5)]" style={{ width: `${user.authorshipScore}%` }}></div>
                   </div>
                   <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Confidence Level: HIGH</p>
                </div>

                <div className="p-4 bg-slate-900/80 rounded-2xl border border-white/5 space-y-3">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Biometria Comportamental</span>
                    <span className="text-green-400 font-bold">ATIVA</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Cadência de Digitação</span>
                    <span className="text-green-400 font-bold">VERIFICADA</span>
                  </div>
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-500">Rede de Dispositivos</span>
                    <span className="text-white font-bold">3 Sincronizados</span>
                  </div>
                </div>

                <div className="p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl">
                  <p className="text-[11px] text-slate-400 leading-relaxed italic">
                    "O Nexus Sentinel confirmou sua autoria através de 42 pontos de validação descentralizada. Acesso total garantido."
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-[2.5rem] p-8 border-white/5 relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl"></div>
              <h3 className="text-lg font-display font-bold mb-6">D-AI Card</h3>
              <div className="aspect-[1.58/1] w-full bg-gradient-to-br from-slate-800 via-slate-900 to-black rounded-3xl relative overflow-hidden border border-white/10 p-6 flex flex-col justify-between group-hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
                {/* Magnetic chip */}
                <div className="flex justify-between items-start">
                   <div className="w-12 h-9 bg-gradient-to-tr from-yellow-600/50 to-yellow-200/50 rounded-lg flex flex-col justify-center px-1 overflow-hidden">
                      <div className="h-0.5 w-full bg-black/20 my-0.5"></div>
                      <div className="h-0.5 w-full bg-black/20 my-0.5"></div>
                      <div className="h-0.5 w-full bg-black/20 my-0.5"></div>
                   </div>
                   <div className="text-white/40 font-mono text-[9px] uppercase tracking-tighter">D-AI CARD AUTH</div>
                </div>
                <div className="space-y-4">
                  <p className="text-white font-mono tracking-widest text-lg">•••• •••• •••• 9928</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-slate-500 text-[8px] uppercase font-bold tracking-widest mb-1">Card Holder</p>
                      <p className="text-slate-300 text-xs uppercase font-medium">{user.name}</p>
                    </div>
                    <div className="flex -space-x-3">
                      <div className="w-8 h-8 bg-cyan-500/30 rounded-full border border-white/10 backdrop-blur-sm"></div>
                      <div className="w-8 h-8 bg-blue-500/30 rounded-full border border-white/10 backdrop-blur-sm"></div>
                    </div>
                  </div>
                </div>
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 50 L100 50 M50 0 L50 100" stroke="white" strokeWidth="0.5"/>
                    <circle cx="50" cy="50" r="2" fill="white"/>
                  </svg>
                </div>
              </div>
              <button className="w-full mt-6 py-3 glass rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-slate-400">Ver Detalhes Virtuais</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;