import { getDb } from "../database";
import { RandomWord, Word } from "./types";

export async function getRandomWords(amount: number) {
  const db = await getDb();

  const rows = await db.select<RandomWord[]>(
    "SELECT id, swearword FROM swearwords ORDER BY RANDOM() LIMIT $1;",
    [amount],
  );

  return rows;
}

export async function getWord(id: RandomWord["id"]) {
  const db = await getDb();

  const word = await db.select<Word[]>(
    `
      SELECT
        id,
        swearword,
        description,
        use
      FROM
        swearwords
      WHERE id = $1;
    `,
    [id],
  );

  return word[0];
}
