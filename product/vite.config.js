import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "product",
      filename: "remoteEntry.js",
      exposes: {
        "./ProductList": "./src/components/ProductList/ProductList",
      },
      remotes: {
        checkout: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: [
        "react",
        "react-dom",
        "@chakra-ui/react",
        "@emotion/react",
        "@emotion/styled",
        "framer-motion",
        "axios",
        "react-icons",
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
