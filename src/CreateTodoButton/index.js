import { TodoContext } from '../TodoContext';
import './CreateTodoButton.css';
import React from 'react';


function CreateTodoButton (){
    
    const {dioClickNuevo} = React.useContext(TodoContext)
    
    return (
        <button 
            className='create__button'
            onClick={dioClickNuevo}>
            +
        </button>
    );
};

export {CreateTodoButton};