import { getDb } from "./database";

export type RandomWord = {
  id: number;
  swearword: string;
};

export type Word = RandomWord & {};

export async function getRandomWords(amount: number) {
  const db = await getDb();

  const rows = await db.select<RandomWord[]>(
    "SELECT id, swearword FROM swearwords ORDER BY RANDOM() LIMIT $1;",
    [amount],
  );

  return rows;
}
