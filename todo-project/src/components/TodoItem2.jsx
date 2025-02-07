import React from "react";

function TodoItem2() {
  return (
    <div class="container kg-row">
      <div class="row">
        <div class="col-4">Go to college</div>
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

export default TodoItem2;
