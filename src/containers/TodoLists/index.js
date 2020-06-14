import React, { useContext } from "react";

import "./style.css";
import TodoList from "../../components/TodoList";
import { TodoContext } from "../App/provider";

const TodoLists = () => {
  const [{ todos }] = useContext(TodoContext);

  const lists = todos.map((data, index) => (
    <TodoList key={index} task={data} />
  ));

  return <div className="todo-lists">{lists}</div>;
};

export default TodoLists;
