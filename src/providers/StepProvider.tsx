import { createContext, useContext, useMemo, useState } from "react";
import { HomeScreen } from "../screens/Home";
import { Roulette } from "../screens/Roulette";
import { MainLayout } from "../layout/MainLayout";
import { WordScreen } from "../screens/Word";
import { RandomWord, Word } from "../services/words/types";
import { RecordScreen } from "../screens/Record";
import { Regards } from "../screens/Regards";

type Step =
  | {
      step: "home" | "regards";
    }
  | {
      step: "roulette";
      words: RandomWord[];
    }
  | {
      step: "word" | "record";
      word: Word;
    };

type StepName = Step["step"];

type StepContextValue = {
  step: StepName;
  setStep: (step: Step) => void;
};

const StepContext = createContext<StepContextValue | undefined>(undefined);

export function StepProvider() {
  const [step, setStep] = useState<Step>({ step: "home" });

  const value = useMemo(() => ({ step: step.step, setStep }), [step]);

  function getStepScreen() {
    switch (step.step) {
      case "home":
        return <HomeScreen />;
      case "roulette":
        return <Roulette words={step.words} />;
      case "word":
        return <WordScreen word={step.word} />;
      case "record":
        return <RecordScreen word={step.word} />;
      case "regards":
        return <Regards />;
    }
  }

  return (
    <StepContext.Provider value={value}>
      <MainLayout>{getStepScreen()}</MainLayout>
    </StepContext.Provider>
  );
}

export function useStep() {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStep must be used within a StepProvider");
  }
  return context;
}
