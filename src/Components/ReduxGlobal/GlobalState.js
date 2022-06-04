import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const Global = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, { payload }) => {
      state.user = payload;
    },

    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { createUser, removeUser } = Global.actions;

export default Global.reducer;
