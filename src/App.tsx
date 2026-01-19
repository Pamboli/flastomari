import "./App.css";
import { StepRenderer } from "./components/StepRenderer";
import { StepProvider } from "./providers/StepProvider";

function App() {
  return (
    <StepProvider>
      <StepRenderer />
    </StepProvider>
  );
}

export default App;
