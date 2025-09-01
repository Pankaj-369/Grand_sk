# Netlify Deployment Setup for The Grand SK Cafe

## Environment Variables Required

Add these environment variables in your Netlify dashboard:

### 🔧 Netlify Dashboard → Site Settings → Environment Variables

**Variable 1:**
- **Key:** `VITE_SUPABASE_URL`
- **Value:** `https://fzzpkdaaewrpaaaaudmh.supabase.co`

**Variable 2:**
- **Key:** `VITE_SUPABASE_ANON_KEY`
- **Value:** [Your Supabase Anon Key - get this from your Supabase Dashboard]

## 📍 How to Get Your Supabase Anon Key

1. Go to your Supabase Dashboard
2. Select your project
3. Go to **Settings** → **API**
4. Copy the **anon/public** key (not the service_role key)
5. Paste it as the value for `VITE_SUPABASE_ANON_KEY`

## 🔐 Supabase Admin User Setup

You need to create an admin user in your Supabase Dashboard:

1. Go to **Authentication** → **Users**
2. Click **"Add user"**
3. **Email:** `nitesh@grandsk.com`
4. **Password:** `chhabra5173`
5. Click **"Create user"**

## 🚀 After Adding Environment Variables

1. Go to Netlify Dashboard → Deploys
2. Click **"Trigger deploy"** → **"Deploy site"**
3. Wait for deployment to complete
4. Your site should now work properly!

## ✅ Login Credentials (Same as Before)

- **Username:** `nitesh`
- **Password:** `chhabra5173`

## 🔍 Troubleshooting

If the site still shows blank:
1. Check browser console for errors
2. Verify environment variables are set correctly
3. Ensure Supabase user is created with correct credentials
4. Try a hard refresh (Ctrl+F5 or Cmd+Shift+R)

The site will work offline without Supabase, but admin login and reservation storage require the environment variables to be properly configured.