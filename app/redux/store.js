import { configureStore } from "@reduxjs/toolkit";

import useReducer from "./slice";
import todosReducer from "./todosSlice";
export const store = configureStore({
  reducer: {
    userData: useReducer,
    userTodos: todosReducer,
  },
});
