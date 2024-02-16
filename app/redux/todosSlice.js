const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  todos: JSON.parse(localStorage.getItem("todo")),
};

const Slice = createSlice({
  name: "todosList",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const data = {
        id: nanoid(),
        todo: action.payload,
      };
      state.todos.push(data);
      let tododata = JSON.stringify(current(state.todos));
      localStorage.setItem("todo", tododata);
    },
  },
});

export const { addTodos } = Slice.actions;
export default Slice.reducer;
