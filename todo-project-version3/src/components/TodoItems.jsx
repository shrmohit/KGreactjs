import React from "react";
import TodoItem from "./TodoItem";

function TodoItems({ todoItems, handleDeleteItem }) {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          itemName={item.name}
          itemDate={item.date}
          handleDeleteItem={handleDeleteItem}
        />
      ))}
    </div>
  );
}

export default TodoItems;
