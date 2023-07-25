import './NewTodo.css'
function NewTodo() {
    return(
            <form className="newTodo hidden">
                Nueva tarea:
                <input placeholder="Escriba la nueva tarea">
                </input>
                <button>Crear</button>
                <button>Cancelar</button>
            </form>
        
    )
}

export {NewTodo}