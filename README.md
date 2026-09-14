# 🛒 Saraswathi Super Market Web Application

A modern, fast, responsive web application for Saraswathi Super Market with Supabase Authentication, live offer publishing, festival banner settings, and Vercel deployment readiness.

---

## 🚀 Features

- **Supabase Authentication**: Secure Email & Password staff login with persistent sessions using `@supabase/supabase-js`.
- **Admin Dashboard**: Manage weekly grocery offers, brand tags, categories, discounts, expiry dates, and global announcement banners.
- **Cloud Database Sync**: Real-time sync with Supabase `offers` and `site_settings` tables (with seamless local storage fallback).
- **Vercel Ready**: Preconfigured with `vercel.json` SPA routing rewrites and production security headers.

---

## 🛠️ Local Setup & Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up Environment Variables**:
   Create a `.env` file in the project root (copy from `.env.example`):
   ```env
   VITE_SUPABASE_URL=https://your-project-id.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key-here
   VITE_ADMIN_USERNAME=admin
   VITE_ADMIN_PASSWORD=saraswati2026
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```

---

## ⚡ Supabase Setup Instructions

1. **Create a Supabase Project**:
   Sign up / Log in to [Supabase](https://supabase.com) and create a new project.

2. **Execute Database Schema**:
   Go to your Supabase SQL Editor and run the SQL schema script provided in `supabase_schema.sql`.

3. **Enable Email Authentication**:
   In Supabase Dashboard under **Authentication > Providers**, ensure **Email** is enabled.

4. **Copy API Keys**:
   Get your Project URL and Anon Key from **Settings > API** and add them to your `.env` file or Vercel Environment Variables.

---

## ☁️ Deploying to Vercel

1. **Push your repository** to GitHub, GitLab, or Bitbucket.
2. Log in to [Vercel](https://vercel.com) and click **Add New > Project**.
3. Import your Saraswathi repository.
4. Framework Preset: **Vite**.
5. In **Environment Variables**, add:
   - `VITE_SUPABASE_URL`: Your Supabase Project URL
   - `VITE_SUPABASE_ANON_KEY`: Your Supabase Anon Key
   - `VITE_ADMIN_USERNAME`: `admin` (or custom fallback username)
   - `VITE_ADMIN_PASSWORD`: `saraswati2026` (or custom fallback password)
6. Click **Deploy**. Vercel will automatically build and publish your site with SPA routing support configured in `vercel.json`.
