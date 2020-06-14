import React from "react";

import "./style.css";
import TodoList from "../../components/TodoList";

const todos = ["Buy a Shampoo", "Update blog", "Finish a Task"];

const TodoLists = () => {
  const lists = todos.map((data, index) => (
    <TodoList key={index} task={data} />
  ));

  return <div className="todo-lists">{lists}</div>;
};

export default TodoLists;
