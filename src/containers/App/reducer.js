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

const todoReducer = (state, { type }) => {
  switch (type) {
    default:
      break;
  }
};

export default todoReducer;
