import React, { useContext } from "react";

import "./style.css";
import TodoList from "../../components/TodoList";
import { TodoContext } from "../App/provider";
import { todoCheck, removeTodo } from "../App/actions";

const TodoLists = () => {
  const [{ todos }, dispatch] = useContext(TodoContext);

  const handleCheck = (index) => {
    dispatch(todoCheck(index));
  };

  const handleRemove = (index) => {
    dispatch(removeTodo(index));
  };

  const lists = todos.map(({ task, checked }, index) => (
    <TodoList
      key={index}
      task={task}
      checked={checked}
      setChecked={() => handleCheck(index)}
      onRemove={() => handleRemove(index)}
    />
  ));

  return <div className="todo-lists">{lists}</div>;
};

export default TodoLists;
