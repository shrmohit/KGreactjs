import React from "react";
import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          itemName={item.name}
          itemDate={item.date}
        />
      ))}
    </div>
  );
}

export default TodoItems;
