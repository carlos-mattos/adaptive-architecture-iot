import pg from "pg";

const client = new pg.Client({
  connectionString: String(process.env.DATABASE_URL),
});

export default client;
