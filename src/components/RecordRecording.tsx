import { useEffect, useState } from "react";
import { InternalStepProps } from "../screens/Record";
import { locale } from "../locale";
import { MicrophoneIcon } from "../icons/MicrophoneIcon";
import { ActionText } from "./ActionText";
import { appDataDir, join } from "@tauri-apps/api/path";
import { startRecording, stopRecording } from "tauri-plugin-audio-recorder-api";
import { useKeyListener } from "../hooks/useKeyListener";
import {
  isRecordingInProgress,
  setRecordingInProgress,
} from "../services/recording.service";

export function RecordRecording({ word, setInternalStep }: InternalStepProps) {
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const startAudioRecording = async () => {
      if (isRecordingInProgress()) return;
      setRecordingInProgress(true);

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

        if (!cancelled) {
          setIsRecording(true);
        }
      } catch (err) {
        setRecordingInProgress(false);
        throw err;
      }
    };

    startAudioRecording();

    return () => {
      cancelled = true;
      if (isRecordingInProgress()) {
        stopRecording().catch(() => {});
        setRecordingInProgress(false);
      }
    };
  }, []);

  const handleStopRecording = async () => {
    await stopRecording();
    setIsRecording(false);
    setInternalStep("listen");
  };

  // const handleStartRecording = async () => {};

  useKeyListener(() => {
    if (!isRecording) {
      return;
    }

    handleStopRecording();
  });

  return (
    <div className="pt-36 flex items-center gap-20 flex-col relative h-full">
      <h1 className="text-big font-bold uppercase">{word.swearword}</h1>
      <div className="text-uses font-bold text-background bg-text overflow-hidden w-2xl text-center rounded-4xl flex h-32 items-center">
        {isRecording && (
          <div className="bg-accent h-full w-auto aspect-square flex items-center justify-center">
            <MicrophoneIcon className="size-12 text-text" />
          </div>
        )}
        <p className="flex-1">
          {isRecording ? locale.record.recording : locale.common.wait}
        </p>
        <div />
      </div>
      {isRecording && (
        <div className="flex-1 justify-center items-center flex">
          <ActionText>{locale.record.press_to_stop}</ActionText>
        </div>
      )}
    </div>
  );
}
