
import React, { useState, useEffect } from 'react';
import { PageID } from '../App';

interface NavbarProps {
  isLoggedIn: boolean;
  activePage: PageID;
  onNavigate: (page: PageID) => void;
  onLoginClick: () => void;
  onLogoutClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, activePage, onNavigate, onLoginClick, onLogoutClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; id: PageID }[] = [
    { label: 'Serviços', id: 'services' },
    { label: 'Sobre', id: 'about' },
    { label: 'Segurança', id: 'security' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || isLoggedIn ? 'bg-slate-950/90 backdrop-blur-xl py-3 border-b border-white/5 shadow-2xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => onNavigate(isLoggedIn ? 'dashboard' : 'home')}>
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:rotate-12 transition-transform">
            <span className="text-white font-black text-xl italic">D</span>
          </div>
          <span className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            D-AI Bank
          </span>
        </div>

        <div className="hidden lg:flex items-center space-x-10">
          {!isLoggedIn ? (
            <>
              {navLinks.map(link => (
                <button 
                  key={link.id} 
                  onClick={() => onNavigate(link.id)} 
                  className={`text-xs font-bold uppercase tracking-widest transition-colors ${activePage === link.id ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
                >
                  {link.label}
                </button>
              ))}
              <div className="h-4 w-px bg-white/10 mx-2"></div>
              <button 
                onClick={onLoginClick}
                className="text-xs font-bold uppercase tracking-widest text-white hover:text-cyan-400 transition-colors"
              >
                Entrar
              </button>
              <button 
                onClick={onLoginClick}
                className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full text-xs font-black uppercase tracking-widest hover:shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:scale-105"
              >
                Abrir Conta
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={() => onNavigate('dashboard')} 
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${activePage === 'dashboard' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
              >
                Dashboard
              </button>
              <button 
                onClick={() => onNavigate('investments')} 
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${activePage === 'investments' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
              >
                Investimentos
              </button>
              <button 
                onClick={() => onNavigate('cards')} 
                className={`text-xs font-bold uppercase tracking-widest transition-colors ${activePage === 'cards' ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
              >
                Cards
              </button>
              <div className="h-4 w-px bg-white/10 mx-2"></div>
              <button 
                onClick={onLogoutClick}
                className="px-6 py-2.5 glass-dark text-slate-400 border-white/5 rounded-full text-xs font-bold uppercase tracking-widest hover:text-rose-400 hover:border-rose-500/20 transition-all"
              >
                Logout
              </button>
            </>
          )}
        </div>

        <button className="lg:hidden text-slate-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
