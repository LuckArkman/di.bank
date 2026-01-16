
import React, { useState } from 'react';
import { User } from '../types';
import { analyzeInvestmentRisk } from '../services/geminiService';

interface InvestmentsProps {
  user: User;
}

const ASSETS = [
  { id: '1', name: 'Ethereum Staking', type: 'Crypto', yield: '4.2% a.a.', risk: 'Medium' },
  { id: '2', name: 'Real Estate Token (SP/Faria Lima)', type: 'Tokenized Asset', yield: '12.5% a.a.', risk: 'Low' },
  { id: '3', name: 'Nexus Neural Yield', type: 'AI Strategy', yield: '18.2% a.a.', risk: 'High' },
  { id: '4', name: 'Green Energy Bonds', type: 'ESG Token', yield: '6.8% a.a.', risk: 'Low' },
];

const Investments: React.FC<InvestmentsProps> = ({ user }) => {
  const [selectedAsset, setSelectedAsset] = useState<string | null>(null);
  const [riskAnalysis, setRiskAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (assetName: string) => {
    setSelectedAsset(assetName);
    setLoading(true);
    setRiskAnalysis('');
    try {
      const result = await analyzeInvestmentRisk(assetName);
      setRiskAnalysis(result);
    } catch (error) {
      setRiskAnalysis("Erro ao conectar com a rede de análise neural.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">Protocolo de Alocação</h1>
            <p className="text-slate-500 font-mono text-xs tracking-widest uppercase">Distribuição Neural de Ativos</p>
          </div>
          <div className="glass px-6 py-4 rounded-3xl border-white/10 bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
            <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Total em Custódia</p>
            <p className="text-2xl font-display font-bold text-white">R$ {(user.balance * 2.5).toLocaleString('pt-BR')}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-display font-bold text-slate-300 ml-4">Oportunidades Disponíveis</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {ASSETS.map(asset => (
                <div key={asset.id} className="glass p-6 rounded-[2rem] border-white/5 hover:border-cyan-500/30 transition-all group">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      {asset.type === 'Crypto' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2" strokeWidth={2}/></svg>}
                      {asset.type === 'Tokenized Asset' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 4h1m4 0h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeWidth={2}/></svg>}
                      {asset.type === 'AI Strategy' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth={2}/></svg>}
                      {asset.type === 'ESG Token' && <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" strokeWidth={2}/></svg>}
                    </div>
                    <span className={`text-[10px] font-black px-2 py-1 rounded-full uppercase ${asset.risk === 'Low' ? 'bg-green-500/10 text-green-500' : asset.risk === 'Medium' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-rose-500/10 text-rose-500'}`}>
                      {asset.risk} Risk
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{asset.name}</h3>
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest mb-4">{asset.type}</p>
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[10px] text-slate-600 uppercase font-black">Projeção</p>
                      <p className="text-xl font-display font-bold text-cyan-400">{asset.yield}</p>
                    </div>
                    <button 
                      onClick={() => handleAnalyze(asset.name)}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase text-slate-400 hover:text-white hover:bg-white/10 transition-all"
                    >
                      Audit IA
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-display font-bold text-slate-300 ml-4">Analista Gemini 3</h2>
            <div className="glass rounded-[2.5rem] p-8 border-white/10 min-h-[400px] flex flex-col relative overflow-hidden bg-slate-900/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl"></div>
              
              {!selectedAsset && !loading && (
                <div className="flex-1 flex flex-col items-center justify-center text-center opacity-40">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6">
                     <svg className="w-8 h-8 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" strokeWidth={1.5}/></svg>
                  </div>
                  <p className="text-sm font-medium">Selecione um ativo para auditoria neural</p>
                </div>
              )}

              {loading && (
                <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                  <div className="w-10 h-10 border-2 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
                  <p className="text-[10px] font-black text-cyan-500 uppercase tracking-widest animate-pulse">Consultando Protocolos...</p>
                </div>
              )}

              {riskAnalysis && !loading && (
                <div className="flex-1 animate-in fade-in duration-500">
                  <div className="flex items-center space-x-2 mb-6">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Audit ID: {selectedAsset?.toUpperCase()}</span>
                  </div>
                  <div className="prose prose-invert max-w-none">
                    <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-wrap">
                      {riskAnalysis}
                    </p>
                  </div>
                  <button className="w-full mt-10 py-4 bg-cyan-500 text-slate-950 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/20">
                    Alocar Agora
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investments;
