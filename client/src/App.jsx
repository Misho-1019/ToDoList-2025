
import './App.css'

function App() {

  return (
    <>
      <div class="container">
        <h1>To-Do List</h1>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Finish project</td>
              <td class="status pending">Pending</td>
              <td><button class="toggle-btn">Change Status</button></td>
            </tr>
            <tr>
              <td>Buy groceries</td>
              <td class="status pending">Pending</td>
              <td><button class="toggle-btn">Change Status</button></td>
            </tr>
            <tr>
              <td>Read a book</td>
              <td class="status completed">Completed</td>
              <td><button class="toggle-btn">Change Status</button></td>
            </tr>
          </tbody>
        </table>
      </div>

    </>
  )
}

export default App
