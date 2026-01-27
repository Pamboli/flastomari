import { useEffect } from "react";
import { locale } from "../locale";
import { useStep } from "../providers/StepProvider";

export function Regards() {
  const { setStep } = useStep();

  useEffect(() => {
    setTimeout(() => setStep({ step: "home" }), 2000);
  }, [setStep]);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <h1 className="text-big font-bold">{locale.regards.thanks}</h1>
    </div>
  );
}
