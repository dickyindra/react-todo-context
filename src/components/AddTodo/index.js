import React from "react";

import "./style.css";
import plus from "./plus.svg";

const AddTodo = ({ value, setValue }) => {
  const isButtonDisable = value.length === 0;

  return (
    <div className="add-todo-wrapper">
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add Todo"
          className="add-todo-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <div>
          <button className="add-todo-button" disabled={isButtonDisable}>
            <img src={plus} alt="plus" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
