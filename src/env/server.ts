import { StandardSchemaV1, createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(["development", "production"]),
    DATABASE_URL: z.string().url(),
  },
  onValidationError: (issues: readonly StandardSchemaV1.Issue[]) => {
    console.error("❌ Invalid environment variables:", issues);
    process.exit(1);
  },

  /**
   * Makes it so that empty strings are treated as undefined. `SOME_VAR: z.string()` and
   * `SOME_VAR=''` will throw an error.
   */
  emptyStringAsUndefined: true,
  runtimeEnv: process.env,
});
