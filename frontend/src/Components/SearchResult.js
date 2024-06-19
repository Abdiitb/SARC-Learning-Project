import React, { useState, useContext } from 'react'
import './SearchResult.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SearchContext from '../Contexts/SearchContext'
import { motion } from 'framer-motion';

export default function SearchResult({ result, data, setData }) {
  const selectedOptions = useContext(SearchContext)

  function handleClick() {
    selectedOptions.updateSelected((prevItems) => [...prevItems, result]);
    setData({
      ...data,
      'otherSelectedPeople' : [...data.otherSelectedPeople, result.id]
    })
    
    selectedOptions.setInput("");
  }

  return (
    <>
    <div className="SearchResult">
    <img src={'https://yearbook.sarc-iitb.org' + result.profile_image} alt=""/>
    <span>
          <span>{result.display}</span>
          <span className='deptHostel'>{' ' + result.department + ' (Hostel ' + result.hostel.split('_')[1] + ')'}</span>
        </span>
        
        <motion.span
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
          <Button variant="contained" endIcon={<AddIcon />} onClick={() => handleClick()}>
            Add
          </Button>
        </motion.span>
      
    </div>
    </>
  )
}
