import React from "react";

function Items(props) {
  return (
    <li
      className="list-group-item kg-item"
      key={props.fooditem}
    >
      <span>{props.fooditem}</span>
      <button
        type="button"
        className="btn btn-info kg-span"
      >
        Buy
      </button>
    </li>
  );
}

export default Items;
