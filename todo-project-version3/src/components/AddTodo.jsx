import React, { useRef, useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const noOfItems = useRef();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = (event) => {
    console.log(event);
    // jab server ko data send nhi karna chate tab
    event.preventDefault();

    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center ">
      // in form bydefault the button is called as submit button
      <form
        action=""
        className="row kg-row"
        onSubmit={handleAddButtonClick}
      >
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
            onChange={handleDateChange}
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
