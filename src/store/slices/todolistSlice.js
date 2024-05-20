import { createSlice } from "@reduxjs/toolkit";
import { appReset } from "../actions";

const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: [],
  addTask(state, action) {
    state.push(action.payload);
  },
  editTask(state, action) {
    //
  },
  deleteTask(state, action) {
    //
  },
});

export const toDoListReducer = toDoListSlice.reducer;
export const { addTask, editTask, deleteTask } = toDoListSlice.actions;
