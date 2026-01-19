import { MainLayout } from "../layout/MainLayout";
import { useStep } from "../providers/StepProvider";
import { HomeScreen } from "../screens/Home";
import { Roulette } from "../screens/Roulette";

export function StepRenderer() {
  const { step } = useStep();

  function getScreen() {
    switch (step) {
      case "home":
        return <HomeScreen />;
      case "roulette":
        return <Roulette />;
      case "word":
        return "Word";
      case "record":
        return "Record";
      case "regards":
        return "Regards";
    }
  }

  return <MainLayout>{getScreen()}</MainLayout>;
}
