import styles from './TodoListItem.module.css';

const TodoListItem = ({item, onRemoveTodo}) => {
   
    return (
        <div className={styles['container']}>
            <li className={styles['list_item']}>{item.title} </li>
            <button className={styles['remove_button']} type="button" onClick={() => onRemoveTodo(item.id)}> Remove</button>
        </div>
        
    )
}

export default TodoListItem;