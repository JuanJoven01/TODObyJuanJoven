import { TodoContext } from '../TodoContext'
import './NewTodo.css'
import React from 'react'

function NewTodo() {

    const {dioClickNuevo,addTodo} = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const toCreateTodo = ()=>{
        dioClickNuevo();
        addTodo(newTodoValue);
      }

    return(
            <form className="newTodo ">
                Nueva tarea:
                <input 
                    placeholder="Escriba la nueva tarea"
                    onChange={
                        (event)=>{
                            setNewTodoValue(event.target.value)
                        }
                    }
                    >
                
                </input>

                <button 
                        onClick= {toCreateTodo}
                        

                    >Añadir

                </button>
                
                <button 
                        onClick={dioClickNuevo} 
                
                    >Cancelar

                </button>
            </form>
        
    )
}

export {NewTodo}