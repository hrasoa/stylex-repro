import { join } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        configFile: true,
      },
    }),
  ],
  resolve: {
    alias: [
      {
        find: "~",
        replacement: join(__dirname, "src"),
      },
    ],
  },
});
