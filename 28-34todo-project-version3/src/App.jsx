import { useReducer, useState } from "react";
import "./app.css";
import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import { TodoItemsContext } from "./Store/todo-item-store.jsx";

//bahar wali chijo se matlab nhi hai and focus on taking and return value is called pure function
const todoItemReducer = (currTodoItem, action) => {
  let newTodoItems = currTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItem,
      {
        name: action.payload.itemName,
        date: action.payload.itemDueData,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItem.filter(
      (item) => item.name !== action.payload.itemName
    );
  }
  return [newTodoItems];
};

function App() {
  // const [todoItems, settodoItems] = useState([]);
  const [todoItems, dispatchTodoItem] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueData) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDueData,
      },
    };

    dispatchTodoItem(newItemAction);
  };
  // todoItems.filter((item) => item.name !== itemName);
  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: itemName,
      },
    };
    dispatchTodoItem(deleteItemAction);
  };
  // {{}} is called object
  // USE REDUCER IS A ADVANCE VERSION OF USESTATE and it is a pure function means it not relate with outside things
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center className="todo-container">
        <AppName />
        <div className="items-container">
          <AddTodo />
          <WelcomeMessage />
          <TodoItems />
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
