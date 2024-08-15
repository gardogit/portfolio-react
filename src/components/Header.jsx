// src/components/Header.jsx
//import '../css/Header.css';

import { useNavigate } from 'react-router-dom';

function Header (props) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/'); 
  };
  return (
    <div className='main-conteiner'>
      <div className='header'>
        <button className='button' onClick={handleButtonClick}>{props.backTo}</button>
        <h1 className='noto-serif-bold'>{props.name}</h1>
      </div>
      <div className='conteiner-unique'>
      Breve descripción del mini proyecto.
      </div>
      
    </div>
  );
}

export default Header;