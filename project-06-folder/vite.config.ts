import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Note-Taking-App/",
  plugins: [react()],
});
