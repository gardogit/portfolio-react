// src/components/ToDoList.jsx
import '../css/ToDoList.css';

import { useNavigate } from 'react-router-dom';

function ToDoList () {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/'); 
  };
  return (
    <div className='main-conteiner'>
      <div className='header'>
        <button className='button noto-sans-bold' onClick={handleButtonClick}>Volver a home</button>
        <h1 className='noto-serif-bold'>To-do List</h1>
      </div>
      <div>
      hola mundo!
      </div>
      
    </div>
  );
}

export default ToDoList;