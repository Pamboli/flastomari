import { useState } from "react";
import { Word } from "../services/words/types";
import { useKeyListener } from "../hooks/useKeyListener";
import { useStep } from "../providers/StepProvider";
import { locale } from "../locale";
import { ActionText } from "../components/ActionText";

type Props = {
  word: Word;
};

export function WordScreen({ word }: Props) {
  const [allowToContinue, setAllowToContinue] = useState(false);

  const { setStep } = useStep();

  setTimeout(() => setAllowToContinue(true), 3000);

  useKeyListener(() => {
    if (!allowToContinue) {
      return;
    }

    setStep({ step: "record", word });
  });

  return (
    <div className="py-36 h-full flex flex-col relative">
      <h1 className="font-bold text-big">{word.swearword}</h1>
      <h2 className="text-extra font-bold italic">Extra?</h2>
      <p className="text-extra font-medium">{word.description}</p>
      <div className="flex-1" />
      <p className="text-uses font-medium">{word.use}</p>
      {allowToContinue && (
        <div className="absolute inset-x-0 bottom-4 text-center">
          <ActionText>{locale.common.continue}</ActionText>
        </div>
      )}
    </div>
  );
}
