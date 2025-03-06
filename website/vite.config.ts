import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8101,
    base: '/deepracer-menu/',
  },
  build: {
    rollupOptions: {
      input: 'deepracer-menu.html#/deepracer-menu',
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  preview: {
    base: '/deepracer-menu/', // Change this to your desired base URL
  },
});
