import "./app.css";
import AddTodo from "./components/AddTodo.jsx";
import AppName from "./components/AppName.jsx";
import TodoItems from "./components/TodoItems.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import { TodoItemsContext } from "./Store/todo-item-store.jsx";

function App() {
  return (
    <TodoItemsContext.Provider>
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
