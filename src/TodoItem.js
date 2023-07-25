import notDone from './icons/notDone.png';
import done from './icons/done.png';
import remove from './icons/exit.png';
import './TodoItem.css'
function TodoItem(props) {
    return (
      <li>
        <img 
          src={props.completed===true?done:notDone} 
          alt={props.completed===true?'Completa':'No completada'} 
          onClick={
            ()=>{
              console.log('si toma el click');
              console.log(props.text);
              props.onComplete(props.text);
            }
          }       
        />
        <p className={`${props.completed && "lThrough"}`} >{props.text}</p>
        <img 
          src={remove} 
          alt='Eliminar'
          onClick={
            ()=>{
              console.log('si toma el click');
              console.log(props.text);
              props.onDelete(props.text);
            }
          }       
        />
      </li>
    );
  }
  
  export {TodoItem};