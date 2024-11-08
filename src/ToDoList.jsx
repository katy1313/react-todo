import TodoListItem from "./TodoListItem";

function TodoList(props){
    return(       
        <ul>
             {props.list.map((item) => (<TodoListItem key={item.id} item={item} />))}       
        </ul>
    )    
}

export default TodoList;