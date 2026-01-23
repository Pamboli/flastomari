import { WordRoulette } from "../components/WordRoulette";
import { useStep } from "../providers/StepProvider";
import { getWord, RandomWord } from "../services/words.service";

type Props = {
  words: RandomWord[];
};

export function Roulette({ words }: Props) {
  const { setStep } = useStep();

  async function handleRouletteComplete(id: RandomWord["id"]) {
    const word = await getWord(id);
    setStep({ step: "word", word });
  }

  return (
    <div className="w-full h-full justify-center items-center text-center flex flex-col">
      <WordRoulette onComplete={handleRouletteComplete} words={words} />
    </div>
  );
}
