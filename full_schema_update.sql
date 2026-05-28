-- =============================================================
--  Learning Hub IA — Aggiornamento Schema Completo (Admin + Ruoli)
--  Esegui questo script nel SQL Editor del tuo progetto Supabase
--  (Dashboard Supabase → SQL Editor → New query → incolla → Run).
-- =============================================================

-- 1) Aggiungi la colonna is_admin alla tabella profiles
ALTER TABLE public.profiles 
ADD COLUMN IF NOT EXISTS is_admin boolean NOT NULL DEFAULT false;

-- 2) Aggiungi la colonna role alla tabella profiles
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS role text
CHECK (role IN ('ata', 'docente', 'at', 'cs', 'admin'));

-- 3) Aggiorna la policy SELECT per i profili: un admin può leggere tutti, o un utente legge il suo
DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT USING (auth.uid() = id OR (SELECT is_admin FROM public.profiles WHERE id = auth.uid()) = true);

-- 4) Aggiorna la policy SELECT per i progressi: un admin può leggere tutti
DROP POLICY IF EXISTS "progress_select_own" ON public.user_progress;
CREATE POLICY "progress_select_own" ON public.user_progress
  FOR SELECT USING (auth.uid() = user_id OR (SELECT is_admin FROM public.profiles WHERE id = auth.uid()) = true);

-- 5) Permetti agli admin di aggiornare qualsiasi profilo (assegnare ruoli)
DROP POLICY IF EXISTS "profiles_update_admin" ON public.profiles;
CREATE POLICY "profiles_update_admin" ON public.profiles
  FOR UPDATE USING (
    auth.uid() = id
    OR (SELECT is_admin FROM public.profiles WHERE id = auth.uid()) = true
  );

-- 6) Permetti agli admin di fare INSERT su profili di altri utenti
DROP POLICY IF EXISTS "profiles_insert_admin" ON public.profiles;
CREATE POLICY "profiles_insert_admin" ON public.profiles
  FOR INSERT WITH CHECK (
    auth.uid() = id
    OR (SELECT is_admin FROM public.profiles WHERE id = auth.uid()) = true
  );

-- =============================================================
-- ISTRUZIONI OPZIONALI (Rimuovi i "--" per eseguirle)
-- =============================================================

-- A) Aggiorna il ruolo di utenti esistenti:
-- UPDATE public.profiles SET role = 'ata'     WHERE username IN ('mario.rossi', 'lucia.bianchi');
-- UPDATE public.profiles SET role = 'docente'  WHERE username IN ('prof.verdi');
-- UPDATE public.profiles SET role = 'at'       WHERE username IN ('tecnico1');
-- UPDATE public.profiles SET role = 'cs'       WHERE username IN ('portiere1');

-- B) Rendi te stesso admin (Sostituisci 'TUO_USERNAME' con il tuo):
-- UPDATE public.profiles SET is_admin = true, role = 'admin' WHERE username = 'admin';
