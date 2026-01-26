import { useMotionValueEvent, useTime, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { RandomWord } from "../services/words/types";

const DURATION = 5000;

type Props = {
  words: RandomWord[];
  loops?: number;
  onComplete?: (id: RandomWord["id"]) => void;
};

export function WordRoulette({ words, loops = 1, onComplete }: Props) {
  const time = useTime();
  const hasFinished = useRef(false);

  const [currentWord, setCurrentWord] = useState(words[0]);

  const totalSteps = words.length * loops;

  const stepIndex = useTransform(time, [0, DURATION * 0.8], [0, totalSteps], {
    clamp: true,
    ease: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  });

  useMotionValueEvent(stepIndex, "change", (latest) => {
    if (hasFinished.current) return;

    const isFinished = latest >= totalSteps;

    const adjustedLatest = isFinished ? totalSteps - 0.01 : latest;
    const wordIdx = Math.floor(adjustedLatest) % words.length;

    const finalWord = words[wordIdx];
    setCurrentWord(finalWord);

    if (isFinished) {
      hasFinished.current = true;
      onComplete?.(finalWord.id);
    }
  });

  return (
    <span key={currentWord.id} className="text-big font-bold">
      {currentWord.swearword}
    </span>
  );
}
