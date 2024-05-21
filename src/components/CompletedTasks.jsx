export default function CompletedTasks() {
  const completedTaskList = [];
  return (
    <div className="completed-list-container">
      <hr />
      <h3>Completed Tasks</h3>
      <hr />
      <ul>
        {completedTaskList.map((el, index) => {
          return (
            <li key={index} className="completed-list-item">
              {el}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
