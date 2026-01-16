
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-500/20 to-purple-600/20 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative glass rounded-[3rem] overflow-hidden border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4628c71d0?auto=format&fit=crop&q=80&w=1000" 
                  alt="AI Evolution" 
                  className="w-full object-cover aspect-square grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-950 to-transparent">
                  <p className="text-cyan-400 font-mono text-xs mb-2">BLOCK_HEIGHT: 840,231</p>
                  <h4 className="text-xl font-bold">Protocolo Genesis Ativo</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight">
              O Banco que <br />
              <span className="text-slate-500 italic">Pensa por Você.</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                O D-AI Bank nasceu da necessidade de eliminar a opacidade das instituições financeiras tradicionais. Não somos apenas um banco; somos um **organismo financeiro distribuído**.
              </p>
              <p>
                Nossa missão é democratizar o acesso à inteligência financeira de ponta, permitindo que cada usuário seja um nó valioso em uma rede de prosperidade coletiva, protegida por algoritmos que não conhecem o viés humano.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div className="p-6 glass rounded-2xl border-white/5">
                <h5 className="text-white font-bold mb-2">100% DAO</h5>
                <p className="text-xs text-slate-500">Governança gerida pela comunidade e IA.</p>
              </div>
              <div className="p-6 glass rounded-2xl border-white/5">
                <h5 className="text-white font-bold mb-2">Open Source</h5>
                <p className="text-xs text-slate-500">Protocolos auditáveis por qualquer nó da rede.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
