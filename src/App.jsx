//import React, { Fragment } from 'react';
import './App.css'
// import TodoList from './components/TodoList/ToDoList'
// import AddTodoForm from './components/TodoForm/AddTodoForm';
// import Search from './components/Search/Search';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import TodosPage from './components/TodoPage/TodoPage';

function App() {
  // const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || [] ); //Reading the data from local storage when application rerenders
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [sort, setSort] = React.useState('asc');
  // const [sortedTodoList, setSortedTodoList] = React.useState([]);
  // const [searchTerm, setSearchTerm] = React.useState(localStorage.getItem("search") || "");

  // const fetchData = async() => {
  //   const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`
  //     }
  //   }

  //   try {
  //     const response = await fetch(url, options);
  //     if(!response.ok) {
  //       throw new Error(`Error: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     console.log(data);

  //     const todos = data.records.map((todo) => {
  //       const newTodo = {
  //         id: todo.id,
  //         title: todo.fields.title
  //       }
  //       return newTodo;
  //     })

  //     setTodoList(todos);
  //     setIsLoading(false);

  //   } catch(error) {
  //     console.log(error.message)
  //   }
  // }

  // React.useEffect(() => {
  //   fetchData();
  // }, []);

  // React.useEffect(() => {
  //   if(!isLoading) {
  //     localStorage.setItem('savedTodoList', JSON.stringify(todoList)); //Save data to localStorage and converting Object to a string before saving in localStorage
  //   }
  // }, [todoList, isLoading]);

 
  // React.useEffect(() => {
  //   console.log('TodoList:', todoList);
  //   console.log('Sort Order:', sort);

  //   const sortedData = [...todoList].sort((a, b) => {   
  //     const titleA = a.title.toLowerCase();
  //     const titleB = b.title.toLowerCase();
  //     return sort === 'asc'
  //       ? titleA.localeCompare(titleB)
  //       : titleB.localeCompare(titleA);
  //   });
    
  //   console.log('Sorted Data:', sortedData);
  //   setSortedTodoList(sortedData);
  // }, [sort]);

  // React.useEffect(() => {
  //   localStorage.setItem("search", searchTerm);
  // }, [searchTerm]);

  // function addTodo(newTodo) {
  //   setTodoList([...todoList, newTodo]); //update todoList to include newTodo along with existing items
  // }

  // function removeTodo(id) {
  //   const newTodoList = todoList.filter(
  //     (list) => id !== list.id
  //   );
  //   setTodoList(newTodoList);
  // };
  
  // function handleToggle() {
  //   setSort(sort === 'asc' ? 'desc' : 'asc');
  // } 

  // //Search
  // const filteredItems = sortedTodoList.filter((item) => 
  //   item.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const handleSearch = (value) => {
  //   setSearchTerm(value);
  // }
 
  return (
    <BrowserRouter>
    
      <Routes>
        <Route
            path="/"
            element={<HomePage />}
          />
        <Route
          path="/todos"
          element={<TodosPage />
            // <Fragment>
            //   <h1>ToDo List</h1>
            //   <AddTodoForm onAddTodo={addTodo} />
            //   <button onClick={handleToggle}>
            //     {sort === 'asc' ? 'Ascending' : 'Descending'}
            //   </button>

            //   {isLoading ? (
            //     <p>Loading ...</p>
            //   ) : (  
            //     <TodoList
            //     todoList={sortedTodoList}
            //     setTodoList={setTodoList}
            //     items={filteredItems}
            //     onRemoveTodo={removeTodo}
            //   /> 
            //   )}
            //   <Search search={searchTerm} onSearch={handleSearch}/>
            // </Fragment>
          }
        />
      </Routes>
    </BrowserRouter>
  );    
}

export default App;
