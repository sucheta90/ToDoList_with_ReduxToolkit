import { createSlice } from "@reduxjs/toolkit";
import { appReset } from "../actions";

const completedTaskSlice = createSlice({
  name: "completedTask",
  initialState: [],
  reducers: {
    addCompletedTask(state, action) {
      state.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(appReset, (state, action) => {
      return [];
    });
  },
});

export const completedTaskReducer = completedTaskSlice.reducer;
export const { addCompletedTask } = completedTaskSlice.actions;
