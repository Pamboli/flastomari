import { appDataDir, join } from "@tauri-apps/api/path";
import { getDb } from "./database";
import { Word } from "./words/types";
import { rename } from "@tauri-apps/plugin-fs";

export async function saveTemporaryRecord(wordId: Word["id"]) {
  const db = await getDb();

  const baseDir = await appDataDir();

  const tempPath = await join(
    baseDir,
    "recordings",
    "temporal",
    "recording.wav",
  );

  try {
    await db.execute("BEGIN");

    const result = await db.execute(
      `
        INSERT INTO
          swearword_uses (swearword_id, is_default, audio)
        VALUES
          ($1, 0, 'null')        
      `,
      [wordId],
    );

    const recordId = result.lastInsertId;

    if (!recordId) {
      throw new Error("Couldn't get the inserted ID");
    }

    const finalPath = await join(baseDir, "recordings", `${recordId}.wav`);

    await rename(tempPath, finalPath);

    await db.execute("COMMIT");

    return recordId;
  } catch (error) {
    await db.execute("ROLLBACK");
    throw error;
  }
}
