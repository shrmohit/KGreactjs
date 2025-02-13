//it is to store business logic and data used for editing
import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

// bahar wali chijo se matlab nhi hai and focus on taking and return value is called pure function

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
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  // const [todoItems, settodoItems] = useState([]);
  const [todoItems, dispatchTodoItem] = useReducer(todoItemReducer, []);
  // {{}} is called object
  // USE REDUCER IS A ADVANCE VERSION OF USESTATE and it is a pure function means it not relate with outside things

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

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
