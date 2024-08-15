// src/components/Education.jsx
import '../css/Exp.css';
import '../css/Banner.css';

function Education() {
  return (
    <div className='main-conteiner'>
      <div className='conteiner-start'>
        <h2 className='noto-serif-bold'>Educación</h2>
        <p>Universidad Politecnica Territorial de Aragua</p>
        <p>Técnico Superior en informática</p>
      </div>
      <div className='conteiner-end'>
        <h3>Certificaciones:</h3>
        <ul>
          <li>Certificación A</li>
          <li>Certificación B</li>
          <li>Certificación C</li>
        </ul>
      </div>
    </div>
  );
}

export default Education;