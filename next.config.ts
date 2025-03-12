import type { NextConfig } from "next";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "@/env/server.ts";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
