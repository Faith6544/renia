-- Renia Services — usernames for the post-OAuth "choose username" step.
--
-- Run this file in the Supabase SQL editor (or via supabase db push) before
-- testing the Google sign-in flow. The table is created if it does not exist,
-- so it is safe on projects that already have a `profiles` table.

create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  email text,
  full_name text,
  username text,
  role text default 'user',
  created_at timestamptz not null default now()
);

alter table public.profiles
  add column if not exists email text,
  add column if not exists full_name text,
  add column if not exists username text,
  add column if not exists role text default 'user',
  add column if not exists created_at timestamptz default now();

-- Usernames are unique regardless of letter case.
create unique index if not exists profiles_username_lower_key
  on public.profiles (lower(username))
  where username is not null;

alter table public.profiles enable row level security;

drop policy if exists "Users read own profile" on public.profiles;
create policy "Users read own profile"
on public.profiles
for select
to authenticated
using (auth.uid() = id);

drop policy if exists "Users insert own profile" on public.profiles;
create policy "Users insert own profile"
on public.profiles
for insert
to authenticated
with check (auth.uid() = id);

drop policy if exists "Users update own profile" on public.profiles;
create policy "Users update own profile"
on public.profiles
for update
to authenticated
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "Admins read all profiles" on public.profiles;
create policy "Admins read all profiles"
on public.profiles
for select
to authenticated
using (
  coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin'
);

-- Safe, privacy-preserving availability check. Exposing the whole profiles
-- table to every signed-in user would leak emails and roles, so the client
-- calls this function instead of querying other rows directly.
create or replace function public.username_taken(candidate text)
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where lower(username) = lower(trim(candidate))
  );
$$;

grant execute on function public.username_taken(text) to anon, authenticated;
