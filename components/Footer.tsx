
import React from 'react';
import { PageID } from '../App';

interface FooterProps {
  onNavigate?: (page: PageID) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (id: PageID) => {
    if (onNavigate) {
      onNavigate(id);
    }
  };

  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-8 cursor-pointer" onClick={() => handleNav('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <span className="text-white font-black text-xl italic">D</span>
              </div>
              <span className="text-2xl font-display font-bold">D-AI Bank</span>
            </div>
            <p className="text-slate-500 max-w-xs mb-10 text-sm leading-relaxed">
              O futuro do sistema financeiro construído sobre protocolos de inteligência descentralizada. Segurança neural, autoria digital e liquidez global.
            </p>
            <div className="flex space-x-4">
               {['Twitter', 'GitHub', 'Discord', 'LinkedIn'].map(social => (
                 <a key={social} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all border border-white/5 text-slate-500">
                   <span className="sr-only">{social}</span>
                   <div className="w-5 h-5 bg-current rounded-sm opacity-20" />
                 </a>
               ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white">Institucional</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><button onClick={() => handleNav('about')} className="hover:text-cyan-400 transition-colors">Sobre Nós</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-cyan-400 transition-colors">Serviços</button></li>
              <li><button className="hover:text-cyan-400 transition-colors">Carreiras</button></li>
              <li><button className="hover:text-cyan-400 transition-colors">Ecossistema</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white">Documentação</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><button className="hover:text-cyan-400 transition-colors">Whitepaper</button></li>
              <li><button className="hover:text-cyan-400 transition-colors">API Docs</button></li>
              <li><button onClick={() => handleNav('security')} className="hover:text-cyan-400 transition-colors">Security Audit</button></li>
              <li><button className="hover:text-cyan-400 transition-colors">Governance DAO</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-8 text-white">Ajuda</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><button className="hover:text-cyan-400 transition-colors">Central de Ajuda</button></li>
              <li><button onClick={() => handleNav('security')} className="hover:text-cyan-400 transition-colors">Segurança</button></li>
              <li><button className="hover:text-cyan-400 transition-colors">Taxas & Limites</button></li>
              <li><button onClick={() => handleNav('contact')} className="hover:text-cyan-400 transition-colors">Contato</button></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-600 space-y-4 md:space-y-0 uppercase tracking-widest font-bold">
          <p>© 2024 D-AI Bank. Proprietary Neural Protocols. Decentralized Intelligence Core.</p>
          <div className="flex items-center space-x-8">
            <span className="flex items-center text-cyan-500"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2 shadow-[0_0_8px_cyan]"></span> Global Network: Secure</span>
            <span>POLYGON / ETHEREUM / NEXUS L2</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
