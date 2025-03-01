import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: isProd ? "export" : undefined,
  basePath: isProd ? "/website-v2" : undefined,
  assetPrefix: isProd ? "/website-v2" : undefined,
  trailingSlash: true,
};

export default nextConfig;
