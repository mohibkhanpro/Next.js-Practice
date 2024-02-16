const { createSlice, nanoid, current } = require("@reduxjs/toolkit");

const initialState = {
  users: JSON.parse(localStorage.getItem("users"))
    ? JSON.parse(localStorage.getItem("users"))
    : [],
};

const Slice = createSlice({
  name: "addUsersReduce",
  initialState,
  reducers: {
    addUsers: (state, action) => {
      const data = {
        id: nanoid(),
        name: action.payload,
      };
      state.users.push(data);
      //   console.log(current(state.users));
      let userData = JSON.stringify(current(state.users));
      localStorage.setItem("users", userData);
    },
    removeUsers: (state, action) => {
      const data = state.users.filter((item) => {
        return item.id !== action.payload;
      });
      state.users = data;
      let userData = JSON.stringify(data);
      localStorage.setItem("users", userData);
    },
  },
});

export const { addUsers, removeUsers } = Slice.actions;

export default Slice.reducer;
