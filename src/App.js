import "./css/main.css"
import DisplayTodos from "./components/DisplayTodos"
import Todos from "./components/Todos"

function App() {
  return (
    <div className="App">
      <h1>TodoMatic</h1>
      <div>
        <Todos />
        <DisplayTodos />
      </div>
    </div>
  )
}

export default App
