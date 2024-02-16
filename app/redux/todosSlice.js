const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  todos: JSON.parse(localStorage.getItem("todo"))
    ? JSON.parse(localStorage.getItem("todo"))
    : [],
};

const Slice = createSlice({
  name: "todosList",
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const { todo, firstName } = action.payload;

      const data = {
        id: nanoid(),
        todo: todo,
        firstName: firstName,
      };
      state.todos.push(data);
      console.log(current(state.todos));
      let tododata = JSON.stringify(current(state.todos));
      localStorage.setItem("todo", tododata);
    },
  },
});

export const { addTodos } = Slice.actions;
export default Slice.reducer;
