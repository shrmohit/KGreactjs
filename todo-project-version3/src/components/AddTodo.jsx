import React, { useRef, useState } from "react";
import { IoMdPersonAdd } from "react-icons/io";

function AddTodo({ onNewItem }) {
  //useref hook and it is used directly with jsx element
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = todoNameElement.current.value;
    todoNameElement.current.value = "";
    todoNameElement.current.value = "";
    onNewItem(todoName, dueDate);
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
            // it is ref element
            ref={todoNameElement}
            value={todoName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            value={dueDate}
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
