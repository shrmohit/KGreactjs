import "./app.css";
import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import TodoItem1 from "./components/TodoItem1.jsx";
import TodoItem2 from "./components/TodoItem2.jsx";

function App() {
  return (
    <center className="todo-container">
      <AppName />

      <div className="items-container">
        <AddTodo />
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
