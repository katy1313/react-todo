import React from 'react';
import './App.css'
import TodoList from './ToDoList'
import AddTodoForm from './AddTodoForm';

function App() {
  const todoList = [
    {"id": 111, "title": "Complete assignment"},
    {"id": 112, "title": "Submit assignment"},
    {"id": 113, "title": "Attend mentor session"}
  ];

  const [newTodo, setNewTodo] = React.useState('');

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodoForm onAddTodo={setNewTodo}/>
      <p>{newTodo}</p>
      <TodoList list={todoList} />
    </div> );
}


export default App;
