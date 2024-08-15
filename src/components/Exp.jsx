// src/components/Exp.jsx
import '../css/Exp.css';
import '../css/Banner.css';

function Exp() {
  return (
    <div className='main-conteiner'>
      <div className='conteiner-start'>
        <h2 className='noto-serif-bold'>Experiencia Laboral</h2>
        <p>Desarrollador Front-End en Empresa XYZ (2020 - Presente)</p>
        <p>Diseñador UI/UX en Empresa ABC (2018 - 2020)</p>
      </div>
      <div className='conteiner-end'>
        <h3>Proyectos Destacados:</h3>
        <ul>
          <li>Proyecto A - Descripción breve del proyecto.</li>
          <li>Proyecto B - Descripción breve del proyecto.</li>
          <li>Proyecto C - Descripción breve del proyecto.</li>
        </ul>
      </div>
    </div>
  );
}

export default Exp;
