import { useEffect } from "react";
import { locale } from "../locale";
import { InternalStepProps } from "../screens/Record";
import { saveTemporaryRecord } from "../services/recording.service";
import { useStep } from "../providers/StepProvider";

export function RecordSave({ word }: InternalStepProps) {
  const { setStep } = useStep();

  useEffect(() => {
    const saveRecord = async () => {
      await Promise.all([
        saveTemporaryRecord(word.id),
        new Promise((res) => setTimeout(res, 1000)),
      ]);

      setStep({ step: "regards" });
    };

    saveRecord();
  }, [setStep, word.id]);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <h1 className="text-big font-bold animate-pending uppercase">
        {locale.record.saving}
      </h1>
    </div>
  );
}
