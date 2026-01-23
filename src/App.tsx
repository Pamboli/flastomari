import { useEffect } from "react";
import "./App.css";
import { StepProvider } from "./providers/StepProvider";
import { getAppPath } from "./utils";

function App() {
  useEffect(() => {
    async function run() {
      const path = await getAppPath();
      console.info("App Path:", path);
    }
    run();
  }, []);

  return <StepProvider />;
}

export default App;
