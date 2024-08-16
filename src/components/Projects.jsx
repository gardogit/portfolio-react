// src/components/Projects.jsx
import { Link } from 'react-router-dom';

function Projects() {
  return (
    <div className='main-conteiner'>
      <div className='conteiner-unique'>
        <h2 className='noto-serif-bold'>Proyectos</h2>
        <Link to="/todolist">
          <button className='button'>To-do List</button>
        </Link>
        <Link to="/ecommerce">
          <button className='button'>E-commerce</button>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
