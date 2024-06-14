import React from 'react';
import './Form.css';
import logo from './Img/sarclogo.png';
import FormInputs from './FormInputs';

function Form() {
  return (
    <div className='form'>
       <header className="header">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        <h1 className="heading">YEARBOOK</h1>
      </header>
      <div className='subhead'><h2>Print your beautiful memories</h2></div>
      <FormInputs/>
    </div>
  );
}

export default Form;