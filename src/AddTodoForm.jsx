import React from 'react';

function AddTodoForm({onAddTodo}) {

    const [todoTitle, setTodoTitle] = React.useState(''); //Creating new state variable named todoTitle with setter setTodoTitle

    function handleTitleChange(event) {
        const newTodoTitle = event.target.value; 
        setTodoTitle(newTodoTitle);
    }

    function handleAddTodo(event) {
        event.preventDefault();
        onAddTodo({"title": todoTitle, "id": Date.now()});
        setTodoTitle(''); //resetting the input field to have an empty string after form submit
    }    
    return (
        <form onSubmit={handleAddTodo}>
            <label htmlFor="todoTitle">Title</label>
            <input id='todoTitle' name='title' value={todoTitle} onChange={handleTitleChange}></input>
            <button type='submit'>Add</button>
        </form>
    );
    
}

export default AddTodoForm;