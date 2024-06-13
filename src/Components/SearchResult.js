import React, { useState, useContext } from 'react'
import './SearchResult.css'
import SearchContext from '../Contexts/SearchContext'
import { motion } from 'framer-motion';

export default function SearchResult({ result }) {
  const selectedOptions = useContext(SearchContext)


  function handleClick() {
    // alert("You clicked add button")
    // let temp = selected;
    // const newItem = result;
    selectedOptions.updateSelected((prevItems) => [...prevItems, result]);
    // selected = selected + temp;
    // console.log(selected)
    
  }

  return (
    <>
    <div className="SearchResult">
    <img src={'https://yearbook.sarc-iitb.org' + result.profile_image} alt="" width={100} height={80}/>
      <span>{result.display + ' ' + result.department + ' (' + result.hostel + ')'}</span>
      <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}>Add</motion.button>
      
    </div>
    </>
  )
}
