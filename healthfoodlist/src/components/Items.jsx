import React from "react";

function Items({ fooditem }) {
  const handleBuyClicked = (event) => {
    console.log(event);

    console.log(`${fooditem} being bought`);
  };
  return (
    <li
      className="list-group-item kg-item"
      key={fooditem}
    >
      <span>{fooditem}</span>
      <button
        type="button"
        className="btn btn-info kg-span"
        // onClick event handling
        onClick={(event) => handleBuyClicked(event)}
      >
        Buy
      </button>
    </li>
  );
}

export default Items;
