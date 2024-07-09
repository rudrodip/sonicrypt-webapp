import { drizzle, PostgresJsDatabase } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/lib/db/schema";
import { env } from "@/env.mjs";

declare global {
  // eslint-disable-next-line no-var
  var cachedDrizzle: PostgresJsDatabase<typeof schema>;
}

let dbInstance: PostgresJsDatabase<typeof schema>;
if (process.env.NODE_ENV === "production") {
  const db = postgres(env.DATABASE_URL, { prepare: false });
  dbInstance = drizzle(db, { schema });
} else {
  if (!global.cachedDrizzle) {
    const db = postgres(env.DATABASE_URL, { prepare: false });
    global.cachedDrizzle = drizzle(db, { schema });
  }
  dbInstance = global.cachedDrizzle;
}

export const db = dbInstance;
