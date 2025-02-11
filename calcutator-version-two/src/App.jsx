import { useState } from "react";
import "./App.css";
import CalculatorButtons from "./Components/calculatorButtons";

function App() {
  const [calValue, setCalValue] = useState("");

  const onButtonClicked = (buttonnumber) => {
    if (buttonnumber === "C") {
      setCalValue("");
    } else if (buttonnumber === "=") {
      //eval method is used for calculating two value
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplayValue = calValue + buttonnumber;
      setCalValue(newDisplayValue);
    }
  };

  return (
    <div className="calculator-border">
      <input
        type="text"
        placeholder="0"
        value={calValue}
      />
      <CalculatorButtons onButtonClicked={onButtonClicked} />
      {/* in method we call a anumimas function */}
    </div>
  );
}

export default App;
