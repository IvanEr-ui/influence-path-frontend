import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/1_App"),
      "@pages": path.resolve(__dirname, "src/2_Pages"),
      "@widgets": path.resolve(__dirname, "src/3_Widgets"),
      "@features": path.resolve(__dirname, "src/4_Features"),
      "@entities": path.resolve(__dirname, "src/5_Entities"),
      "@shared": path.resolve(__dirname, "src/6_Shared"),
    },
  },

  plugins: [react()],
})
