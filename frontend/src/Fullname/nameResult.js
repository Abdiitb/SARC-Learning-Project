import React, { useState, useContext } from 'react'
// import './SearchResult.css'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import SearchContext from '../Contexts/SearchContext'
import { motion } from 'framer-motion';

export default function NameResult({ result, data, setData }) {
  const selectedOptions = useContext(SearchContext)

  function handleClick() {
   
    setData({
      ...data,
      fullname : result.display,
      yearbookId : result.id,
      profile_image:result.profile_image
    })
    selectedOptions.setDisplayName(result.display)
    selectedOptions.setName("");
    // selectedOptions.setNameResults([]);
    // if(selectedOptions.name !== "")
    //   selectedOptions.setNameSet(false);
    
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
            Select
          </Button>
        </motion.span>
      
    </div>
    </>
  )
}
