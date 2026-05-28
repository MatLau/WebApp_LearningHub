-- =============================================================
--  Learning Hub IA — Aggiornamento Schema per Admin
--  Esegui questo script nel SQL Editor del tuo progetto Supabase
--  (Dashboard Supabase → SQL Editor → New query → incolla → Run).
-- =============================================================

-- 1) Aggiungi la colonna is_admin alla tabella profiles
alter table public.profiles 
add column if not exists is_admin boolean not null default false;

-- 2) Aggiorna la policy SELECT per i profili: un admin può leggere tutti
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id or (select is_admin from public.profiles where id = auth.uid()) = true);

-- 3) Aggiorna la policy SELECT per i progressi: un admin può leggere tutti
drop policy if exists "progress_select_own" on public.user_progress;
create policy "progress_select_own" on public.user_progress
  for select using (auth.uid() = user_id or (select is_admin from public.profiles where id = auth.uid()) = true);

-- 4) (Opzionale ma consigliato) Rendi te stesso admin! 
-- Sostituisci 'TUO_USERNAME' con il tuo username reale prima di eseguire:
-- update public.profiles set is_admin = true where username = 'admin';
