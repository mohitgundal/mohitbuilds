import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/project-06-folder/", // 👈 Add this line
  plugins: [react()],
});
