import { createSlice } from "@reduxjs/toolkit";
import { appReset } from "../actions";

const toDoListSlice = createSlice({
  name: "toDoList",
  initialState: [],
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
      let currentList = JSON.parse(localStorage.getItem("toDoList")) || [];
      let updatedList = [...currentList, action.payload];
      localStorage.setItem("toDoList", JSON.stringify(updatedList));
    },
    // eslint-disable-next-line no-unused-vars
    editTask(state, action) {
      //
    },
    // eslint-disable-next-line no-unused-vars
    deleteTask(state, action) {
      //
    },
  },
  extraReducers(builder) {
    // eslint-disable-next-line no-unused-vars
    builder.addCase(appReset, (state, action) => {
      localStorage.removeItem("toDoList");
      return [];
    });
  },
});

export const toDoListReducer = toDoListSlice.reducer;
export const { addTask, editTask, deleteTask } = toDoListSlice.actions;
