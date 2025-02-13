import React, { useRef, useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center ">
      <div className="row kg-row">
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
            type="button"
            className="btn btn-success kg-btn"
            onClick={handleAddButtonClick}
          >
            <IoMdPersonAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
