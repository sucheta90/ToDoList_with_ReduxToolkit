export default function CompletedTasks() {
  const completedTaskList = [];
  return (
    <div className="completed-list-container">
      <h3>Completed Tasks</h3>
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
