import React from "react";
import Items from "./Items";
import { useState } from "react";

function ListOfFood() {
  const [fooditem, setfooditem] = useState(["Sabji", "Milk", "Roti"]);
  return (
    <div>
      <ul className="list-group">
        {fooditem.map((food) => (
          <Items fooditem={food} />
        ))}
      </ul>
    </div>
  );
}

export default ListOfFood;
