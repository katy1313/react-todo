import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/**
 *  Inside your unordered list, insert a JavaScript expression
hint: {}
 Inside the JavaScript expression, map over your todoList array
 For each Object in the Array, return a list item (<li>) with the following:
key attribute with value of id property
inner text content with value of title property
 */

let todoList = [
  {"id": 111, "title": "Complete assignment"},
  {"id": 112, "title": "Submit assignment"},
  {"id": 113, "title": "Attend mentor session"}
];

function App() {
  return (
    <div>
      <h1>ToDo List</h1>
      <ul>
        {todoList.map(function(list) {
            return <li key={list.id}>{list.title}</li>;
          })
        }
      </ul>
    </div> );
}

export default App;
