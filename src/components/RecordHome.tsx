import { useKeyListener } from "../hooks/useKeyListener";
import { locale } from "../locale";
import { useStep } from "../providers/StepProvider";
import { InternalStepProps } from "../screens/Record";
import { ActionText } from "./ActionText";

export function RecordHome({ word, setInternalStep }: InternalStepProps) {
  const { setStep } = useStep();

  useKeyListener((ev) => {
    if (ev.key === " ") {
      setInternalStep("recording");
      return;
    }

    setStep({ step: "regards" });
  });

  return (
    <div className="pt-24 flex flex-col h-full">
      <h1 className="text-big font-bold uppercase">{locale.record.title}</h1>
      <h2 className="text-uses font-bold">{locale.record.description}</h2>
      <div className="flex-1 flex-col flex justify-center">
        <p className="font-bold text-extra">{locale.record.word_is}</p>
        <p className="font-bold text-uses uppercase">{word.swearword}</p>
        {!!word.defaultUse && (
          <p className="font-medium text-extra">
            {`${locale.record.example} “${word.description}”`}
          </p>
        )}
      </div>
      <div className="text-uses font-bold gap-4 flex flex-col justify-end items-center">
        <ActionText>
          <div className="text-center">
            <p className="font-bold text-uses">{locale.record.continue}</p>
            <p className="font-medium text-small">{locale.record.skip}</p>
          </div>
        </ActionText>
      </div>
    </div>
  );
}
