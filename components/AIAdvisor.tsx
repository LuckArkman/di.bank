
import React, { useState } from 'react';
import { generateFinancialStrategy } from '../services/geminiService';

const AIAdvisor: React.FC = () => {
  const [goal, setGoal] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!goal.trim()) return;

    setLoading(true);
    try {
      const advice = await generateFinancialStrategy(goal);
      setResult(advice);
    } catch (error) {
      setResult("Ocorreu um erro ao consultar o Advisor. Verifique sua conexão.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-advisor" className="py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="glass rounded-[3rem] p-8 md:p-16 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold mb-6">
                INTELIGÊNCIA NATIVA
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 leading-tight">
                Nexus AI Advisor: <br />
                Sua Estratégia em Segundos.
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Experimente o poder da nossa IA integrada. Diga-nos qual o seu objetivo financeiro e receba uma análise baseada em dados de mercado descentralizados.
              </p>

              <form onSubmit={handleSubmit} className="relative group">
                <input 
                  type="text" 
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  placeholder="Ex: Quero diversificar meu portfólio com foco em Web3..."
                  className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 text-white placeholder:text-slate-500 transition-all"
                />
                <button 
                  disabled={loading}
                  className="absolute right-2 top-2 bottom-2 px-6 bg-cyan-500 text-slate-950 font-bold rounded-xl hover:bg-cyan-400 transition-colors disabled:opacity-50"
                >
                  {loading ? 'Processando...' : 'Gerar'}
                </button>
              </form>

              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold border border-slate-900">AI</div>
                  <div className="w-8 h-8 rounded-full bg-cyan-700 flex items-center justify-center text-[10px] font-bold border border-slate-900">UX</div>
                </div>
                <p className="text-xs text-slate-500">Treinado com mais de 1B de transações anônimas</p>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-950/50 border border-white/10 rounded-[2rem] p-8 min-h-[350px] flex flex-col justify-center relative overflow-hidden">
                {!result && !loading && (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <p className="text-slate-500 italic">Digite seu objetivo para ver a mágica acontecer...</p>
                  </div>
                )}

                {loading && (
                  <div className="space-y-4 animate-pulse">
                    <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                    <div className="h-4 bg-slate-800 rounded w-1/2"></div>
                    <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                    <div className="h-4 bg-slate-800 rounded w-2/3"></div>
                  </div>
                )}

                {result && !loading && (
                  <div className="prose prose-invert max-w-none">
                    <p className="text-cyan-400 font-mono text-sm mb-4">ANALYSIS_COMPLETE_v2.05</p>
                    <div className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                      {result}
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs text-slate-500">Generated by Gemini 3 Flash</span>
                      <button className="text-xs text-cyan-400 hover:underline font-bold">Salvar Plano</button>
                    </div>
                  </div>
                )}

                {/* Decorative circuit lines */}
                <div className="absolute inset-0 pointer-events-none opacity-10">
                   <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                     <path d="M0 20 L20 20 L30 10 L80 10 L100 30" stroke="white" fill="none" />
                     <path d="M0 80 L50 80 L60 90 L100 90" stroke="white" fill="none" />
                   </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvisor;
