import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { NewTodo } from '../NewTodo';
import { CreateTodoButton } from '../CreateTodoButton';
import { useLocalStorage } from './useLocalStorage';
import React from 'react';
import react from 'react';


function App() {

      

    const [todos, setTodos] = useLocalStorage('TODOs_v1', 
      [
        {text: 'Cortar Cebolla', completed: true},
        {text: 'Tomar el curso de introducción a React JS', completed: false},
        {text: 'Llorar con la Llorona', completed: false},
        {text: 'Cualquier cosa', completed: true}
      ]
    );
    
    const [searchValue, setSearchValue] = react.useState('');

    const renderTodos = todos.filter(
      (todo) => {
        return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
      }
    );
    
    const completeTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text === text
      );
      newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
      setTodos(newTodos);
    };
    
    const deleteTodo = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text == text
      );
      newTodos.splice(todoIndex, 1);
      setTodos(newTodos);
    };
       
  
  return (

    <React.Fragment>

      <TodoCounter completed={todos.filter(todo => !!todo.completed).length} total={todos.length}/>

      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} renderTodos={renderTodos} />

      <TodoList>

        {renderTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={completeTodo}
            onDelete={deleteTodo} />
        ))}

      </TodoList>

      <CreateTodoButton />

      <NewTodo />      
            
      </React.Fragment>
    
  );
}

export default App;
