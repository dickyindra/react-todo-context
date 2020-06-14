import { TODO_CHECK, ADD_TODO } from "./constants";

export const addTodo = (task) => ({
  type: ADD_TODO,
  payload: {
    task,
  },
});

export const todoCheck = (index) => ({
  type: TODO_CHECK,
  payload: {
    id: index,
  },
});
