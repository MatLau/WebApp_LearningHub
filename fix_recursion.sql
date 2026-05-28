-- =============================================================
--  FIX PER ERRORE "INFINITE RECURSION"
--  Copia questo script, incollalo nel SQL Editor e premi Run
-- =============================================================

-- 1) Rimuovi le vecchie policy che causano il loop infinito
DROP POLICY IF EXISTS "profiles_select_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
DROP POLICY IF EXISTS "progress_select_own" ON public.user_progress;
DROP POLICY IF EXISTS "profiles_update_admin" ON public.profiles;
DROP POLICY IF EXISTS "profiles_insert_admin" ON public.profiles;

-- 2) Crea una funzione sicura (security definer) per leggere il ruolo senza innescare la policy
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT COALESCE(
    (SELECT is_admin FROM profiles WHERE id = auth.uid()), 
    false
  );
$$;

-- 3) Ricrea le policy usando la funzione sicura
CREATE POLICY "profiles_select_own" ON public.profiles
  FOR SELECT USING (auth.uid() = id OR public.is_admin());

CREATE POLICY "profiles_insert_own" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id OR public.is_admin());

CREATE POLICY "profiles_update_own" ON public.profiles
  FOR UPDATE USING (auth.uid() = id OR public.is_admin());

-- Policy per i progressi
CREATE POLICY "progress_select_own" ON public.user_progress
  FOR SELECT USING (auth.uid() = user_id OR public.is_admin());

-- Assicurati che lo schema abbia le colonne
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_admin boolean NOT NULL DEFAULT false;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role text CHECK (role IN ('ata', 'docente', 'at', 'cs', 'admin'));
