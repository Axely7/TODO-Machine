import React from 'react';
import {TodoCounter} from './TodoCounter';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';

// import './App.css';
const todos = [
  {text: 'Cortar Cebolla', completed: false},
  {text: 'Hacer de comer', completed: false},
  {text: 'Hacer tarea', completed: false},
]

function App() {
  return (
    <>
        <TodoCounter />
          {/* <h2>Haz completado 2 de 3 TODOs</h2> */}
        <TodoSearch />
        <TodoList> 
          {todos.map( todo => (
            <TodoItem key={todo.text} text={todo.text}/>
          ))}
        </TodoList>
        <CreateTodoButton /> 
    </>
  );
}

export default App;
