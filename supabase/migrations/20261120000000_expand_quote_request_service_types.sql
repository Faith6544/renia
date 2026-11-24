-- Allow every service/context that submits a request from the public website.
-- Existing databases may have an unnamed or differently named CHECK constraint
-- from the original README setup, so remove any CHECK on service_type first.
do $$
declare
  check_name text;
begin
  select c.conname
    into check_name
    from pg_constraint c
   where c.conrelid = 'public.quote_requests'::regclass
     and c.contype = 'c'
     and pg_get_constraintdef(c.oid) ilike '%service_type%'
   limit 1;

  if check_name is not null then
    execute format('alter table public.quote_requests drop constraint %I', check_name);
  end if;
end $$;

alter table public.quote_requests
  add constraint quote_requests_service_type_check
  check (service_type in ('home', 'pro', 'renia_home', 'renia_pro', 'contact'));

-- Anonymous visitors can submit requests. The table stays private otherwise:
-- no public SELECT, UPDATE or DELETE policy is added.
drop policy if exists "Allow public quote submissions" on public.quote_requests;

create policy "Allow public quote submissions"
  on public.quote_requests
  for insert
  to anon, authenticated
  with check (true);
