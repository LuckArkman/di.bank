
import React from 'react';

const features = [
  {
    title: "IA Preditiva Distribuída",
    description: "Nossos algoritmos não rodam em um servidor central, mas em uma rede global, garantindo insights imparciais sobre seus investimentos.",
    icon: (
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Soberania de Dados",
    description: "Seus dados financeiros são criptografados e fragmentados. Você detém as chaves e a IA aprende com seus padrões sem jamais ver sua identidade.",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    )
  },
  {
    title: "Rewards por Contribuição",
    description: "Ganhe tokens Nexus ao permitir que sua capacidade computacional ociosa ou dados anônimos treinem o modelo de inteligência do banco.",
    icon: (
      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-slate-900/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Inovação que redefine a confiança.
            </h2>
            <p className="text-slate-400 text-lg">
              Construímos um sistema financeiro que não depende de instituições centrais, mas da força da rede e da precisão da inteligência artificial.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <img key={i} className="w-12 h-12 rounded-full border-2 border-slate-900" src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="user" />
              ))}
              <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center border-2 border-slate-900 text-xs font-bold">
                +10k
              </div>
            </div>
            <p className="text-xs text-slate-500 mt-3 font-medium">Usuários ativos na rede Nexus</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-8 glass rounded-[2rem] hover:bg-white/5 transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 group-hover:shadow-lg group-hover:shadow-cyan-500/10">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
