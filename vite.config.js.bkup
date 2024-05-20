import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["fsevents"],
  },
  build: {
    rollupOptions: {
      external: ["fsevents"], // Treat fsevents as an external dependency
    },
  },
  server: {
    port: 3000,
  },
});
