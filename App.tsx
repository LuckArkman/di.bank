
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import IADifferential from './components/IADifferential';
import AIAdvisor from './components/AIAdvisor';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import Dashboard from './components/Dashboard';
import Investments from './components/Investments';
import Cards from './components/Cards';
import { getCurrentUser, logout as performLogout } from './services/authService';
import { supabase } from './services/supabase';
import { User } from './types';

export type PageID = 'home' | 'services' | 'about' | 'security' | 'contact' | 'dashboard' | 'investments' | 'cards';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activePage, setActivePage] = useState<PageID>('home');
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'login' | 'register'>('login');
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const initSession = async () => {
      try {
        const activeUser = await getCurrentUser();
        setUser(activeUser);
        if (activeUser) setActivePage('dashboard');
      } catch (err) {
        console.error("Erro ao inicializar sessão:", err);
      } finally {
        setIsInitializing(false);
      }
    };

    initSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
        const activeUser = await getCurrentUser();
        setUser(activeUser);
        if (activePage === 'home') setActivePage('dashboard');
      } else if (event === 'SIGNED_OUT') {
        setUser(null);
        setActivePage('home');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLoginSuccess = (loggedInUser: User) => {
    setUser(loggedInUser);
    setIsLoginModalOpen(false);
    setActivePage('dashboard');
  };

  const handleLogout = async () => {
    try {
      await performLogout();
      setUser(null);
      setActivePage('home');
    } catch (err) {
      console.error("Erro ao realizar logout:", err);
    }
  };

  const openAuth = (mode: 'login' | 'register') => {
    setModalMode(mode);
    setIsLoginModalOpen(true);
  };

  const navigateTo = (page: PageID) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isInitializing) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-cyan-500/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-t-cyan-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-cyan-500 font-display font-black text-xl italic">D</span>
            </div>
          </div>
          <p className="text-cyan-500 font-display font-bold animate-pulse uppercase tracking-[0.3em] text-[10px]">
            Estabelecendo Conexão Neural...
          </p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (user) {
      switch (activePage) {
        case 'investments':
          return <Investments user={user} />;
        case 'cards':
          return <Cards user={user} />;
        case 'dashboard':
        default:
          return <Dashboard user={user} />;
      }
    }

    switch (activePage) {
      case 'services':
        return <div className="pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700"><Services /></div>;
      case 'about':
        return <div className="pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700"><About /></div>;
      case 'security':
        return <div className="pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700"><IADifferential /></div>;
      case 'contact':
        return <div className="pt-20 animate-in fade-in slide-in-from-bottom-4 duration-700"><Contact /></div>;
      case 'home':
      default:
        return (
          <>
            <Hero onStartClick={() => openAuth('register')} />
            <Services />
            <About />
            <Features />
            <IADifferential />
            <AIAdvisor />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30 scroll-smooth">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-purple-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[20%] w-[35%] h-[35%] bg-blue-600/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar 
          isLoggedIn={!!user} 
          activePage={activePage}
          onNavigate={navigateTo}
          onLoginClick={() => openAuth('login')} 
          onLogoutClick={handleLogout}
        />
        
        <main>
          {renderContent()}
        </main>
        
        {!user && <Footer onNavigate={navigateTo} />}
      </div>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        initialMode={modalMode}
      />
    </div>
  );
};

export default App;
