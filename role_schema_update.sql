-- =============================================================
--  Learning Hub IA — Aggiornamento schema per i Ruoli utente
--  Esegui questo script nel SQL Editor del tuo progetto Supabase
--  (Dashboard Supabase → SQL Editor → New query → incolla → Run).
--  Esegui DOPO admin_schema_update.sql (richiede la colonna is_admin).
-- =============================================================

-- 1) Aggiungi la colonna role alla tabella profiles
ALTER TABLE public.profiles
ADD COLUMN IF NOT EXISTS role text
CHECK (role IN ('ata', 'docente', 'at', 'cs', 'admin'));

-- 2) Permetti agli admin di aggiornare qualsiasi profilo
--    (necessario per assegnare il ruolo dalla dashboard admin)
DROP POLICY IF EXISTS "profiles_update_admin" ON public.profiles;
CREATE POLICY "profiles_update_admin" ON public.profiles
  FOR UPDATE USING (
    auth.uid() = id
    OR (SELECT is_admin FROM public.profiles WHERE id = auth.uid()) = true
  );

-- 3) Permetti agli admin di fare INSERT su profili di altri utenti
--    (necessario per l'upsert del ruolo quando il trigger non ha ancora creato il profilo)
DROP POLICY IF EXISTS "profiles_insert_admin" ON public.profiles;
CREATE POLICY "profiles_insert_admin" ON public.profiles
  FOR INSERT WITH CHECK (
    auth.uid() = id
    OR (SELECT is_admin FROM public.profiles WHERE id = auth.uid()) = true
  );

-- 4) (Opzionale) Aggiorna il ruolo di utenti esistenti:
-- UPDATE public.profiles SET role = 'ata'     WHERE username IN ('mario.rossi', 'lucia.bianchi');
-- UPDATE public.profiles SET role = 'docente'  WHERE username IN ('prof.verdi');
-- UPDATE public.profiles SET role = 'at'       WHERE username IN ('tecnico1');
-- UPDATE public.profiles SET role = 'cs'       WHERE username IN ('portiere1');

-- 5) (Opzionale) Rendi un utente admin (sia is_admin che role):
-- UPDATE public.profiles SET is_admin = true, role = 'admin' WHERE username = 'admin';
