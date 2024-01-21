import pg from "pg";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

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

export async function getMeal(slug) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const result = await db.query("SELECT * FROM meals WHERE slug = $1", [slug]);
  return result.rows[0];
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  const result = await db.query(
    `
       INSERT INTO meals 
       VALUES (
          DEFAULT, 
          $1,
          $2,
          $3,
          $4,
          $5,
          $6,
          $7
       )
    `,
    [
      meal.slug,
      meal.title,
      meal.image,
      meal.summary,
      meal.instructions,
      meal.creator,
      meal.creator_email,
    ]
  );
}
