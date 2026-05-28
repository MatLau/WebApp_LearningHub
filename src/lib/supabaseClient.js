import { createClient } from '@supabase/supabase-js'

const url  = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY

export const CLOUD_ENABLED = Boolean(url && anon)
export const supabase = CLOUD_ENABLED ? createClient(url, anon) : null

// Username → email tecnica (Supabase Auth usa email+password)
const USERNAME_DOMAIN = import.meta.env.VITE_USERNAME_DOMAIN || 'learninghub.local'
export const usernameToEmail = (u) =>
  String(u || '').trim().toLowerCase().replace(/[^a-z0-9._-]/g, '') + '@' + USERNAME_DOMAIN

// ─── Autenticazione ─────────────────────────────────────────────────────────

export async function register(username, password, fullName = '') {
  const email = usernameToEmail(username)

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username.trim().toLowerCase(),
        full_name: fullName.trim(),
      },
    },
  })

  if (error) throw error

  // Supabase restituisce identities vuoto se l'utente esiste già (senza dare errore)
  if (data.user?.identities?.length === 0) {
    throw new Error('Username già registrato. Effettua il login.')
  }

  // Se la sessione è disponibile, tutto ok
  if (data.session) return data.session

  // Fallback: signUp a volte non ritorna sessione subito — proviamo signIn
  const signIn = await supabase.auth.signInWithPassword({ email, password })
  if (signIn.error) {
    const msg = signIn.error.message || ''
    if (msg.includes('Email not confirmed')) {
      throw new Error('EMAIL_CONFIRMATION_REQUIRED')
    }
    throw signIn.error
  }
  return signIn.data.session
}

export async function login(username, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: usernameToEmail(username),
    password,
  })

  if (error) {
    const msg = error.message || ''
    if (msg.includes('Email not confirmed')) throw new Error('EMAIL_CONFIRMATION_REQUIRED')
    if (msg.includes('Invalid login credentials')) throw new Error('INVALID_CREDENTIALS')
    if (msg.includes('Too many requests') || msg.includes('rate limit')) throw new Error('RATE_LIMIT')
    throw error
  }

  if (!data.session) throw new Error('Sessione non ricevuta da Supabase. Riprova.')
  return data.session
}

export async function logout() {
  if (supabase) await supabase.auth.signOut()
}

// ─── Progressi ──────────────────────────────────────────────────────────────

export async function loadProgress(userId) {
  const { data, error } = await supabase
    .from('user_progress')
    .select('state, xp')
    .eq('user_id', userId)
    .maybeSingle()
  if (error) console.warn('[Supabase] loadProgress error:', error.message)
  return data || null
}

export async function saveProgress(userId, state, xp) {
  const { error } = await supabase.from('user_progress').upsert({
    user_id: userId,
    state,
    xp,
    updated_at: new Date().toISOString(),
  })
  if (error) console.warn('[Supabase] saveProgress error:', error.message)
}
