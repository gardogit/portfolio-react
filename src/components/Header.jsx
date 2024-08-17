// src/components/Header.jsx
//import '../css/Header.css';

import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div className='main-conteiner'>
      <div className='header'>
        <Link to="/">
          <button className='button'>{props.backTo}</button>
        </Link>
        <h1 className='noto-serif-bold'>{props.name}</h1>
      </div>
      <div className='conteiner-unique'>
        {props.desc}
      </div>      
    </div>
  );
}

export default Header;
