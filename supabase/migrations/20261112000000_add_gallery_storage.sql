-- Renia Services — Supabase setup for the public gallery bucket.
--
-- Run this file in the Supabase SQL editor (or via supabase db push).
-- Media is published from the Supabase dashboard / a service-role script;
-- the public website only reads from this bucket.

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

-- Quote requests stay private. Anonymous visitors may only submit them;
-- there is deliberately no public SELECT, UPDATE or DELETE policy.
alter table public.quote_requests enable row level security;

drop policy if exists "Allow public quote submissions" on public.quote_requests;
create policy "Allow public quote submissions"
on public.quote_requests
for insert
to anon, authenticated
with check (true);
