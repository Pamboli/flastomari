import { locale } from "../locale";
import { useStep } from "../providers/StepProvider";
import { useKeyListener } from "../hooks/useKeyListener";
import { useEffect, useState } from "react";
import { getRandomWords } from "../services/words/words.service";
import { RandomWord } from "../services/words/types";
import { SettingsModal } from "../components/SettingsModal";
import { Settings } from "../services/Settings";

export function HomeScreen() {
  const { setStep } = useStep();

  const [words, setWords] = useState<RandomWord[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    const getIsFirstTime = async () => {
      const isFirstTime = await Settings.getInstance().get("isFirstTime");
      setIsFirstTime(isFirstTime);
      setIsOpen(isFirstTime);
    };

    getIsFirstTime();
  }, []);

  useKeyListener((ev) => {
    if (isOpen) {
      return;
    }

    if (ev.key === " ") {
      if (words.length < 1) {
        return;
      }

      setStep({ step: "roulette", words });
    }

    if (ev.key === "c") {
      setIsOpen(true);
    }
  });

  useEffect(() => {
    async function getWords() {
      const words = await getRandomWords(10);
      setWords(words);
    }

    getWords();
  }, []);

  return (
    <>
      <div className="w-full h-full justify-center items-center text-center flex flex-col">
        <h1 className="text-big font-bold">{locale.home.main_screen}</h1>
        <h2 className="text-uses font-medium animate-pending">
          {locale.home.press_to_start}
        </h2>
      </div>
      <SettingsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isFirstTime={isFirstTime}
      />
    </>
  );
}
