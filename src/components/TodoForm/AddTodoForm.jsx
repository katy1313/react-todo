import React from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import styles from './AddTodoForm.module.css';

function AddTodoForm({onAddTodo}) {

    const [todoTitle, setTodoTitle] = React.useState(''); //Creating new state variable named todoTitle with setter setTodoTitle

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value; 
        setTodoTitle(newTodoTitle);
    }

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
          return dataResponse;
        } catch (error) {
          console.log(error.message);
          return null;
        }
      };

    function handleAddTodo(event) {
        event.preventDefault();
        postTodo(todoTitle);
        onAddTodo({"title": todoTitle});
        setTodoTitle(''); //resetting the input field to have an empty string after form submit
    }    
    return (
        <form className={['form']} onSubmit={handleAddTodo}>
            <InputWithLabel value={todoTitle} onChange={handleTitleChange}><strong>Title:</strong> </InputWithLabel>
            <button className={styles['submit_button']} type='submit'>Add</button>
        </form>
    );
    
}

export default AddTodoForm;