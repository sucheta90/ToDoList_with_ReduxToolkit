import "./App.css";
import Header from "./components/Header";
function App() {
  return (
    <div className="main-container">
      <Header />
      <div className="buttons-main-container">
        <button>Add New Task</button>
        <button>Reset All</button>
      </div>
    </div>
  );
}

export default App;
