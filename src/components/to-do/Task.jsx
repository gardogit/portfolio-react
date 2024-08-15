import '../../css/to-do/Task.css';
import { FaRegTimesCircle } from 'react-icons/fa';

function Task(props) {
  //id, text, done, completeTask, deleteTask
  return(
    <div className= {props.done ? 'conteiner-task task-done' : 'conteiner-task'}>
      <div 
        className='task-text'
        onClick={() => props.completeTask(props.id)}
      >
        {props.text}  
      </div>
      <div 
        className='icons'
        onClick={() => props.deleteTask(props.id)}
      >
      <FaRegTimesCircle className='delete-icon' />
      </div>
    </div>
  );
}

export default Task;