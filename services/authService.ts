
import { User } from '../types';
import { supabase, SUPABASE_CONFIGURED } from './supabase';

const mapProfileToUser = (authData: any, profileData: any): User => {
  return {
    id: authData.id,
    name: profileData?.full_name || authData.user_metadata?.full_name || 'Usuário Nexus',
    email: authData.email || '',
    balance: profileData?.balance ?? 12500.50, // Saldo inicial demo
    accountNumber: profileData?.account_number || `0001-${Math.floor(100000 + Math.random() * 900000)}-0`,
    aiAuditStatus: profileData?.ai_audit_status || 'Secure',
    authorshipScore: profileData?.authorship_score ?? 85.0,
  };
};

const MOCK_USER: User = {
  id: 'demo-user-id',
  name: 'Nexus Explorer',
  email: 'demo@nexus.io',
  balance: 25750.80,
  accountNumber: '0001-882341-9',
  aiAuditStatus: 'Secure',
  authorshipScore: 92.0
};

export const login = async (email: string, password: string): Promise<User> => {
  if (!SUPABASE_CONFIGURED) {
    // Simula latência de rede no modo demo
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { ...MOCK_USER, email, name: email.split('@')[0] };
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    if (!data.user) throw new Error("Usuário não retornado.");

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', data.user.id)
      .single();

    return mapProfileToUser(data.user, profile);
  } catch (err: any) {
    console.error("Erro no Login:", err);
    throw new Error(err.message || "Erro na autenticação neural.");
  }
};

export const register = async (name: string, email: string, password: string): Promise<User> => {
  if (!SUPABASE_CONFIGURED) {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return { ...MOCK_USER, name, email };
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    });

    if (error) throw error;
    if (!data.user) throw new Error("Falha ao criar usuário.");

    const initialAccountNumber = `0001-${Math.floor(100000 + Math.random() * 900000)}-${Math.floor(Math.random() * 9)}`;
    
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .upsert({
        id: data.user.id,
        full_name: name,
        account_number: initialAccountNumber,
        balance: 0.0,
        authorship_score: 15.0,
        ai_audit_status: 'Secure'
      })
      .select()
      .single();

    return mapProfileToUser(data.user, profile);
  } catch (err: any) {
    console.error("Erro no Registro:", err);
    throw new Error(err.message || "Erro ao registrar na rede Nexus.");
  }
};

export const logout = async () => {
  if (SUPABASE_CONFIGURED) {
    await supabase.auth.signOut();
  }
};

export const getCurrentUser = async (): Promise<User | null> => {
  if (!SUPABASE_CONFIGURED) return null;

  try {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
    if (sessionError || !session) return null;

    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', session.user.id)
      .single();

    return mapProfileToUser(session.user, profile);
  } catch (err) {
    return null;
  }
};
