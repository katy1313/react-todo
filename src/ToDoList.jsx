import TodoListItem from "./TodoListItem";

function TodoList({todoList, onRemoveTodo}){
    return(       
        <ul>
             {todoList.map((item) => (<TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo}/>))}       
        </ul>
    )    
}

export default TodoList;