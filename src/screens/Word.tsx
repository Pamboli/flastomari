import { useEffect } from "react";
import { Word } from "../services/words/types";
import { useStep } from "../providers/StepProvider";
import { useAudioPlayer } from "../hooks/useAudioPlayer";
import { Settings } from "../services/Settings";

type Props = {
  word: Word;
};

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function WordScreen({ word }: Props) {
  const { use } = word;
  const { playFromAppData } = useAudioPlayer();
  const { setStep } = useStep();

  useEffect(() => {
    let isMounted = true;

    const runSequence = async () => {
      const recordEnabled = await Settings.getInstance().get(
        "recordingStepEnabled",
      );

      if (!isMounted) return;

      await wait(500);
      playFromAppData(
        { audioType: "word", isPublic: true, fileName: word.audio },
        async () => {
          if (!isMounted) return;

          await wait(1000);
          playFromAppData(
            { audioType: "use", isPublic: use.isPublic, fileName: use.audio },
            async () => {
              if (!isMounted) return;

              await wait(500);
              setStep({
                step: recordEnabled ? "record" : "regards",
                word,
              });
            },
          );
        },
      );
    };

    runSequence();

    return () => {
      isMounted = false;
    };
  }, [word, use, playFromAppData, setStep]);

  return (
    <div className="h-full flex flex-col relative">
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="font-bold text-[180px] leading-44">{word.swearword}</h1>
        <p className="text-uses">{word.description}</p>
      </div>
    </div>
  );
}
