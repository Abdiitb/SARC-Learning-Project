import React, { useContext } from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchContext from '../Contexts/SearchContext'
import './SelectedOption.css'
import { motion } from 'framer-motion';

export default function SelectedOption({ option, data, setData }) {
  const selectedList = useContext(SearchContext);

  const handleDelete = (option) => {
    selectedList.updateSelected((prevItems) => prevItems.filter((item) => item.display !== option.display))
    setData({
      ...data,
      'otherSelectedPeople' : data.otherSelectedPeople.filter((item) => item !== option.id)
    })
  }
  return (
    <div className="optionSelected">
      <li key={option.id}>
        <img src={'https://yearbook.sarc-iitb.org' + option.profile_image} alt="" width={60} height={60} />
        <span>
          <span>{option.display}</span>
          <span className='deptHostel'>{' ' + option.department + ' (Hostel ' + option.hostel.split('_')[1] + ')'}</span>
        </span>
        
        <motion.span
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
          <Button variant="contained" startIcon={<DeleteIcon />} onClick={() => handleDelete(option)}>
            Delete
          </Button>
        </motion.span>

      </li>
    </div>

  )
}

