// src/components/ToDoList.jsx
import '../../css/to-do/ToDoList.css';
import Header from '../Header';
import TaskList from './TaskList';

function ToDoList () {

  const description = 'Este proyecto es una aplicación de lista de tareas desarrollada con React, diseñada para gestionar tareas de manera sencilla. La aplicación permite a los usuarios agregar nuevas tareas, marcarlas como completadas y eliminarlas cuando ya no son necesarias, todo a través de una interfaz intuitiva. Este proyecto es un ejemplo de cómo React puede ser utilizado para crear aplicaciones web interactivas y funcionales.';
  return (
    <div className='main-conteiner'>
      <Header name='To-do List' backTo='Volver al inicio' desc={description} />
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