import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // Fuerza rutas relativas para que funcione en GitHub Pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".js", ".jsx", ".json"], // Asegura la resolución de extensiones
  },
  esbuild: {
    loader: "jsx", // Fuerza al compilador a procesar la sintaxis JSX de forma estricta
    include: /src\/.*\.jsx?$/, 
  },
});