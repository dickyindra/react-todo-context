import React from "react";
import TodoList from "../../components/TodoList";

const todos = ["Buy a Shampoo", "Update blog", "Finish a Task"];

const TodoLists = () => {
  const lists = todos.map((data, index) => (
    <TodoList key={index} task={data} />
  ));

  return <>{lists}</>;
};

export default TodoLists;
