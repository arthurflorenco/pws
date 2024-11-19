import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // Necessário para imagens em exportações estáticas
  },
  /* config options here */
};

export default nextConfig;
