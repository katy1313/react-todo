import React, { Fragment } from 'react';
import './App.css'
import TodoList from './ToDoList'
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || [] ); //Reading the data from local storage when application rerenders

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    //Simulating a delay with setTimeout in a promise

    new Promise(function(resolve) {
      setTimeout(() => resolve({ data: { todoList: todoList } }), 2000);
    })
    .then((result) => {
      setTodoList(result.data.todoList); // Update todoList after "fetching" data
      setIsLoading(false); //Turn off loading
    });
  }, []);

  React.useEffect(() => {
    if(!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList)); //Save data to localStorage and converting Object to a string before saving in localStorage
    }
  }, [todoList, isLoading]);
  

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]); //update todoList to include newTodo along with existing items
  }

  function removeTodo(id) {
    const newTodoList = todoList.filter(
      (list) => id !== list.id
    );
    setTodoList(newTodoList);
  };


  return (
    <Fragment>
      <h1>ToDo List</h1>
      <AddTodoForm onAddTodo={addTodo}/>
      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <TodoList list={todoList} todoList={todoList} setTodoList={setTodoList} onRemoveTodo={removeTodo}/>
      )}
      
      <hr></hr>
    </Fragment> );
}


export default App;
