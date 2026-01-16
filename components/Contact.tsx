
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="glass rounded-[3rem] overflow-hidden border-white/10 flex flex-col lg:flex-row">
          {/* Contact Info Sidebar */}
          <div className="lg:w-1/3 bg-slate-900/50 p-12 border-b lg:border-b-0 lg:border-r border-white/5">
            <h3 className="text-3xl font-display font-bold mb-8">Conecte-se à Rede</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-12">
              Nossa equipe de suporte neural está disponível 24/7 para auxiliar em sua jornada financeira descentralizada.
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-cyan-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeWidth={2}/></svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Protocolo de E-mail</p>
                  <p className="text-white text-sm font-medium">comms@d-ai.bank</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-purple-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeWidth={2}/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth={2}/></svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest">Nó Principal</p>
                  <p className="text-white text-sm font-medium">Virtual Environment / Global</p>
                </div>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/5">
               <div className="flex items-center text-green-500 space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
                  <span className="text-[10px] font-black uppercase tracking-tighter">Support Uplink: ESTABLISHED</span>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-12 md:p-16">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Assinatura Digital</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 text-white transition-all placeholder:text-slate-800"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Endereço de Rede</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 text-white transition-all placeholder:text-slate-800"
                    placeholder="email@servidor.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Mensagem Criptografada</label>
                <textarea 
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 text-white transition-all placeholder:text-slate-800 resize-none"
                  placeholder="Como o protocolo D-AI pode te ajudar hoje?"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all transform hover:-translate-y-1 shadow-xl ${status === 'sent' ? 'bg-green-500 text-white' : 'bg-cyan-500 text-slate-950 hover:bg-cyan-400'}`}
              >
                {status === 'idle' && 'Enviar para a Rede'}
                {status === 'sending' && 'Sincronizando Mensagem...'}
                {status === 'sent' && 'Mensagem Recebida via Nexus'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
