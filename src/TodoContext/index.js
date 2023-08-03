import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider ({children}) {
    
    const {
        item: todos, 
        upload: setTodos,
        loading,
        error,
      } = useLocalStorage('TODOs_v1', 
          [
            {text: 'Cortar Cebolla', completed: true},
            {text: 'Tomar el curso de introducción a React JS', completed: false},
            {text: 'Llorar con la Llorona', completed: false},
            {text: 'Cualquier cosa', completed: true}
          ]
       );
      
      const [searchValue, setSearchValue] = React.useState('');
    
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
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
      };

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text: text,
          completed: false
        })
        setTodos(newTodos);
      };

      const completedTodos = todos.filter(todo => !!todo.completed).length;

      const totalTodos = todos.length;

      const [openModal, setOpenModal] = React.useState(false);

      const dioClickNuevo = ()=>{
        setOpenModal(!openModal)
      }

      


    return (

        <TodoContext.Provider 
            value={{
                todos,
                searchValue,
                setSearchValue,
                renderTodos,
                completeTodo,
                deleteTodo,
                loading,
                error,
                completedTodos,
                totalTodos,
                openModal,
                setOpenModal,
                dioClickNuevo,
                addTodo,
                
            }}>

            {children}

        </TodoContext.Provider>
    )
}


  export {TodoContext, TodoProvider};