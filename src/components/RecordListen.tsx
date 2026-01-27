import { useState } from "react";
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import { useKeyListener } from "../hooks/useKeyListener";
import { SpeakerIcon } from "../icons/SpeakerIcon";
import { locale } from "../locale";
import { InternalStepProps } from "../screens/Record";
import { ActionText } from "./ActionText";

export function RecordListen({ word, setInternalStep }: InternalStepProps) {
  const { isPlaying, playFromAppData } = useAudioPlayer();

  const [hasFinished, setHasFinished] = useState(false);

  useKeyListener((ev) => {
    if (ev.key === " ") {
      if (isPlaying) {
        return;
      }

      playFromAppData("temporal", () => setHasFinished(true));
    }

    if (ev.key === "r") {
      if (!hasFinished) return;
      setInternalStep("prepare");
    }

    if (ev.key === "Enter") {
      setInternalStep("save");
    }
  });

  return (
    <div className="pt-24 flex items-center gap-20 flex-col relative h-full">
      <h1 className="text-big font-bold uppercase">{word.swearword}</h1>
      <div className="text-uses font-bold text-background bg-text overflow-hidden w-auto text-center rounded-4xl flex h-32 items-center text-nowrap">
        {isPlaying && (
          <div className="bg-blue-300 h-full w-auto aspect-square flex items-center justify-center">
            <SpeakerIcon className="size-12 text-text" />
          </div>
        )}
        <p className="flex-1 px-6">
          {isPlaying ? locale.record.playing : locale.record.press_to_play}
        </p>
        <div />
      </div>
      {hasFinished && (
        <div className="flex-1 flex-col justify-center items-center flex">
          <ActionText>{locale.record.continue}</ActionText>
          <ActionText>{locale.record.press_repeat}</ActionText>
        </div>
      )}
    </div>
  );
}
