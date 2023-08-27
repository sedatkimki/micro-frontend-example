import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        product: "http://localhost:5003/assets/remoteEntry.js",
        search: "http://localhost:5004/assets/remoteEntry.js",
        checkout: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: [
        "react",
        "react-dom",
        "@chakra-ui/react",
        "@emotion/react",
        "@emotion/styled",
        "framer-motion",
      ],
    }),
  ],
  build: {
    moduleReload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
