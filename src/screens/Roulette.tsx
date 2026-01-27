import { WordRoulette } from "../components/WordRoulette";
import { useStep } from "../providers/StepProvider";
import { RandomWord } from "../services/words/types";
import { getWord } from "../services/words/words.service";

type Props = {
  words: RandomWord[];
};

export function Roulette({ words }: Props) {
  const { setStep } = useStep();

  async function handleRouletteComplete(id: RandomWord["id"]) {
    const [word] = await Promise.all([
      getWord(id),
      new Promise((res) => setTimeout(res, 1000)),
    ]);
    setStep({ step: "word", word });
  }

  return (
    <div className="w-full h-full justify-center items-center text-center flex flex-col @container">
      <WordRoulette
        words={words}
        loops={4}
        onComplete={handleRouletteComplete}
      />
    </div>
  );
}
