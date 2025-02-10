import React from "react";

function Items({ foodItem, bought, handleBuyClicked }) {
  return (
    <li
      className={`list-group-item kg-item ${bought ? "active" : ""}`}
      key={foodItem}
    >
      <span>{foodItem}</span>
      <button
        type="button"
        className="btn btn-info kg-span"
        // onClick event handling
        onClick={handleBuyClicked}
      >
        Buy
      </button>
    </li>
  );
}

export default Items;
