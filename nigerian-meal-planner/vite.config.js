import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // Load env from project root (not src/)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    root: '.',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    },
    server: {
      port: 5173,
      open: true,
    },
    define: {
      'import.meta.env.VITE_EDAMAM_APP_ID': JSON.stringify(env.VITE_EDAMAM_APP_ID),
      'import.meta.env.VITE_EDAMAM_APP_KEY': JSON.stringify(env.VITE_EDAMAM_APP_KEY),
      'import.meta.env.VITE_YOUTUBE_API_KEY': JSON.stringify(env.VITE_YOUTUBE_API_KEY),
    },
  };
});
