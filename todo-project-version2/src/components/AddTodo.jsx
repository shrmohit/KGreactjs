import React from "react";

function AddTodo() {
  return (
    <div class="container text-center ">
      <div class="row kg-row">
        <div class="col-4">
          <input
            type="text"
            placeholder="Enter todo here"
          />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-1">
          <button
            type="button"
            class="btn btn-success kg-btn"
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
