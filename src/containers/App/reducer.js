import { TODO_CHECK, ADD_TODO } from "./constants";

const defaultState = {
  todos: [
    {
      task: "Buy a Shampoo",
      checked: true,
    },
    {
      task: "Update blog",
      checked: false,
    },
    {
      task: "Finish a Task",
      checked: false,
    },
  ],
};

const getInitialState = () =>
  JSON.parse(localStorage.getItem("todo")) || defaultState;

export const initialState = getInitialState();

const todoReducer = (state, { type, payload }) => {
  const todos = state.todos;

  switch (type) {
    case ADD_TODO:
      todos.unshift({
        task: payload.task,
        checked: false,
      });

      return {
        ...state,
        todos,
      };

    case TODO_CHECK:
      todos[payload.id].checked = true;

      return {
        ...state,
        todos: todos,
      };

    default:
      return state;
  }
};

export default todoReducer;
