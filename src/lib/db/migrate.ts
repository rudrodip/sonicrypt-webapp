import { migrate } from "drizzle-orm/postgres-js/migrator";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "@/env.mjs";

const databaseUrl = drizzle(
  postgres(`${env.DATABASE_URL}`, {
    max: 1,
  }),
);

const main = async () => {
  try {
    await migrate(databaseUrl, { migrationsFolder: "drizzle/migrations" });
    console.log("Migration complete");
  } catch (error) {
    console.log(error);
  }
  process.exit(0);
};

main();
