// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

let todoList = [
    {"id": 111, "title": "Complete assignment"},
    {"id": 112, "title": "Submit assignment"},
    {"id": 113, "title": "Attend mentor session"}
  ];

function TodoList(){
    return(
        <ul>
            {todoList.map(({id, title}) => (<li key={id}>{title}</li>))}           
        </ul>)
}

export default TodoList;