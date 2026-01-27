import { useState, useRef, useEffect } from "react";
import { appDataDir, join } from "@tauri-apps/api/path";
import { readFile } from "@tauri-apps/plugin-fs";

type AudioPlayerHook = {
  playFromAppData: (
    fileName: string | "temporal",
    onFinished?: () => void,
  ) => Promise<void>;
  stop: () => void;
  isPlaying: boolean;
};

export function useAudioPlayer(): AudioPlayerHook {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playFromAppData = async (
    fileName: string | "temporal",
    onFinished?: () => void,
  ): Promise<void> => {
    try {
      const baseDir = await appDataDir();
      const filePath =
        fileName === "temporal"
          ? await join(baseDir, "recordings", "temporal", "recording.wav")
          : await join(baseDir, "recordings", fileName);

      const bytes = await readFile(filePath);
      const blob = new Blob([new Uint8Array(bytes)], { type: "audio/*" });
      const url = URL.createObjectURL(blob);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.onended = null;
        URL.revokeObjectURL(audioRef.current.src);
      }

      const audio = new Audio(url);
      audioRef.current = audio;

      audio.onended = () => {
        setIsPlaying(false);
        URL.revokeObjectURL(url);
        onFinished?.();
      };

      setIsPlaying(true);
      await audio.play();
    } catch (error) {
      console.error("Error en useTauriV2Audio:", error);
      setIsPlaying(false);
    }
  };

  const stop = (): void => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

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
