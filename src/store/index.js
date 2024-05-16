import { configureStore } from "@reduxjs/toolkit";
import { reset } from "./actions";
import {
  addTask,
  editTask,
  deleteTask,
  toDoListReducer,
} from "./slices/toDoListSlice";

const store = configureStore({
  toDoListReducer: toDoListReducer,
  // completedListReducer:
});

export { store, addTask, editTask, deleteTask, reset };
