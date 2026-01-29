import { locale } from "../locale";
import { useStep } from "../providers/StepProvider";
import { useKeyListener } from "../hooks/useKeyListener";
import { useEffect, useState } from "react";
import { getRandomWords } from "../services/words/words.service";
import { RandomWord } from "../services/words/types";
import { SettingsModal } from "../components/SettingsModal";
import { Settings } from "../services/Settings";
import { ActionText } from "../components/ActionText";

export function HomeScreen() {
  const { setStep } = useStep();

  const [words, setWords] = useState<RandomWord[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState(false);

  useEffect(() => {
    const getSettings = async () => {
      const isFirstTime = await Settings.getInstance().get("isFirstTime");
      setIsFirstTime(isFirstTime);
      setIsOpen(isFirstTime);
    };

    getSettings();
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
      <div className="pt-24 w-full h-full justify-between items-center flex flex-col">
        <h1 className="text-big font-bold text-center">
          {locale.home.main_screen}
        </h1>
        <ol className="w-full text-extra list-decimal flex flex-col gap-4">
          <li>{locale.home.rule1}</li>
          <li>{locale.home.rule2}</li>
          <li>{locale.home.rule3}</li>
        </ol>
        {words.length > 0 && (
          <ActionText>{locale.home.press_to_start}</ActionText>
        )}
      </div>
      <SettingsModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isFirstTime={isFirstTime}
      />
    </>
  );
}
