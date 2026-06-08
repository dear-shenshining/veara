import type { NextConfig } from "next";
import path from "path";

const projectRoot = path.join(__dirname);

const nextConfig: NextConfig = {
  reactStrictMode: false,
  outputFileTracingRoot: projectRoot,
  turbopack: {
    root: projectRoot,
  },
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  // 合并默认 watchOptions，仅加大防抖，不启用 poll
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        aggregateTimeout: 1000,
      };
    }
    return config;
  },
};

export default nextConfig;
