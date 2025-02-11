import React, { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    console.log(event.target.value);
  };

  const handleDateChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="container text-center ">
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter todo here"
            value={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={handleDateChange}
          />
        </div>
        <div className="col-1">
          <button
            type="button"
            className="btn btn-success kg-btn"
            onClick={() => onNewItem("a", "v")}
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
