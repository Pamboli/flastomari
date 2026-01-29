import { useKeyListener } from "../hooks/useKeyListener";
import { locale } from "../locale";
import { InternalStepProps } from "../screens/Record";
import { ActionText } from "./ActionText";

export function RecordExplain({ word, setInternalStep }: InternalStepProps) {
  useKeyListener((ev) => {
    if (ev.key === " ") {
      setInternalStep("listen");
    }
  });

  return (
    <div className="pt-24 h-full flex flex-col">
      <div className="flex-1 w-full">
        <h2 className="text-uses font-bold max-w-[70%]">
          {locale.record.success}
        </h2>
        <h1 className="font-bold text-big leading-56">{word.swearword}</h1>
        <p className="font-medium text-extra max-w-[70%]">
          {locale.record.next}
        </p>
      </div>
      <ActionText>
        <p className="text-center">{locale.record.pres_to_listen}</p>
      </ActionText>
    </div>
  );
}
