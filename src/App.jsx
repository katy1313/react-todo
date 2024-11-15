import React from 'react';
import './App.css'
import TodoList from './ToDoList'
import AddTodoForm from './AddTodoForm';

function App() {

  const [todoList, setTodoList] = React.useState([]);//Creating new state variable named todoList with setter setTodoList and default value of an empty Array

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]); //update todoList to include newTodo along with existing items
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList list={todoList} todoList={todoList} setTodoList={setTodoList} />
    </div> );
}


export default App;
