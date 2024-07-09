import type { Config } from 'drizzle-kit';

export default {
  dialect: "postgresql",
  schema: "./src/lib/db/schema.ts",
  out: "drizzle/migrations",
  dbCredentials: {
    url: "postgres://postgres:postgres@localhost:5432/postgres"
  }
} satisfies Config;