/* eslint-disable no-unused-vars */
import "./App.css";
import CompletedTasks from "./components/CompletedTasks";
import Header from "./components/Header";
import ToDoList from "./components/TodoList";
import { useState } from "react";
import { addTask } from "./store";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  const [addNew, setAddNew] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  /**
   *
   * Function: Handles input change
   */
  const handleTaskInput = (e) => {
    setTaskInput(e.target.value);
  };
  const addToTaskList = (e) => {
    if (taskInput.trimEnd() === "") {
      return;
    }
    dispatch(addTask(taskInput));
    setTaskInput("");
  };
  return (
    <div className="main-container">
      <Header />
      <div className="buttons-main-container">
        <button
          onClick={() => {
            setAddNew(true);
          }}
        >
          Add New Task
        </button>
        <button>Reset All</button>
      </div>
      {addNew ? (
        <div className="task-input-field">
          <textarea
            cols={30}
            rows={4}
            // name="task_input"
            value={taskInput}
            onChange={handleTaskInput}
            placeholder="List your tasks"
          ></textarea>
          <button
            className="task-input-button"
            onClick={addToTaskList}
            type="submit"
          >
            Add
          </button>
          <button
            className="task-input-button"
            onClick={() => {
              setAddNew(false);
            }}
          >
            Cancel
          </button>
        </div>
      ) : (
        ""
      )}

      <ToDoList />
      <CompletedTasks />
    </div>
  );
}

export default App;
