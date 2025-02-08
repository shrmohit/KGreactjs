import React from "react";

function TodoItem({ itemName, itemDate }) {
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-4">{itemName}</div>
        <div class="col-4">{itemDate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger kg-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
