import '../css/Banner.css'
import edgardo from '../img/edo-m.png'
import { FaLinkedin, FaBehance, FaGithub } from 'react-icons/fa';

function Banner () {
  return (
    <div className='main-conteiner'>
      <div className='banner'>
        <h2 className='noto-serif-bold'>
          const FrontEndDeveloper = () =&gt; &#123;
        </h2>
      </div>
      <div className='photo-rrss'>
        <div className='conteiner-photo'>
          <img className='photo-edo' src={edgardo} alt='profile-photo-Edgardo' />
        </div>
        <div className='conteiner-rrss'>
          <div className='rrss'><a href='https://www.linkedin.com/in/ruizedgardo/' target='_blank' rel='noopener noreferrer'><FaLinkedin size={20} /></a></div>
          <div className='rrss'><a href='https://www.behance.net/Gardoai' target='_blank' rel='noopener noreferrer'><FaBehance size={20} /></a></div>
          <div className='rrss'><a href='https://github.com/gardogit' target='_blank' rel='noopener noreferrer'><FaGithub size={20} /></a></div>
        </div>
      </div>
      <div className='conteiner-end'
      id='cont-descrip'>
        <h1 className='noto-serif-bold'>Edgardo Ruiz</h1>
        <h3>Front-end Developer, UI/UX Designer</h3>
        <p>Técnico Superior Universitario en Informática con más de 5 años de experiencia en diseño de interfaces de usuario (UI/UX) y desarrollo de aplicaciones web utilizando el stack MERN (MongoDB, Express.js, React y Node.js). Poseo certificación en Desarrollo de Aplicaciones en la Nube, lo que respalda mi capacidad para implementar soluciones escalables y eficientes en entornos cloud. Comprometido con la mejora continua y la adopción de mejores prácticas en el desarrollo de software.</p>        
      </div>
    </div>
  );
}

export default Banner;