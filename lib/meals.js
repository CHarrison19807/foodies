import pg from "pg";

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  port: 5432,
  database: "Foodies",
  password: "postgres",
});

db.connect();

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const result = await db.query("SELECT * FROM meals");
  return result.rows;
}

getMeals();
