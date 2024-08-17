// src/components/ProjectCard.jsx
import { Link } from 'react-router-dom';
import '../css/Projects.css';

function ProjectCard({ name, imageUrl, link }) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <Link to={link}>
        <button className='button'>Probar Demo</button>
      </Link>
    </div>
  );
}

export default ProjectCard;
