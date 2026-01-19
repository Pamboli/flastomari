import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

const STEPS = ["home", "roulette", "word", "record", "regards"] as const;
type Step = (typeof STEPS)[number];

type StepContextValue = {
  step: Step;
  nextStep: () => void;
  reset: () => void;
  index: number;
};

const StepContext = createContext<StepContextValue | undefined>(undefined);

export function StepProvider({ children }: PropsWithChildren) {
  const [step, setStep] = useState<Step>(STEPS[0]);

  const stepIndex = STEPS.indexOf(step);

  const nextStep = () => {
    setStep((current) => {
      const index = STEPS.indexOf(current);
      return STEPS[index + 1] ?? STEPS[0];
    });
  };

  const reset = () => setStep(STEPS[0]);

  const value = useMemo(
    () => ({ step, nextStep, reset, index: stepIndex }),
    [step]
  );

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
}

export function useStep() {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStep must be used within a StepProvider");
  }
  return context;
}
