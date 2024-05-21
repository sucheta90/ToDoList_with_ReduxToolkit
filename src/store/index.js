import { configureStore } from "@reduxjs/toolkit";
import { appReset } from "./actions";
import {
  addCompletedTask,
  completedTaskReducer,
} from "./slices/completedTaskSlice";
import {
  addTask,
  editTask,
  deleteTask,
  toDoListReducer,
} from "./slices/toDoListSlice.js";

const store = configureStore({
  reducer: {
    toDoList: toDoListReducer,
    completedTasks: completedTaskReducer,
  },
});

export { store, appReset, addTask, editTask, deleteTask, addCompletedTask };
