import { WordRoulette } from "../components/WordRoulette";
import { RandomWord } from "../services/words.service";

type Props = {
  words: RandomWord[];
};

export function Roulette({ words }: Props) {
  const nameWords = words.map((w) => w.swearword);

  if (words.length < 1) {
    return null;
  }

  return (
    <div className="w-full h-full justify-center items-center text-center flex flex-col">
      <WordRoulette words={nameWords} />
    </div>
  );
}
