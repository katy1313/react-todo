// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './ToDoList'
import AddTodoForm from './AddTodoForm';

function App() {
  const todoList = [
    {"id": 111, "title": "Complete assignment"},
    {"id": 112, "title": "Submit assignment"},
    {"id": 113, "title": "Attend mentor session"}
  ];

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodoForm/>
      <TodoList list={todoList} title="React" />
    </div> );
}

export default App;
