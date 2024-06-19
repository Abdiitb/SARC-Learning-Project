import React from 'react';
import './Form.css';
import logo from './img/sarc white logo.png';
import banner from './img/banner.png';
import FormInputs from './FormInputs';
import SearchState from './Contexts/SearchState'

function Form() {
  return (
    <SearchState>
    <div className='form'>
       <header className="header">
        <img
          src={logo}
          alt="logo"
          className="logo"
        />
        <h1 className="heading">YEARBOOK</h1>
      </header>
      <div> <img src={banner} alt='banner' className='banner'/></div>
      <div className='subhead'><h2>Hold your memories in your hand</h2></div>
      <FormInputs/>
    </div>
    </SearchState>
  );
}

export default Form;