import React, { useState } from 'react';
import '../../css/to-do/Form.css'
import { v4 as uuidv4 } from 'uuid';

function Form(props) {

  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
//    console.log(e.target.value);
  };
  const handleSend = e => {
    e.preventDefault();

    const newTask = {
      id: uuidv4(),
      text: input,
      done: false
    };
    props.onSubmit(newTask);
  };
  
  return (
    <form 
      className='form-task'
      onSubmit={handleSend}
      autoComplete='off'
    >
      <input 
      type='text'
      className='input-task noto-sans-normal'
      placeholder='Escribe una tarea..'
      name='text'
      onChange={handleChange}
      />
      <button className='button-task'>
        Agregar tarea
      </button>
    </form>
  );
}

export default Form;