import React, { useState, useContext } from "react";

import AddTodo from "../../components/AddTodo";
import { TodoContext } from "../App/provider";
import { addTodo } from "../App/actions";

const AddTodoForm = () => {
  const [, dispatch] = useContext(TodoContext);
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    dispatch(addTodo(value));
    setValue("");
  };

  return <AddTodo value={value} setValue={setValue} onSubmit={handleSubmit} />;
};

export default AddTodoForm;
