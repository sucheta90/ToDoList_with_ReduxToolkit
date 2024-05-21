/* eslint-disable no-unused-vars */
/*
// This list to have all newly created items in the form of a list.
*/
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../store";
export default function ToDoList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.toDoList;
  });
  const localStorageData = JSON.parse(localStorage.getItem("toDoList")) || [];
  let allToDo = [...new Set([...list, ...localStorageData])];

  const handleDeleteTask = (e) => {
    const task = e.target.parentNode.previousSibling.innerText;
    dispatch(deleteTask(task));
  };

  return (
    <div className="todo-container">
      <hr></hr>
      <h3>To-Do List</h3>
      <hr />
      <ul>
        {allToDo.length ? (
          allToDo.map((el, index) => (
            <li key={index} className="todo-item">
              <input type="checkbox"></input>
              <p className="task">{el}</p>
              <span>
                <button>Edit</button>
                <button onClick={handleDeleteTask}>Delete</button>
              </span>
            </li>
          ))
        ) : (
          <p>No tasks available at this time</p>
        )}
      </ul>
    </div>
  );
}
