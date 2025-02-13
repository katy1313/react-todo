import { Fragment, useState, useEffect } from 'react';
import TodoList from '../TodoList/ToDoList';
import AddTodoForm from '../TodoForm/AddTodoForm';
import Search from '../Search/Search';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import  styles  from './TodoPage.module.css';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import Spinner from "../Spinner/Spinner";


const TodosPage = () => {
    const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('savedTodoList')) || [] ); //Reading the data from local storage when application rerenders
    const [isLoading, setIsLoading] = useState(true);
    const [sort, setSort] = useState('asc');
    const [sortedTodoList, setSortedTodoList] = useState([]);
    const [searchTerm, setSearchTerm] = useState(localStorage.getItem("search") || "");
  
    const fetchData = async() => {
      const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_TABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;
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
        //console.log(data);
  
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
  
    useEffect(() => {
      fetchData();
    }, []);

    useEffect(() => {
      const sortedData = [...todoList].sort((a, b) => {   
        const titleA = a.title.toLowerCase();
        const titleB = b.title.toLowerCase();
        return sort === 'asc'
          ? titleA.localeCompare(titleB)
          : titleB.localeCompare(titleA);
      });
      
      //console.log('Sorted Data:', sortedData);
      setSortedTodoList(sortedData);
    }, [sort, todoList]);
  
    useEffect(() => {
      localStorage.setItem("search", searchTerm);
    }, [searchTerm]);
  

    const postTodo = async (newTodoTitle) => {
      try {
        const airtableData = {
          fields: {
            title: newTodoTitle,
          },
        };
    
        const response = await fetch(
          `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Default`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
            },
            body: JSON.stringify(airtableData),
          }
        );
    
        if (!response.ok) {
          const message = `Error has ocurred: ${response.status}`;
          throw new Error(message);
        }
    
        const dataResponse = await response.json();
        console.log(dataResponse)
        setTodoList([...todoList, {id: dataResponse.id, title: dataResponse.fields.title}])
      } catch (error) {
        console.log(error.message);
        return null;
      }
    };

    const removeTodo = async (id) => {
      try {
        const data = await fetch(
          `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/Default/${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
            }
          }
        );
        if(data.status === 200){
          const newTodoList = todoList.filter((list) => list.id !== id);
          setTodoList(newTodoList);
        }
        console.log(data)
      } catch (error) {
        console.error(error); 
      }
    };

    
    function handleToggle() {
      setSort(sort === 'asc' ? 'desc' : 'asc');
    } 
  
    //Search
    const filteredItems = sortedTodoList.filter((item) => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    const handleSearch = (value) => {
      setSearchTerm(value);
    }

  return (
    <Fragment>
      <div className={styles['navigation']}>
        <Link to="/" className={styles["home-link"]}><FontAwesomeIcon icon={faHouse} /></Link>
        <Search search={searchTerm} onSearch={handleSearch}/>
      </div>    
        <h1>TO-DO LIST</h1>
        <AddTodoForm onAddTodo={postTodo} />
        {/* Sorting button only appears when loading is finished */}
        {!isLoading && (
          <button className={styles['sorting-button']} onClick={handleToggle}>   
            <FontAwesomeIcon icon={sort === 'asc' ? faArrowUp : faArrowDown} />         
          </button>
        )}

        {isLoading ? (
            <Spinner/>
        ) : (  
          <TodoList
            todoList={filteredItems}
            setTodoList={setTodoList}
            onRemoveTodo={removeTodo}
          /> 
        )}        
    </Fragment>
  )   
};

export default TodosPage;