-- Verify the shared arbourview_leads table exists before proceeding.
-- If this query returns no rows, run the full DDL from arbourviewhomes.com's
-- 001_create_leads.sql migration first, then re-run this check.
-- This site inserts site_source = 'homes_ca'.
-- Idempotent safety net — only creates the table if it is genuinely missing;
-- a no-op if arbourviewhomes.com already created it.

select to_regclass('public.arbourview_leads') as leads_table_exists;

create table if not exists arbourview_leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text not null,
  is_broker boolean not null default false,
  site_source text not null,
  consent boolean not null default false,
  consent_timestamp timestamptz,
  page_path text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text
);

alter table arbourview_leads enable row level security;

do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public'
      and tablename = 'arbourview_leads'
      and policyname = 'anon can insert arbourview_leads'
  ) then
    create policy "anon can insert arbourview_leads"
      on arbourview_leads for insert
      to anon
      with check (true);
  end if;
end $$;
