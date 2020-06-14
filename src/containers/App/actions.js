import { TODO_CHECK } from "./constants";

export const todoCheck = (index) => ({
  type: TODO_CHECK,
  payload: {
    id: index,
  },
});
