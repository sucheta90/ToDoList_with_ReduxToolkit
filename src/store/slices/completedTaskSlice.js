import { createSlice } from "@reduxjs/toolkit";
import { appReset } from "../actions";

const completedTaskSlice = createSlice({
  name: "completedTask",
  initialState: [],
  reducers: {
    addCompletedTask(state, action) {
      state.push(action.payload);
      localStorage.setItem("completedTasks", JSON.stringify(state));
    },
  },
  extraReducers(builder) {
    // eslint-disable-next-line no-unused-vars
    builder.addCase(appReset, (state, action) => {
      return [];
    });
  },
});

export const completedTaskReducer = completedTaskSlice.reducer;
export const { addCompletedTask } = completedTaskSlice.actions;
