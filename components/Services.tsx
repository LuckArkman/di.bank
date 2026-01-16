
import React from 'react';

const services = [
  {
    title: "Conta Digital AI",
    description: "Operações bancárias sem burocracia com gestão de fluxo de caixa inteligente e preditiva.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    color: "cyan"
  },
  {
    title: "Pix & Pagamentos",
    description: "Transferências instantâneas em milissegundos com validação de autoria digital em tempo real.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    color: "blue"
  },
  {
    title: "Crypto & Web3",
    description: "Integração nativa com DeFi. Armazene, negocie e invista em ativos digitais diretamente da sua conta.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    color: "purple"
  },
  {
    title: "Tokenização de Ativos",
    description: "Transforme ativos reais em frações digitais líquidas para diversificar seu portfólio global.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    color: "indigo"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
            Serviços Financeiros <br />
            <span className="text-slate-500 italic">Evoluídos pela Rede.</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Combinamos a estabilidade dos bancos tradicionais com a agilidade e inovação da inteligência artificial descentralizada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group glass-dark p-10 rounded-[2.5rem] hover:bg-white/5 transition-all duration-500 border border-white/5 hover:border-white/10 cursor-pointer">
              <div className={`w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl group-hover:shadow-${service.color}-500/20 text-${service.color}-400`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-display font-bold mb-4">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
