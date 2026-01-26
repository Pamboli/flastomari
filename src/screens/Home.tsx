import { locale } from "../locale";
import { useStep } from "../providers/StepProvider";
import { useKeyListener } from "../hooks/useKeyListener";
import { useEffect, useState } from "react";
import { getRandomWords } from "../services/words/words.service";
import { RandomWord } from "../services/words/types";

export function HomeScreen() {
  const { setStep } = useStep();

  const [words, setWords] = useState<RandomWord[]>([]);

  useKeyListener(() => {
    if (words.length < 1) {
      return;
    }
    setStep({ step: "roulette", words });
  });

  useEffect(() => {
    async function getWords() {
      const words = await getRandomWords(10);
      setWords(words);
    }

    getWords();
  }, []);

  return (
    <div className="w-full h-full justify-center items-center text-center flex flex-col">
      <h1 className="text-big font-bold">{locale.home.main_screen}</h1>
      <h2 className="text-uses font-medium animate-pending">
        {locale.home.press_to_start}
      </h2>
    </div>
  );
}
