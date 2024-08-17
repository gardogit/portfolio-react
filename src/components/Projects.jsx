// src/components/Projects.jsx
import ProjectCard from './ProjectCard';
import '../css/Projects.css';
import todoPhoto from '../img/todo-list.jpg'
import cart from '../img/ecommerce-shop.jpg'

function Projects() {
  return (
    <div className='main-conteiner'>
      <div className='conteiner-unique'>
        <h2 className='noto-serif-bold'>Habilidades en React: Proyectos Clásicos</h2>
        <div className='projects-list'>
          <ProjectCard 
            name='To-do List' 
            imageUrl={todoPhoto} 
            link='/todolist' 
          />
          <ProjectCard 
            name='E-commerce' 
            imageUrl={cart}
            link='/ecommerce' 
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;

