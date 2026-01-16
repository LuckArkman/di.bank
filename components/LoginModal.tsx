
import React, { useState } from 'react';
import { login, register } from '../services/authService';
import { SUPABASE_CONFIGURED } from '../services/supabase';
import { User } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (user: User) => void;
  initialMode?: 'login' | 'register';
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, onLoginSuccess, initialMode = 'login' }) => {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    try {
      let user: User;
      if (mode === 'login') {
        user = await login(email, password);
      } else {
        user = await register(name, email, password);
      }
      onLoginSuccess(user);
    } catch (err: any) {
      setError(err.message || (mode === 'login' ? 'Credenciais inválidas.' : 'Erro ao criar conta.'));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xl" onClick={onClose} />
      
      <div className="relative w-full max-w-md glass rounded-[2.5rem] p-8 md:p-10 shadow-2xl border-white/10 animate-in fade-in zoom-in duration-300 overflow-hidden">
        {/* Banner de Modo Demo */}
        {!SUPABASE_CONFIGURED && (
          <div className="absolute top-0 left-0 right-0 bg-amber-500/10 border-b border-amber-500/20 py-1.5 px-4 text-center">
            <span className="text-[9px] font-black text-amber-500 uppercase tracking-[0.2em]">Modo de Demonstração Offline</span>
          </div>
        )}

        <div className={`flex bg-slate-900/50 p-1 rounded-2xl mb-8 border border-white/5 ${!SUPABASE_CONFIGURED ? 'mt-6' : ''}`}>
          <button 
            onClick={() => setMode('login')}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${mode === 'login' ? 'bg-white/10 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Login
          </button>
          <button 
            onClick={() => setMode('register')}
            className={`flex-1 py-3 rounded-xl text-sm font-bold transition-all ${mode === 'register' ? 'bg-white/10 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'}`}
          >
            Abrir Conta
          </button>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-display font-bold text-white mb-2">
            {mode === 'login' ? 'Nexus Auth' : 'Protocolo Genesis'}
          </h2>
          <p className="text-slate-400 text-sm">
            {mode === 'login' ? 'Valide sua identidade digital' : 'Registre sua assinatura na rede descentralizada'}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === 'register' && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-tighter ml-1">Assinatura Nominal</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 text-white transition-all placeholder:text-slate-700"
                placeholder="Seu nome completo"
              />
            </div>
          )}
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-tighter ml-1">E-mail de Rede</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 text-white transition-all placeholder:text-slate-700"
              placeholder="id@nexus.io"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-500 uppercase tracking-tighter ml-1">Chave de Acesso</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 text-white transition-all placeholder:text-slate-700"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="bg-rose-500/10 border border-rose-500/20 rounded-lg p-3">
              <p className="text-rose-500 text-[10px] text-center font-bold uppercase tracking-wider">{error}</p>
            </div>
          )}

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 mt-4"
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {mode === 'login' ? 'Verificando...' : 'Sincronizando...'}
              </span>
            ) : mode === 'login' ? 'Autenticar' : 'Iniciar Protocolo'}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600 uppercase tracking-widest font-bold mb-4">
            {SUPABASE_CONFIGURED ? 'Cloud Security Active' : 'Local Sandbox Mode'}
          </p>
          <div className="flex justify-center space-x-2">
            <div className={`w-1.5 h-1.5 rounded-full ${SUPABASE_CONFIGURED ? 'bg-cyan-500 shadow-[0_0_5px_rgba(6,182,212,0.5)]' : 'bg-amber-500 shadow-[0_0_5px_rgba(245,158,11,0.5)]'}`}></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/5"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
