
import './App.css'
import ToDoList from './components/ToDoList'

function App() {

  return (
    <>
      <div className="container">
        <h1>📝 To-Do List</h1>
        <ToDoList />
      </div>

      <footer className="footer">
        <p>Copyright © designed by Mihail Todorov</p>
      </footer>
    </>
  )
}

export default App
