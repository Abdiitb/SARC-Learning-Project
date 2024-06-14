import React, { useState, useContext } from 'react'
import './SearchResult.css'
import SearchContext from '../Contexts/SearchContext'
import { motion } from 'framer-motion';

export default function SearchResult({ result, data }) {
  const selectedOptions = useContext(SearchContext)


  function handleClick() {
    // alert("You clicked add button")

    // let temp = selected;
    // const newItem = result;
    selectedOptions.updateSelected((prevItems) => [...prevItems, result]);
    selectedOptions.setSelectedIds((prevItems) => [...prevItems, result.id]);
    data.otherSelectedPeople = selectedOptions.selectedIds;
    // console.log(selectedOptions.selectedIds)
    
    // selected = selected + temp;
    // console.log(data)
    
  }

  return (
    <>
    <div className="SearchResult">
    <img src={'https://yearbook.sarc-iitb.org' + result.profile_image} alt=""/>
      <span>{result.display + ' ' + result.department + ' (' + result.hostel + ')'}</span>
      <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      key={"add"}
      type="button">Add</motion.button>
      
    </div>
    </>
  )
}
