import { getDb } from "../database";
import { RandomWord, Word } from "./types";

type WordUseDB = {
  id: number;
  swearword_id: string;
  is_default: 0 | 1;
  audio: string;
};

type WordDB = {
  id: number;
  swearword: string;
  description?: string;
  use?: string;
  audio: string;
};

export async function getRandomWords(amount: number) {
  const db = await getDb();

  const rows = await db.select<RandomWord[]>(
    "SELECT id, swearword FROM swearwords ORDER BY RANDOM() LIMIT $1;",
    [amount],
  );

  return rows;
}

export async function getWord(wordId: RandomWord["id"]) {
  const db = await getDb();

  const word = await db.select<WordDB[]>(
    `
      SELECT
        id,
        swearword,
        use,
        description,
        audio
      FROM
        swearwords
      WHERE id = $1;
    `,
    [wordId],
  );

  const useRow = await db.select<WordUseDB[]>(
    "SELECT id, swearword_id, is_default, audio FROM swearword_uses WHERE swearword_id = $1 ORDER BY RANDOM() LIMIT 1",
    [wordId],
  );

  const { id, swearword, description, audio, use } = word[0];

  const finalWord: Word = {
    id,
    swearword,
    description,
    defaultUse: use,
    audio,
    use: {
      audio:
        useRow[0].is_default === 0 ? `${useRow[0].id}.wav` : useRow[0].audio,
      id: useRow[0].id,
      isPublic: useRow[0].is_default === 1,
    },
  };

  return finalWord;
}
