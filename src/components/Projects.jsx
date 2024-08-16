// src/components/Projects.jsx
import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/todolist'); 
  };

  return (
    <div className='main-conteiner'>
      <div className='conteiner-unique'>
        <h2 className='noto-serif-bold'>Proyectos</h2>
        <button className='button' onClick={handleButtonClick}>To-do List</button>
      </div>
    </div>
  );
}

export default Projects;
