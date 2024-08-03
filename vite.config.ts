import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

enum MODE {
  DEV = "development",
  PROD = "production",
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const generatedScopedName = mode === MODE.DEV ? "[folder]--[local]-[hash:base65:5]" : "[local]-[hash:base65:5]";

  return {
    plugins: [
      react(),
      svgr({
        svgrOptions: {
          exportType: "named",
          ref: true,
        },
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    css: {
      modules: {
        generatedScopedName,
        localsConvention: "camelCase",
      },
    },
  };
});
