import {
  motion,
  useTransform,
  animate,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import { useEffect, useState } from "react";
import { RandomWord } from "../services/words.service";

const duration = 0.1;
const animationDuration = 5;
const translation = 80;
const opacities = [0, 0.2, 0.8, 1];
const transforms = [0, 0.25, 0.75, 1];
const translations = [-translation, -translation, translation, translation];

type Props = {
  words: RandomWord[];
  onComplete?: (id: RandomWord["id"]) => void;
};

export function WordRoulette({ words, onComplete }: Props) {
  const speed = useMotionValue(1);
  const scaledTime = useMotionValue(0);

  const [wordIndex, setWordIndex] = useState(0);
  const [wordIndex2, setWordIndex2] = useState(1);

  const [isRunning, setIsRunning] = useState(true);

  useAnimationFrame((_, delta) => {
    scaledTime.set(scaledTime.get() + delta * speed.get());
  });

  useEffect(() => {
    animate(speed, 0, {
      duration: animationDuration,
      ease: "circOut",
      onComplete: () => {
        setIsRunning(false);
        onComplete?.(words[wordIndex].id);
      },
    });
  }, [onComplete, speed, wordIndex, words]);

  const progress1 = useTransform(
    scaledTime,
    (t) => ((t / 1000) % duration) / duration,
  );

  const progress2 = useTransform(progress1, (p) => (p + 0.5) % 1);

  const opacity1 = useTransform(progress1, opacities, [0, 1, 1, 0]);
  const y1 = useTransform(progress1, transforms, translations);

  const opacity2 = useTransform(progress2, opacities, [0, 1, 1, 0]);
  const y2 = useTransform(progress2, transforms, translations);

  useEffect(() => {
    const id = progress1.on("change", (p) => {
      if (p >= 0.99) {
        setWordIndex((prev) => (prev + 2) % words.length);
      }
    });

    return () => id();
  }, [progress1, words.length]);

  useEffect(() => {
    const id = progress2.on("change", (p) => {
      if (p >= 0.99) {
        setWordIndex2((prev) => (prev + 2) % words.length);
      }
    });

    return () => id();
  }, [progress2, words.length]);

  const [finalStyle, setFinalStyle] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    return speed.on("change", (v) => {
      if (v <= 0.001) {
        setIsRunning(false);
        setFinalStyle({
          y: y1.get(),
          opacity: opacity1.get(),
        });
      }
    });
  }, [opacity1, speed, y1]);

  if (isRunning) {
    return (
      <div className="relative w-full">
        <motion.div
          className="text-big font-bold"
          style={{ position: "absolute", opacity: opacity1, y: y1, inset: 0 }}
        >
          {words[wordIndex].swearword}
        </motion.div>
        <motion.div
          className="text-big font-bold"
          style={{ position: "absolute", opacity: opacity2, y: y2, inset: 0 }}
        >
          {words[wordIndex2].swearword}
        </motion.div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      <span
        style={{ transform: `translateY(${finalStyle.y}px)` }}
        className="inset-0 absolute text-big font-bold"
      >
        {words[wordIndex].swearword}
      </span>
    </div>
  );
}
