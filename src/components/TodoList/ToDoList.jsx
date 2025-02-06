import TodoListItem from "../TodoListItem/TodoListItem";
import styles from './TodoList.module.css';
import PropTypes from 'prop-types';

function TodoList({todoList, onRemoveTodo}){
    return(       
        <ol key={todoList.length} className={styles['list']}>
             {todoList.map((item) => (<TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo}/>))}       
        </ol>
    )    
} 

TodoList.propTypes = {
    todoList: PropTypes.array,
    onRemoveTodo: PropTypes.func
}

export default TodoList;