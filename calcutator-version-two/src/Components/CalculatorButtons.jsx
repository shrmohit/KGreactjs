import React from "react";

function CalculatorButtons({ onButtonClicked }) {
  const buttonValue = [
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
      {buttonValue.map((buttonnumber) => (
        <button
          className="cal-button"
          key={buttonnumber}
          onClick={() => onButtonClicked(buttonnumber)}
        >
          {buttonnumber}
        </button>
      ))}
    </div>
  );
}

export default CalculatorButtons;
