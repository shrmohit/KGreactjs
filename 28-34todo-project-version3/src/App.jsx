import { useState } from "react";
import "./app.css";
import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";

function App() {
  // const initailTodoItems = [
  //   {
  //     name: "yoga",
  //     date: "08/02/2025",
  //   },
  //   {
  //     name: "college",
  //     date: "08/02/2025",
  //   },
  //   {
  //     name: "study",
  //     date: "08/02/2025",
  //   },
  // ];

  const [todoItems, settodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueData) => {
    // console.log(`add New item ${itemName} on ${itemDueData}`);
    const newTodoData = [
      ...todoItems,
      {
        name: itemName,
        date: itemDueData,
      },
    ];
    settodoItems(newTodoData);
  };

  const handleDeleteItem = (itemName) => {
    const newTodoData = todoItems.filter((item) => item.name !== itemName);
    settodoItems(newTodoData);
  };

  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WelcomeMessage todoItems={todoItems} />}
        <TodoItems
          todoItems={todoItems}
          handleDeleteItem={handleDeleteItem}
        />
      </div>
    </center>
  );
}

export default App;
