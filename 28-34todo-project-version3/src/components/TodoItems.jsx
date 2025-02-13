import React from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../Store/todo-item-store";
import { useContext } from "react";

function TodoItems() {
  const { todoItems, deleteItem } = useContext(TodoItemsContext);

  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          itemName={item.name}
          itemDate={item.date}
          handleDeleteItem={deleteItem}
        />
      ))}
    </div>
  );
}

export default TodoItems;
