-- Supabase SQL Schema setup for Saraswathi Super Market

-- 1. Create Offers Table
CREATE TABLE IF NOT EXISTS public.offers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    image_url TEXT,
    category TEXT NOT NULL DEFAULT 'Groceries',
    brand TEXT,
    offer_type TEXT NOT NULL DEFAULT 'price', -- 'price', 'pct', 'save'
    value TEXT NOT NULL,
    expiry_date DATE,
    is_featured BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    festival_tag TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.offers ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active offers
CREATE POLICY "Allow public read access" 
ON public.offers FOR SELECT 
USING (is_active = true);

-- Allow full access for authenticated admins
CREATE POLICY "Allow admin write access" 
ON public.offers FOR ALL 
TO authenticated 
USING (true) 
WITH CHECK (true);

-- 2. Create Site Settings Table (Global Announcement Banner)
CREATE TABLE IF NOT EXISTS public.site_settings (
    key TEXT PRIMARY KEY,
    value JSONB NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read site settings" 
ON public.site_settings FOR SELECT 
USING (true);

CREATE POLICY "Allow admin write site settings" 
ON public.site_settings FOR ALL 
TO authenticated 
USING (true);

-- Seed initial site banner setting
INSERT INTO public.site_settings (key, value)
VALUES ('banner', '{"show": true, "text": "🌾 Pongal Celebration Deals! Special store discounts on grocery kits and oil packs this week! 🌾"}')
ON CONFLICT (key) DO NOTHING;
