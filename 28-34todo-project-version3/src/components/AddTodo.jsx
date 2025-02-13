import { useRef, useContext } from "react";
import { IoMdPersonAdd } from "react-icons/io";
import { TodoItemsContext } from "../Store/todo-item-store";

function AddTodo() {
  //useref hook and it is used directly with jsx element
  // it control the reprint cycle
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const { addNewItem } = useContext(TodoItemsContext);

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    // console.log(`${todoName} ${dueDate}`);

    addNewItem(todoName, dueDate);
  };

  return (
    <div className="container text-center ">
      {/* // in form bydefault the button is called as submit button */}
      <form
        action=""
        className="row kg-row"
        onSubmit={handleAddButtonClick}
      >
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter todo here"
            // it is ref element
            ref={todoNameElement}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateElement}
          />
        </div>
        <div className="col-1">
          <button
            type="submit"
            className="btn btn-success kg-btn"
          >
            <IoMdPersonAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
