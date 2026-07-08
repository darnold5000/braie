-- Braie creator site schema
-- Run in Supabase SQL editor

create table if not exists routine_breakdown_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  parent_name text not null,
  athlete_name text not null,
  email text not null,
  level text not null,
  event text not null,
  video_url text not null,
  notes text,
  status text not null default 'new' check (status in ('new', 'reviewed', 'completed', 'archived'))
);

create table if not exists contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  inquiry_type text not null,
  message text not null,
  status text not null default 'new' check (status in ('new', 'reviewed', 'completed', 'archived'))
);

create table if not exists newsletter_subscribers (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null unique
);

alter table routine_breakdown_requests enable row level security;
alter table contact_inquiries enable row level security;
alter table newsletter_subscribers enable row level security;

-- Allow anonymous inserts from the public website
create policy "Allow public insert on routine_breakdown_requests"
  on routine_breakdown_requests for insert to anon with check (true);

create policy "Allow public insert on contact_inquiries"
  on contact_inquiries for insert to anon with check (true);

create policy "Allow public insert on newsletter_subscribers"
  on newsletter_subscribers for insert to anon with check (true);
