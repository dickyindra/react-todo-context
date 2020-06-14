import React, { createContext, useReducer, useEffect } from "react";

import todoReducer, { initialState } from "./reducer";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state));
  }, [state]);

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  );
};
