import { useState } from "react";
import { Word } from "../services/words/types";
import { RecordHome } from "../components/RecordHome";
import { RecordRecording } from "../components/RecordRecording";
import { RecordListen } from "../components/RecordListen";
import { RecordSave } from "../components/RecordSave";
import { RecordExplain } from "../components/RecordExplain";

type Props = {
  word: Word;
};

type InternalStep = "intro" | "recording" | "explain" | "listen" | "save";

export type InternalStepProps = {
  word: Word;
  setInternalStep: (step: InternalStep) => void;
};

export function RecordScreen({ word }: Props) {
  const [internalStep, setInternalStep] = useState<InternalStep>("intro");

  switch (internalStep) {
    case "intro":
      return <RecordHome word={word} setInternalStep={setInternalStep} />;
    case "recording":
      return <RecordRecording word={word} setInternalStep={setInternalStep} />;
    case "explain":
      return <RecordExplain word={word} setInternalStep={setInternalStep} />;
    case "listen":
      return <RecordListen word={word} setInternalStep={setInternalStep} />;
    case "save":
      return <RecordSave word={word} setInternalStep={setInternalStep} />;
  }
}
