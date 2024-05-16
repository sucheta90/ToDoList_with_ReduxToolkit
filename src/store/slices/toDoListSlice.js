/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
import { reset } from "nodemon";

const toDolistSlice = createSlice({
  name: "toDolist",
  initialState: [],
  reducers: {
    //Adds to do item/task
    addTask(state, action) {
      state.push(action.payload);
    },
    editTask(state, action) {
      //
    },
    deleteTask(state, action) {
      //
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addTask, editTask, deleteTask } = toDolistSlice.actions;
export const toDoListReducer = toDolistSlice.reducer;
