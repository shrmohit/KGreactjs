import React from "react";

function TodoItem({ itemName, itemDate }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{itemName}</div>
        <div className="col-4">{itemDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
