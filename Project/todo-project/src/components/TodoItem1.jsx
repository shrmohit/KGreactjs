import React from "react";

function TodoItem1() {
  return (
    <div class="container">
      <div class="row kg-row">
        <div class="col-4">Buy Milk</div>
        <div class="col-4">4/10/2023</div>
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

export default TodoItem1;
