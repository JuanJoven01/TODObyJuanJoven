import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';
import './App.css';

const defaultTodos = [
    {text: 'Cortar Cebolla', completed: true},
    {text: 'Tomar el curso de introducción a React JS', completed: false},
    {text: 'Llorar con la Llorona', completed: false},
    {text: 'Cualquier cosa', completed: true}
  ];

function App() {
  return (
    <React.Fragment>

      <TodoCounter completed={16} total={25}/>

      <TodoSearch />

      <TodoList>

        {defaultTodos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}  />
        ))}

      </TodoList>

      <CreateTodoButton />
            
      </React.Fragment>
    
  );
}

export default App;
