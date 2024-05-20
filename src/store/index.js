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
} from "./slices/toDoListSlice";

const store = configureStore({
  reducer: {
    toDoListReducer: toDoListReducer,
    completedTaskReducer: completedTaskReducer,
  },
});

export { store, appReset, addTask, editTask, deleteTask, addCompletedTask };
