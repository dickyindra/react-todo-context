import React, { useState } from "react";
import AddTodo from "../../components/AddTodo";

const AddTodoForm = () => {
  const [value, setValue] = useState("");

  return <AddTodo value={value} setValue={setValue} />;
};

export default AddTodoForm;
