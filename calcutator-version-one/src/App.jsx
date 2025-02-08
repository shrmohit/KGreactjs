import "./App.css";
import CalculatorButtons from "./Components/calculatorButtons";

function App() {
  const buttonnumber = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className="calculator-border">
      <input type="text" />
      <CalculatorButtons buttonnumber={buttonnumber} />
    </div>
  );
}

export default App;
