import React from "react";
import "./list.css";

const List = (props) => {
  return (
    <div className="list-container">
      <div className="holder">
        <div className="box">
          <div className="box-left">
            <button
              onClick={() => {
                return props.onSelect(props.id);
              }}
            >
              Delete
            </button>
          </div>
          <div className="box-right">
            <p>{props.itemData}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
