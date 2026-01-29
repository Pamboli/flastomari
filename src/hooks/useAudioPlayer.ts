import { useState, useRef, useEffect, useCallback } from "react";
import { appDataDir, join } from "@tauri-apps/api/path";
import { readFile } from "@tauri-apps/plugin-fs";

type PlayFromAppDataProps = {
  fileName: string | "temporal";
  isPublic: boolean;
  audioType: "word" | "use";
};

type AudioPlayerHook = {
  playFromAppData: (
    props: PlayFromAppDataProps,
    onFinished?: () => void,
  ) => Promise<void>;
  stop: () => void;
  isPlaying: boolean;
};

export function useAudioPlayer(): AudioPlayerHook {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const isBlobUrl = useRef<boolean>(false);

  const playFromAppData = useCallback(
    async (
      { fileName, audioType, isPublic }: PlayFromAppDataProps,
      onFinished?: () => void,
    ): Promise<void> => {
      try {
        let audioUrl = "";

        if (isPublic) {
          audioUrl = `/recordings/${audioType === "use" ? "uses" : "descriptions"}/${fileName}`;
          isBlobUrl.current = false;
        } else {
          const baseDir = await appDataDir();

          const filePath =
            fileName === "temporal"
              ? await join(baseDir, "recordings", "temporal", "recording.wav")
              : await join(baseDir, "recordings", fileName);

          const bytes = await readFile(filePath);
          const blob = new Blob([new Uint8Array(bytes)], { type: "audio/*" });

          audioUrl = URL.createObjectURL(blob);
          isBlobUrl.current = true;
        }

        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.onended = null;
          URL.revokeObjectURL(audioRef.current.src);
        }

        const audio = new Audio(audioUrl);
        audioRef.current = audio;

        audio.onended = () => {
          setIsPlaying(false);
          if (isBlobUrl.current) URL.revokeObjectURL(audioUrl);
          onFinished?.();
        };

        setIsPlaying(true);
        await audio.play();
      } catch (error) {
        console.error("Error en useTauriV2Audio:", error);
        setIsPlaying(false);
      }
    },
    [],
  );

  const stop = useCallback((): void => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return { playFromAppData, stop, isPlaying };
}
