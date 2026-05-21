import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_DATE__: JSON.stringify(
      new Date().toLocaleString('ca-ES', {
        day:   '2-digit',
        month: 'long',
        year:  'numeric',
        hour:  '2-digit',
        minute:'2-digit',
      })
    ),
  },
});
