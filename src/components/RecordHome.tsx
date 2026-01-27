import { useKeyListener } from "../hooks/useKeyListener";
import { locale } from "../locale";
import { useStep } from "../providers/StepProvider";
import { InternalStepProps } from "../screens/Record";
import { ActionText } from "./ActionText";

export function RecordHome({ word, setInternalStep }: InternalStepProps) {
  const { setStep } = useStep();

  useKeyListener((ev) => {
    if (ev.key === " ") {
      setInternalStep("prepare");
      return;
    }

    setStep({ step: "regards" });
  });

  return (
    <div className="pt-36 flex flex-col gap-6 h-full">
      <h1 className="text-big font-bold uppercase">{locale.record.title}</h1>
      <h2 className="text-uses font-bold">{locale.record.description}</h2>
      <p className="text-extra">{locale.record.example + word.use}</p>
      <div className="text-uses font-bold gap-4 flex flex-1 flex-col justify-end items-center">
        <ActionText>{locale.record.continue}</ActionText>
        <p className="text-5xl bg-text rounded-2xl text-background px-8 py-4">
          {locale.record.skip}
        </p>
      </div>
    </div>
  );
}
