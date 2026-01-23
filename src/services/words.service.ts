import { getDb } from "./database";

export type RandomWord = {
  id: number;
  swearword: string;
};

export type WordUse = {
  id: number;
  use: string;
};

export type Word = RandomWord & {
  description?: string;
  uses: WordUse[];
};

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
        s.id,
        s.swearword,
        s.description,
        COALESCE(
          (
            SELECT
              json_group_array (
                CASE
                  WHEN su.id IS NOT NULL THEN json_object ('id', su.id, 'use', su.use_description)
                END
              )
            FROM
              swearword_uses su
            WHERE
              su.swearword_id = s.id
          ),
          '[]'
        ) as uses
      FROM
        swearwords s
      GROUP BY
        s.id
    `,
    [id],
  );

  return word[0];
}
