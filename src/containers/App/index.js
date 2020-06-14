import React from "react";
import dayjs from "dayjs";

import "./style.css";
import Header from "../../components/Header";

const App = () => {
  const now = dayjs().format("dddd DD MMMM");

  return (
    <div className="App">
      <Header title="My Task" date={now} />
    </div>
  );
};

export default App;
