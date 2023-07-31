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
