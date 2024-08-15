// src/components/ToDoList.jsx
import '../../css/to-do/ToDoList.css';
import Header from '../Header';
import TaskList from './TaskList';

function ToDoList () {
  return (
    <div className='main-conteiner'>
      <Header name='To-do List' backTo='Salir' />
      <div className='conteiner-list'>
        <div className='main-list'>
          <h2>Demo simple:</h2>
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default ToDoList;