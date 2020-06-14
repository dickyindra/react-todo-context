import React from "react";

import "./style.css";
import plus from "./plus.svg";

const AddTodo = ({ value, setValue, onSubmit }) => {
  const isButtonDisable = value.length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="add-todo-wrapper">
      <form className="add-todo" onSubmit={handleSubmit}>
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
      </form>
    </div>
  );
};

export default AddTodo;
