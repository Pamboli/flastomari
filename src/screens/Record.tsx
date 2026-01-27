import { useState } from "react";
import { Word } from "../services/words/types";
import { RecordHome } from "../components/RecordHome";
import { RecordPrepare } from "../components/RecordPrepare";
import { RecordRecording } from "../components/RecordRecording";
import { RecordListen } from "../components/RecordListen";
import { RecordSave } from "../components/RecordSave";

type Props = {
  word: Word;
};

type InternalStep = "intro" | "prepare" | "recording" | "listen" | "save";

export type InternalStepProps = {
  word: Word;
  setInternalStep: (step: InternalStep) => void;
};

export function RecordScreen({ word }: Props) {
  const [internalStep, setInternalStep] = useState<InternalStep>("intro");

  switch (internalStep) {
    case "intro":
      return <RecordHome word={word} setInternalStep={setInternalStep} />;
    case "prepare":
      return <RecordPrepare word={word} setInternalStep={setInternalStep} />;
    case "recording":
      return <RecordRecording word={word} setInternalStep={setInternalStep} />;
    case "listen":
      return <RecordListen word={word} setInternalStep={setInternalStep} />;
    case "save":
      return <RecordSave word={word} setInternalStep={setInternalStep} />;
  }
}
