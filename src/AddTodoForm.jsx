

function AddTodoForm(props) {
    function handleAddTodo(event) {
        event.preventDefault();
        const todoTitle = event.target.title.value;
        console.log(todoTitle);
        props.onAddTodo(todoTitle);
        // props.setNewTodo(todoTitle);
        event.target.reset();
    }    
    return (
        <form>
            <label htmlFor="todoTitle">Title</label>
            <input id='todoTitle' name='title' onSubmit={handleAddTodo}></input>
            <button>Add</button>
        </form>
    );
    
}

export default AddTodoForm;