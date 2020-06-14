import React from "react";
import dayjs from "dayjs";

import "./style.css";
import Header from "../../components/Header";
import TodoLists from "../TodoLists";
import AddTodoForm from "../AddTodoForm";
import { TodoProvider } from "./provider";

const App = () => {
  const now = dayjs().format("dddd DD MMMM");

  return (
    <div className="App">
      <Header title="My Task" date={now} />
      <TodoProvider>
        <TodoLists />
      </TodoProvider>
      <AddTodoForm />
    </div>
  );
};

export default App;
