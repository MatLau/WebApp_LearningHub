-- =============================================================
--  Learning Hub IA — SETUP MASTER DEL DATABASE
--  Esegui questo script nel SQL Editor del tuo progetto Supabase.
--  Questo script crea tutto da zero in modo sicuro senza cancellare i dati.
-- =============================================================

-- 1) CREAZIONE TABELLA PROFILI
create table if not exists public.profiles (
  id          uuid primary key references auth.users(id) on delete cascade,
  username    text unique not null,
  full_name   text,
  is_admin    boolean not null default false,
  role        text check (role in ('ata', 'docente', 'at', 'cs', 'admin')),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Assicuriamoci che le colonne is_admin e role esistano (nel caso la tabella ci fosse già ma fosse vecchia)
alter table public.profiles add column if not exists is_admin boolean not null default false;
alter table public.profiles add column if not exists role text check (role in ('ata', 'docente', 'at', 'cs', 'admin'));

-- 2) CREAZIONE TABELLA PROGRESSI
create table if not exists public.user_progress (
  user_id     uuid primary key references auth.users(id) on delete cascade,
  state       jsonb not null default '{}'::jsonb,
  xp          integer not null default 0,
  updated_at  timestamptz not null default now()
);

-- 3) ABILITA ROW LEVEL SECURITY (RLS)
alter table public.profiles      enable row level security;
alter table public.user_progress enable row level security;

-- 4) POLICY PER I PROFILI
drop policy if exists "profiles_select_own" on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id or (select is_admin from public.profiles where id = auth.uid()) = true);

drop policy if exists "profiles_insert_own" on public.profiles;
create policy "profiles_insert_own" on public.profiles
  for insert with check (auth.uid() = id or (select is_admin from public.profiles where id = auth.uid()) = true);

drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles
  for update using (auth.uid() = id or (select is_admin from public.profiles where id = auth.uid()) = true);

-- 5) POLICY PER I PROGRESSI
drop policy if exists "progress_select_own" on public.user_progress;
create policy "progress_select_own" on public.user_progress
  for select using (auth.uid() = user_id or (select is_admin from public.profiles where id = auth.uid()) = true);

drop policy if exists "progress_insert_own" on public.user_progress;
create policy "progress_insert_own" on public.user_progress
  for insert with check (auth.uid() = user_id);

drop policy if exists "progress_update_own" on public.user_progress;
create policy "progress_update_own" on public.user_progress
  for update using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- 6) TRIGGER PER CREARE AUTOMATICAMENTE IL PROFILO ALLA REGISTRAZIONE
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, username, full_name, is_admin, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'username', split_part(new.email, '@', 1)),
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    false,
    null
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

-- 7) VISTA CLASSIFICA
create or replace view public.leaderboard as
  select p.username, p.full_name, up.xp, up.updated_at
  from public.user_progress up
  join public.profiles p on p.id = up.user_id
  order by up.xp desc;

-- =============================================================
-- Rendi te stesso admin!
-- Sostituisci 'TUO_USERNAME' con il tuo vero username:
-- update public.profiles set is_admin = true, role = 'admin' where username = 'matteo.admin';
