/*
// This list to have all newly created items in the form of a list.
*/
export default function ToDoList() {
  const allToDo = ["Hello"];

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
