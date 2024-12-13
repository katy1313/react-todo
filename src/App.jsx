import React, { Fragment } from 'react';
import './App.css'
import TodoList from './ToDoList'
import AddTodoForm from './AddTodoForm';

function App() {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || [] ); //Reading the data from local storage when application rerenders

  const [isLoading, setIsLoading] = React.useState(true);

  const fetchData = async() => {
    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
      }
    }

    try {
      const response = await fetch(url, options);
      if(!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log(data);

      const todos = data.records.map((todo) => {
        const newTodo = {
          id: todo.id,
          title: todo.fields.title
        }
        return newTodo;
      })

      setTodoList(todos);
      setIsLoading(false);

    } catch(error) {
      console.log(error.message)
    }
  }

  React.useEffect(() => {
    fetchData();
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
