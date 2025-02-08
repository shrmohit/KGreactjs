import "./app.css";
import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import TodoItems from "./components/TodoItems.jsx";

function App() {
  const todoItems = [
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
  return (
    <center className="todo-container">
      <AppName />

      <div className="items-container">
        <AddTodo />
        <TodoItems todoItems={todoItems} />
      </div>
    </center>
  );
}

export default App;
