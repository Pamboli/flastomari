import { useState } from "react";
import { InternalStepProps } from "../screens/Record";
import { locale } from "../locale";
import { MicrophoneIcon } from "../icons/MicrophoneIcon";
import { ActionText } from "./ActionText";
import { appDataDir, join } from "@tauri-apps/api/path";
import { startRecording, stopRecording } from "tauri-plugin-audio-recorder-api";
import { useKeyListener } from "../hooks/useKeyListener";

export function RecordRecording({ word, setInternalStep }: InternalStepProps) {
  const [isRecording, setIsRecording] = useState(false);

  const startAudioRecording = async () => {
    setIsRecording(true);

    try {
      const baseDir = await appDataDir();
      const recordingPath = await join(
        baseDir,
        "recordings",
        "temporal",
        "recording",
      );

      await startRecording({
        outputPath: recordingPath,
        quality: "high",
      });
    } catch (err) {
      setIsRecording(false);
      throw err;
    }
  };

  const handleStopRecording = async () => {
    await stopRecording();
    setIsRecording(false);
    setInternalStep("explain");
  };

  useKeyListener(() => {
    if (isRecording) {
      handleStopRecording();
    } else {
      startAudioRecording();
    }
  });

  return (
    <div className="pt-24 flex items-center gap-20 flex-col relative h-full">
      <h1 className="text-big font-bold uppercase">{word.swearword}</h1>
      <div className="text-uses font-bold text-background bg-text overflow-hidden w-2xl text-center rounded-4xl flex h-32 items-center">
        {isRecording && (
          <div className="bg-accent h-full w-auto aspect-square flex items-center justify-center">
            <MicrophoneIcon className="size-12 text-text" />
          </div>
        )}
        <p className="flex-1 text-extra">
          {isRecording
            ? locale.record.recording
            : locale.record.press_to_record}
        </p>
        <div />
      </div>
      <div className="flex-1 justify-center items-center text-center flex">
        <ActionText>
          <p className="font-bold text-uses">{locale.record.press_to_stop}</p>
        </ActionText>
      </div>
    </div>
  );
}
