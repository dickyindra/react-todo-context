import { TODO_CHECK, ADD_TODO, REMOVE_TODO } from "./constants";

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

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  payload: {
    id: index,
  },
});
