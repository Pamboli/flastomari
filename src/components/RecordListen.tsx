import { useState } from "react";
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import { useKeyListener } from "../hooks/useKeyListener";
import { SpeakerIcon } from "../icons/SpeakerIcon";
import { locale } from "../locale";
import { InternalStepProps } from "../screens/Record";
import { ActionText } from "./ActionText";
import { useStep } from "../providers/StepProvider";

export function RecordListen({ word, setInternalStep }: InternalStepProps) {
  const { isPlaying, playFromAppData } = useAudioPlayer();
  const { setStep } = useStep();
  const [hasFinished, setHasFinished] = useState(false);

  useKeyListener((ev) => {
    if (ev.key === " ") {
      if (isPlaying) {
        return;
      }

      playFromAppData(
        {
          audioType: "use",
          fileName: "temporal",
          isPublic: false,
        },
        () => setHasFinished(true),
      );
    }

    if (ev.key === "r") {
      if (!hasFinished) return;
      setInternalStep("recording");
    }

    if (ev.key === "Enter") {
      setInternalStep("save");
    }

    if (ev.key === "d") {
      if (!hasFinished) return;
      setStep({ step: "regards" });
    }
  });

  return (
    <div className="pt-24 flex items-center gap-20 flex-col relative h-full">
      <h2 className="font-bold text-uses">{locale.record.record}</h2>
      <h1 className="text-big font-bold uppercase">{word.swearword}</h1>
      <div className="text-uses font-bold text-background bg-text overflow-hidden w-auto text-center rounded-4xl flex h-32 items-center text-nowrap">
        {isPlaying && (
          <div className="bg-cyan-400 h-full w-auto aspect-square flex items-center justify-center">
            <SpeakerIcon className="size-12 text-text" />
          </div>
        )}
        <p className="flex-1 px-6 text-extra">
          {isPlaying ? locale.record.playing : locale.record.pres_to_listen}
        </p>
        <div />
      </div>
      {hasFinished && (
        <div className="flex-1 flex-col justify-center items-center flex">
          <ActionText>
            <div className="text-center">
              <p className="font-bold text-uses">
                {locale.record.press_to_save}
              </p>
              <p className="mt-4 text-small font-medium">
                {locale.record.press_repeat}
              </p>
              <p className="mt-4 text-small font-medium">
                {locale.record.press_discard}
              </p>
            </div>
          </ActionText>
        </div>
      )}
    </div>
  );
}
