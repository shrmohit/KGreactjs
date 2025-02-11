import React from "react";

function CalculatorButtons() {
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
    <div className="buttonsContainer">
      {buttonnumber.map((num) => (
        <button
          className="cal-button"
          key={num}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default CalculatorButtons;
