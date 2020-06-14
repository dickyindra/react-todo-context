import React, { memo } from "react";
import classNames from "classnames";

import "./style.css";
import check from "./check.svg";
import trash from "./trash.svg";

const TodoList = ({ task, checked: isCheck, setChecked, onRemove }) => {
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
      <div>
        <div className="todo-remove" onClick={onRemove}>
          <img src={trash} alt="remove" />
        </div>
      </div>
    </div>
  );
};

export default memo(TodoList);
