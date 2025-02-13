import React from "react";
import { TodoItemsContext } from "../Store/todo-item-store";
import { useContext } from "react";

function WelcomeMessage() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <center className="Welcomemessage">Enjoy your day</center>
    )
  );
}

export default WelcomeMessage;
