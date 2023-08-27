import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "search",
      filename: "remoteEntry.js",
      exposes: {
        "./Search": "./src/components/Search",
        "./searchStore": "./src/store",
      },
      shared: [
        "react",
        "react-dom",
        "@chakra-ui/react",
        "@emotion/react",
        "@emotion/styled",
        "framer-motion",
        "react-icons",
        "jotai",
      ],
    }),
  ],
  build: {
    target: "esnext",
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
