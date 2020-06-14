import React from "react";
import classNames from "classnames";

import "./style.css";
import check from "./check.svg";

const TodoList = ({ task, checked: isCheck, setChecked }) => {
  return (
    <div className="todo-list">
      <div>
        <div
          className={classNames("todo-checklist", { checked: isCheck })}
          onClick={setChecked}
        >
          <img src={check} alt="check" />
        </div>
      </div>
      <span className="todo-text">{task}</span>
    </div>
  );
};

export default TodoList;
