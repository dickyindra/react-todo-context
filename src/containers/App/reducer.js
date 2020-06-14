import { TODO_CHECK } from "./constants";

export const initialState = {
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

const todoReducer = (state, { type, payload }) => {
  switch (type) {
    case TODO_CHECK:
      const todos = state.todos;
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
