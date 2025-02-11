import { useState } from "react";
import "./app.css";
import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import TodoItems from "./components/TodoItems.jsx";

function App() {
  const initailTodoItems = [
    {
      name: "yoga",
      date: "08/02/2025",
    },
    {
      name: "college",
      date: "08/02/2025",
    },
    {
      name: "study",
      date: "08/02/2025",
    },
  ];

  const [todoItems, settodoItems] = useState(initailTodoItems);

  const handleNewItem = (itemName, itemDueData) => {
    console.log(`add New item ${itemName} on ${itemDueData}`);
    const newTodoData = [
      ...todoItems,
      {
        name: itemName,
        date: itemDueData,
      },
    ];
    settodoItems(newTodoData);
  };

  return (
    <center className="todo-container">
      <AppName />
      <div className="items-container">
        <AddTodo onNewItem={handleNewItem} />
        <TodoItems todoItems={todoItems} />
      </div>
    </center>
  );
}

export default App;
