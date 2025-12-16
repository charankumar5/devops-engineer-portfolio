import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    // REQUIRED for GitHub Pages
    base: '/devops-engineer-portfolio/', // 👈 CHANGE to your repo name

    server: {
      port: 3000,
      host: '0.0.0.0',
    },

    plugins: [react()],

    // ⚠️ WARNING: everything here is PUBLIC
    define: {
      'import.meta.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
