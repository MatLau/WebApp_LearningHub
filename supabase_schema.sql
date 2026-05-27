-- =============================================================
--  Learning Hub IA — Schema Supabase
--  Esegui questo script nel SQL Editor del tuo progetto Supabase
--  (Dashboard Supabase → SQL Editor → New query → incolla → Run).
-- =============================================================

-- 1) PROFILI -------------------------------------------------
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  username    text unique not null,
  full_name   text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- 2) PROGRESSI (XP, moduli completati, badge, ecc.) ----------
create table if not exists public.user_progress (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  state       jsonb not null default '{}'::jsonb,  -- l'intero stato del percorso
  xp          integer not null default 0,          -- denormalizzato (utile per classifiche/report)
  updated_at  timestamptz not null default now()
);

-- 3) ROW LEVEL SECURITY --------------------------------------
alter table public.profiles      enable row level security;
alter table public.user_progress enable row level security;

-- Profili: ciascun utente vede e modifica solo il proprio
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

-- Progressi: ciascun utente legge/scrive solo la propria riga
drop policy if exists "progress_select_own" on public.user_progress;
create policy "progress_select_own" on public.user_progress
  for select using (auth.uid() = user_id);

drop policy if exists "progress_insert_own" on public.user_progress;
create policy "progress_insert_own" on public.user_progress
  for insert with check (auth.uid() = user_id);

drop policy if exists "progress_update_own" on public.user_progress;
create policy "progress_update_own" on public.user_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 4) TRIGGER: crea profilo + riga progressi alla registrazione
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, full_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'full_name', '')
  )
  on conflict (id) do nothing;

  insert into public.user_progress (user_id, state, xp)
  values (new.id, '{}'::jsonb, 0)
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- 5) (OPZIONALE) CLASSIFICA / REPORT XP ----------------------
-- Vista che unisce username e XP. È protetta da RLS: di default
-- ogni utente vede solo il proprio dato. Per una classifica visibile
-- a tutti gli utenti autenticati, sostituisci la policy "progress_select_own"
-- con una "for select using (auth.role() = 'authenticated')".
create or replace view public.leaderboard as
  select p.username, p.full_name, up.xp, up.updated_at
  from public.user_progress up
  join public.profiles p on p.id = up.user_id
  order by up.xp desc;

-- Fine schema.
