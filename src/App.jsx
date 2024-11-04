// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './ToDoList'
import AddTodoForm from './AddTodoForm';

function App() {
  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodoForm/>
      <TodoList/>
    </div> );
}

export default App;
