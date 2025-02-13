import React from "react";
import { MdDeleteForever } from "react-icons/md";

function TodoItem({ itemName, itemDate, handleDeleteItem }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-4">{itemName}</div>
        <div className="col-4">{itemDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-btn"
            onClick={handleDeleteItem(itemName)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
