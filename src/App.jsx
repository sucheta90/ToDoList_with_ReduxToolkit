import "./App.css";
import CompletedTasks from "./components/CompletedTasks";
import Header from "./components/Header";
import ToDoList from "./components/TodoList";
import { useState } from "react";
function App() {
  const [addNew, setAddNew] = useState(false);
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
          <textarea></textarea>
          <button className="task-input-button">Add</button>
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
