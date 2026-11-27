-- Renia Services — remove the admin dashboard and account system.
--
-- The public website now only keeps the quote/contact form. This migration
-- cleans up objects that were created for the removed admin and auth flows.

-- Auth-only profile data and username availability helper.
drop function if exists public.username_taken(text);
drop table if exists public.profiles cascade;

-- Admin-only storage write policies. The gallery is published with the
-- service role, so the public site does not need insert/delete access.
drop policy if exists "Admin gallery insert" on storage.objects;
drop policy if exists "Admin gallery delete" on storage.objects;

-- Admin-only read/write policies on quote requests.
drop policy if exists "Admins read quote requests" on public.quote_requests;
drop policy if exists "Admins insert quote requests" on public.quote_requests;

-- Anonymous visitors can still submit a quote request, and nothing else.
drop policy if exists "Allow public quote submissions" on public.quote_requests;
create policy "Allow public quote submissions"
on public.quote_requests
for insert
to anon, authenticated
with check (true);
