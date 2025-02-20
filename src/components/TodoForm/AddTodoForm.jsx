import { useState } from 'react';
import InputWithLabel from '../InputWithLabel/InputWithLabel';
import styles from './AddTodoForm.module.css';
import PropTypes from 'prop-types';

function AddTodoForm({onAddTodo}) {

    const [todoTitle, setTodoTitle] = useState(''); //Creating new state variable named todoTitle with setter setTodoTitle

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value; 
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        onAddTodo(todoTitle);
        setTodoTitle(''); //resetting the input field to have an empty string after form submit
    }    
    return (
        <form className={['form']} onSubmit={handleAddTodo}>
            <InputWithLabel value={todoTitle} onChange={handleTitleChange} placeholder='Enter your to-do...'></InputWithLabel>
            <button className={styles['submit_button']} type='submit'>Add</button>
        </form>
    );
    
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func
}

export default AddTodoForm;