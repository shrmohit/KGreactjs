import React from "react";

function CalculatorButtons({ buttonnumber }) {
  function handleKeyPress(event) {
    console.log("The  press value", event.target.value);
  }
  return (
    <div className="buttonsContainer">
      {buttonnumber.map((num, index) => (
        <button
          onClick={handleKeyPress}
          className="cal-button"
          key={index}
        >
          {num}
        </button>
      ))}
    </div>
  );
}

export default CalculatorButtons;
