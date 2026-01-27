import { useKeyListener } from "../hooks/useKeyListener";
import { locale } from "../locale";
import { InternalStepProps } from "../screens/Record";
import { ActionText } from "./ActionText";

export function RecordPrepare({ setInternalStep, word }: InternalStepProps) {
  useKeyListener(() => {
    setInternalStep("recording");
  });

  return (
    <div className="pt-24 flex flex-col gap-6 h-full">
      <h2 className="text-uses font-bold">{locale.record.word_is}</h2>
      <h1 className="text-big font-bold uppercase">{word.swearword}</h1>
      {!!word.use && (
        <p className="text-extra">{`${locale.record.example}"${word.use}"`}</p>
      )}
      <div className="flex-1 flex items-end justify-center">
        <ActionText>{locale.record.press_to_record}</ActionText>
      </div>
    </div>
  );
}
