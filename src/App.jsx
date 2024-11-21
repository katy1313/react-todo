import React, { Fragment } from 'react';
import './App.css'
import TodoList from './ToDoList'
import AddTodoForm from './AddTodoForm';

function useSemiPersistentState() {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList'))); //Reading the data from local storage when application rerenders

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList)); //Converting Object to a string before saving in localStorage
  }, [todoList]);
  return [todoList, setTodoList];
}

function App() {

  const [todoList, setTodoList] = useSemiPersistentState(); //Using custom hook

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]); //update todoList to include newTodo along with existing items
  }

  return (
    <Fragment>
      <h1>ToDo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      <TodoList list={todoList} todoList={todoList} setTodoList={setTodoList} />
    </Fragment> );
}


export default App;
