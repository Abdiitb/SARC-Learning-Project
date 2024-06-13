import React, { useContext } from 'react'
import SearchContext from '../Contexts/SearchContext'
import './SelectedOption.css'
import { motion } from 'framer-motion';

export default function SelectedOption({ option }) {
    const selectedList = useContext(SearchContext);

   
      
      
    
    const handleDelete = (name) => {
        selectedList.updateSelected((prevItems) => prevItems.filter((item) => item.display !== name))
    }
    return (
      <div className="optionSelected">
        <li key={option.id}>
          <img src={'https://yearbook.sarc-iitb.org' + option.profile_image} alt="" width={100} height={80}/>
          <span>{option.display + ' ' + option.department + ' (' + option.hostel + ')'} </span>
          <motion.button
           whileHover={{ scale: 1.1 }}
           whileTap={{ scale: 0.9 }}
          onClick={() => handleDelete(option.display)}>Delete</motion.button>
        </li> 
      </div>
          
    )
}

