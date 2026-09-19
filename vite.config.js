import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Baked-in public Supabase config — safe to commit (public key, not secret)
    'import.meta.env.VITE_SUPABASE_URL':          JSON.stringify('https://sxiyxzxiadjeslfcveac.supabase.co'),
    'import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY': JSON.stringify('sb_publishable_08tDnbIRcSm8-CpEAkTwfQ_jxwqwrI2'),
    'import.meta.env.VITE_SUPABASE_PROJECT_ID':   JSON.stringify('sxiyxzxiadjeslfcveac'),
  },
})
