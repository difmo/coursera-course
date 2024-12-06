import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["slick-carousel/slick/slick.css", "slick-carousel/slick/slick-theme.css"],
  },
});
