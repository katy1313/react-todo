import TodoListItem from "../TodoListItem/TodoListItem";
import styles from './TodoList.module.css'

function TodoList({todoList, onRemoveTodo}){
    return(       
        <ol className={styles['list']}>
             {todoList.map((item) => (<TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo}/>))}       
        </ol>
    )    
}

export default TodoList;