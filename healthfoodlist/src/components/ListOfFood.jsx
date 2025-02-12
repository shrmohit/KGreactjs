import React, { useState } from "react";
import Items from "./Items";

function ListOfFood({ items }) {
  const [activeItem, setActiveItems] = useState([]);

  const onBuyButton = (item, event) => {
    let newItems = [...activeItem, item];
    setActiveItems(newItems);
  };

  return (
    <div>
      <ul className="list-group">
        {items.map((item) => (
          <Items
            key={item}
            foodItem={item}
            bought={activeItem.includes(item)}
            handleBuyClicked={(event) => onBuyButton(item, event)}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListOfFood;
