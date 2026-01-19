import { locale } from "../locale";
import { useStep } from "../providers/StepProvider";
import { useKeyListener } from "../hooks/useKeyListener";

export function HomeScreen() {
  const { nextStep } = useStep();

  useKeyListener(nextStep);

  return (
    <div className="w-full h-full justify-center items-center text-center flex flex-col">
      <h1 className="text-big font-bold">{locale.home.main_screen}</h1>
      <h2 className="text-uses font-medium animate-pending">
        {locale.home.press_to_start}
      </h2>
    </div>
  );
}
