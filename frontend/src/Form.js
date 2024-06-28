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
      <div class="yearbook-preview">
            <p>To get more info about physical yearbook</p>
            <a href=" https://docs.google.com/document/d/11920dmFDkZRZV0lYMtKk50ymHSlZX0ysopcIDsd6GOo/edit " target="_blank">Click Here</a>
        </div>
      <FormInputs/>
    </div>
    </SearchState>
  );
}

export default Form;