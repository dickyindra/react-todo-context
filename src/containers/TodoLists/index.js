import React, { useContext } from "react";

import "./style.css";
import TodoList from "../../components/TodoList";
import { TodoContext } from "../App/provider";
import { todoCheck } from "../App/actions";

const TodoLists = () => {
  const [{ todos }, dispatch] = useContext(TodoContext);

  const lists = todos.map(({ task, checked }, index) => (
    <TodoList
      key={index}
      task={task}
      checked={checked}
      setChecked={() => dispatch(todoCheck(index))}
    />
  ));

  return <div className="todo-lists">{lists}</div>;
};

export default TodoLists;
