import { useState } from "react";
import "./app.css";
import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import { TodoItemsContext } from "./Store/todo-item-store.jsx";

function App() {
  const [todoItems, settodoItems] = useState([]);

  const addNewItem = (itemName, itemDueData) => {
    settodoItems((currvalue) => [
      ...currvalue,
      {
        name: itemName,
        date: itemDueData,
      },
    ]);
  };

  const deleteItem = (itemName) => {
    const newTodoData = todoItems.filter((item) => item.name !== itemName);
    settodoItems(newTodoData);
  };
  // {{}} is called object
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
