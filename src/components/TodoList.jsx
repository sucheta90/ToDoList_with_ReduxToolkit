/* eslint-disable no-unused-vars */
/*
// This list to have all newly created items in the form of a list.
*/
import { useDispatch, useSelector } from "react-redux";
export default function ToDoList() {
  const dispatch = useDispatch();
  const list = useSelector((state) => {
    return state.toDoList;
  });

  let allToDo =
    list.length > 0
      ? list
      : JSON.parse(localStorage.getItem("toDoList"))
      ? JSON.parse(localStorage.getItem("toDoList"))
      : [];

  return (
    <div className="todo-container">
      <h3>To-Do List</h3>
      <ul>
        {allToDo.length ? (
          allToDo.map((el, index) => (
            <li key={index} className="todo-item">
              <input type="checkbox"></input>
              {el}
              <span>
                <button>Edit</button>
                <button>Delete</button>
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
