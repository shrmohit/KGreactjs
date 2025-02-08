import React from "react";

function CalculatorButtons({ buttonnumber }) {
  return (
    <div className="buttonsContainer">
      {buttonnumber.map((num) => (
        <button className="cal-button">{num}</button>
      ))}
    </div>
  );
}

export default CalculatorButtons;
