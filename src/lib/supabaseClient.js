// Client Supabase per il progetto React.
// Imposta VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY in un file .env (vedi .env.example).
// Se mancano, l'app può funzionare in modalità locale (senza cloud).
import { createClient } from '@supabase/supabase-js'

const url = import.meta.env.VITE_SUPABASE_URL
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY

export const CLOUD_ENABLED = Boolean(url && anon)
export const supabase = CLOUD_ENABLED ? createClient(url, anon) : null

// Username -> email tecnica (Supabase Auth usa email+password)
const USERNAME_DOMAIN = import.meta.env.VITE_USERNAME_DOMAIN || 'learninghub.local'
export const usernameToEmail = (u) =>
  String(u || '').trim().toLowerCase().replace(/[^a-z0-9._-]/g, '') + '@' + USERNAME_DOMAIN

// Helper di autenticazione
export async function register(username, password, fullName = '') {
  const email = usernameToEmail(username)
  const { data, error } = await supabase.auth.signUp({
    email, password,
    options: { data: { username: username.trim().toLowerCase(), full_name: fullName.trim() } },
  })
  if (error) throw error
  if (!data.session) {
    const r = await supabase.auth.signInWithPassword({ email, password })
    if (r.error) throw r.error
    return r.data.session
  }
  return data.session
}

export async function login(username, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: usernameToEmail(username), password,
  })
  if (error) throw error
  return data.session
}

export async function logout() {
  await supabase.auth.signOut()
}

// Progressi
export async function loadProgress(userId) {
  const { data } = await supabase.from('user_progress').select('state, xp').eq('user_id', userId).maybeSingle()
  return data || null
}

export async function saveProgress(userId, state, xp) {
  return supabase.from('user_progress').upsert({
    user_id: userId, state, xp, updated_at: new Date().toISOString(),
  })
}
