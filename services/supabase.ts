
import { createClient } from '@supabase/supabase-js';

// Detectamos se as credenciais reais do Supabase foram injetadas
const rawUrl = process.env.SUPABASE_URL;
const rawKey = process.env.SUPABASE_ANON_KEY;

export const SUPABASE_CONFIGURED = Boolean(
  rawUrl && 
  rawKey && 
  rawUrl !== 'https://placeholder.supabase.co' &&
  !rawUrl.includes('placeholder')
);

const supabaseUrl = SUPABASE_CONFIGURED ? rawUrl! : 'https://placeholder.supabase.co';
const supabaseAnonKey = SUPABASE_CONFIGURED ? rawKey! : 'placeholder-key';

if (!SUPABASE_CONFIGURED) {
  console.info("D-AI Bank: Modo de Demonstração ativado (Supabase não detectado).");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
