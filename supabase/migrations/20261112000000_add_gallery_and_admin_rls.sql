-- Renia Services — Supabase setup for the gallery bucket and admin access.
--
-- Run this file in the Supabase SQL editor (or via supabase db push).

-- Public read access to the shared cleaning-service gallery.
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'renia-gallery',
  'renia-gallery',
  true,
  52428800,
  array[
    'image/jpeg',
    'image/png',
    'image/webp',
    'image/avif',
    'image/gif',
    'video/mp4',
    'video/webm',
    'video/quicktime'
  ]
)
on conflict (id) do update
  set file_size_limit = 52428800,
      allowed_mime_types = array[
        'image/jpeg',
        'image/png',
        'image/webp',
        'image/avif',
        'image/gif',
        'video/mp4',
        'video/webm',
        'video/quicktime'
      ];

alter table storage.buckets enable row level security;

drop policy if exists "Public gallery read" on storage.objects;
create policy "Public gallery read"
on storage.objects
for select
using (bucket_id = 'renia-gallery');

drop policy if exists "Admin gallery insert" on storage.objects;
create policy "Admin gallery insert"
on storage.objects
for insert
with check (bucket_id = 'renia-gallery');

drop policy if exists "Admin gallery delete" on storage.objects;
create policy "Admin gallery delete"
on storage.objects
for delete
using (bucket_id = 'renia-gallery');

-- Quote requests stay private: only authenticated admin accounts may read them.
-- The admin flag is read from the Supabase user app metadata, matching the
-- client-side check in src/lib/auth.ts.
alter table public.quote_requests enable row level security;

drop policy if exists "Admins read quote requests" on public.quote_requests;
create policy "Admins read quote requests"
on public.quote_requests
for select
to authenticated
using (
  coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin'
);

drop policy if exists "Admins insert quote requests" on public.quote_requests;
create policy "Admins insert quote requests"
on public.quote_requests
for insert
to authenticated
with check (
  coalesce((auth.jwt() -> 'app_metadata' ->> 'role'), '') = 'admin'
);
