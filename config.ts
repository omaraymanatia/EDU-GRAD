import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?"
  );
}

// Your database connection logic here
