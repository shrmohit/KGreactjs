import { useState } from "react";
import "./App.css";
import CalculatorButtons from "./Components/calculatorButtons";

function App() {
  const [calValue, setCalValue] = useState("");

  return (
    <div className="calculator-border">
      <input
        type="text"
        placeholder="0"
        value={calValue}
      />
      <CalculatorButtons />
    </div>
  );
}

export default App;
