import { useState } from "react";
import { Word } from "../services/words/types";
import { useKeyListener } from "../hooks/useKeyListener";
import { useStep } from "../providers/StepProvider";
import { locale } from "../locale";

type Props = {
  word: Word;
};

export function WordScreen({ word }: Props) {
  const [allowReturnToHome, setAllowReturnToHome] = useState(false);

  const { setStep } = useStep();

  setTimeout(() => setAllowReturnToHome(true), 3000);

  useKeyListener(() => {
    if (!allowReturnToHome) {
      return;
    }

    setStep({ step: "home" });
  });

  return (
    <div className="py-36 h-full flex flex-col relative">
      <h1 className="font-bold text-big">{word.swearword}</h1>
      <h2 className="text-extra font-bold italic">Extra?</h2>
      <p className="text-extra font-medium">{word.description}</p>
      <p className="text-uses font-medium mt-auto">{word.use}</p>
      {allowReturnToHome && (
        <p className="text-uses font-medium animate-pending absolute inset-x-0 bottom-4 text-center">
          {locale.common.return_home}
        </p>
      )}
    </div>
  );
}
