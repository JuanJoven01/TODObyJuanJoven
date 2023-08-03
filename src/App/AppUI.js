import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { NewTodo } from '../NewTodo';
import { CreateTodoButton } from '../CreateTodoButton';
import {LoadingTodos} from '../LoadingTodos';
import {ErrorTodos} from '../ErrorTodos';
import {EmptyTodos} from '../EmptyTodos';
import React from 'react';
import { Modal } from '../Modal';
import { TodoContext } from '../TodoContext';

function AppUI () {
    
    const {openModal} = React.useContext(TodoContext)

    return (
        
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoContext.Consumer>  
                {(
                    {
                    renderTodos,
                    completeTodo,
                    deleteTodo,
                    loading,
                    error,
                    todos,
                    }
                ) => (
                    <TodoList>

                        {loading && <LoadingTodos />}

                        {error && <ErrorTodos/>}

                        {(!loading && todos.length === 0)  && <EmptyTodos/>}

                        {(!loading && !error) && renderTodos.map(todo => (
                        
                                <TodoItem 
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={completeTodo}
                                    onDelete={deleteTodo} />
                            )
                        )}

                    </TodoList>
                )}
            </TodoContext.Consumer>
            <CreateTodoButton />

            {openModal &&(
                <Modal>
                    <NewTodo />
                </Modal>
            )}
            
            
                   
        </React.Fragment>
    )
}


export {AppUI}